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
                <h3 className="small_font font_main">{t("malay_modal_gatecrash_time")}</h3>
                <p className="small_font font_written">{t("malay_modal_gatecrash")}</p>
                <h3 className="small_font font_main">{t("malay_modal_tea_time")}</h3>
                <p className="small_font font_written">{t("malay_modal_tea_p")}</p>
                <p className="small_font font_written">{t("malay_modal_tea_everyone")}</p>
                <p>
                  <a 
                    href="https://www.google.com/maps/place/Isle+of+Kamares,+Setia+Eco+Glades/@2.9376358,101.6339128,19.09z/data=!4m10!1m2!2m1!1sSETIA+ECO+GLADES,+CYBERJAYA+kuala+lumpur!3m6!1s0x31cdb7eef2206123:0xaa00094464aed8c1!8m2!3d2.9376229!4d101.6348313!15sCihTRVRJQSBFQ08gR0xBREVTLCBDWUJFUkpBWUEga3VhbGEgbHVtcHVyWikiJ3NldGlhIGVjbyBnbGFkZXMgY3liZXJqYXlhIGt1YWxhIGx1bXB1cpIBD2hvdXNpbmdfc29jaWV0eZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSTk16UmZVMGgzRUFF4AEA!16s%2Fg%2F11h3jh81ry?entry=ttu" 
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
                <h3 className="large_font font_main">{t("malay_modal_concorde_h2")}</h3>
                <h3 className="small_font font_main">{t("malay_modal_cocktail_time")}</h3>
                <p className="small_font font_written">{t("malay_modal_cocktail_p")}</p>
                <h3 className="small_font font_main">{t("malay_modal_meal_time")}</h3>
                <p className="small_font font_written">{t("malay_modal_meal_p")}</p>
                <p>
                  <a 
                    href="https://www.google.com/maps/place/Concorde+Hotel+Kuala+Lumpur/@3.1552878,101.7033061,17z/data=!3m1!4b1!4m9!3m8!1s0x31cc482a3d602131:0x6473062a3b5dad97!5m2!4m1!1i2!8m2!3d3.1552878!4d101.705881!16s%2Fg%2F1vfzbpgd?entry=ttu" 
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