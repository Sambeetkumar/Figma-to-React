import type { NextPage } from "next";

const CompletedCard: NextPage = () => {
  return (
    <div className="absolute top-[746px] left-[1058px] rounded-2xl bg-white w-[314px] h-[177px] text-left text-xs text-gray font-inter">
      <div className="absolute top-[133px] left-[20px] w-[274px] h-6 flex flex-row items-center justify-start gap-[37px] text-slategray">
        <img className="relative w-[63px] h-6" alt="" src="/group-6333.svg" />
        <div className="relative w-[174px] h-4">
          <img
            className="absolute top-[0px] left-[112px] w-4 h-4"
            alt=""
            src="/vuesaxlinearfolder23.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/vuesaxoutlinemessage3.svg"
          />
          <div className="absolute top-[1px] left-[21px] font-medium">
            12 comments
          </div>
          <div className="absolute top-[1px] left-[133px] font-medium">
            15 files
          </div>
        </div>
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold">
        Design System
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[278px] text-base tracking-[-0.07em] font-extrabold font-inter text-gray text-left inline-block">
        . . .
      </button>
      <div className="absolute top-[75px] left-[20px] inline-block w-[274px]">{`It just needs to adapt the UI from what you did before `}</div>
      <div className="absolute top-[20px] left-[20px] rounded bg-darkseagreen w-[76px] h-[23px] flex flex-col items-center justify-center text-mediumseagreen">
        <div className="relative font-medium">Completed</div>
      </div>
    </div>
  );
};

export default CompletedCard;
