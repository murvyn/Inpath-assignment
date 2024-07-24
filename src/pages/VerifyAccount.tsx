import logo from "@/assets/logo.png";
import verifyLogo from "@/assets/Group 10.png";
import { Link } from "react-router-dom";

const VerifyAccount = () => {
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
      <main className="w-full mt-[7rem] get-started">
        <div className="w-full justify-center gap-[24px] flex flex-col items-center">
          <img src={verifyLogo} className="max-sm:w-[106px]" alt="verify" />
          <div className="w-[406px] max-sm:w-full max-sm:px-[16px] text-center items-center flex flex-col gap-[24px]">
            <h2 className="text-[28px] max-sm:text-[20px] max-sm:leading-[28px] font-[700] leading-[39.2px] ">Verify your account</h2>
            <p className="font-[400] text-[#818181] text-[14px] leading-[19.6px]">
              A verification email will be sent to your email address provided.
              Click on the link in the mail to verify your account.
            </p>
            <p className="p-2 bg-[#E8E8E8] leading-[19.6px] text-[#818181] text-[14px] font-[700] rounded-[40px] w-fit  border-[1px]">mic***@inpathgroup.africa</p>
            <Link className="text-[#0B8659] leading-[19.6px]  text-[14px] font-[700]" to="#">Resend Link</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerifyAccount;
