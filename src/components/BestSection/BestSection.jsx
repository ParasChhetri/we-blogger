import { useEffect } from 'react';
import bestSectionData from '../../data/BestSection';
import './BestSection.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export const BestSection = () => {
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
            <section className='best-section-container'>
                <div className='best-resturant-heading'>
                    <span className='dash'></span>
                    <span className='my-font-l'>Best Restaurants</span>
                    <span className='dash'></span>
                </div>
                <div className='best-resturant-conatiner'>
                    {
                        bestSectionData.map((bestResturants) => {
                            return (
                                <div key={bestResturants.id} className='best-resturant-card' data-aos="fade-up" data-aos-duration="3000">
                                    <img src={bestResturants.image} alt="..." height={300} />
                                    <span className='title-font padding-1'>{bestResturants.title}</span>
                                    <span className='discription-font padding-1'>{bestResturants.discription}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}
