import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import TestimonialsImg1 from '../assets/testimonials_1.jpg'
import TestimonialsImg2 from '../assets/testimonials_2.jpg'
import TestimonialsImg3 from '../assets/testimonials_3.jpg'
import TestimonialsImg4 from '../assets/testimonials_4.jpg'
import TestimonialsImg5 from '../assets/testimonials_5.jpg'

function Testimonials() {
  const Testimonials = [
    { id: '1', Name: 'James Oliver', Profession: 'Data Analyst', ImgUrl: TestimonialsImg1 },
    { id: '2', Name: 'Lucy Rose', Profession: 'CEO', ImgUrl: TestimonialsImg2 },
    { id: '3', Name: 'Emma Watson', Profession: 'Freelancer', ImgUrl: TestimonialsImg3 },
    { id: '4', Name: 'Olivia Jane', Profession: 'Web Designer', ImgUrl: TestimonialsImg4 },
    { id: '5', Name: 'Henry Thomas', Profession: 'HR Manager', ImgUrl: TestimonialsImg5 }
  ]

  return (
    <div className="bg-[var(--primary-background)] text-[var(--text-primary)] pt-20 pb-8">
      <div className="max-w-8xl">

        <Swiper className='testimonials-swiper'
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2700,
            disableOnInteraction: false,
          }}
          breakpoints={{
            956: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false
            },
            576: {
              slidesPerView: "auto",
              spaceBetween: 10,
              centeredSlides: true
            },

            1: {
              slidesPerView: "auto",
              spaceBetween: 10,
              centeredSlides: true
            }
          }}
          modules={[ Autoplay ]} style={{ padding: 12 }}>

          {Testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className='max-w-[380px] mx-auto bg-[var(--primary-background)] shadow-[0_0_10px_var(--card-shadow)] rounded-lg select-none'>
                <div className='p-5 lg:p-8'>
                  <div className='flex flex-row items-center space-x-5 mb-5'>
                    <img src={testimonial.ImgUrl} className='rounded-full duration-300 hover:scale-[1.05] w-22 lg:w-28 cursor-pointer' alt={testimonial.Profession} />
                    <div>
                      <h3 className='text-[var(--text-secondary)] text-lg lg:text-xl font-semibold'>{testimonial.Name}</h3>
                      <h6 className='text-[#999999] font-semibold text-md lg:text-lg'>{testimonial.Profession}</h6>
                      <div className='flex space-x-1 text-[var(--text-secondary)] mt-2 text-sm lg:text-md'>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='text-[var(--text-light)] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa facere asperiores enim veritatis voluptatum aperiam voluptates.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
