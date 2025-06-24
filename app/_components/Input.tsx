import React from "react";

export default function InputWithVariant({
  variant = "text", // 'text' or 'dropdown'
  label,
  name,
  placeholder,
  value,
  onChange,
  options = [], // for dropdown variant
}: {
  variant: "text" | "dropdown"; // 'text' or 'dropdown'
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options: { value: string; label: string }[]; // for dropdown variant
}) {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={name} className="mb-1 text-sm font-semibold">
          {label}
        </label>
      )}

      {variant === "text" && (
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      )}

      {variant === "dropdown" && (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
