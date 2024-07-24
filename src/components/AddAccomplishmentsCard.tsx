import { X } from "lucide-react";
import bold from "@/assets/icons/bold.svg";
import underline from "@/assets/icons/underline.svg";
import italic from "@/assets/icons/italic.svg";
import bullets from "@/assets/icons/bullets.svg";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const AddAccomplishmentsCard = ({ toggleCard }: { toggleCard: () => void }) => {
  return (
    <div className="fixed top-0 left-0 max-sm:px-4 w-full h-screen bg-black z-30 bg-opacity-50 get-started flex justify-center items-center">
      <div className="max-w-[604px] w-full flex flex-col bg-white gap-5 pb-7 ">
        <div className="flex flex-row w-full py-6 px-10 justify-between">
          <p className="text-lg font-bold">Add Accomplishments</p>
          <X onClick={toggleCard} className="cursor-pointer" />
        </div>

        <div className="px-10">
          <form className="w-full flex flex-col gap-5">
            <div className="border-t">
              <div className="flex flex-row gap-2 items-start w-full border-x">
                <Button variant={"ghost"} size={"icon"}>
                  <img src={bold} alt="bold" />
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                  <img src={underline} alt="bold" />
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                  <img src={italic} alt="bold" />
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                  <img src={bullets} alt="bold" />
                </Button>
              </div>
              <Textarea 
              placeholder="Type something"
              rows={5}
              className="resize-none p-4 placeholder:text-[#ABADAE]"
              />
            </div>

            <Button className="w-[104px] self-end">
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAccomplishmentsCard;
