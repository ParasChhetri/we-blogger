import "./FameCount.css";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoodreadsG } from "react-icons/fa";
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

export const FameCount = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <div className="fame-count-container">
                <div className="fame-count-left">

                    {/* YOuTube */}
                    <div>
                        <FaYoutube />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <span>
                                {
                                    counterOn && <CountUp start={0} end={1000000} duration={2} delay={0} />
                                }
                            </span>
                        </ScrollTrigger>
                        <span>Subscribers</span>
                    </div>

                    {/* Instagram */}
                    <div>
                        <FaInstagram />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <span>
                                {
                                    counterOn && <CountUp start={0} end={1000000} duration={2} delay={0} />
                                }
                            </span>
                        </ScrollTrigger>
                        <span>Followers</span>
                    </div>

                    {/* Good Reads */}
                    <div>
                        <FaGoodreadsG />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <span>
                                {
                                    counterOn && <CountUp start={0} end={1000000} duration={2} delay={0} />
                                }
                            </span>
                        </ScrollTrigger>
                        <span>Good Reads</span>
                    </div>
                </div>
                <div className="fame-count-empty-container"></div>
            </div>
        </>
    );
};
