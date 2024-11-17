import { useEffect } from 'react';
import BlogsData from '../../data/BlogsData';
import './Blogs.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export const Blogs = () => {

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
            <section className='blogs-container'>
                <div className='blogs-heading'>
                    <span className="dash"></span>
                    <span className="my-font-l">BLogs</span>
                    <span className="dash"></span>
                </div>
                <p className='discription-font my-text-justify'>
                    &emsp;<span style={{fontSize: "28px", fontWeight: "600"}}>F</span>ood blogging has emerged as a powerful platform for culinary enthusiasts, allowing them to share their passion for food, cooking, and dining experiences with a global audience. At its core, food blogging is a creative blend of writing, photography, and personal storytelling, where bloggers explore new recipes, review restaurants, and showcase their knowledge of various cuisines. Bloggers often act as both creators and critics, offering recipes that readers can try at home while also sharing their opinions on food trends, dining experiences, and kitchen tools. This blend of content makes food blogging a rich and versatile medium for both amateur cooks and professional chefs.<br /><br />

                    &emsp;The rise of social media has expanded the reach of food blogs, enabling bloggers to interact with their audiences through platforms like Instagram, Pinterest, and YouTube. Beautifully curated photos and videos are key elements in food blogging, and bloggers often spend significant time perfecting their visuals to capture the essence of a dish. Authenticity plays a crucial role in food blogging, as readers value honest reviews and personal anecdotes, making the blogger’s voice and style an important aspect of the content.<br /><br />

                    &emsp;Food bloggers also contribute to the food industry by influencing consumer choices. Through reviews, they can help promote restaurants, food products, or kitchen gadgets, often acting as unofficial brand ambassadors. Many bloggers have turned their hobby into a full-time career, securing partnerships with food brands, writing cookbooks, or even launching their own products. Food blogging offers endless opportunities for creativity and connection, serving as a bridge between cultures and communities through the shared love of food. Whether it’s a simple homemade recipe or an exploration of exotic cuisine, food blogging continues to thrive as a dynamic and flavorful corner of the internet.
                </p>
                <div className='blogs-cards-contaier'>
                    {
                        BlogsData.map((BlogItems) => {
                            return (
                                <div className='blog-card' key={BlogItems.id} data-aos="fade-up" data-aos-duration="3000">
                                    <img src={BlogItems.image} alt="" height={300} />
                                    <span className='title-font padding-1'>{BlogItems.title}</span>
                                    <p className='discription-font padding-1'>{BlogItems.discription}</p>
                                    <button type='submit' className="read-more-btn">read more</button>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}
