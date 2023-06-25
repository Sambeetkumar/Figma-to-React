import type { NextPage } from "next";

const SearchCard: NextPage = () => {
  return (
    <div className="absolute top-[22px] left-[299px] rounded-md bg-whitesmoke w-[417px] h-11 flex flex-col py-2.5 px-[16.800048828125px] box-border items-start justify-start text-left text-sm text-slategray font-inter">
      <div className="w-[179px] h-[22px] flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-[22px] h-[22px]"
          alt=""
          src="/vuesaxtwotonesearchnormal.svg"
        />
        <div className="relative">Search for anything...</div>
      </div>
    </div>
  );
};

export default SearchCard;
