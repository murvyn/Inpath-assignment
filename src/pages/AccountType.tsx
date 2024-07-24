import logo from "@/assets/logo.png";
import card1 from '@/assets/card/Group 79pics.png'
import card2 from '@/assets/card/Framepics.png'
import card3 from '@/assets/card/Group 75pics.png'
import card4 from '@/assets/card/Group 78pics.png'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AccountType = () => {
  return (
    <div>
      <header className="relative flex h-[80px] border-b-[1px] justify-center items-center">
        {/* <div className="absolute flex flex-row md:hidden max-sm:pl-[16px] pl-[32px] gap-[12px] items-center w-full">
            <ArrowLeft/>
            <span className="max-sm:hidden">Back</span>
        </div> */}
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main className="get-started max-sm:px-[14px] flex w-full mt-[5rem] max-sm:mt-[1rem] justify-center">
        <div className="w-[560px] max-sm:w-full flex flex-col gap-[40px]">
        <h3 className="text-[24px] max-sm:text-[18px] font-[700] leading-[33.6px] text-start">
        What type of account are you setting up?
          </h3>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[24px]">
            <div className="px-[24px] flex flex-col items-start gap-[16px] py-[16px] border-[1px] rounded-[2px]">
              <img src ={card1} alt="card1" />
              <p className="font-[700] text-[16px]">Candidate</p>
              <p className="font-[500] text-[#818181] text-[14px]">A graduate looking for an employment opportunity</p>
            </div>
            <div className="px-[24px] flex flex-col items-start gap-[16px] py-[16px] border-[1px] rounded-[2px]">
              <img src ={card2} alt="card1" />
              <p className="font-[700] text-[16px]">Employer</p>
              <p className="font-[500] text-[#818181] text-[14px]">An organisation looking to hire top talents</p>
            </div>
            <div className="px-[24px] relative flex flex-col items-start gap-[16px] py-[16px] border-[1px] rounded-[2px]">
              <img src ={card4} alt="card1" />
              <p className="font-[700] text-[#818181] text-[16px]">Mentor</p>
              <p className="font-[500] text-[#818181] text-[14px]">A professional helping others navigate their careers</p>
              <span className="absolute top-0 right-0 px-[8px] py-[5px] text-[#D98F00] text-[12px] font-[700] bg-[#FCF4E6] rounded-[2px]">Coming soon</span>
            </div>
            <div className="px-[24px] relative flex flex-col items-start gap-[16px] py-[16px] border-[1px] rounded-[2px]">
              <img src ={card3} alt="card1" />
              <p className="font-[700] text-[#818181] text-[16px]">Trainer</p>
              <p className="font-[500] text-[#818181] text-[14px]">An organisation offering training programmes</p>
              <span className="absolute top-0 right-0 px-[8px] py-[5px] text-[#D98F00] text-[12px] font-[700] bg-[#FCF4E6] rounded-[2px]">Coming soon</span>
            </div>
          </div>
          <Button disabled className="w-full font-[700] text-[12px]  flex space-x-2"><span>Next</span>

          <ArrowRight size={18}/>
          </Button>
        </div>
      </main>
    </div>
  )
}

export default AccountType