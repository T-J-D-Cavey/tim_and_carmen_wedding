import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from "react-i18next";

export function Malaysia_carousel() {
  const { t } = useTranslation();

  return (
    <Carousel fade interval={8000}>
      <Carousel.Item>
        <div className="carousel_image_container uk_carousel_image_1"></div>
          <Carousel.Caption>
            <div className="carousel_text_container first_slide_text_container">
              <div className="carousel_text_background"></div>
              <div>
                <h3 className="large_font font_main">{t("malay_modal_title")}</h3>
                <p className="small_font font_main">{t("malay_modal_date")}</p>
              </div>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel_image_container malay_carousel_image_2"></div>
          <Carousel.Caption>
            <div className="carousel_text_container">
              <div className="carousel_text_background"></div>
              <div>
                <h3 className="large_font font_main">{t("malay_modal_tea_h2")}</h3>
                <h3 className="small_font font_main">{t("malay_modal_tea_time")}</h3>
                <p className="small_font font_main">{t("malay_modal_tea_p")}</p>
                <p>
                  <a 
                  // need to update URL when venue confirmed:
                    href="https://www.google.com/maps/" 
                    className="small_font font_main"
                    target="_blank">{t("google_maps_location_here")}
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel_image_container malay_carousel_image_3"></div>
          <Carousel.Caption>
            <div className="carousel_text_container">
              <div className="carousel_text_background"></div>
              <div>
                <h3 className="large_font font_main">{t("malay_modal_meal_h2")}</h3>
                <h3 className="small_font font_main">{t("malay_modal_meal_time")}</h3>
                <p className="small_font font_main">{t("malay_modal_meal_p")}</p>
                <p>
                  <a 
                  // need to update URL when venue confirmed:
                    href="https://www.google.com/maps/" 
                    className="small_font font_main"
                    target="_blank">{t("google_maps_location_here")}
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel_image_container malay_carousel_image_4"></div>
          <Carousel.Caption>
            <div className="carousel_text_container">
              <div className="carousel_text_background"></div>
              <div>
                <h3 className="large_font font_main">{t("malay_modal_travel_h2")}</h3>
                <p>
                  <a 
                    href="https://www.laidbacktrip.com/posts/kuala-lumpur-things-to-do" 
                    className="small_font font_main"
                    target="_blank">{t("malay_modal_travel_a")}
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}