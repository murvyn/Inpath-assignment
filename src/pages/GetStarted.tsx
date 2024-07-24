import logo from "@/assets/logo.png";
import { PhoneInput } from "@/components/PhoneInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="w-full get-started">
      <header className="relative flex h-[80px] border-b-[1px] justify-center items-center">
        <div className="absolute flex flex-row md:hidden max-sm:pl-[16px] pl-[32px] gap-[12px] items-center w-full">
            <ArrowLeft/>
            <span className="max-sm:hidden">Back</span>
        </div>
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main className="w-full flex mt-[40px] justify-center">
        <form className="flex w-full max-sm:px-[16px] sm:w-[416px]  gap-[32px] flex-col items-start justify-center h-full">
          <h3 className="text-[24px] font-[700] leading-[33.6px] text-start">
            Get started.
          </h3>
          <div className="w-full text-[#818181] flex flex-col gap-[24px]">
            <Label className="w-full">
              Full name
              <Input type="text" className="w-full mt-1" />
            </Label>
            <div className="grid  sm:grid-cols-2 gap-[16px]">
              <Label className="w-full">
                Date of birth
                <Input type="text" className="w-full mt-1" />
              </Label>
              <Label className="w-full">
                Gender
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                </Select>
              </Label>
            </div>
            <Label className="w-full">
              Email address
              <Input type="email" className="w-full mt-1" />
            </Label>
            <Label className="w-full">
              Phone number
              <PhoneInput className="mt-1" />
            </Label>
            <Label className="w-full">
              Password
              <Input type="password" className="w-full mt-1" />
            </Label>
          </div>
          <Button className="w-full">Create Account</Button>
          <p>Already signed up? <Link className="text-[#0B8659]" to='/'>Log in</Link></p>
        </form>
      </main>
    </div>
  );
};

export default GetStarted;
