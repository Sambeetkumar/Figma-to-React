import type { NextPage } from "next";

const OnProgresscard: NextPage = () => {
  return (
    <div className="absolute top-[398px] left-[689px] rounded-2xl bg-white w-[314px] h-[258px] text-left text-xs text-slategray font-inter">
      <img
        className="absolute top-[76px] left-[20px] rounded-lg w-[281.68px] h-[110px] object-cover"
        alt=""
        src="/unsplashmicqqgydq6w@2x.png"
      />
      <div className="absolute top-[214px] left-[20px] w-[274px] h-6">
        <div className="absolute top-[4px] left-[100px] w-[174px] h-4">
          <img
            className="absolute top-[0px] left-[112px] w-4 h-4"
            alt=""
            src="/vuesaxlinearfolder25.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/vuesaxoutlinemessage6.svg"
          />
          <div className="absolute top-[1px] left-[21px] font-medium">
            14 comments
          </div>
          <div className="absolute top-[1px] left-[133px] font-medium">
            15 files
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[39px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-15@2x.png"
        />
        <img
          className="absolute top-[0px] left-[19px] rounded-[50%] w-[25px] h-6 object-cover"
          alt=""
          src="/ellipse-13@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-12@2x.png"
        />
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold text-gray">{`Onboarding Illustrations `}</div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[278px] text-base tracking-[-0.07em] font-extrabold font-inter text-gray text-left inline-block">
        . . .
      </button>
      <div className="absolute top-[20px] left-[20px] rounded bg-burlywood w-9 h-[23px] flex flex-col items-center justify-center text-peru">
        <div className="relative font-medium">Low</div>
      </div>
    </div>
  );
};

export default OnProgresscard;
