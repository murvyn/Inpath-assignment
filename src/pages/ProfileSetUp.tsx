import logo from "@/assets/logo.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import book from "@/assets/icons/Bookicons.svg";
import briefcase from "@/assets/icons/Briefcaseicons.svg";
import star from "@/assets/icons/Star-halficons.svg";
import trophy from "@/assets/icons/trophy-lineicons.svg";
import upload from "@/assets/icons/upload-cloud-lineicons.svg";
import add from "@/assets/icons/Addicons.svg";
import award from "@/assets/icons/Awardicons.svg";
import { Button } from "@/components/ui/button";
import AddWorkExperienceCard from "@/components/AddWorkExperienceCard";
import AddEducationCard from "@/components/AddEducationCard";
import UploadResumeCard from "@/components/UploadResumeCard";
import AddAccomplishmentsCard from "@/components/AddAccomplishmentsCard";
import { useState } from "react";

const ProfileSetUp = () => {
  const [showAddWorkExperienceCard, setShowAddWorkExperienceCard] =
    useState(false);
  const [showAddEducationCard, setShowAddEducationCard] = useState(false);
  const [showUploadResumeCard, setShowUploadResumeCard] = useState(false);
  const [showAddAccomplishmentsCard, setShowAddAccomplishmentsCard] =
    useState(false);
  const profiles = [
    "Education",
    "Work Experience",
    "Interests & Skills",
    "Certifications",
    "Accomplishments",
    "Upload Resume",
  ];

  const steps = [
    { name: "Education", icon: book, info: "School info, field of study" },
    {
      name: "Work Experience",
      icon: briefcase,
      info: "Where you’ve worked, your role",
    },
    {
      name: "Interests & Skills",
      icon: star,
      info: "Career interests and skillset",
    },
    {
      name: "Certifications",
      icon: award,
      info: "Certifications worth highlighting",
    },
    {
      name: "Accomplishments",
      icon: trophy,
      info: "Personal achievement & impact",
    },
    { name: "Upload Resume", icon: upload, info: "CV, portfolio" },
  ];

  const showCard = (item: string) => {
    switch (item) {
      case "Education":
        setShowAddEducationCard(true);
        break;
      case "Work Experience":
        setShowAddWorkExperienceCard(true);
        break;
      case "Accomplishments":
        setShowAddAccomplishmentsCard(true);
        break;
      case "Upload Resume":
        setShowUploadResumeCard(true);
        break;
      default:
        break;
    }
  }
  return (
    <div className="h-screen">
      {showAddAccomplishmentsCard && (
        <AddAccomplishmentsCard
          toggleCard={() =>
            setShowAddAccomplishmentsCard(false)
          }
        />
      )}
      {showAddEducationCard && (
        <AddEducationCard
          toggleCard={() =>
            setShowAddEducationCard(false)
          }
        />
      )}
      {showAddWorkExperienceCard && (
        <AddWorkExperienceCard
          toggleCard={() =>
            setShowAddWorkExperienceCard(false)
          }
        />
      )}
      {showUploadResumeCard && (
        <UploadResumeCard
          toggleCard={() =>
            setShowUploadResumeCard(false)
          }
        />
      )}
      <header className="relative flex h-[80px] border-b-[1px] justify-center items-center">
        <div className="absolute flex flex-row md:hidden max-sm:pl-[16px] pl-[32px] gap-[12px] items-center w-full">
          <ArrowLeft />
          <span className="max-sm:hidden">Back</span>
        </div>
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main className="w-full h-full mt-11 lg:mt-14 get-started flex max-sm:flex-col justify-start max-lg:px-[24px] lg:px-[104px] lg:gap-28 gap-6 ">
        <h3 className="font-bold text-2xl sm:hidden">Set up your profile.</h3>
        <div className="">
          <div className="h-auto lg:w-[272px] md:w-[205px] bg-[#0B8659]">
            <div className="h-[88px] p-4 flex flex-row gap-4">
              <p className="text-base lg:w-[167.9px] md:w-[100.9px] max-sm:w-full font-bold text-white">
                Profile <br /> Completion
              </p>
              <div className="">
                <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border-[6px] text-white border-[#6CB69B] text-xs">
                  0%
                </div>
              </div>
            </div>
            <div className="p-4 max-sm:hidden flex flex-col items-center gap-8 text-white">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="w-full flex flex-row items-center justify-between"
                >
                  <Label
                    htmlFor="terms"
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {profile}
                  </Label>
                  <Checkbox
                    id={profile}
                    className="rounded-full border-white border-[2px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="xl:w-[608px] sm:w-full  w-full flex flex-col gap-8">
          <h3 className="font-bold text-2xl max-sm:hidden">
            Set up your profile.
          </h3>
          <div className="flex flex-col gap-5">
            {steps.map((step, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-row justify-between items-center"
                >
                  <div className="flex flex-row gap-4 items-start">
                    <img src={step.icon} alt={step.name} />
                    <div className="flex flex-col gap-2 ">
                      <p className="text-base font-bold leading-6 ">
                        {step.name}
                      </p>
                      <p className="text-sm text-[#818181] mb-4">{step.info}</p>
                      <hr />
                    </div>
                  </div>
                  <img onClick={() => showCard(step.name)} className="cursor-pointer" src={add} alt="add" />
                </div>
              </>
            ))}
          </div>
          <div className="w-full h-[48px] flex flex-row">
            <Button
              variant={"outline"}
              className="w-full rounded-none font-bold h-full"
            >
              I'll do it later
            </Button>
            <Button disabled className="w-full h-full rounded-none font-bold">
              Done
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSetUp;
