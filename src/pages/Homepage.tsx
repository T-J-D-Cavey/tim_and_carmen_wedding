import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import { Change_language } from "../componants/widgets/Change_language";
// import { UK_modal } from "../componants/widgets/modals/UK_modal";
// import { Malaysia_modal } from "../componants/widgets/modals/Malaysia_modal";
import audio_file from "../assets/wedding_bells_audio.wav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import paypayIcon from "../../public/images/paypal_icon.png";

export function Homepage() {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hero = useRef<HTMLDivElement | null>(null);
  const lang = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  let timeout_id: number;
  let count = 0;
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    clearTimeout(timeout_id);
    if (!lang.current!.classList.contains("move_off_screen")) {
      lang.current!.classList.add("move_off_screen");
    }
    timeout_id = setTimeout(() => {
      lang.current!.classList.remove("move_off_screen");
    }, 1000);

    if (!hero.current!.classList.contains("hero_effects") && latest > 500)
      return;

    if (
      latest > 5 &&
      latest < 500 &&
      hero.current!.classList.contains("hero_effects")
    )
      return;

    if (latest > 5 && latest < 500) {
      hero.current!.classList.add("hero_effects");
      if (count === 0) {
        audioRef.current!.play();
        count++;
      }
    } else {
      hero.current!.classList.remove("hero_effects");
    }
  });

  useEffect(() => {
    lang.current!.classList.add("move_off_screen");
  }, []);

  function plan_button_handler(page: string) {
    if (page === "uk") {
      navigate("/uk-celebration-day-plan")
    }
    else {
      navigate("/kl-wedding-day-plan")
    }
  }

  return (
    <div>
      <audio ref={audioRef} src={audio_file} autoPlay />
      <div ref={lang}>
        <Change_language />
      </div>
      <div ref={hero} className="section home_hero">
        <div className="hero_background"></div>
        <div className="box font_light">
          <div className="font_main">
            <h1>{t("homepage_tim")}</h1>
            <h1>{t("homepage_and")}</h1>
            <h1>{t("homepage_carmen")}</h1>
          </div>
          <div>
            <h2>{t("homepage_2024")}</h2>
          </div>
        </div>
      </div>
      <div className="section hope_container font_dark">
        <div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <p className="font_written mb_1">{t("homepage_celebrate")}</p>
              <div className="v_small_font font_extra_spacing font_main">
                <p>{t("homepage__uk_date")}</p>
                <p>{t("homepage__uk_venue")}</p>
                <p className="mt_1">{t("homepage__malay_date")}</p>
                <p>{t("homepage__malay_venue")}</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <div className="hope_appear">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <div>
                <p className="font_written mb_1">{t("homepage_hope")}</p>
              </div>
              <div className="rsvp_container">
                <div className="font_main small_font font_extra_spacing">
                  {t("homepage_rsvp")}
                </div>
                <p className="font_main v_small_font font_extra_spacing rsvp_margin_top">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeHz_Ge78j_BSThaY3NEYHd7BEi1B8QtIjHvVNSlxrSCLrCBA/viewform?usp=sf_link"
                    target="_blank"
                  >
                    {t("homepage_rsvp_english")}
                  </a>
                </p>
                <p className="font_main v_small_font font_extra_spacing">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSchjZ89KD92DKOF_IXVpQQN9FvQWRfLQg9dXMAKbenU78PoRA/viewform?usp=sf_link"
                    target="_blank"
                  >
                    {t("homepage_rsvp_mandarin")}
                  </a>
                </p>
                <p className="font_main v_small_font font_extra_spacing rsvp_margin_top">
                  {t("homepage_rsvp_deadline")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="section paypal_section_container flex_reverse double_height font_light v_small_font">
        <div className="box square font_normal paypal_text_container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="paypal_text_wrapper">
              <p>{t("homepage_paypal_message")}</p>
              <p>{t("homepage_paypal_message2")}</p>
              <div className="paypal_box">
                <a
                  href="https://www.paypal.com/paypalme/timandcarmen2024"
                  target="_blank"
                >
                  <img src={paypayIcon} alt="PayPal logo" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="box square background_image angpao_background"></div>
      </div>
      <div className="section double_height font_dark large_font">
        <div className="box square background_image bristol_background"></div>
        <div className="box square font_normal">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="day_plan_container">
              <h2 className="font_written">{t("uk_day_plan_title")}</h2>
              <div className="font_main v_small_font font_extra_spacing">
                <h3>{t("uk_day_plan_date")}</h3>
                <ul>
                  <li>
                    <p>{t("uk_day_plan_registration_time")}</p>
                    <p>{t("uk_day_plan_registration")}</p>
                    <h3>{t("uk_day_plan_registration_location")}</h3>
                  </li>
                  <li>
                    <p>{t("uk_day_plan_reception_time")}</p>

                    <p>{t("uk_day_plan_reception")}</p>
                    <h3>{t("uk_day_plan_reception_location")}</h3>
                  </li>
                </ul>
              </div>
              {/* <UK_modal /> */}
              <Button variant="primary" onClick={plan_button_handler.bind(null, "uk")}>
                {t("button_details")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="section flex_reverse double_height font_light large_font">
        <div className="box square font_normal">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="day_plan_container">
              <h2 className="font_written">{t("malay_day_plan_title")}</h2>
              <div className="font_main v_small_font font_extra_spacing">
                <h3>{t("malay_day_plan_date")}</h3>
                <ul>
                  <li>
                    <p>{t("malay_day_plan_gatecrashing_time")}</p>
                    <p>{t("malay_day_plan_gatecrashing")}</p>
                    <p>{t("malay_day_plan_tea_ceremony_time")}</p>
                    <p>{t("malay_day_plan_tea_ceremony")}</p>
                    <h3>{t("malay_day_plan_cyberjaya_location")}</h3>
                  </li>
                  <li>
                    <p>{t("malay_day_plan_reception_time")}</p>
                    <p>{t("malay_day_plan_reception")}</p>
                    <p>{t("malay_day_plan_banquet_time")}</p>
                    <p>{t("malay_day_plan_banquet")}</p>
                    <h3>{t("malay_day_plan_reception_location")}</h3>
                  </li>
                </ul>
              </div>
              {/* <Malaysia_modal /> */}
              <Button variant="primary" onClick={plan_button_handler.bind(null, "kl")}>
                {t("button_details")}
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="box square background_image kl_background"></div>
      </div>
      <div className="bottom_photo"></div>
    </div>
  );
}
