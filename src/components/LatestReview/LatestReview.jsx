import latestReviewData from "../../data/LatestReview";
import './LatestReview.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const LatestReview = () => {
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
            <section className="latest-review-container">
                <div className="latest-review-heading-container">
                    <span className="dash"></span>
                    <span className="my-font-l">Latest Reviews</span>
                    <span className="dash"></span>
                </div>
                <div className="latest-review-grid">
                    {
                        latestReviewData.map((reviewLatest) => {
                            return (
                                <div key={reviewLatest.id} className="latest-review-card" data-aos="fade-up" data-aos-duration="3000">
                                    <img src={reviewLatest.image} alt="..." height={300} />
                                    <span className="title-font padding-1">{reviewLatest.title}</span>
                                    <p className="discription-font padding-1">{reviewLatest.description}</p>
                                    <button type="submit" className="read-more-btn">read more</button>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}
