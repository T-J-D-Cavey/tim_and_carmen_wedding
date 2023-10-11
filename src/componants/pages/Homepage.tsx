import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { throttle } from 'lodash';
import { Wedding_bells } from '../audio_componants/Wedding_bells';


export function Homepage() {
    const { t } = useTranslation();
    const heroElement = useRef<HTMLDivElement | null>(null);
    const celebrateElement = useRef<HTMLDivElement | null>(null);

    const throttle_scroll_events = throttle(handle_scroll_effects, 333)

    function handle_scroll_effects() {
        const hero_element_coords = heroElement.current!.getBoundingClientRect();
        if(hero_element_coords.top <= 40) {
            heroElement.current!.classList.add('showH1');
            celebrateElement.current!.classList.remove('appear');
        }
        if(hero_element_coords.bottom <= 500 || hero_element_coords.top > 40) {
            heroElement.current!.classList.remove('showH1');
            celebrateElement.current!.classList.add('appear');
        }
    }

    // I have hard coded the height of the mobile and desktop nav. 
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
            const height = window.innerHeight - 56;
            const hero_banner_element = heroElement.current;
            if(hero_banner_element) {
                heroElement.current!.style.height = `${height}px`
            }
        }
    }

    return (
        <div>
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
            {/* Could add a tsparticles confetti animation behind this hope_container, starting on specific scroll position */}
            <div className="section hope_container">
                <div ref={celebrateElement} className="box">
                    <p>{t("homepage_celebrate")}</p>
                </div>
                <div className="box">
                    <div>
                        <p>{t("homepage_hope")}</p>
                    </div>
                    <div>
                        <p>
                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeHz_Ge78j_BSThaY3NEYHd7BEi1B8QtIjHvVNSlxrSCLrCBA/viewform?usp=sf_link"
                                target="_blank">
                                {t("homepage_rsvp")}
                            </a>
                        </p>    
                    </div>
                </div>
            </div>
            <div className="section details_container">
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
            <div className="section paypal_section_container">
                <div className="box">
                    <p>{t("homepage_paypal_message")}</p>
                </div>
                <div className="box">
                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
                        <input type="hidden" name="business" value="E8GXZZ6J2WQUS" />
                        <input type="hidden" name="no_recurring" value="1" />
                        <input type="hidden" name="item_name" value={t("homepage_paypal_page_note")} />
                        <input type="hidden" name="currency_code" value="GBP" />
                        <input type="image" src="https://pics.paypal.com/00/s/NmJhZDljMDctNjcxMy00NTY5LWI4Y2EtNGM4ODk0NDcxZjEw/file.PNG" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                    </form>
                </div>
            </div>
        </div>
    )
}