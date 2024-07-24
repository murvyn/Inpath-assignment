import logo from "@/assets/logo.png";
import Briefcase from "@/assets/icons/Briefcaselogos.svg";
import UserStar from "@/assets/icons/User-starlogos.svg";
import Train from "@/assets/icons/Traininglogos.svg";
import { Button } from "./ui/button";
import searchIcon from "@/assets/icons/SearchIcon.svg";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue } from "./ui/select";
import yellow from "@/assets/icons/yellowbg.png";
import png1 from "@/assets/icons/Ellipse 80bg.png";
import woman from "@/assets/icons/womanbg.png";
import png2 from "@/assets/icons/Ellipse 73bg.png";
import png3 from "@/assets/icons/Ellipse 77bg.png";
import png4 from "@/assets/icons/Ellipse 74bg.png";
import frame from "@/assets/icons/Framebg.png";
import red from "@/assets/icons/redbg.png";
import png5 from "@/assets/icons/Ellipse 81bg.png";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col w-[100vw]">
      <header className="  h-[78px] max-h-[78px] text-sm max-md:px-[16px] md:px-[40px] lg:px-[72px] flex items-center justify-between">
        <div className="w-fit">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-row max-lg:hidden gap-[56px]">
          <Button
            variant={"ghost"}
            className="flex flex-row items-center space-x-1"
          >
            <img src={Briefcase} alt="Briefcase" />
            <p>Jobs</p>
          </Button>
          <span className="flex flex-row items-center space-x-1">
            <img src={UserStar} alt="Briefcase" />
            <p>Mentorship</p>
          </span>
          <span className="flex flex-row items-center space-x-1">
            <img src={Train} alt="Briefcase" />
            <p>Trainings</p>
          </span>
        </div>
        <div className="w-fit flex justify-center items-center gap-[24px]">
          <div className="w-fit max-md:hidden">
            <Button variant={"ghost"}>Login</Button>
            <Button type="button" onClick={() => navigate('/create-account')}>Sign up</Button>
          </div>
          <Menu />
        </div>
      </header>
      <main className="flex-1 relative flex items-center bg-[#F5F5F5] justify-center">
        <div className="">
          <div className="flex flex-col max-md:mt-[-5rem] mt-[-5rem] md:gap-[56px] lg:gap-[72px] items-center">
            <div className="flex flex-col max-md:gap-[16px] gap-[24px]">
              <h1 className="lg:text-[64px] max-md:text-[28px]  md:text-[44px] md:leading-[47.52px] font-[900] lg:leading-[69.12px]">
                Discover a greater you.
              </h1>
              <h3 className="lg:text-[36px] max-md:text-[18px]  md:text-[20px] md:leading-[28px] font-[700] lg:leading-[38.88px] ">
                We help you{" "}
                <span className="text-[#0B8659]">find the perfect job.</span>
              </h3>
            </div>
            <div className="flex search max-md:flex-col max-md:w-[328px]  flex-row items-center justify-center  rounded-full gap-[16px] md:bg-white md:w-[480px] lg:w-[636px] md:h-[56px]">
              <div className="flex flex-row items-center max-md:px-[4px] max-md:py-[11px]   max-md:w-full max-md:bg-white max-md:rounded-full ">
                <img src={searchIcon} alt="search" />
                <Input
                  type="text"
                  placeholder="Try “Civil Engineer”"
                  className="outline-none border-none md:w-[244px] lg:w-[372px] h-[26px]"
                />
              </div>
              <Select>
                <SelectTrigger className="border-none max-md:h-[48px] max-md:border-none max-md:w-full max-md:rounded-full font-semibold select h-[26px] max-md:px-[12px] max-md:py-[16px] w-[144px] outline-none ">
                  <SelectValue
                    className=""
                    placeholder="Jobs"
                  />
                </SelectTrigger>
              </Select>
              <div className="">
                <span className="bg-[#0B8659] rounded-full flex items-center justify-center w-[48px] h-[48px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={yellow}
          alt="yellow"
          className="absolute max-md:hidden max-lg:top-[20%] left-[10%]"
        />
        <img
          src={png1}
          alt="yellow"
          className="absolute max-md:hidden left-10 top-[40rem]"
        />
        <img
          src={woman}
          alt="yellow"
          className={`absolute max-md:hidden max-lg:left-[12%] bottom-28`}
        />
        <img
          src={png2}
          alt="yellow"
          className="absolute max-sm:bottom-[13%]  bottom-36 left-[35%]"
        />
        <img
          src={png3}
          alt="yellow"
          className="absolute max-md:hidden right-[42%]  bottom-28"
        />
        <img
          src={frame}
          alt="yellow"
          className="absolute max-md:hidden  right-0 bottom-48"
        />
        <img
          src={png4}
          alt="yellow"
          className="absolute max-md:hidden  right-[14rem] bottom-[17rem]"
        />
        <img
          src={red}
          alt="yellow"
          className="absolute max-sm:top-[10%] max-md:w-[48px] max-md:top-[25%]  max-lg:right-[20%] top-[7rem]"
        />
        <img
          src={png5}
          alt="yellow"
          className="absolute max-sm:hidden  right-[10%] max-md:w-[32px] max-md:bottom-[60%] bottom-[30rem]"
        />
      </main>
    </div>
  );
};

export default Hero;
