import { Link } from "react-router-dom";
import BlogImg1 from '../assets/blog-1.jpg'
import BlogImg2 from '../assets/blog-2.jpg'
import BlogImg3 from '../assets/blog-3.jpg'

function Blog() {

  const BlogCards = [
    { id: '1', ImgUrl: BlogImg1, Heading: 'Domain & Hosting', LinkText: 'How to host website on any hosting provider?', Link: '/', Name: 'Robort', Time: 'June 28, 2023' },
    { id: '2', ImgUrl: BlogImg2, Heading: 'Advertisement', LinkText: 'How to create add on Google addwords?', Link: '/', Name: 'Lilly', Time: 'Dec 18, 2022' },
    { id: '3', ImgUrl: BlogImg3, Heading: 'Marketing', LinkText: 'What is digital marketing and why is important?', Link: '/', Name: 'James', Time: 'Jan 8, 2025' }

  ]

  return (
    <div className="bg-[var(--secondary-background)] text-[var(--text-primary)] pt-10 pb-8">
      <div className="max-w-8xl mx-auto">
        <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-12'>

          {BlogCards.map((blogcard) => (
            <div className="bg-[var(--primary-background)] shadow-[0_0_10px_var(--card-shadow)] rounded-lg max-w-[300px] overflow-hidden" key={blogcard.id}>
              <img src={blogcard.ImgUrl} alt={blogcard.Heading} className="rounded-lg transition duration-200 cursor-pointer hover:scale-[1.04] " />
              <div className="m-6 overflow-hidden">
                <h5 className="text-[var(--text-light)] text-lg my-2">{blogcard.Heading}</h5>
                <Link to={blogcard.Link}><h2 className="text-xl text-[var(--text-secondary)] font-semibold hover:underline mb-5">{blogcard.LinkText}</h2></Link>
                <p className="text-sm">{blogcard.Name}</p>
                <h5>{blogcard.Time}</h5>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Blog
