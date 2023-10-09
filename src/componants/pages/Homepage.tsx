import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { throttle } from 'lodash';
import { Change_language } from "../widgets/Change_language";
import { Wedding_bells } from '../audio_componants/Wedding_bells';


export function Homepage() {
    const { t } = useTranslation();
    const heroElement = useRef<HTMLDivElement | null>(null);

    const throttle_scroll_events = throttle(handle_scroll_effects, 333)

    function handle_scroll_effects() {
        const hero_element_coords = heroElement.current!.getBoundingClientRect();
        console.log(hero_element_coords.top)
        if(hero_element_coords.top <= 0) {
            heroElement.current!.classList.add('showH1');
        }
        if(hero_element_coords.bottom <= 0 || hero_element_coords.top > 0) {
            heroElement.current!.classList.remove('showH1');
        }
    }

    // I have hard coded the height of the mobile nav and the language component. 
    // I need to check both of these heights are correct for mobile at end of project or adjust:
    useEffect(() => {
        setHeight();
        window.addEventListener('resize', setHeight);
        window.addEventListener('scroll', throttle_scroll_events);

        return () => {
            window.removeEventListener('resize', setHeight);
            window.removeEventListener('scroll', throttle_scroll_events);
        }
    }, [throttle_scroll_events])

    function setHeight() {
        if(heroElement) {
            const height = window.innerHeight - 88;
            const hero_banner_element = heroElement.current;
            if(hero_banner_element) {
                heroElement.current!.style.height = `${height}px`
            }
        }
    }

    return (
        <div>
            <Change_language />
            <Wedding_bells />
            <div ref={heroElement} className="section home_hero">
                <div className='hero_background'></div>
                <div className="box">
                    <div>
                        <h1>{t("homepage_tim")}</h1>
                        <h1>{t("homepage_and")}</h1>
                        <h1>{t("homepage_carmen")}</h1>
                    </div>
                    <div>
                        <h2>{t("homepage_2024")}</h2>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="box">
                    <p>{t("homepage_celebrate")}</p>
                </div>
                <div className="box">
                    <p>{t("homepage_hope")}</p>
                </div>
            </div>
            <div className="section">
                <div className="box">
                    <p>{t("homepage_details")}</p>
                </div>
                <ul className="box home_page_links">
                    <li>
                      <Link to="/malaysia-celebration">{t("nav_malay")}</Link>
                    </li>
                    <li>
                      <Link to="/uk-celebration">{t("nav_uk")}</Link>
                    </li>
                </ul>
            </div>
            <div className="section">
                <div className="box">
                    <p>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeHz_Ge78j_BSThaY3NEYHd7BEi1B8QtIjHvVNSlxrSCLrCBA/viewform?usp=sf_link"
                            target="_blank">
                            {t("homepage_rsvp")}
                        </a>
                    </p>
                </div>
            </div>
            <div className="section">
                <div className="box">
                    <p>{t("homepage_paypal")}</p>
                </div>
                <div className="box">
                    <p>Paypal donate code to go here</p>
                </div>
            </div>
        </div>
    )
}