import type { NextPage } from "next";

const OnProgressCard3: NextPage = () => {
  return (
    <div className="absolute top-[676px] left-[689px] rounded-2xl bg-white w-[314px] h-[227px] text-left text-xs text-slategray font-inter">
      <img
        className="absolute top-[76px] left-[20px] rounded-lg w-[131px] h-[79px] object-cover"
        alt=""
        src="/unsplashbs-1xgrkih4@2x.png"
      />
      <img
        className="absolute top-[76px] left-[163px] rounded-lg w-[131px] h-[79px] object-cover"
        alt=""
        src="/unsplashkiqjfzbii9w@2x.png"
      />
      <div className="absolute top-[183px] left-[20px] w-[274px] h-6 flex flex-row items-center justify-start gap-[81px]">
        <img
          className="relative rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-12@2x.png"
        />
        <div className="relative w-[169px] h-4">
          <img
            className="absolute top-[0px] left-[107px] w-4 h-4"
            alt=""
            src="/vuesaxlinearfolder23.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/vuesaxoutlinemessage5.svg"
          />
          <div className="absolute top-[1px] left-[21px] font-medium">
            9 comments
          </div>
          <div className="absolute top-[1px] left-[128px] font-medium">
            10 files
          </div>
        </div>
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold text-gray">
        Moodboard
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[278px] text-base tracking-[-0.07em] font-extrabold font-inter text-gray text-left inline-block">
        . . .
      </button>
      <div className="absolute top-[20px] left-[20px] rounded bg-burlywood w-9 h-[23px] flex flex-col items-center justify-center text-peru">
        <div className="relative font-medium">Low</div>
      </div>
    </div>
  );
};

export default OnProgressCard3;
