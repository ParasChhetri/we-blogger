import { FaInstagram, FaMeta, FaYoutube } from 'react-icons/fa6';
import './Footer.css';

export const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div>
                        <span className="site-name-1">T</span><span className="site-name-2">k</span>
                    </div>
                    <div className='footer-links'>
                        <ul>
                            <li>Home</li>
                            <li>BLogs</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='footer-icons'>
                        <FaInstagram style={{ fontSize: "32px" }} />
                        <FaMeta style={{ fontSize: "32px" }} />
                        <FaYoutube style={{ fontSize: "32px" }} />
                    </div>
                </div>
                <div className='footer-bottom'>
                    <span>© 2024 Food BLogger</span>
                    <span>Made by Your Name</span>
                </div>
            </footer>
        </>
    );
}
