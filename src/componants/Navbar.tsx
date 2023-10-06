import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
    const { t } = useTranslation();
    
    return (
        <nav className='desktop_nav_container'>
            <ul>
                <li>
                  <NavLink to="/">{t("home_nav")}</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">{t("about_nav")}</NavLink>
                </li>
                <li>
                  <NavLink to="/malaysia-celebration">{t("malay_nav")}</NavLink>
                </li>
                <li>
                  <NavLink to="/uk-celebration">{t("uk_nav")}</NavLink>
                </li>
            </ul>
        </nav>
    )
}