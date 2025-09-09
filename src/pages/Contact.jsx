import React from 'react'

function Contact() {
    return (
        <div className="bg-[var(--primary-background)] text-[var(--text-primary)] py-8">
            <div className="max-w-8xl mx-auto">
                <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-12'>

                    <div className='text-start place-self-start mx-0 lg:mx-20 mt-0 lg:mt-5'>
                        <div>
                            <h4 className='text-[var(--text-secondary)] text-xl mb-2 mt-5'>Address:</h4>
                            <p className='text-[var(--text-light)]'>06 South Town <br />PBo 2806, Germany</p>
                        </div>
                        <div>
                            <h4 className='text-[var(--text-secondary)] text-xl mb-2 mt-5'>Phone:</h4>
                            <p className='text-[var(--text-light)]'>+49 3232 56 719 <br />+49 1234 56 780</p>
                        </div>
                        <div>
                            <h4 className='text-[var(--text-secondary)] text-xl mb-2 mt-5'>Email:</h4>
                            <p className='text-[var(--text-light)]'>info@example.com <br />email@example.com</p>
                        </div>
                    </div>

                    <form className='w-full col-span-2'>
                        <div className="space-y-12">

                            <div className="mt-10 grid grid-rows-1 grid-cols-2 gap-x-6 gap-y-8">

                                <div className="col-span-full lg:col-span-1">
                                    <div className="mt-1">
                                        <input required placeholder='Name' id="name" type="text" name="name" autoComplete="name" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#cb954575] sm:text-sm/6" />
                                    </div>
                                </div>

                                <div className="col-span-full lg:col-span-1">
                                    <div className="mt-1">
                                        <input required placeholder='Email' id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#cb954575] sm:text-sm/6" />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div className="mt-1">
                                        <input required placeholder='Subject' id="subject" type="text" name="subject" autoComplete="subject" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#cb954575] sm:text-sm/6" />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div className="mt-1">
                                        <textarea id="message" required placeholder='Write Your Message' name="message" rows="3" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#cb954575] sm:text-sm/6"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-start gap-x-6">
                            <button className="text-white cursor-pointer bg-[var(--text-secondary)] mt-6 my-4 px-6 py-3 lg:px-7 lg:py-4 rounded-full text-[8px] lg:text-lg tracking-wide">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
