import React from "react";

export default function Checkbox({
  setIsDigits,
  setIsLowerCase,
  setIsSymbols,
  setIsUpperCase,
  isDigits,
  isLowerCase,
  isSymbols,
  isUpperCase,
  checkIcon,
}) {
  return (
    <div>
      <div className=" flex flex-row justify-start mb-[16px]">
        <div
          onClick={() => setIsUpperCase(!isUpperCase)}
          className={`w-[20px] h-[20px] border-[1px] flex items-center justify-center flex-row ${
            isUpperCase ? " bg-[#A4FFAF]" : " bg-black"
          }`}
        >
          <img className=" text-neutral-50" src={checkIcon} alt="check" />
        </div>

        <span className=" ml-[20px] text-[#E6E5EA]">
          Include Uppercase Letters
        </span>
      </div>
      <div className=" flex flex-row mb-[16px]">
        <div
          onClick={() => setIsLowerCase(!isLowerCase)}
          className={`w-[20px] h-[20px] border-[1px] flex items-center justify-center ${
            isLowerCase ? " bg-[#A4FFAF]" : " bg-black"
          }`}
        >
          <img className=" text-neutral-50" src={checkIcon} alt="check" />
        </div>
        <span className=" ml-[20px] text-[#E6E5EA]">
          Include Lowercase Letters
        </span>
      </div>
      <div className=" flex flex-row mb-[16px]">
        <div
          onClick={() => setIsDigits(!isDigits)}
          className={`w-[20px] h-[20px] border-[1px] flex items-center justify-center ${
            isDigits ? " bg-[#A4FFAF]" : " bg-black"
          }`}
        >
          <img className=" text-neutral-50" src={checkIcon} alt="check" />
        </div>
        <span className="text-[#E6E5EA] ml-[20px]">Include Numbers</span>
      </div>
      <div className=" flex flex-row ">
        <div
          onClick={() => setIsSymbols(!isSymbols)}
          className={`w-[20px] h-[20px] border-[1px] flex items-center justify-center ${
            isSymbols ? " bg-[#A4FFAF]" : " bg-black"
          }`}
        >
          <img className=" text-neutral-50" src={checkIcon} alt="check" />
        </div>
        <span className="text-[#E6E5EA] ml-[20px]">Include Symbols</span>
      </div>
    </div>
  );
}
