import github_icon from '../../../public/images/github_icon.png';
import paypal_icon from '../../../public/images/paypal_icon.png'

export function Footer() {

    return (
        <footer>
          <div>
              <a href="https://www.paypal.com/paypalme/timandcarmen2024" target="_blank">
                <img src={paypal_icon} alt="PayPal logo"/>
              </a>
            </div>
            <div>
                <a href="https://github.com/T-J-D-Cavey" target="_blank"><img src={github_icon} alt="The site creator's github page"/></a>
            </div>
        </footer>
    )
}