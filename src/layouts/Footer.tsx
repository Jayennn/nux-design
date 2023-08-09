import footerAsset from "../assets/footerAsset.png"
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paraghraph";

const Footer = () => {
   return (
      <section className="py-28">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center md:justify-center lg:justify-between">
               <div className="flex flex-col md:items-center md:flex-row gap-6">
                  <img className="max-w-[13rem]" src={footerAsset} alt="footer-img" />
                  <Heading size={"h2"} className="text-4xl lg:text-5xl max-w-[27.6875rem] md:leading-[3.3rem]">
                     Would you like to work with us? Let's! work together
                  </Heading>
               </div>
               <div className="mt-8 lg:mt-0 flex md:items-center md:justify-center gap-12 sm:w-full lg:max-w-md md:h-52 ">
                  <div className="flex flex-col lg:max-w-xs justify-between">
                     <Paragraph size={"default"}>
                        4517 Washington Ave. <br />
                        Manchester, Kentucky 39495
                     </Paragraph>
                     <ul>
                        <li className="text-lg font-medium">+62 824 - 2637 - 8823</li>
                        <li className="text-lg font-medium">+62 813 - 3445 - 9349</li>
                     </ul>
                     <Paragraph size={"default"}>
                        Nuxstudio@design.io
                     </Paragraph>
                  </div>
                  <ul className="flex flex-col justify-between">
                     <li className="text-lg font-medium">Dribble</li>
                     <li className="text-lg font-medium">Behance</li>
                     <li className="text-lg font-medium">Linkedln</li>
                     <li className="text-lg font-medium">Instagram</li>
                     <li className="text-lg font-medium">Facebook</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Footer;