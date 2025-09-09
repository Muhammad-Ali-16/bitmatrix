import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Teams from './pages/Teams'
import FAQs from './pages/FAQs'
import Blog from './pages/Blog'
import PageHero from "./pages/PageHero";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
    <>
      <div className="main_bg_img"></div>
      <BrowserRouter className="overflow-x-hidden">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/services" element={<><PageHero title="Our Services" /> <Services /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/portfolio" element={<><PageHero title="Our Portfolio" /> <Portfolio /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/testimonials" element={<><PageHero title="Our Testimonials" /> <Testimonials /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/teams" element={<><PageHero title="Our Team" /> <Teams /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/faqs" element={<><PageHero title="FAQs" /> <FAQs /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/blog" element={<><PageHero title="Our Blog" /> <Blog /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/about" element={<><PageHero title="About Us" /> <About /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/pricing" element={<><PageHero title="Our Pakages" /> <Pricing /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/termsconditions" element={<><PageHero title="Terms & Conditions" /> <TermsConditions /></>} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/privacypolicy" element={<><PageHero title="Privacy Policy" /> <PrivacyPolicy /></>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


