import person1 from "../assets/person/person1.png"
import person2 from "../assets/person/person2.png"
import person3 from "../assets/person/person3.png"
import person4 from "../assets/person/person4.png"
import AnimatedText from "./ui/AnimatedText";
import Reveal from "./ui/Reveal";

const PERSONS = [
   person1,
   person2,
   person3,
   person4
]

const About = () => {
   return (
      <section className="background-figma py-28">
         <div className="container mx-auto px-4">
            <div className="flex flex-col items-start">
               <AnimatedText className="text-base font-medium text-[#FFFFFF]" word="04 / About us" />
               <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                  word="Collaborate between"
               />
               <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                  word="systems thinking and good"
               />
               <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF]"
                  word="craftsmanship."
               />
            </div>
            <div className="mt-16 flex flex-col items-center justify-center">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {PERSONS.map((person, index) => (
                     <Reveal key={index}>
                        <img className="grayscale hover:grayscale-0  w-full max-w-[18rem]" src={ person } alt="persons" />
                     </Reveal>
                  ))}
               </div>
               <button type="button" className="mt-16 bg-[#FFFFFF] rounded-[2rem] px-6 py-4 text-base text-[#050505] font-medium">
                  Meet The Team
               </button>
            </div>
         </div>
      </section>
   )
}

export default About;