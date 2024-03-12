'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();

  const formData = form.current;

  if (formData) {
    emailjs
      .sendForm('service_txa5023', 'template_qxc2s4r', formData, 'Q7Vz_gU8VJubM8CyQ')
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );
  } else {
    console.error('Form ref is null.');
  }
};


  return (
    <section className="bg-gray-50 custom-hidden" id="Contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md h-full pb-40">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">Contact</h2>
          <p className="mt-2 mb-10 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font__poppins">
            Have any questions or suggestions? Let us know!
          </p>
        </div>
        <form ref={form} action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black" id="user_email">Your email</label>
            <input type="email" id="email" name="user_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="example@gmail.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black" id="user_subject">Subject</label>
            <input type="text" id="subject" name="user_subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Let us know how we can help you." required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black" id="message">Your message</label>
            <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." />
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 button--primary duration-200" onClick={sendEmail}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
