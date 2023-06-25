import type { NextPage } from "next";

const DropDown2: NextPage = () => {
  return (
    <button className="cursor-pointer p-0 bg-[transparent] relative rounded-md box-border w-[122px] h-10 border-[1px] border-solid border-slategray">
      <img
        className="absolute h-2/5 w-[13.11%] top-[30%] right-[74.59%] bottom-[30%] left-[12.3%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/calendar.svg"
      />
      <img
        className="absolute top-[13px] left-[94px] w-4 h-4"
        alt=""
        src="/vuesaxoutlinearrowdown.svg"
      />
      <div className="absolute top-[11px] left-[37px] text-base capitalize font-medium font-inter text-slategray text-left">
        Today
      </div>
    </button>
  );
};

export default DropDown2;
