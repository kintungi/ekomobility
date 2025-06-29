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
    .min(1, { message: "Driver name must contain at least 1 character" }),
  phone: z
    .string()
    .min(1, { message: "Phone number must contain at least 1 character" }),
  city: z
    .string()
    .min(1, { message: "City must contain at least 1 character" }),
  ward: z
    .string()
    .min(1, { message: "Ward must contain at least 1 character" }),
  driver_license: z
    .string()
    .min(1, { message: "You must tell if you have a valid license" }),
  riding_experience: z
    .string()
    .min(1, { message: "You must select your riding experience" }),
  own_smartphone: z
    .string()
    .min(1, { message: "You must tell if you own a smartphone" }),
  heard_about_us: z
    .string()
    .min(1, { message: "You must tell how you heard about us" }),
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
  success?: boolean;
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
  const recepients = [
    "franciskintungi@gmail.com",
    "info@franciskintungi.com",
    "brownfrancis48@gmail.com",
  ];
  const primaryRecepient = recepients[0];
  recepients.forEach(async (recepient, i) => {
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "EkoMobility <updates@driver.ekomobility.co>",
      //   from: "Acme <onboarding@resend.dev>",
      to: [recepient],
      //   to: ["delivered@resend.dev"],
      subject: "Form submission(ekomobility.co)",
      react: await DriverSubmissionEmail({
        ...data,
        firstName: data.name.split(" ")[0] ?? data.name,
      }),
      //   react: await EmailTemplate({ ...data }),
    });

    if (resendError && recepient === primaryRecepient) {
      console.log("Resend data:", resendData);
      console.log("Resend error:", resendError);

      return {
        errors: {
          root: ["Error occured while trying to submit form"],
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
  });

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
    success: true,
  };
}
