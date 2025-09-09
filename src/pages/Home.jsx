import About from "./About"
import Blog from "./Blog"
import Clients from "./Clients"
import Contact from "./Contact"
import DisscussProjects from "./DisscussProjects"
import FAQs from "./FAQs"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Pricing from "./Pricing"
import Services from "./Services"
import Teams from "./Teams"
import Testimonials from "./Testimonials"

function SectionHeading({ heading, background }) {
  return (
    <div className={`flex flex-col items-center bg-[var(${background})] pt-10 xl:pt-20`}>
      <h2 className="text-[var(--text-secondary)] text-3xl lg:text-4xl font-semibold tracking-wide">{heading}</h2>
      <p className="text-[#b8651d] text-sm lg:text-md font-semibold my-2">Lorem ipsum dolor sit amet</p>
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <section className="services_main"> <SectionHeading background={'--primary-background'} heading={'Services We Offer'} /> <Services /></section>
      <section className="about_main"> <SectionHeading background={'--primary-background'} heading={'Why Choose Us'} /> <About /></section>
      <section className="portfolio_main"> <SectionHeading background={'--primary-background'} heading={'Our Portfolio'} /> <Portfolio /></section>
      <section className="pakages_main"> <SectionHeading background={'--primary-background'} heading={'Pricing Plans'} /> <Pricing /></section>
      <section className="testimonials_main"> <SectionHeading background={'--primary-background'} heading={'Testimonials'} /> <Testimonials /></section>
      <section className="our_cients_main"> <Clients /></section>
      <section className="teams_main"> <SectionHeading background={'--secondary-background'} heading={'Our Team'} /> <Teams /></section>
      <section className="faqs_main"> <SectionHeading background={'--primary-background'} heading={`FAQ's`} /> <FAQs /></section>
      <section> <DisscussProjects /></section>
      <section className="blog_main"> <SectionHeading background={'--secondary-background'} heading={'Our Blog'} /> <Blog /></section>
      <section className="contact_main"> <SectionHeading background={'--primary-background'} heading={`Contact Us`} /> <Contact /></section> 
    </>
  )
}

export default Home
