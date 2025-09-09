import TeamImg1 from '../assets/team-1.jpg'
import TeamImg2 from '../assets/team-2.jpg'
import TeamImg3 from '../assets/team-3.jpg'
import TeamImg4 from '../assets/team-4.jpg'

function Teams() {

  const Members = [
    { id: '1', ImgUrl: TeamImg1, Name: 'Tyler-James', Work: 'Website Manager' },
    { id: '2', ImgUrl: TeamImg2, Name: 'Lily', Work: 'Application Manager' },
    { id: '3', ImgUrl: TeamImg3, Name: 'Jhon', Work: 'Content Writer' },
    { id: '4', ImgUrl: TeamImg4, Name: 'Anika', Work: 'Social Media' }
  ]
  return (
    <div className="bg-[var(--secondary-background)] text-[var(--text-primary)] pt-20 pb-8">
      <div className="max-w-8xl mx-auto">
        <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 place-items-center gap-12'>

          {Members.map((member) => (
            <div className='text-center' key={member.id}>
              <img src={member.ImgUrl} alt="Our Team" className='min-w-[200px] rounded-xl cursor-pointer transition duration-250 hover:scale-[1.03]' />
              <h2 className='text-2xl text-[var(--text-secondary)] mt-4'>{member.Name}</h2>
              <h5 className='text-lg font-light tracking-wider text-[var(--text-light)] italic'>{member.Work}</h5>
              <div className='text-[var(--text-secondary)] text-md mt-5 flex flex-row space-x-5 justify-center'>
                <a href="?">
                  <div className='border-[2px] border-[#c0bdbd] hover:border-[var(--text-secondary)] transition duration-200 w-10 h-10 rounded-full flex justify-center items-center'>
                    <i className='bi bi-twitter-x'></i>
                  </div>
                </a>
                <a href="?">
                  <div className='border-[2px] border-[#c0bdbd] hover:border-[var(--text-secondary)] transition duration-200 w-10 h-10 rounded-full flex justify-center items-center'>
                    <i className='bi bi-instagram'></i>
                  </div>
                </a>
                <a href="?">
                  <div className='border-[2px] border-[#c0bdbd] hover:border-[var(--text-secondary)] transition duration-200 w-10 h-10 rounded-full flex justify-center items-center'>
                    <i className='bi bi-facebook'></i>
                  </div>
                </a>
                <a href="?">
                  <div className='border-[2px] border-[#c0bdbd] hover:border-[var(--text-secondary)] transition duration-200 w-10 h-10 rounded-full flex justify-center items-center'>
                    <i className='bi bi-linkedin'></i>
                  </div>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Teams
