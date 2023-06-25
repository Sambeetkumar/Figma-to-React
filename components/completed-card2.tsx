import type { NextPage } from "next";

const CompletedCard2: NextPage = () => {
  return (
    <div className="absolute top-[398px] left-[1058px] rounded-2xl bg-white w-[314px] h-[328px] text-left text-xs text-slategray font-inter">
      <div className="absolute top-[76px] left-[20px] rounded-lg bg-silver w-[274px] h-[180px]" />
      <img
        className="absolute top-[76px] left-[20px] w-[274px] h-[180px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="absolute top-[284px] left-[20px] w-[274px] h-6">
        <div className="absolute top-[4px] left-[100px] w-[174px] h-4">
          <img
            className="absolute top-[0px] left-[112px] w-4 h-4"
            alt=""
            src="/vuesaxlinearfolder26.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/vuesaxoutlinemessage7.svg"
          />
          <div className="absolute top-[1px] left-[21px] font-medium">
            12 comments
          </div>
          <div className="absolute top-[1px] left-[133px] font-medium">
            15 files
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[19px] rounded-[50%] w-[25px] h-6 object-cover"
          alt=""
          src="/ellipse-13@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-121@2x.png"
        />
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold text-gray">
        Mobile App Design
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[278px] text-base tracking-[-0.07em] font-extrabold font-inter text-gray text-left inline-block">
        . . .
      </button>
      <div className="absolute top-[20px] left-[20px] rounded bg-darkseagreen w-[76px] h-[23px] flex flex-col items-center justify-center text-mediumseagreen">
        <div className="relative font-medium">Completed</div>
      </div>
    </div>
  );
};

export default CompletedCard2;
