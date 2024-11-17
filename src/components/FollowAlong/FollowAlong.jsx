import { useEffect } from "react";
import './FollowAlong.css';
import Aos from "aos";
import "aos/dist/aos.css";
import ownerImage from '../../assets/images/owner-images/owner-image-1-removebg-preview.png';
import ownerImage_2 from '../../assets/images/owner-images/owner-image-2-removebg-preview.png';
import ownerImage_3 from '../../assets/images/owner-images/owner-image-3-removebg-preview.png';
import ownerImage_4 from '../../assets/images/owner-images/owner-image-4-removebg-preview.png';

export const FollowAlong = () => {
    // AOS Animation + useEffect for the effects in our website
    useEffect(() => {
        Aos.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic"
        })
    }, [])
    return (
        <>
            <section className='follow-along-container'>
                <div>
                    <span className="dash"></span>
                    <span className="my-font-l">Follow along</span>
                    <span className="dash"></span>
                </div>
                <div className='follow-along-image-container'>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <img src={ownerImage} alt="owner img" />
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ownerImage_2} alt="owner img" />
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ownerImage_3} alt="owner img" />
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ownerImage_4} alt="owner img" />
                    </div>
                </div>
            </section>
        </>
    );
}
