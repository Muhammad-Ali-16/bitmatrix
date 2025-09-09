import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

function Footer() {

  const ServicesLinks = [
    { id: '1', heading: 'Web Design', Url: '/services' },
    { id: '2', heading: 'App Development', Url: '/services' },
    { id: '3', heading: 'Cloud Server', Url: '/services' },
    { id: '4', heading: 'Domain & Hosting', Url: '/services' },
    { id: '5', heading: 'SEO Optimization', Url: '/services' },
    { id: '6', heading: 'Social Media', Url: '/services' }
  ]

  const InformationLinks = [
    { id: '1', heading: 'About', link: '/about' },
    { id: '2', heading: 'Pricing', link: '/pricing' },
    { id: '3', heading: 'Team', link: '/teams' },
    { id: '4', heading: 'Portfolio', link: '/portfolio' },
    { id: '5', heading: 'FAQs', link: '/faqs' },
    { id: '6', heading: 'Blog', link: '/blog' },
    { id: '7', heading: 'Tearms & Condition', link: '/termsconditions' },
    { id: '8', heading: 'Privacy Policy', link: '/privacypolicy' }

  ]

  return (
    <div className='h-auto w-full bg-[var(--bg-tranparent)] py-10 after:content-[] after:absolute after:w-[100%] after:h-[-webkit-fill-available] after:mt-10 after:bg-[var(--bg-tranparent)]'>
      <div className="max-w-8xl">
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 text-amber-50">

          <div className="footer_col_logo text-[#eee]">
            <Link to="/"><img src={logo} alt="logo" className="w-[180px] my-5" /></Link>
            <p className="text-xs leading-6">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor
              incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
            <h5 className="my-4 text-xl text-[var(--text-secondary)] font-semibold">Follow Us</h5>
            <div className="footer-social-icons flex space-x-6">
              <Link to="/"><i className="transition duration-150 hover:text-[var(--text-secondary)] bi bi-twitter"></i></Link>
              <Link to="/"><i className="transition duration-150 hover:text-[var(--text-secondary)] bi bi-facebook"></i></Link>
              <Link to="/"><i className="transition duration-150 hover:text-[var(--text-secondary)] bi bi-instagram"></i></Link>
              <Link to="/"><i className="transition duration-150 hover:text-[var(--text-secondary)] bi bi-linkedin"></i></Link>
            </div>
          </div>

          <div className={`footer_col_services flex flex-col mx-2 leading-7 text-sm`}>
            <h5 className='text-xl text-[var(--text-secondary)] font-semibold my-2'>Services</h5>
            {ServicesLinks.map((ServicesLink) => (
              <div className="hover:text-[var(--text-secondary)]" key={ServicesLink.id}>
                <Link to={ServicesLink.Url}>{ServicesLink.heading}</Link></div>
            ))}
          </div >

          <div className={`footer_col_information flex flex-col mx-2 leading-7 text-sm`}>
            <h5 className="text-xl text-[var(--text-secondary)] font-semibold my-2">Information</h5>
            {InformationLinks.map((InformationLink) => (
              <div className="hover:text-[var(--text-secondary)]" key={InformationLink.id}>
                <Link to={InformationLink.link}>{InformationLink.heading}</Link></div>
            ))}
          </div>

          <div className="footer_col_contacts flex flex-col mx-2 leading-7 text-sm">
            <h5 className="text-xl text-[var(--text-secondary)] font-semibold my-2">Contacts</h5>
            <p className=""><i className="me-2 bi bi-geo-alt-fill"></i>101 West Town , PBO 12345, United States</p>
            <p className=""><i className="me-2 bi bi-telephone-fill"></i>+1 1234 56 789</p>
            <p className=""><i className="me-2 bi bi-envelope-fill"></i>contact@example.com</p>
            <h5 className="text-xl text-[var(--text-secondary)] font-semibold my-2">News Letter</h5>
            <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
          </div>

        </div >
        <div className="text-center text-[var(--text-primary)] mt-8 text-lg">Designed By <a href="https://github.com/Muhammad-Ali-16" className="underline text-[var(--text-secondary)]" target='_blank'>Ali Raza</a></div>
      </div >
    </div >
  )
}

export default Footer
