import github_icon from '../../assets/images/github_icon.png';
import { useTranslation } from "react-i18next";

export function Footer() {

    const { t } = useTranslation();
    return (
        <footer>
            <div>
                <form action="https://www.paypal.com/donate" method="post" target="_blank">
                    <input type="hidden" name="business" value="E8GXZZ6J2WQUS" />
                    <input type="hidden" name="no_recurring" value="1" />
                    <input type="hidden" name="item_name" value={t("homepage_paypal_page_note")} />
                    <input type="hidden" name="currency_code" value="GBP" />
                    <input type="image" src="https://pics.paypal.com/00/s/NmJhZDljMDctNjcxMy00NTY5LWI4Y2EtNGM4ODk0NDcxZjEw/file.PNG" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                </form>
            </div>
            <div>
                <a href="https://github.com/T-J-D-Cavey" target="_blank"><img src={github_icon} alt="The site creator's github page"/></a>
            </div>
        </footer>
    )
}