import Paragraph from "../components/ui/Paraghraph"
import { DribbleIcon } from "../components/icons/dribble"
import { InstagramIcon } from "../components/icons/instagram"
import { MediumIcon } from "../components/icons/medium"

const LINK_LEFT = [
   'Home',
   'Services',
   'Project'
]

const LINK_RIGHT = [
   'Testimonials',
   'Blog',
   'Contact'
]


const Navbar = () => {
   return (
      <>
         <nav className="fixed top-0 left-0 z-10 w-full h-16 flex items-center bg-[#FDF3F3] shadow-md">
            <div className="container mx-auto px-4 w-full flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <button aria-label="social-media" type="button" className="bg-[#050505] p-2 grid place-content-center rounded-[20px]">
                     <InstagramIcon/>
                  </button>
                  <button aria-label="social-media" type="button" className="bg-[#050505] p-2 grid place-content-center rounded-[20px]">
                     <DribbleIcon />
                  </button>
                  <button aria-label="social-media" type="button" className="bg-[#050505] p-2 grid place-content-center rounded-[20px]">
                     <MediumIcon />
                  </button>
               </div>
               <ul className="hidden lg:flex gap-5 items-center justify-around">
                  {LINK_LEFT.map((link) => (
                     <li className="font-medium text-base" key={link}>
                        {link}
                     </li>
                  ))}
                  <li className="mx-10">
                     <Paragraph className="text-xl uppercase font-semibold">
                        nuxdsgn.
                     </Paragraph>
                  </li>
                  {LINK_RIGHT.map((link) => (
                     <li className="font-medium text-base" key={link}>
                        {link}
                     </li>
                  ))}
               </ul>
               <Paragraph className="block lg:hidden text-xl uppercase font-semibold">
                  nuxdsgn.
               </Paragraph>
               <button type="button" className="hidden lg:grid place-content-center bg-[#050505] px-[24px] py-[12px] rounded-[32px]">
                  <Paragraph className="text-[#FFFFFF] font-medium" size={"sm"}>Collaborate?</Paragraph>
               </button>
            </div>
         </nav>
      </>
   )
}

export default Navbar