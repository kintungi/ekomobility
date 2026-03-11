"use client";

import React, { useState } from "react";

export default function MapEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      // 1. Logic: If isLoading is true, add 'animate-pulse'. If false, remove it.
      className={`w-full h-[450px] bg-white/10 md:h-[450px] md:w-full rounded-[16px] overflow-hidden ${
        isLoading ? "animate-pulse" : ""
      }`}
    >
      {/* <iframe
        // 2. Event Listener: When the external content finishes loading, set state to false
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full transition-opacity duration-500 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6320757117637!2d39.2866281!3d-6.814526499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0ef2e80a8b%3A0x7165a193fb7d4018!2sHaidery%20Plaza!5e0!3m2!1sen!2stz!4v1769196531309!5m2!1sen!2stz"
        width="600"
        height="450"
        style={{
          border: 0,
          width: "100%",
          height: "100%", // Changed to 100% to fill container
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      /> */}
      <iframe
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full transition-opacity duration-500 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.820173429984!2d39.2785657!3d-6.7917237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d0a41d1eedf%3A0x374b948438068912!2sEkoMobility%20Limited!5e0!3m2!1sen!2stz!4v1773232187597!5m2!1sen!2stz"
        width="600"
        height="450"
        style={{
          border: 0,
          width: "100%",
          height: "100%", // Changed to 100% to fill container
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
