import eye from "../assets/eye.png"

const JoinUs = () => {
   return (
      <section className="py-28">
         <div className="container mx-auto">
            <div className="text-5xl md:text-7xl lg:text-9xl text-center font-bold tracking-tight uppercase">
               Let's
               <img className="max-w-[8rem] md:max-w-[10rem] lg:max-w-[14rem] px-2 inline-block align-baseline" src={eye} alt="eye" />
               Works
               Together <br />
               Let’s Creative.
            </div>
            <div className="mt-14 flex items-center justify-center gap-4">
               <button type="button" className="bg-[#050505] rounded-[2rem] px-4 py-2 md:px-6 md:py-4 text-base text-[#FFFFFF] font-medium">Start With Us</button>
               <button type="button" className="bg-[#FFFFFF] border border-[#050505] rounded-[2rem] px-4 py-2 md:px-6 md:py-4 text-base text-[#050505] font-medium">Consult with team</button>
            </div>
         </div>
      </section>
   )
}

export default JoinUs;