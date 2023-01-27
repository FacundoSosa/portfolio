import React from 'react'

function Contact() {
  return (
    <section className='center-container d-flex flex-column align-items-center fs-3 fw-light'>
        <span>facundososa676@gmail.com</span>
        <ul className='d-flex ps-0 m-0'>
          <li className='list-group-item m-3'><a className='text-decoration-none text-black fs-2' href="https://www.linkedin.com/in/facundososa676/" target='_blank' rel='noreferrer'>LINKEDIN</a></li>
          <li className='list-group-item m-3'><a className='text-decoration-none text-black fs-2' href="https://www.facebook.com/profile.php?id=100086093425316" target='_blank' rel='noreferrer'>FACEBOOK</a></li>
        </ul>
    </section>
  )
}

export default Contact