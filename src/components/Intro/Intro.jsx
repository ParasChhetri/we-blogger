import { ReactTyped } from "react-typed";
import './Intro.css';
import ownerImage from '../../assets/images/owner-images/owner-image-1-removebg-preview.png'
export const Intro = () => {
    return (
        <>
        <section className="intro-container-main">
            <div className="intro-left">
                <div className="welcome-text-container">
                    <span className="dash"></span>
                    <span>welcome</span>
                </div>
                <div className="owner-name-container">
                    <span className="my-font-l">I'm {" "}</span>
                    <span className="my-font-l"><ReactTyped strings={["Your Name"]} typeSpeed={260} loop/></span>
                </div>
                <div className="title-container">
                    <span>Foodie</span><span>/</span><span>Blogger</span>
                </div>
                <div>
                    <p className="intro-paragraph">
                    Myself Your Name, a passionate food blogger who brings flavors to life with every post! From cozy home-cooked meals to exotic culinary adventures, Your Name blog is a journey of taste and creativity. Our vibrant photography and heartfelt stories behind each dish make you crave more than just food – they spark a love for cooking.
                    </p>
                </div>
                <div className="intro-btn-container">
                    <button type="button">join me</button>
                </div>
            </div>
            <div className="intro-right">
                <img src={ownerImage} alt="Owner Img" height={600} width={500}/>
            </div>
        </section>
        </>
    );
}
