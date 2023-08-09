import Heading from "./ui/Heading";
import image from "../assets/bannerImage.webp"
import Reveal from "./ui/Reveal";
import SlideText from "./ui/SlideText";



const Banner = () => {

   return (
      <>
         <section className="grid pt-32">
           <SlideText/>
            <div className="bg-[#FAFF00]">
               <div className="container mx-auto grid place-content-center">
                  <Reveal>
                     <Heading className="text-8xl text-center md:text-9xl lg:text-[14rem] font-semibold tracking-tighter" size={"display"}>
                        nux design
                     </Heading>
                  </Reveal>
               </div>
               <img className="grayscale w-full object-cover" src={image} alt="banner-img" />
            </div>
         </section>
      </>
   )
}

export default Banner;