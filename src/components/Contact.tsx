
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-6'>
                <h2 data-aos="zoom-in-up" className='text-5xl'>Get in touch</h2>
                <p data-aos="zoom-in-up" className='text-gray-600 text-[18px] pt-2'>
                    Drop me a line, give me a call, or send me a message by submitting the form
                </p>
                 <div className='flex gap-3 items-center 'data-aos="zoom-in-up">
                    <AiOutlineMail size={30}/> sania.naz987@gmail.com
                 </div>

                 <div className='flex gap-3 items-center 'data-aos="zoom-in-up">
                    <BsTelephone size={30}/> (0342-2857075)
                 </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-[40px] bg-transparent border border-red-600' id = "name" />

                <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='h-[40px] bg-transparent border border-red-600' id = "email" />
                </div>
                <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea className=' bg-transparent border border-red-600' id = "msg" ></textarea>
                </div>
                
                <button className='bg-red-600 p-2 px-6'data-aos="zoom-in-up">Send</button>
            </div> 
            </div>
        </div>
        </div>
        </div>
        </div>
    
  )
}

export default Contact
