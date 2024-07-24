import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const SelectCareerStatus = () => {
  const careers = [
    "Still in school",
    "Currently doing National Service",
    "Done with National Service",
    "Experienced Professional",
  ];
  return (
    <div className="h-screen">
      <header className="relative flex h-[80px] border-b-[1px] justify-center items-center">
        {/* <div className="absolute flex flex-row md:hidden max-sm:pl-[16px] pl-[32px] gap-[12px] items-center w-full">
            <ArrowLeft/>
            <span className="max-sm:hidden">Back</span>
        </div> */}
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main className="w-full h-full md:mt-[7rem] max-md:pt-[2rem] max-md:pb-[7rem] get-started flex justify-center">
        <div className="w-[416px] max-sm:w-full max-sm:px-[16px] flex flex-col gap-8">
          <h3 className="lg:text-[24px] text-lg md:text-xl max-sm:text-[18px] font-[700] leading-[33.6px] text-start">
            Where are you currently in your professional career?
          </h3>
          <div className="flex flex-col gap-[24px]">
            {careers.map((career, index) => (
              <Button variant={"outline"} className="w-full h-12 text-sm font-bold rounded-[40px]" key={index}>
                {career}
              </Button>
            ))}
          </div>
          <div className="max-sm:h-full flex ">
          <Button className="w-full self-end ">Continue</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectCareerStatus;
