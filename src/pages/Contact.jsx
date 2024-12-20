import React, { Suspense, useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import Loader from '../components/Loader';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isloading, setIsloading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const handleChange = (e) => { 
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleFocus = (e) => setCurrentAnimation('walk');
  const handleBlur = (e) => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsloading(true)
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Sasa',
        from_email: form.email,
        to_email: 'sasaxp@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
        setIsloading(false)
        //TODO: Show success message
        //TODO: Hide an alert
        setTimeout(() => {
          setCurrentAnimation('idle')
          setForm({name: '', email: '', message: ''})
        },[3000])
        setForm({name: '', email: '', message: ''})
    }).catch((error) => {
      setIsloading(false)
      setCurrentAnimation('idle')
      console.log(error.text)
      //TODO: Show error message
    }) 
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        
        <form 
          className='w-full flex flex-col gap-7 mt-12'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type="text"
              name='name'
              className='input'
              placeholder='John Doe'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type="email"
              name='email'
              className='input'
              placeholder='johndoe@.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
              
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how can I help you'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isloading}
          >
            {isloading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000


          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation} 
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>

        </Canvas>
        
      </div>
    </section>
  )
}

export default Contact