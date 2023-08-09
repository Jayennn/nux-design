import Heading from "./ui/Heading";
import Paragraph from "./ui/Paraghraph";
import product from "../assets/product.png";
import AnimatedText from "./ui/AnimatedText";



const Service = () => {
   return (
      <>
         <section className="background-figma py-28">
            <div className="container mx-auto px-4">
               <div className="md:mx-24 lg:mx-40 flex flex-col items-start self-stretch gap-2">
                  <AnimatedText className="text-base font-medium text-[#FFFFFF]" word="01 / Service" />
                  <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                     word="a full service design firm "
                  />
                  <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                     word="whose perspective creates"
                  />
                  <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                     word="digital experiences."
                  />
                  <Paragraph size={"default"} className="mt-14 md:mt-20 text-[#FFFFFF] max-w-sm">
                     - We have a love for finding the best digital 
                     solutions for forward-thinking brands who want 
                     to push the envelope and make a big impact.
                  </Paragraph>
               </div>
               <div className=" mt-16 grid gap-8">
                  <div className="lg:ml-auto flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 lg:gap-4">
                     <div className="flex items-start gap-2">
                        <span className="text-[#FAFF00] font-medium">01</span>
                        <img src={product} alt="services" />
                        <Heading size={"h2"} className="text-[#FAFF00] text-4xl md:text-[3.3rem] lg:text-[3.3rem] tracking-tight">UIUX DESIGN</Heading>
                     </div>
                     <span className="hidden lg:block text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] font-semibold">/</span>

                     <div className="flex items-start gap-2">
                        <span className="text-[#FFFFFF] font-medium">02</span>
                        <Heading size={"h2"} className="text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] tracking-tight">Branding</Heading>
                     </div>
                     <span className="hidden lg:block text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] font-semibold">/</span>

                     <div className="flex items-start gap-2">
                        <span className="text-[#FFFFFF] font-medium">03</span>
                        <Heading size={"h2"} className="text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] tracking-tight">Webflow</Heading>
                     </div>
                  </div>
                  <div className="lg:mr-auto flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 lg:gap-4">
                     <div className="flex items-start gap-2">
                        <span className="text-[#FFFFFF] font-medium">04</span>
                        <Heading size={"h2"} className="text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] tracking-tight">Illustration</Heading>
                     </div>
                     <span className="hidden lg:block text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] font-semibold">/</span>

                     <div className="flex items-start gap-2">
                        <span className="text-[#FFFFFF] font-medium">05</span>
                        <Heading size={"h2"} className="text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] tracking-tight">Marketing</Heading>
                     </div>
                     <span className="hidden lg:block text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] font-semibold">/</span>
                     <div className="flex items-start gap-2">
                        <span className="text-[#FFFFFF] font-medium">06</span>
                        <Heading size={"h2"} className="text-[#FFFFFF]  text-4xl md:text-[3.3rem] lg:text-[3.3rem] tracking-tight">Research</Heading>
                     </div>
                  </div>
                  <button type="button" className="mt-10 mx-auto w-fit flex flex-col items-center justify-center bg-[#FFFFFF] rounded-[80px] py-8 px-10"> 
                     <Paragraph size={"default"}>View All</Paragraph>
                     <svg className="mt-5 -rotate-[39deg]" xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.89063 22.5307C6.20307 22.4715 6.51088 22.4389 6.8153 22.4326C8.53148 22.397 9.90967 23.2024 11.1605 24.252L9.87494 25.784C8.77273 24.8592 7.86097 24.4113 6.85669 24.4321C5.82095 24.4536 4.45832 24.9777 2.48785 26.5558L0.985513 25.2951C2.19746 23.0806 2.47697 21.6476 2.31823 20.6239C2.16432 19.6313 1.56495 18.8111 0.462742 17.8863L1.74832 16.3542C2.99916 17.4038 4.03159 18.6212 4.29462 20.3174C4.34127 20.6184 4.36257 20.9272 4.35852 21.2452L21.4992 0.817703L23.0313 2.10328L5.89063 22.5307Z" fill="black" />
                     </svg>
                  </button>
               </div>
            </div>
         </section>
      </>
   )
}

export default Service;