import amaraIcon from "../assets/icons/amaraIcon.png"
import codelabIcon from "../assets/icons/codelabIcon.png"
import foxhubIcon from "../assets/icons/foxhubIcon.png"
import goldlineIcon from "../assets/icons/goldlineIcon.png"
import liveIcon from "../assets/icons/livaIcon.png"
import muzicalIcon from "../assets/icons/muzicaIcon.png"
import utosiaIcon from "../assets/icons/utosiaIcon.png"
import velocityIcon from "../assets/icons/velocityIcon.png"
import ztosIcon from "../assets/icons/ztosIcon.png"
import lastIcon from "../assets/icons/lastIcon.png"
import AnimatedText from "./ui/AnimatedText";


const CLIENT_ICONS = [
   amaraIcon, codelabIcon, foxhubIcon, goldlineIcon,
   liveIcon, muzicalIcon, utosiaIcon,
   velocityIcon, ztosIcon, lastIcon
]

const Client = () => {
   return (
      <>
         <section className="py-28">
            <div className="container mx-auto px-4">
               <div className="lg:mx-44 md:flex md:items-center grid lg:place-content-center grid-cols-4 gap-8">
                  <div className="hidden md:col-span-1 md:flex md:justify-end md:w-[8rem] lg:w-[12rem]">
                     <svg height="220" viewBox="0 0 209 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="2" width="206" height="206" rx="103" fill="#D9D9D9" stroke="black" strokeWidth="3" />
                        <path d="M103.025 72.8391L104.5 62.5495L105.975 72.8391C108.228 88.5648 118.977 101.023 132.852 103.65L142.624 105.5L132.852 107.35C118.977 109.977 108.228 122.435 105.975 138.161L104.5 148.45L103.025 138.161C100.772 122.435 90.0226 109.977 76.1476 107.35L66.3757 105.5L76.1476 103.65C90.0226 101.023 100.772 88.5648 103.025 72.8391Z" fill="#FAFF00" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                     </svg>
                  </div>
                  <div className="col-span-4 md:col-span-3 grid gap-2">
                     <AnimatedText className="text-base font-medium text-[#050505]" word="03 / World Client" />
                     <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight" word="We are proud to"/>
                     <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight" word="work with world"/>
                     <AnimatedText className="font-semibold uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight" word="brands"/>
                  </div>
               </div>
               <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:justify-items-center gap-20">
                  {CLIENT_ICONS.map((icon) => (
                     <img className="hover:scale-105" key={icon} src={icon} alt="client-icon"/>
                  ))}
               </div>
            </div>
         </section>
      </>
   )
}

export default Client;