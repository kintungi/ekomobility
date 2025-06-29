"use client";
import { Button } from "@/components/ui/button";
import React, { useActionState, useState } from "react";
import { driverApply } from "../_actions/driver";

function Form() {
  interface InitialState {
    data: {
      name?: FormDataEntryValue | string;
      phone?: FormDataEntryValue | string;
      city?: FormDataEntryValue | string;
      ward?: FormDataEntryValue | string;
      driver_license?: FormDataEntryValue | string;
      riding_experience?: FormDataEntryValue | string;
      own_smartphone?: FormDataEntryValue | string;
      heard_about_us?: FormDataEntryValue | string;
    };
    errors: {
      root?: string[];
      name?: string[];
      phone?: string[];
      city?: string[];
      ward?: string[];
      driver_license?: string[];
      riding_experience?: string[];
      own_smartphone?: string[];
      heard_about_us?: string[];
    };
    success?: boolean;
  }
  const initialState: InitialState = { data: {}, errors: {}, success: false };
  const [state, action, isPending] = useActionState(driverApply, initialState);

  const [heardAboutUs, setHeardAboutUs] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [ownSmartphone, setOwnSmartphone] = useState("");
  const [ridingExperience, setRidingExperience] = useState("");
  return (
    <form
      action={action}
      className="mx-auto grid grid-cols-1 gap-2 gap-y-10 max-w-[924px]"
    >
      <div className="wrapper gap-x-[128px] gap-y-[64px] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
        <section className="personal-infomation form-section">
          <p className="form-section-title">Personal information</p>
          <div className="input-wrapper">
            <p className="form-input-title">Full name / Jina kamili</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Juma Rajabu"
              className="input"
              defaultValue={state?.data.name as string}
            />
            {state?.errors?.name && (
              <div className="text-[12px] text-destructive">
                {state.errors.name[0]}
              </div>
            )}
          </div>
          <div className="input-wrapper">
            <p className="form-input-title">Phone number / Namba ya simu</p>
            <input
              name="phone"
              id="phone"
              type="number"
              placeholder="+255 692000000"
              className="input"
              defaultValue={state?.data.phone as string}
            />
            {state?.errors?.phone && (
              <div className="text-[12px] text-destructive">
                {state.errors.phone[0]}
              </div>
            )}
          </div>
        </section>

        <section className="location form-section">
          <p className="form-section-title">Location</p>
          <div className="input-wrapper">
            <p className="form-input-title">City / Town / Mji / Jiji</p>
            <input
              name="city"
              id="city"
              type="text"
              placeholder="eg Dar es salaam"
              className="input"
              defaultValue={state?.data.city as string}
            />
            {state?.errors?.city && (
              <div className="text-[12px] text-destructive">
                {state.errors?.city[0]}
              </div>
            )}
          </div>
          <div className="input-wrapper">
            <p className="form-input-title">Ward / Area / Kata / Tarafa</p>
            <input
              name="ward"
              id="ward"
              type="text"
              placeholder="eg Kisukulu"
              className="input"
              defaultValue={state?.data.ward as string}
            />
            {state?.errors?.ward && (
              <div className="text-[12px] text-destructive">
                {state.errors.ward[0]}
              </div>
            )}
          </div>
        </section>

        <section className="riding-experience form-section">
          <p className="form-section-title">Riding experience</p>
          <div className="input-wrapper">
            <p className="form-input-title">
              Do you have a valid driving license? / Je, una leseni ya udereva?
            </p>
            <div className="relative inline-block w-full">
              <select
                onChange={(e) => setDrivingLicense(e.target.value)}
                name="driver_license"
                id="driver_license"
                className={`input appearance-none  text-[14px] pr-16 ${
                  drivingLicense ? "text-black" : "text-[#999999]"
                }`}
                defaultValue={state?.data?.driver_license as string}
              >
                <option
                  value=""
                  className="text-[#999999] disabled hidden text-[14px]"
                >
                  {"Select an option"}
                </option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#999999"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            {state?.errors?.driver_license && (
              <div className="text-[12px] text-destructive">
                {state.errors.driver_license[0]}
              </div>
            )}
          </div>
          <div className="input-wrapper">
            <p className="form-input-title">
              Years of Riding Experience / Miaka ya uzoefu wa udereva
            </p>
            <div className="relative inline-block w-full">
              <select
                onChange={(e) => setRidingExperience(e.target.value)}
                name="riding_experience"
                id="riding_experience"
                className={`input appearance-none  text-[14px] pr-16 ${
                  ridingExperience ? "text-black" : "text-[#999999]"
                }`}
                defaultValue={state?.data.riding_experience as string}
              >
                <option
                  value=""
                  className="text-[#999999] disabled hidden text-[14px]"
                >
                  {"Select an option"}
                </option>
                <option value={"0"}>0</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"10+"}>10+</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#999999"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            {state?.errors?.riding_experience && (
              <div className="text-[12px] text-destructive">
                {state.errors.riding_experience[0]}
              </div>
            )}
          </div>
        </section>

        <section className="Additional information form-section">
          <p className="form-section-title">Additional information</p>
          <div className="input-wrapper">
            <p className="form-input-title">
              Do you own a smartphone? / Unamiliki simu janja?
            </p>
            <div className="relative inline-block w-full">
              <select
                onChange={(e) => setOwnSmartphone(e.target.value)}
                name="own_smartphone"
                id="own_smartphone"
                className={`input appearance-none  text-[14px] pr-16 ${
                  ownSmartphone ? "text-black" : "text-[#999999]"
                }`}
                defaultValue={state?.data.own_smartphone as string}
              >
                <option
                  value=""
                  className="text-[#999999] disabled hidden text-[14px]"
                >
                  {"Select an option"}
                </option>
                <option value={"Yes"}>Yes</option>
                <option value={"No"}>No</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#999999"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            {state?.errors?.own_smartphone && (
              <div className="text-[12px] text-destructive">
                {state.errors.own_smartphone[0]}
              </div>
            )}
          </div>
          <div className="input-wrapper">
            <p className="form-input-title">
              How did you hear about us? (Social Media, Word of Mouth, Referral,
              Roadshow, Other) / Ni wapi ulisikia kuhusu sisi?
            </p>
            <div className="relative inline-block w-full">
              <select
                onChange={(e) => setHeardAboutUs(e.target.value)}
                name="heard_about_us"
                id="heard_about_us"
                className={`input appearance-none  text-[14px] pr-16 ${
                  heardAboutUs ? "text-black" : "text-[#999999]"
                }`}
                defaultValue={state?.data.heard_about_us as string}
                // defaultValue={state?.data.heard_about_us as string}
              >
                <option value="" className="text-[#999999]  hidden text-[14px]">
                  {"Select an option"}
                </option>
                <option value={"Social media"}>Social media</option>
                <option value={"Word of mouth"}>Word of mouth</option>
                <option value={"Referral"}>Referral</option>
                <option value={"Roadshow"}>Roadshow</option>
                <option value={"Other"}>Other</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#999999"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            {state?.errors?.heard_about_us && (
              <div className="text-[12px] text-destructive">
                {state.errors.heard_about_us[0]}
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="w-full">
        <Button disabled={state.success} className="w-full" type="submit">
          {isPending ? "Submitting" : state.success ? "Thank you!" : "Submit"}
        </Button>

        {state?.errors?.root && (
          <div className="text-[12px] text-destructive">
            {state.errors.root[0]}
          </div>
        )}
      </div>
    </form>
  );
}

export default Form;
