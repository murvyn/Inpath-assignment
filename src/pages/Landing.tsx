import Hero from "@/components/Hero";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const Landing = () => {
  return (
    <div className="w-full h-screen overflow-hidden px-[24px] flex justify-center">
      <div className="">
        <Tabs defaultValue="for-students-and-graduates" className="">
          <div className="h-[62px]  max-h-[62px] flex items-center justify-center">
            <TabsList className="">
              <TabsTrigger className="" value="for-students-and-graduates">
                For Students & Graduates
              </TabsTrigger>
              <TabsTrigger value="for-partners">For Partners</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent className="h-full " value="for-students-and-graduates">
            <Hero />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Landing;
