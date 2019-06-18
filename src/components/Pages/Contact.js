import React from 'react'

const contact = () => {

        return (
                <main className="page page-contact" id="contact">
                    <div className="content content-contact">
                        <div className="content__title">Contact</div>
                            <p className="content__text">Feel free to contact me through the email below, or fill out the form and send me a message.<br></br></p>
                            <p className="link__email"><a className="link" href="mailto:adfuezi@gmail.com">adfuezi@gmail.com</a></p>
                        <form method="POST" data-netlify="true" className="form">
                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Your Name" name="name" id="name" required></input>
                                <label htmlFor="name" className="form__label">Your Name</label>
                            </div>

                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Your Email" name="email" id="email" required></input>
                                <label htmlFor="email" className="form__label">Your Email</label>
                            </div>

                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Subject" name="subject" id="subject" required></input>
                                <label htmlFor="subject" className="form__label">Subject</label>
                            </div>

                            <div className="form__group">
                                <textarea className="form__input" placeholder="Your Message" name="message" id="message" rows="3"></textarea>
                                <label htmlFor="message" className="form__label">Your Message</label>
                            </div>

                            <button type="submit" name="submit" className="btn-submit">Send message</button>
                        </form>
                    </div>
                </main>
        )
}

export default contact;
