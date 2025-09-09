
function Pricing() {

  const Cards = [
    { id: 'Basic', label: 'Basic', price: '25' },
    { id: 'Standard', label: 'Standard', price: '50' },
    { id: 'Premium', label: 'Premium', price: '100' }
  ]

  const CardServices = {
    Basic: ['Unlimited GB Space', '10 Domain Names', 'Free SSL', ' Monthly Backup', 'Free Templates', ' Free Email', '5 Databases', ' Unlimited Email Address', 'Live Support'],
    Standard: ['Unlimited GB Space', '20 Domain Names', 'Free SSL', ' Weekly Backup', 'Free Templates', ' Free Email', '15 Databases', ' Unlimited Email Address', 'Live Support'],
    Premium: ['Unlimited GB Space', '30 Domain Names', 'Free SSL', ' Daily Backup', 'Free Templates', ' Free Email', '30 Databases', ' Unlimited Email Address', 'Live Support']
  }

  return (
    <div className="bg-[var(--primary-background)] text-[var(--text-primary)] pt-20 pb-8">
      <div className="max-w-8xl">
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-lg:place-items-center text-center">

          {Cards.map((card) => (
            <div key={card.id} className="services-card relative bg-[var(--primary-background)] max-w-[350px] px-16 lg:px-0 rounded-xl shadow-[0_0_10px_var(--card-shadow)] cursor-pointer transition duration-300 hover:scale-[1.05]">
              <div className="m-4">
                <h3 className="text-[var(--text-secondary)] text-md lg:text-2xl">{card.label}</h3>
                <h2 className="text-lg lg:text-2xl xl:text-4xl my-2 lg:my-3 xl:my-5">
                  <sup>$</sup>{card.price}
                </h2>
                <div>
                  {CardServices[card.id].map((service, index) => (
                    <p key={index} className="text-[var(--text-light)] text-xs lg:text-lg leading-8 lg:leading-12">
                      <i className="bi bi-check-circle"></i> {service}
                    </p>
                  ))}
                </div>
                <a href='/'><button className="text-white cursor-pointer bg-[var(--text-secondary)] mt-6 my-4 px-6 py-3 lg:px-7 lg:py-4 rounded-full text-[8px] lg:text-lg tracking-wide">Subscribe Now!</button></a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div >
  )
}

export default Pricing
