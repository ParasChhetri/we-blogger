import { InviteMe } from '../../components/InviteMe/InviteMe';
import './Contact.css';
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export const Contact = () => {
    return (
        <>
            <section className='contact-container-main'>
                <div className="contact-container">
                    <div className='contact-left'>
                        <div className='contact-heading'>
                            <span className="dash"></span>
                            <span className="my-font-l">Contact</span>
                            <span className="dash"></span>
                        </div>
                        <p className='discription-font'>
                        Feel free to reach out to me for any inquiries, collaborations, or just to talk food! Whether you're a restaurant, a fellow food lover, or a brand, I’d love to connect.
                        </p>
                        <div className='contact-me-container'>
                            <div className='contact-me-icon'>
                                <IoLocation />
                            </div>
                            <div className='contact-me-text'>
                                <span className='my-text-upppercase'>address</span>
                                <span>ABC Street, PQR State 12090 XYZ Country</span>
                            </div>
                        </div>
                        <div className='contact-me-container'>
                            <div className='contact-me-icon'>
                                <FaPhone />
                            </div>
                            <div className='contact-me-text'>
                                <span className='my-text-upppercase'>phone</span>
                                <span>+91-786877</span>
                            </div>
                        </div>
                        <div className='contact-me-container'>
                            <div className='contact-me-icon'>
                                <IoIosMail />
                            </div>
                            <div className='contact-me-text'>
                                <span className='my-text-upppercase'>email</span>
                                <span>abc@xyz.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='contact-right'>
                        <div className='bg-container'>
                            <div className='bg-inner-container'>
                                <h1 className='my-font-l'>Let's Talk</h1>
                                <form className='contact-form-container'>
                                    <label style={{color: "white"}}>Name <span style={{color: "red"}}>*</span></label>
                                    <div className='name-form-container'>
                                        <input type="text" placeholder='First'/>
                                        <input type="text" placeholder='Last'/>
                                    </div>
                                    <label style={{color: "white"}}>Email <span style={{color: "red"}}>*</span></label>
                                    <div className='email-form-container'>
                                        <input type="text" placeholder='Email'/>
                                    </div>
                                    <label style={{color: "white"}}>Subject <span style={{color: "red"}}>*</span></label>
                                    <div className='subject-form-container'>
                                        <input type="text" placeholder='Subject'/>
                                    </div>
                                    <label style={{color: "white"}}>Message <span style={{color: "red"}}>*</span></label>
                                    <div className='message-form-container'>
                                        <textarea rows={10} cols={45} placeholder='Message'></textarea>
                                    </div>
                                    <div>
                                        <button className='send-msg-btn'>send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <InviteMe />
        </>
    );
}
