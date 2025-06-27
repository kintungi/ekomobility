"use server";

import { z } from "zod";
import { Resend } from "resend";
import { env } from "@/env.mjs";
import DriverSubmissionEmail from "@/emails/DriverSubmissionEmail";

const resend = new Resend(env.RESEND_API_KEY);

function formDataToStringObject(formData: FormData): Record<string, string> {
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
  );
}

const driverSchema = z.object({
  name: z
    .string({ message: "Name must be a string" })
    .min(1, { message: "Username must contain at least 1 character" }),
  phone: z
    .string()
    .min(1, { message: "Username must contain at least 1 character" }),
  city: z
    .string()
    .min(1, { message: "Username must contain at least 1 character" }),
  ward: z
    .string()
    .min(1, { message: "Username must contain at least 1 character" }),
  driver_license: z
    .string()
    .min(1, { message: "Username must contain at least 1 character" }),
  riding_experience: z
    .string()
    .min(1, { message: "Username must contain at least 1 character" }),
  own_smartphone: z
    .string()
    .min(1, { message: "Username must contain at least 1 character" }),
  heard_about_us: z
    .string()
    .min(1, { message: "Username must contain at least 1 character" }),
});
export async function driverApply(
  prev: any,
  formData: FormData
): Promise<{
  errors: {
    root?: string[] | undefined;
    name?: string[] | undefined;
    phone?: string[] | undefined;
    city?: string[] | undefined;
    ward?: string[] | undefined;
    driver_license?: string[] | undefined;
    riding_experience?: string[] | undefined;
    own_smartphone?: string[] | undefined;
    heard_about_us?: string[] | undefined;
  };
  data: {
    [k: string]: FormDataEntryValue;
  };
}> {
  const formObj = Object.fromEntries(formData.entries());

  const { success, data, error } = driverSchema.safeParse(
    formDataToStringObject(formData)
  );

  if (!success) {
    console.log("FORMDATA", formObj);
    console.log("ERROR", error.formErrors.fieldErrors);
    console.log("FORMATTED_ERROR", error.format());
    return {
      errors: { ...error.formErrors.fieldErrors, root: undefined },
      data: formObj,
    };
  }

  if (success) {
    console.log("FORMDATA", data);
  }

  const { data: resendData, error: resendError } = await resend.emails.send({
    from: "EkoMobility <onboarding@resend.dev>",
    //   from: "Acme <onboarding@resend.dev>",
    to: ["franciskintungi@gmail.com"],
    //   to: ["delivered@resend.dev"],
    subject: "Form submission(ekomobility.co)",
    react: await DriverSubmissionEmail({ ...data }),
    //   react: await EmailTemplate({ ...data }),
  });

  if (resendError) {
    return {
      errors: {
        root: ["Failed to submit"],
        name: [],
        phone: [],
        city: [],
        ward: [],
        driver_license: [],
        riding_experience: [],
        own_smartphone: [],
        heard_about_us: [],
      },
      data: {
        name: "",
        phone: "",
        city: "",
        ward: "",
        driver_license: "",
        riding_experience: "",
        own_smartphone: "",
        heard_about_us: "",
      },
    };
  }

  return {
    errors: {
      root: [],
      name: [],
      phone: [],
      city: [],
      ward: [],
      driver_license: [],
      riding_experience: [],
      own_smartphone: [],
      heard_about_us: [],
    },
    data: {
      name: "",
      phone: "",
      city: "",
      ward: "",
      driver_license: "",
      riding_experience: "",
      own_smartphone: "",
      heard_about_us: "",
    },
  };
}
