import Paragraph from "./ui/Paraghraph";
import lawFirm from "../assets/projects/lawFirm.png";
import gym from "../assets/projects/gym.png";
import AnimatedText from "./ui/AnimatedText";

const Project = () => {
   return (
      <>
         <section className="pt-28">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex flex-col gap-2">
                     <AnimatedText className="text-base font-medium" word="02 / Project" />
                     <AnimatedText className="text-black font-semibold text-5xl lg:text-6xl uppercase tracking-tight" word="Our latest"/>
                     <AnimatedText className="text-black font-semibold text-5xl lg:text-6xl uppercase tracking-tight" word="project"/>
                  </div>
                  <Paragraph size={"default"} className="mt-5 md:ml-auto md:w-96">
                     Only full-service thinking can lead to progress. We've developed a company that covers the entire customer experience, concentrating on internet usage and the effects that each touchpoint has on your brand.
                  </Paragraph>
               </div>
               <div className="my-8">
                  <div className="">
                     <img className="hover:scale-105 transition-all" src={gym} alt="gym-project" />
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-2">
                     <div className="flex flex-col">
                        <AnimatedText className="text-black font-semibold -tracking-[0.02rem] uppercase text-2xl md:text-5xl lg:text-6xl" word="Gym Fitness apps" />
                        <AnimatedText className="max-w-prose text-black font-medium text-base  md:text-lg" word="Indonesian client"/>
                     </div>
                     <div className="flex flex-col">
                        <AnimatedText className="text-black font-semibold -tracking-[0.02rem] uppercase text-2xl md:text-5xl lg:text-6xl" word="2017" />
                        <AnimatedText className="max-w-prose text-black font-medium text-base md:text-lg" word="2 Month" />
                     </div>
                  </div>
               </div>
               <div className="my-8">
                  <div className="">
                     <img className="hover:scale-105 transition-all" src={lawFirm} alt="lawfirm-project" />
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-2">
                     <div className="flex flex-col">
                        <AnimatedText className="text-black font-semibold -tracking-[0.02rem] uppercase text-2xl md:text-5xl lg:text-6xl" word="Law Firm" />
                        <AnimatedText className="text-black font-semibold -tracking-[0.02rem] uppercase text-2xl md:text-5xl lg:text-6xl" word="Agency Website"/>
                        <AnimatedText className="max-w-prose text-black font-medium text-base md:text-lg" word="France client" />
                     </div>
                     <div className="flex flex-col">
                        <AnimatedText className="text-black font-semibold -tracking-[0.02rem] uppercase text-2xl md:text-5xl lg:text-6xl" word="2018" />
                        <AnimatedText className="max-w-prose text-black font-medium text-base md:text-lg" word="3 Month" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Project;