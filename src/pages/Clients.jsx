import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import ClientsImg1 from '../assets/client-1.png';
import ClientsImg2 from '../assets/client-2.png';
import ClientsImg3 from '../assets/client-3.png';
import ClientsImg4 from '../assets/client-4.png';
import ClientsImg5 from '../assets/client-5.png';

function Clients() {
  const Clients = [
    { id: '1', ImgUrl: ClientsImg1 },
    { id: '2', ImgUrl: ClientsImg2 },
    { id: '3', ImgUrl: ClientsImg3 },
    { id: '4', ImgUrl: ClientsImg4 },
    { id: '5', ImgUrl: ClientsImg5 },
  ];

  return (
    <div className="bg-[var(--primary-background)] text-[var(--text-primary)] pt-20 pb-8">
      <div className="max-w-8xl mx-auto">
        <div className='grid grid-rows-1 grid-cols-3 lg:grid-cols-5 place-items-center'>
          {Clients.map((client) => (
            <div key={client.id} className=' cursor-pointer transition duration-200 hover:scale-[1.1] grayscale hover:grayscale-0'>
              <img
                src={client.ImgUrl}
                alt="Client Logo"
                className="max-w-[100px] "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
