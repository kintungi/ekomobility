import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  city: string;
  ward: string;
  driver_license: string;
  riding_experience: string;
  own_smartphone: string;
  heard_about_us: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  city,
  ward,
  driver_license,
  riding_experience,
  own_smartphone,
  heard_about_us,
}) => (
  <div>
    <h4>
      Hi, My name is {name.split(" ")[0]}, I would like to become a captain
    </h4>

    <p>{`Full name: ${name}`}</p>
    <p>{`Phone number: ${phone}`}</p>
    <p>{`City / Town: ${city}`}</p>
    <p>{`Ward / Area: ${ward}`}</p>
    <p>{`Driving license?: ${driver_license}`}</p>
    <p>{`Riding experience?: ${riding_experience} years`}</p>
    <p>{`Owning smartphone?: ${own_smartphone}`}</p>
    <p>{`How did you hear about us?: ${heard_about_us}`}</p>
  </div>
);
