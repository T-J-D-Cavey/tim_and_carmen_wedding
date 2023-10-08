import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
    const { t } = useTranslation();

    // Need to write logic here for when the window.scrollY is move then 0, the box shadow style gets added to the nav container:
    
    return (
        <nav className='desktop_nav_container'>
            <ul>
                <li>
                  <NavLink to="/">{t("nav_home")}</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">{t("nav_about")}</NavLink>
                </li>
                <li>
                  <NavLink to="/malaysia-celebration">{t("nav_malay")}</NavLink>
                </li>
                <li>
                  <NavLink to="/uk-celebration">{t("nav_uk")}</NavLink>
                </li>
            </ul>
        </nav>
    )
}