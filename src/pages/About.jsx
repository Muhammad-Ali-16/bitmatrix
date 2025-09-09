import mainImg from '../assets/features-img.png'
import Products from '../assets/products.png'
import Experience from '../assets/experience.png'
import Approach from '../assets/approach.png'
import Pricing from '../assets/pricing.png'
import Delivery from '../assets/delivery.png'
import Support from '../assets/support.png'

function ContentBlock({ heading, imgUrl, direction }) {
  return (
      <div className={`m-2 xl:m-4 flex flex-row pb-4 items-center ${'left' ? "justify-end" : "justify-start"}`}>
        {direction === 'left' && (
          <img src={imgUrl} alt="Products Icon" className='w-14 lg:w-16 xl:w-20 cursor-pointer transition duration-200 transform hover:scale-[1.1] mr-4' />
        )}

        <div>
          <h3 className='text-lg lg:text-xl xl:text-2xl leading-10'>{heading}</h3>
          <p className='text-[var(--text-light)] text-[8px] lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptas quia cum fugiat laudantium dolorem</p >
        </div>

        {direction === 'right' && (
          <img src={imgUrl} alt={`${imgUrl} Icon`} className='w-14 lg:w-16 xl:w-20 cursor-pointer transition duration-200 transform hover:scale-[1.1] ml-4' />
        )}
      </div>
  )
}

function About() {

  const ContentsLeft = [
    { Id: '1', Heading: "Experience", ImgUrl: Experience },
    { Id: '2', Heading: "Products", ImgUrl: Products },
    { Id: '3', Heading: "Approach", ImgUrl: Approach }
  ]

  const ContentsRight = [
    { Id: '1', Heading: "Pricing", ImgUrl: Pricing },
    { Id: '2', Heading: "Delivery", ImgUrl: Delivery },
    { Id: '3', Heading: "Support", ImgUrl: Support }
  ]

  return (
    <div className="bg-[var(--primary-background)] text-[var(--text-primary)] pt-20 pb-8">
      <div className="max-w-8xl">
        <div className="grid grid-rows-1 grid-cols-1 xl:grid-cols-3 gap-10">
       
          <div className="text-end">
            {ContentsLeft.map(item => (
              <ContentBlock key={item.Id} heading={item.Heading} imgUrl={item.ImgUrl} direction="right"/>
            ))}
          </div>

          <div className="mx-auto">
            <img src={mainImg} alt="Our Features Img" className='transform transition duration-200 hover:scale-[1.05]' />
          </div>

          <div className="text-start">
            {ContentsRight.map(item => (
              <ContentBlock key={item.Id} heading={item.Heading} imgUrl={item.ImgUrl} direction="left" />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
