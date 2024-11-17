import { useEffect } from "react";
import './About.css';
import { GiFullPizza } from "react-icons/gi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { FaQuoteLeft } from "react-icons/fa";
import { FameCount } from '../../components/FameCount/FameCount';
import { FeatureMarque } from '../../components/FeatureMarque/FeatureMarque';
import { InviteMe } from '../../components/InviteMe/InviteMe';
import { FollowAlong } from '../../components/FollowAlong/FollowAlong';
import Aos from "aos";
import "aos/dist/aos.css";
import ownerImage_3 from '../../assets/images/owner-images/owner-image-3-removebg-preview.png';
import ownerImage_4 from '../../assets/images/owner-images/owner-image-4-removebg-preview.png';

export const About = () => {
    // AOS Animation + useEffect for the effects in our website
    useEffect(() => {
        Aos.init({
            disable : "phone",
            duration : 700,
            easing: "ease-out-cubic"
        })
    },[])    
    return (
        <>
        <section className='about-container'>
            <div className='about-me-container'>
                <div className='about-me-left'>
                    <div className='about-me-heading'>
                        <span className="dash"></span>
                        <span className="my-font-l">about me</span>
                        <span className="dash"></span>
                    </div>
                    <p className='font-paragraph-l'>
                    Hi, I’m Your Name, a passionate food blogger with a love for exploring unique flavors and sharing my culinary experiences with the world. From street food gems to fine dining, I delve into everything that makes food special. Through my blog, I aim to inspire fellow food enthusiasts with mouthwatering recipes, honest restaurant reviews, and exciting food trends. Join me on this flavorful journey, where every meal tells a story!
                    </p>
                    <div className='about-icons'>
                        <GiFullPizza />
                        <span className='my-text-upppercase'>Food Critic</span>
                    </div>
                    <div className='about-icons'>
                        <HiOutlineSpeakerphone />
                        <span className='my-text-upppercase'>influencer</span>
                    </div>
                    <div className='about-icons'>
                        <CgWebsite />
                        <span className='my-text-upppercase'>Blogger</span>
                    </div>
                </div>
                <div className='about-me-right'>
                    <img src={ownerImage_3} alt="" />
                </div>
            </div>
            <FameCount />
            <div className="trishnoor-quote">
                <div className='trishnoor-quote-left' data-aos="fade-right" data-aos-easing="ease-in-sine">
                    <img src={ownerImage_4} alt="" />
                </div>
                <div className='quote' data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine">
                    <FaQuoteLeft />
                    <p>
                    Every dish tells a story, every flavor sparks a memory. As a food blogger, I savor the world one bite at a time.
                    </p>
                    <div>
                        <span className='signature-font'>Your name</span>
                    </div>
                </div>
            </div>
        </section>
            <FeatureMarque />
            <InviteMe />
            <FollowAlong />
        </>
    );
}
