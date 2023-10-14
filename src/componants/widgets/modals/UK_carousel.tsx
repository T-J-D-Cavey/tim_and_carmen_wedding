import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from "react-i18next";

export function UK_carousel() {
  const { t } = useTranslation();

  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="carousel_image_container uk_carousel_image_1"></div>
          <Carousel.Caption>
            <div className="carousel_text_container">
              <div className="carousel_text_background"></div>
              <div>
                <h3 className="large_font font_main">{t("uk_modal_bristol_title")}</h3>
                <p className="small_font font_main">{t("uk_modal_bristol_date")}</p>
              </div>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel_image_container uk_carousel_image_2"></div>
          <Carousel.Caption>
            <div className="carousel_text_container">
              <div className="carousel_text_background"></div>
              <div>
                <h3 className="large_font font_main">{t("uk_modal_bristol_register_h2")}</h3>
                <h3 className="small_font font_main">{t("uk_modal_bristol_register_time")}</h3>
                <p className="small_font font_main">{t("uk_modal_bristol_register_p")}</p>
                <p>
                  <a 
                    href="https://www.google.com/maps/place/Bristol+Register+Office/@51.4549709,-2.5932683,17z/data=!3m1!4b1!4m6!3m5!1s0x48718e7828885bc1:0xab5a51b94e351ad2!8m2!3d51.4549709!4d-2.5932683!16s%2Fg%2F1v5frbzc?hl=en&entry=ttu" 
                    className="small_font font_main"
                    target="_blank">{t("uk_modal_bristol_register_a")}
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div className="carousel_image_container uk_carousel_image_1"></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel_image_container uk_carousel_image_1"></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}