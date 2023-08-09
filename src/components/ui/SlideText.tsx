import Paragraph from "./Paraghraph";
import { Ellipse } from "../icons/ellipse";
import ParallaxText from "./ParallaxText";

const BANNER_DUMMY = [
   'uiux design',
   'webflow',
   'user research',
   'illustration',
   'digital marketing',
   'branding'
]

const SlideText = () => {
   return (
      <div className="bg-[#050505] overflow-hidden whitespace-nowrap py-2">
         <ParallaxText baseVelocity={-5}>
            {BANNER_DUMMY.map((title) => (
               <div key={title}
                  className="inline-flex items-center gap-2 ml-2">
                  <Paragraph className="text-[#FFFFFF] text-2xl md:text-3xl tracking-tight uppercase " key={title}>
                     {title}
                  </Paragraph>
                  <Ellipse />
               </div>
            ))}
         </ParallaxText>
      </div>
   )
}

export default SlideText;