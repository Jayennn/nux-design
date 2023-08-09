import About from "./components/About.section"
import Banner from "./components/Banner.section"
import Client from "./components/Client.section"
import Footer from "./layouts/Footer"
import Hero from "./components/Hero.section"
import JoinUs from "./components/JoinUs.section"
import Navbar from "./layouts/Navbar"
import Project from "./components/Project.section"
import Service from "./components/Service.section"
import Testimonials from "./components/Testimonials.section"

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Banner />
        <Service />
        <Project />
        <Client />
        <About />
        <Testimonials />
        <JoinUs/>
      </main>
      <Footer/>
    </>
  )
}

export default App
