import type { NextPage } from "next";
import TodoCard3 from "../components/todo-card3";
import Todocard from "../components/todocard";
import TodoCard2 from "../components/todo-card2";
import SearchCard from "../components/search-card";
import DropDown from "../components/drop-down";
import DropDown2 from "../components/drop-down2";
import CompletedCard from "../components/completed-card";
import OnProgressCard2 from "../components/on-progress-card2";
import OnProgressCard3 from "../components/on-progress-card3";
import OnProgresscard from "../components/on-progresscard";
import CompletedCard2 from "../components/completed-card2";

const Total: NextPage = () => {
  return (
    <div className="relative bg-white shadow-[0px_44px_84px_6px_#d8d9db] w-full h-[1230px] text-left text-xs text-gray font-inter">
      <div className="absolute top-[225px] left-[1172px] w-[220px] h-10 flex flex-row items-center justify-start gap-[20px]">
        <button
          className="cursor-pointer py-[11px] px-[15px] bg-[transparent] rounded-md box-border w-[97px] h-10 flex flex-row items-center justify-start gap-[6px] border-[1px] border-solid border-slategray"
          autoFocus
        >
          <img
            className="relative w-4 h-4"
            alt=""
            src="/vuesaxoutlineprofile2user.svg"
          />
          <div className="relative text-base capitalize font-medium font-inter text-slategray text-left">
            Share
          </div>
        </button>
        <img className="relative w-px h-7" alt="" src="/vector-10.svg" />
        <img className="relative w-[83px] h-10" alt="" src="/group-613.svg" />
      </div>
      <img
        className="absolute top-[0px] left-[248.47px] w-[2.53px] h-[1230px]"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[87.5px] left-[1px] w-[1438.5px] h-px"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="absolute top-[371px] left-[13px] w-56 h-px"
        alt=""
        src="/vector-8.svg"
      />
      <img
        className="absolute top-[32px] left-[22px] w-6 h-6"
        alt=""
        src="/vuesaxbulkcolorfilter.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[119px] left-[22px] w-[84px] h-6 flex flex-row items-center justify-start gap-[14px]">
        <img
          className="relative w-6 h-6"
          alt=""
          src="/vuesaxoutlinecategory.svg"
        />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Home
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[217px] left-[22px] w-[83px] h-6 flex flex-row items-center justify-start gap-[14px]">
        <img
          className="relative w-6 h-6"
          alt=""
          src="/vuesaxlineartasksquare.svg"
        />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Tasks
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[168px] left-[22px] w-[116px] h-6 flex flex-row items-center justify-start gap-[14px]">
        <img
          className="relative w-6 h-6"
          alt=""
          src="/vuesaxlinearmessage.svg"
        />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Messages
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[268px] left-[22px] w-[111px] h-6 flex flex-row items-center justify-start gap-[14px]">
        <img
          className="relative w-6 h-6"
          alt=""
          src="/vuesaxlinearprofile2user.svg"
        />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Members
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[317px] left-[21px] w-[103px] h-6 flex flex-row items-center justify-start gap-[15px]">
        <img
          className="relative w-6 h-6"
          alt=""
          src="/vuesaxlinearsetting2.svg"
        />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Settings
        </div>
      </button>
      <div className="absolute top-[402px] left-[22px] w-[203px] h-4 flex flex-row items-center justify-start gap-[100px] text-slategray">
        <b className="relative uppercase">my projects</b>
        <img
          className="relative w-4 h-4"
          alt=""
          src="/vuesaxlinearaddsquare.svg"
        />
      </div>
      <div className="absolute top-[438px] left-[12px] rounded-md bg-blueviolet-200 w-[225px] h-[39px] text-base">
        <div className="absolute top-[10px] left-[36px] font-semibold">
          Mobile App
        </div>
        <div className="absolute top-[6px] left-[195px] tracking-[-0.07em] font-extrabold">
          . . .
        </div>
        <div className="absolute top-[15px] left-[12px] rounded-[50%] bg-lightgreen w-2 h-2" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[497px] left-[24px] w-[162px] h-[19px] flex flex-row items-center justify-start gap-[16px]">
        <div className="relative rounded-[50%] bg-orange w-2 h-2" />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Website Redesign
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[546px] left-[24px] w-[139px] h-[19px] flex flex-row items-center justify-start gap-[16px]">
        <div className="relative rounded-[50%] bg-thistle w-2 h-2" />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Design System
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[595px] left-[24px] w-[113px] h-[19px] flex flex-row items-center justify-start gap-[16px]">
        <div className="relative rounded-[50%] bg-cornflowerblue w-2 h-2" />
        <div className="relative text-base font-medium font-inter text-slategray text-left">
          Wireframes
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[34px] left-[199px] w-[26px] h-5">
        <img
          className="absolute top-[0px] left-[6px] w-5 h-5"
          alt=""
          src="/vuesaxoutlinearrowleft.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-5 h-5"
          alt=""
          src="/vuesaxoutlinearrowleft.svg"
        />
      </button>
      <div className="absolute top-[32px] left-[55px] text-[20px] font-semibold">
        Project M.
      </div>
      <div className="absolute top-[307px] left-[299px] rounded-2xl bg-whitesmoke w-[354px] h-[882px]" />
      <TodoCard3 />
      <Todocard />
      <TodoCard2 />
      <img
        className="absolute top-[368.5px] left-[319px] w-[314px] h-[3px]"
        alt=""
        src="/vector-11.svg"
      />
      <div className="absolute top-[328px] left-[319px] w-[61px] h-[19px] flex flex-row items-center justify-start gap-[8px] text-base">
        <div className="relative rounded-[50%] bg-blueviolet-100 w-2 h-2" />
        <div className="relative font-medium">To Do</div>
      </div>
      <div className="absolute top-[307px] left-[668px] rounded-2xl bg-whitesmoke w-[355px] h-[812px]" />
      <div className="absolute top-[307px] left-[1038px] rounded-2xl bg-whitesmoke w-[354px] h-[640px]" />
      <SearchCard />
      <div className="absolute top-[24px] left-[1200px] w-[201px] h-[39px] flex flex-row items-center justify-end gap-[70px] text-right text-base">
        <div className="w-[113px] h-[39px] flex flex-col items-end justify-start gap-[3px]">
          <div className="relative">Anima Agrawal</div>
          <div className="relative text-sm text-slategray">U.P, India</div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/arrowdown.svg"
          />
        </button>
      </div>
      <div className="absolute top-[32px] left-[1021px] w-[120px] h-6">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[96px] w-6 h-6">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxlinearnotification.svg"
          />
          <div className="absolute top-[1px] left-[15px] rounded-[50%] bg-lightcoral-100 w-1.5 h-1.5" />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[48px] w-6 h-6">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxlinearmessagequestion.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-6 h-6">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxlinearcalendar2.svg"
          />
        </button>
      </div>
      <div className="absolute top-[225px] left-[299px] w-64 h-10 flex flex-row items-center justify-start gap-[12px]">
        <DropDown />
        <DropDown2 />
      </div>
      <div className="absolute top-[129px] left-[299px] w-[344px] h-14 flex flex-row items-center justify-end gap-[19px] text-[46px]">
        <div className="relative capitalize font-semibold">Mobile App</div>
        <div className="relative w-[72px] h-[30px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[30px] h-[30px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vuesaxlineararrowsquareup.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[42px] w-[30px] h-[30px]">
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px]"
              alt=""
              src="/vuesaxlineararrowsquareup1.svg"
            />
            <img
              className="absolute top-[7px] left-[7px] w-4 h-4"
              alt=""
              src="/vuesaxoutlinelink.svg"
            />
          </button>
        </div>
      </div>
      <div className="absolute top-[328px] left-[392px] rounded-3xs bg-gainsboro w-5 h-5 flex flex-col py-0.5 px-0 box-border items-center justify-start text-dimgray">
        <div className="relative font-medium">4</div>
      </div>
      <div className="absolute top-[327px] left-[811px] rounded-3xs bg-gainsboro w-5 h-5 flex flex-col py-0.5 px-0 box-border items-center justify-start text-dimgray">
        <div className="relative font-medium">3</div>
      </div>
      <div className="absolute top-[327px] left-[1127px] rounded-3xs bg-gainsboro w-5 h-5 flex flex-col py-0.5 px-0 box-border items-center justify-start text-dimgray">
        <div className="relative font-medium">2</div>
      </div>
      <div className="absolute top-[685px] left-[108px] rounded-[50%] bg-gold [filter:blur(34px)] w-[33px] h-[33px]" />
      <img
        className="absolute top-[368.5px] left-[688px] w-[314px] h-[3px]"
        alt=""
        src="/vector-12.svg"
      />
      <div className="absolute top-[327px] left-[688px] w-[111px] h-[19px] flex flex-row items-center justify-start gap-[8px] text-base">
        <div className="relative rounded-[50%] bg-orange w-2 h-2" />
        <div className="relative font-medium">On Progress</div>
      </div>
      <img
        className="absolute top-[368.5px] left-[1058px] w-[314px] h-[3px]"
        alt=""
        src="/vector-13.svg"
      />
      <div className="absolute top-[327px] left-[1058px] w-[57px] h-[19px] flex flex-row items-center justify-start gap-[8px] text-base">
        <div className="relative rounded-[50%] bg-cornflowerblue w-2 h-2" />
        <div className="relative font-medium">Done</div>
      </div>
      <CompletedCard />
      <OnProgressCard2 />
      <OnProgressCard3 />
      <OnProgresscard />
      <CompletedCard2 />
      <div className="absolute top-[138px] left-[1155px] w-[237px] h-[38px] flex flex-row items-center justify-start gap-[12px] text-[15px] text-indianred">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[67px] h-[19px] flex flex-row items-center justify-start gap-[7px]">
          <img
            className="relative w-[18px] h-[18px]"
            alt=""
            src="/vuesaxlinearaddsquare1.svg"
          />
          <div className="relative text-base capitalize font-medium font-inter text-blueviolet-100 text-left">
            Invite
          </div>
        </button>
        <div className="relative w-[158px] h-[38px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-[38px] h-[38px] object-cover"
            alt=""
            src="/ellipse-122@2x.png"
          />
          <img
            className="absolute top-[0px] left-[30px] rounded-[50%] w-[38px] h-[38px] object-cover"
            alt=""
            src="/ellipse-131@2x.png"
          />
          <img
            className="absolute top-[0px] left-[60px] rounded-[50%] w-[38px] h-[38px] object-cover"
            alt=""
            src="/ellipse-151@2x.png"
          />
          <img
            className="absolute top-[0px] left-[90px] rounded-[50%] w-[38px] h-[38px] object-cover"
            alt=""
            src="/ellipse-14@2x.png"
          />
          <div className="absolute top-[0px] left-[120px] rounded-[50%] bg-mistyrose box-border w-[38px] h-[38px] border-[1px] border-solid border-white" />
          <div className="absolute top-[10px] left-[129px] capitalize font-medium">
            +2
          </div>
        </div>
      </div>
      <div className="absolute top-[785px] left-[299px] w-[354px] h-[200px] text-slategray">
        <div className="absolute top-[6px] left-[20px] rounded-2xl bg-white w-[314px] h-[171px]">
          <div className="absolute top-[113.37px] left-[20px] w-[274px] h-[20.53px] flex flex-row items-center justify-start gap-[49px]">
            <img
              className="relative w-[63px] h-[20.53px]"
              alt=""
              src="/group-6335.svg"
            />
            <div className="relative w-[162px] h-[13.68px]">
              <img
                className="absolute top-[0px] left-[106px] w-4 h-[13.68px]"
                alt=""
                src="/vuesaxlinearfolder27.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-4 h-[13.68px]"
                alt=""
                src="/vuesaxoutlinemessage8.svg"
              />
              <div className="absolute top-[0.86px] left-[21px] font-medium inline-block w-[71px] h-[12.83px]">
                2 comments
              </div>
              <div className="absolute top-[0.86px] left-[127px] font-medium inline-block w-[35px] h-[12.83px]">
                0 files
              </div>
            </div>
          </div>
          <div className="absolute top-[39.82px] left-[20px] text-lg font-semibold text-gray inline-block w-[102px] h-[18.82px]">
            Wireframes
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[15.87px] left-[278px] text-base tracking-[-0.07em] font-extrabold font-inter text-gray text-left inline-block w-4 h-[16.25px]">
            . . .
          </button>
          <div className="absolute top-[63.76px] left-[20px] inline-block w-[274px] h-[25.66px]">
            Low fidelity wireframes include the most basic content and visuals.
          </div>
          <div className="absolute top-[16.72px] left-[20px] rounded bg-lightcoral-200 w-[39px] h-[19.67px] flex flex-col items-center justify-center text-lightcoral-100">
            <div className="relative font-medium inline-block w-[27px] h-[12.83px] shrink-0">
              High
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[842px] left-[42px] rounded w-[166px] h-10 hover:cursor-pointer" />
      <div className="absolute top-[854px] left-[69px] text-sm font-medium text-black">
        Write a message
      </div>
      <img
        className="absolute top-[690px] left-[113px] w-6 h-6"
        alt=""
        src="/vuesaxbulklampon.svg"
      />
      <div className="absolute top-[739px] left-[75px] text-sm font-medium text-black">
        Thoughts Time
      </div>
      <div className="absolute top-[768px] left-[42px] text-slategray text-center inline-block w-[166px]">
        We don’t have any notice for you, till then you can share your thoughts
        with your peers.
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[327px] left-[609px] w-6 h-6">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/addsquare.svg"
        />
      </button>
      <img
        className="absolute top-[24px] left-[1326px] w-[38px] h-[38px] object-cover"
        alt=""
        src="/mask-group1@2x.png"
      />
    </div>
  );
};

export default Total;
