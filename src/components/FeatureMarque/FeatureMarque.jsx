import Marquee from 'react-fast-marquee';
import './FeatureMarque.css';
import FeaturedMarqueeData from '../../data/FeaturedMarqueData';

export const FeatureMarque = () => {
    return (
        <>
            <div className='featured-titlle-container'>
                <span className='dash-2'></span>
                <span className="my-font-l">Featured in</span>
                <span className="dash-2"></span>
            </div>
            <Marquee>
                <div className="featured-images-container">
                    {
                        FeaturedMarqueeData.map((FeaturedImages) => {
                            return (
                                <div key={FeaturedImages.id} className='featured-images'>
                                    <img src={FeaturedImages.image} alt="fetired images" />
                                </div>
                            );
                        })
                    }
                </div>
            </Marquee>
        </>
    );
}
