import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o954fyk', 'template_3gr6t4w', form.current, 'zuFi_PC7nsa6sJKJB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
       
    return (
        <div id='contact'>
            <div className='mt-20'>
            <div className='w-full min-h-screen flex justify-center items-center p-4'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline'>Contact me</p>
                    </div>
                    <input className='my-4 p-2' type="text" placeholder='Name' name='from_name' />
                    <input className='my-4 p-2' type="email" placeholder='Email' name='from_email' />
                    <textarea className='my-4 p-2' name="message" id="" rows="10" placeholder='Type your message here'></textarea>
                    <button className='border-2 rounded bg-blue-950 hover:bg-blue-900 text-white px-4 py-3 my-8 mx-auto flex items-center'>SEND</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;