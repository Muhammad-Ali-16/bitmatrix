import { useState } from "react";
import PortfolioImg1 from '../assets/portfolio-1.jpg'
import PortfolioImg2 from '../assets/portfolio-2.jpg'
import PortfolioImg3 from '../assets/portfolio-3.jpg'
import PortfolioImg4 from '../assets/portfolio-4.jpg'
import PortfolioImg5 from '../assets/portfolio-5.jpg'
import PortfolioImg6 from '../assets/portfolio-6.jpg'

function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { id: "All", label: "All" },
    { id: "Designing", label: "Designing" },
    { id: "Development", label: "Development" },
    { id: "Branding", label: "Branding" },
    { id: "Solutions", label: "IT Solutions" }
  ];

  const galleryItems = {
    All: [PortfolioImg1, PortfolioImg2, PortfolioImg3, PortfolioImg4, PortfolioImg5, PortfolioImg6],
    Designing: [PortfolioImg1, PortfolioImg5],
    Development: [PortfolioImg2],
    Branding: [PortfolioImg3, PortfolioImg6],
    Solutions: [PortfolioImg4]
  }

  return (
    <div className="bg-[var(--primary-background)] text-[var(--text-primary)] pt-20 pb-8">
      <div className="max-w-8xl">
        <div className="flex flex-wrap justify-center items-center mb-10">
          {tabs.map((tab) => (
            <button className="bg-[var(--text-secondary)] text-white mx-5 cursor-pointer px-4 lg:px-6 py-3 lg:py-4 rounded-full my-2 text-[8px] lg:text-sm" key={tab.id} onClick={() => { setActiveTab(tab.id) }}>{tab.label}</button>
          ))}
        </div>

        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {galleryItems[activeTab].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img src={img} alt={`${activeTab} Img`}  className="transition duration-300 hover:scale-[1.1]"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
