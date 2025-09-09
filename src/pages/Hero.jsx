function Hero() {
  return (
    <section className="h-[100vh] bg-[var(--bg-tranparent)] flex flex-col items-center justify-center text-white relative">
      <div className="xl:grid grid-rows-1 grid-cols-2">
        <div></div>
        <div className="max-w-8xl text-center lg:text-start">
          <h2 className="text-3xl lg:text-5xl font-semibold my-3">Delivering Superior Services  <br /> <span className="text-[var(--text-secondary)]"> IT Solutions.</span></h2>
          <p className="text-sm lg:text-lg leading-7">You can easily change any design to your own. It is also highly customizable SEO friendly template.</p>
          <div className="mt-10 flex justify-center lg:justify-start space-x-7 text-xl text-[var(--text-secondary)] cursor-pointer">
            <a href="/"><i className="bi bi-twitter-x"></i></a>
            <a href="/"><i className="bi bi-facebook"></i></a>
            <a href="/"><i className="bi bi-linkedin"></i></a>
            <a href="/"><i className="bi bi-instagram"></i></a>
          </div>
          <div className="mt-7">
            <a href="/"><button className="cursor-pointer bg-[var(--text-secondary)] mr-5 my-4 px-6 py-3 lg:px-7 lg:py-4 rounded-full text-[8px] lg:text-lg tracking-wide">Get Quotes</button></a>
            <a href="/"><button className="cursor-pointer bg-[var(--text-secondary)] mr-5 my-4 px-6 py-3 lg:px-7 lg:py-4 rounded-full text-[8px] lg:text-lg tracking-wide">Get Started</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
