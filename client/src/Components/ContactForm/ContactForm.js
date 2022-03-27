import React from 'react'
import style from './ContactForm.module.css'
import Button from "../Button/Button";

const ContactForm = () => {

    return (
        <div className={`container ${style.ContactForm}`}>
            <form action="#">
                <input type="text" placeholder={'Enter your name'} className={`${style.ContactForm_inp1}`}/>
                <input type="text" placeholder={'Enter your email'} />
                <input type="text" placeholder={'Enter your message'} className={`${style.ContactForm_inp3}`}/>
                <Button description={'Send message'}/>
            </form>
        </div>
    )
}

export default ContactForm;