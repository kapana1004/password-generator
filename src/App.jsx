import { useState } from "react";
import checkIcon from "../public/assets/images/icon-check.svg";
import copyIcon from "../public/assets/images/icon-copy.svg";
import arrowIcon from "../public/assets/images/icon-arrow-right.svg";
import Strength from "./components/Strength";
import greenArrowIcon from "../public/assets/images/icon-arrow-right-green.svg";
import copy from "react-copy-to-clipboard";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isDigits, setIsDigits] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const [minValue, setMinValue] = useState(5);
  const [maxValue, setMaxValue] = useState(20);

  const handleRangeChange = (e) => {
    setMinValue(parseInt(e.target.min, 10));
    setMaxValue(parseInt(e.target.max, 10));
    setLength(e.target.value);
  };

  const calculateBackgroundColor = () => {
    // Customize this function according to your requirements
    // For example, setting a gradient based on the length value
    const gradientColor = `linear-gradient(90deg, #A4FFAF ${length}%, #18171F ${length}%)`;
    return gradientColor;
  };

  const generatePassword = () => {
    let passwordChars = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+[]{};:,<.>/?";

    if (isUpperCase) passwordChars += upperCaseChars;
    if (isLowerCase) passwordChars += lowerCaseChars;
    if (isDigits) passwordChars += digitChars;
    if (isSymbols) passwordChars += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
      password += passwordChars.charAt(
        Math.floor(Math.random() * passwordChars.length)
      );
    }

    setPassword(password);
  };
  // const copyText = () => {
  //   copy(length);
  //   alert(`You have copied "${password}"`);
  // };

  return (
    <div className=" flex flex-col justify-center items-center w-[375px] h-[667px] bg-black">
      <h1 className=" text-[#817D92] mb-[16px]">password generator</h1>

      <div className=" bg-[#24232C] w-[343px] h-[63px] flex justify-between items-center p-[10px] mb-[16px]">
        <p className=" text-[24px] text-[#E6E5EA]">{password}</p>{" "}
        <img className=" w-[17.5px] h-[20px]" src={copyIcon} alt="" />
      </div>
      <div className=" bg-[#24232C] pl-[15px] pr-[15px] w-[343px]">
        <div className=" flex flex-row justify-between items-center w-[311px] h-[31px] pt-[21px] pb-[23px]">
          <span className=" text-[#E6E5EA] text-[16px]">Character Length</span>
          <span className=" text-[#A4FFAF] text-[24px]">{length}</span>
        </div>
        <input
          className=" mb-[20px] appearance-none w-[100%] rounded-full "
          type="range"
          min={minValue}
          max={maxValue}
          value={length}
          onChange={handleRangeChange}
          style={{ background: calculateBackgroundColor() }}
        />

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

        <Strength
          isUpperCase={isUpperCase}
          isLowerCase={isLowerCase}
          isDigits={isDigits}
          isSymbols={isSymbols}
        />

        <button
          className=" flex flex-row items-center  pl-[95px] w-[311px] h-[56px] bg-[#A4FFAF] hover:bg-buttonBlack mb-[16px] hover:text-[#A4FFAF] hover:border-[1px] hover:border-[#A4FFAF]"
          onClick={generatePassword}
        >
          GENERATE
          <img className=" pl-[16px] " src={arrowIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;

{
  /* <input
        className=" w-[15px] h-[15px] bg-red-600"
        type="checkbox"
        checked={isUpperCase}
        onChange={(e) => setIsUpperCase(e.target.checked)}
      /> */
}

{
  /* <input
        type="checkbox"
        checked={isLowerCase}
        onChange={(e) => setIsLowerCase(e.target.checked)}
      /> */
}
{
  /* <input
        type="checkbox"
        checked={isDigits}
        onChange={(e) => setIsDigits(e.target.checked)}
      /> */
}
{
  /* <input
        type="checkbox"
        checked={isSymbols}
        onChange={(e) => setIsSymbols(e.target.checked)}
      /> */
}
