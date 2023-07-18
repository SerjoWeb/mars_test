import React from "react";
import { twMerge } from "tailwind-merge";

import marsIcon from "/images/mars-icon.png";

interface AuthLayout {
  children: React.ReactNode;
}

export const Auth: React.FC<AuthLayout> = ({ children }) => {
  return (
    <div
      className={twMerge(
        `
        w-[400px] h-auto py-6 px-4 rounded-md shadow-lg 
        bg-gradient-to-br from-orange-300 to-orange-600 
        text-lg text-neutral-100
        `
      )}
    >
      <div className="w-full border-b border-orange-500 pb-4 flex flex-wrap items-center gap-4">
        <img
          src={marsIcon}
          alt="MARS"
          height={30}
          width={30}
          loading="lazy"
          className="object-cover"
        />
        
        <div className="text-lg uppercase font-semibold">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
            Welcome to MARS
          </h1>
        </div>
      </div>

      <div className="w-full pt-4">
        {children}
      </div>
    </div>
  );
};
