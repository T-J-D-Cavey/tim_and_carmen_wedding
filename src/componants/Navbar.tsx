import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
    const { t } = useTranslation();
// need to add a mobile screen nav bar componant that renders instead of this one and uses a bootstrap offcanvas nav bar:
// This can be done by rendering them both on the app component but having display: none on one and swapping it based on screen sizes:
    return (
        <nav>
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