import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Change_language } from "../widgets/Change_language";
import { Wedding_bells } from '../audio_componants/Wedding_bells';


export function Homepage() {
    const { t } = useTranslation();
    const heroElement = useRef<HTMLDivElement | null>(null);
    // I have hard coded the height of the mobile nav and the language component. 
    // I need to check both of these heights are correct for mobile at end of project or adjust:
    useEffect(() => {
        function setHeight() {
            if(heroElement) {
                const height = window.innerHeight - 88;
                heroElement.current!.style.height = `${height}px`
            }
        }

        setHeight();

        window.addEventListener('resize', setHeight);

        return () => {
            window.removeEventListener('resize', setHeight);
        }
    }, [])

    return (
        <div>
            <Change_language />
            <Wedding_bells />
            <div ref={heroElement} className="section home_hero">
                <div className="box">
                    <h1>{t("homepage_tim")}</h1>
                    <h1>{t("homepage_and")}</h1>
                    <h1>{t("homepage_carmen")}</h1>
                </div>
                <div className="box">
                    <h2>{t("homepage_2024")}</h2>
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
                    <p>{t("homepage_rsvp")}</p>
                </div>
                <div className="box">
                    <p>Google form hyperlink here</p>
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