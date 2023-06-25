import type { NextPage } from "next";

const DropDown: NextPage = () => {
  return (
    <button className="cursor-pointer p-0 bg-[transparent] relative rounded-md box-border w-[122px] h-10 border-[1px] border-solid border-slategray">
      <img
        className="absolute top-[12px] left-[15px] w-4 h-4"
        alt=""
        src="/vuesaxlinearfilter.svg"
      />
      <img
        className="absolute top-[12px] left-[86px] w-4 h-4"
        alt=""
        src="/vuesaxoutlinearrowdown.svg"
      />
      <div className="absolute top-[11px] left-[37px] text-base capitalize font-medium font-inter text-slategray text-left">
        Filter
      </div>
    </button>
  );
};

export default DropDown;
