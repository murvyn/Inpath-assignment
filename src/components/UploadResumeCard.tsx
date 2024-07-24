import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import uploadIcon from "@/assets/icons/Group.svg";

const UploadResumeCard = ({ toggleCard }: { toggleCard: () => void }) => {
  return (
    <div className="fixed top-0 left-0 max-sm:px-4 w-full h-screen bg-black z-30 bg-opacity-50 get-started flex justify-center items-center">
      <div className="max-w-[604px] w-full flex flex-col bg-white gap-5 pb-7 ">
        <div className="flex flex-row w-full py-6 px-10 justify-between">
          <p className="text-lg font-bold">Upload Resume</p>
          <X onClick={toggleCard} className="cursor-pointer" />
        </div>

        <div className="px-10">
          <form className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-base">Resume/CV</p>
              <Label className="text-[#818181] text-sm font-medium">
                Format should be either .pdf, .docx, .doc
              </Label>
              <div className="py-6 px-4 border border-dashed flex items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <img src={uploadIcon} alt="upload" />
                  <span className="text-[#737377] text-xs font-medium">Drop file here</span>
                </div>
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className="font-bold text-black"
                >
                  Browse
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-base">Other files gd. portfolio</p>
              <Label className="text-[#818181] text-sm font-medium">
                Format should be either .pdf, .docx, .doc
              </Label>
              <div className="py-6 px-4 border border-dashed flex items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <img src={uploadIcon} alt="upload" />
                  <span className="text-[#737377] text-xs font-medium">Drop file here</span>
                </div>
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className="font-bold text-black"
                >
                  Browse
                </Button>
              </div>
            </div>
            
            <Button disabled className="w-[104px] self-end">
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadResumeCard;
