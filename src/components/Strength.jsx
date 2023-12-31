import React, { useEffect, useState } from "react";

export default function Strength({
  isUpperCase,
  isLowerCase,
  isDigits,
  isSymbols,
}) {
  const [counter, setCounter] = useState(0);
  const [strengthName, setStrengthName] = useState("");

  useEffect(() => {
    let count = 0;
    if (isUpperCase) count++;
    if (isLowerCase) count++;
    if (isDigits) count++;
    if (isSymbols) count++;
    setCounter(count);
    if (count == 1) setStrengthName("TOO WEAK!");
    if (count == 2) setStrengthName("WEAK!");
    if (count == 3) setStrengthName("MEDIUM");
    if (count == 4) setStrengthName("STRONG");
  }, [isDigits, isLowerCase, isSymbols, isUpperCase]);

  return (
    <div className=" w-[311px] bg-[#18171F] flex flex-row items-center justify-between h-[56px] p-[16px] mt-[32px] mb-[16px]">
      <span className=" text-[#817D92] text-[16px]">STRENGTH</span>{" "}
      <div className=" flex flex-row gap-[8px]">
        <span className=" text-[#E6E5EA] text-[16px]">{strengthName}</span>
        <div
          className={`w-[10px] h-[25px] border-[1px] 
          ${counter == 1 && " bg-[#F64A4A]"}
          ${counter == 2 && " bg-[#FB7C58]"}
          ${counter == 3 && " bg-[#F8CD65]"}
          ${counter == 4 && " bg-[#A4FFAF]"}
           `}
        ></div>
        <div
          className={`w-[10px] h-[25px] border-[1px]   
          ${counter == 2 && " bg-[#FB7C58]"}
          ${counter == 3 && " bg-[#F8CD65]"}
          ${counter == 4 && " bg-[#A4FFAF]"}`}
        ></div>
        <div
          className={`w-[10px] h-[25px] border-[1px]  ${
            counter == 3 && " bg-[#F8CD65]"
          }
          ${counter == 4 && " bg-[#A4FFAF]"}`}
        ></div>
        <div
          className={`w-[10px] h-[25px] border-[1px]  
           ${counter == 4 && " bg-[#A4FFAF]"}`}
        ></div>
      </div>
    </div>
  );
}
