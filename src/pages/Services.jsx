import AppDesign from '../assets/app_design.png'
import Hosting from '../assets/web_hosting.png'
import Cloud from '../assets/cloud_server.png'
import Security from '../assets/data_security.png'
import SEO from '../assets/seo.png'
import Media from '../assets/social_media.png'

function Services() {

  const ServicesCards = [
    { Id: '1', ImgUrl: AppDesign, Heading: 'Application Design' },
    { Id: '2', ImgUrl: Hosting, Heading: 'Web Hosting' },
    { Id: '3', ImgUrl: Media, Heading: 'Social Media' },
    { Id: '4', ImgUrl: SEO, Heading: 'SEO Optimization' },
    { Id: '5', ImgUrl: Cloud, Heading: 'Cloud Server' },
    { Id: '6', ImgUrl: Security, Heading: 'Data Security' }
  ]

  return (
    <div className="bg-[var(--primary-background)] text-[var(--text-primary)] py-20 flex justify-center items-center">
      <div className="max-w-8xl grid grid-rows-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">


        {ServicesCards.map((ServicesCard) => (
          <div className='services-card relative bg-[var(--primary-background)] max-w-[350px] rounded-xl shadow-[0_0_10px_var(--card-shadow)] cursor-pointer transition duration-300 transform scale-[1] hover:scale-[1.04]' key={ServicesCard.Id}>
            <div className='my-8 mx-2 flex flex-col justify-center items-center text-center'>
              <img src={ServicesCard.ImgUrl} alt={`${ServicesCard.Heading} Icon`} className='h-20 w-20 lg:h-22 lg:w-22 xl:h-24 xl:w-24' />
              <h3 className='text-[var(--text-secondary)] text-xl lg:text-2xl font-semibold my-4'>{ServicesCard.Heading}</h3>
              <p className='text-[var(--text-light)] text-md max-lg:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem nulla eos laudantium.</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Services
