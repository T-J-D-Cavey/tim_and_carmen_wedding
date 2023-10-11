import { NavLink } from "react-router-dom";
import { Change_language } from "./Change_language";
import { useTranslation } from "react-i18next";

export function Navbar() {
    const { t } = useTranslation();

// TO BE DELETED!
    
    return (
        <nav className='desktop_nav_container'>
            <ul>
                <li>
                  <NavLink to="/">{t("nav_home")}</NavLink>
                </li>
                <li>
                  <NavLink to="/malaysia-celebration">{t("nav_malay")}</NavLink>
                </li>
                <li>
                  <NavLink to="/uk-celebration">{t("nav_uk")}</NavLink>
                </li>
                <li>
                  <Change_language />
                </li>
            </ul>
        </nav>
    )
}