import Paragraph from "./ui/Paraghraph";
import costumer from "../assets/person/costumer.png";
import AnimatedText from "./ui/AnimatedText";
import SlideText from "./ui/SlideText";


const Testimonials = () => {
   return (
      <section className="background-figma pt-8">
         <div className="container mx-auto mb-10 px-4">
            <div className="md:mx-32 lg:mx-44 grid gap-4">
               <AnimatedText className="text-base font-medium text-[#FFFFFF]" word="05 / Testimonials" />
               <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                  word="Hear what our"
               />
               <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                  word="customers have to say"
               />
               <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                  word="about us."
               />
               <div className="mt-32">
                  <Paragraph className="text-3xl lg:text-4xl font-semibold tracking-tight uppercase text-[#FFFFFF]">
                     <span className="text-[#FAFF00]">“     I'm happy that I chose NUX to help me create a website for company's and mobile apps.</span> They did a fantastic job quickly putting the site together. Cryses and his colleagues are incredibly detail-oriented and receptive to my suggestions.     <span className="text-[#FAFF00]">"</span>
                  </Paragraph>
                  <div className="mt-10 flex items-center gap-4">
                     <img className="w-full max-w-[5rem]" src={costumer} alt="costumer" />
                     <div>
                        <Paragraph className="text-[#FFFFFF] font-medium text-lg">
                           Nicholas Sans Alexander
                        </Paragraph>
                        <Paragraph className="text-[#FFFFFF] font-normal text-base">
                           World Costumer
                        </Paragraph>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <SlideText/>
      </section>
   )
}

export default Testimonials;