import React from 'react'
import style from './ContactForm.module.css'
import Button from "../Button/Button";

const ContactForm = () => {

    return (
        <div className={`container ${style.ContactForm}`}>
            <form action="#">
                <input type="text" placeholder={'Enter your name'} className={`${style.ContactForm_inp1}`}/>
                <input type="text" placeholder={'Enter your email'}/>

                <textarea
                    id="textarea1"
                    className={`materialize-textarea ${style.ContactForm_inp3}`}
                    placeholder={'Enter your message'}
                />

                {/*<input type="text" placeholder={'Enter your message'}*/}
                {/*       className={`materialize-textarea ${ style.ContactForm_inp3}`}/>*/}
                <div className={style.btn}>
                    <Button description={'Send message'}/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;