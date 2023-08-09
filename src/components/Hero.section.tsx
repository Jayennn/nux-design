import Paragraph from "./ui/Paraghraph";
import { motion } from "framer-motion";
const Hero = () => {
   return (
      <>
         <section className="py-16 md:py-10">
            <div className="container mx-auto px-4">
               <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{ 
                     offscreen: {
                        y: 100,
                        opacity: 0,
                     },
                     onscreen: {
                        opacity: 1,
                        y: 0,
                     }
                  }}
                  transition={{ 
                     duration: 0.3,
                     delay: 0.6
                  }}
                  className="overflow-hidden text-6xl text-left md:text-7xl lg:text-9xl font-bold -tracking-[0.02rem] uppercase tracking-light">
                  super branding and creative
                  ideas
                  <div className="mt-6 md:mt-0 md:inline-block">
                     <div className="md:flex md:items-center">
                        <svg className="align-baseline px-2 hidden md:block md:w-44 lg:w-56" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 239 100" fill="none">
                           <rect x="1.5" y="1.5" width="236" height="97" rx="48.5" fill="#D9D9D9" stroke="black" strokeWidth="3" />
                           <path d="M118.459 27.126L119 23.597L119.541 27.126C120.968 36.4306 127.773 43.7909 136.539 45.3418L140.26 46L136.539 46.6582C127.773 48.2091 120.968 55.5694 119.541 64.874L119 68.403L118.459 64.874C117.032 55.5694 110.227 48.2091 101.461 46.6582L97.7402 46L101.461 45.3418C110.227 43.7909 117.032 36.4306 118.459 27.126Z" fill="#FAFF00" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                        <Paragraph size={"sm"} className="md:w-64">Nux Design creates distinctive brands, gorgeous websites, and campaigns that deviate from the ordinary.</Paragraph>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>
      </>
   )
}

export default Hero;