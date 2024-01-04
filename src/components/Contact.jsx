import React from 'react'
import { FaInstagram,FaFacebookF,FaWhatsapp, FaTelegramPlane, } from 'react-icons/fa'
export default function Contact() {
  return (
    <div  className='contacts'>
        <div><FaWhatsapp style={{color:'green'}} className='socialfa'/>WhatsApp</div>
        <div><FaFacebookF style={{color:'rgb(22, 9, 202)'}} className='socialfa'/>Facebook</div>
        <div><FaInstagram style={{color:'rgb(236, 98, 0)'}} className='socialfa'/> Instagram</div>
        <div><FaTelegramPlane style={{color:'rgb(11, 97, 188)'}} className='socialfa'/> Telegram</div>
    </div>
  )
}
