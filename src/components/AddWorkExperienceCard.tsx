import { X } from "lucide-react";
import info from "@/assets/icons/information-fill.svg";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const AddWorkExperienceCard = ({toggleCard}: {toggleCard: () => void}) => {
  return (
    <div className="fixed top-0 left-0 max-sm:px-4 w-full h-screen bg-black z-30 bg-opacity-50 get-started flex justify-center items-center">
      <div className="max-w-[604px] w-full flex flex-col bg-white gap-5 pb-7 ">
        <div className="flex flex-row w-full pt-7 px-10 justify-between">
          <p className="text-lg font-bold">Add Work Experience</p>
          <X onClick={toggleCard} className="cursor-pointer" />
        </div>
        <div className="flex flex-row gap-4 items-center justify-between px-10 py-3 bg-[#319CFF] bg-opacity-10 b">
          <img src={info} alt="info" />
          <p className="text-sm">
            Link your NSS details to Flair to make you more credible to
            employers.
          </p>
          <Button>Link NSS</Button>
        </div>
        <div className="px-10">
          <form className="w-full flex flex-col gap-5">
            <Label className="text-[#818181] text-sm font-medium">
              Job title
              <Input type="text" className="w-full mt-1 h-12" />
            </Label>
            <Label className="text-[#818181] text-sm font-medium">
              Company
              <Select>
                <SelectTrigger className="mt-1 h-12">
                  <SelectValue placeholder="Search company" />
                </SelectTrigger>
              </Select>
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Label className="text-[#818181] text-sm font-medium">
                Start date
                <Input type="text" className="w-full mt-1 h-12" />
              </Label>
              <Label className="text-[#818181] text-sm font-medium">
                End date
                <Input type="text" className="w-full mt-1 h-12" />
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox className="border-[#818181
] border-2" id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I currently work here
              </label>
            </div>
            <Button disabled className="w-[104px] self-end">Save</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWorkExperienceCard;
