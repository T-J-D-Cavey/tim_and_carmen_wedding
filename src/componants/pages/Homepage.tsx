import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { throttle } from 'lodash';
import { Change_language } from "../widgets/Change_language";
import { UK_modal } from "../widgets/modals/UK_modal";
import { Malaysia_modal } from "../widgets/modals/Malaysia_modal";
import audio_file from '../../assets/wedding_bells_audio.wav';
import { motion } from "framer-motion"

export function Homepage() {
    const { t } = useTranslation();
    const hero_element = useRef<HTMLDivElement | null>(null);
    const celebrate_element = useRef<HTMLDivElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const rsvp_element = useRef<HTMLDivElement | null>(null);
    let play_count = 0;
    const throttle_scroll_events = throttle(handle_scroll_effects, 333)

    function handle_scroll_effects() {
        const hero_element_coords = hero_element.current!.getBoundingClientRect();
        const celebrate_element_coords = celebrate_element.current!.getBoundingClientRect();
        if(play_count < 1) {
            audioRef.current!.play();
            play_count++;
        }
        if(hero_element_coords.top <= -5) {
            hero_element.current!.classList.add('showH1');
        }
        if (hero_element_coords.bottom < 500 || hero_element_coords.top > -5) {
            hero_element.current!.classList.remove('showH1');
        }
        if(window.innerHeight - celebrate_element_coords.bottom > 0) {
            celebrate_element.current!.classList.add('appear');
            rsvp_element.current!.classList.add('appear');
        }
        else {
            celebrate_element.current!.classList.remove('appear');
            rsvp_element.current!.classList.remove('appear');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', throttle_scroll_events);

        return () => {
            window.removeEventListener('scroll', throttle_scroll_events);
        }
    }, [throttle_scroll_events])

    return (
        <div>
            <audio ref={audioRef} src={audio_file} autoPlay />
            <Change_language />
            <div ref={hero_element} className="section home_hero">
                <div className='hero_background'></div>
                <div className="box font_light">
                    <div className='font_main'>
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
                    <div ref={celebrate_element} className='hope_appear'>
                        <p className='font_written mb_1'>{t("homepage_celebrate")}</p>
                        <div className="v_small_font font_extra_spacing">
                            <p>{t("homepage__uk_date")}</p>
                            <p className="mt_1">{t("homepage__malay_date")}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div ref={rsvp_element} className="hope_appear">
                        <div>
                            <p className='font_written mb_1'>{t("homepage_hope")}</p>
                        </div>
                        <div className="rsvp_container">
                            <div className='font_main small_font font_extra_spacing'>{t("homepage_rsvp")}</div>
                            <p className='font_main v_small_font font_extra_spacing'>
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSeHz_Ge78j_BSThaY3NEYHd7BEi1B8QtIjHvVNSlxrSCLrCBA/viewform?usp=sf_link"
                                    target="_blank">
                                    {t("homepage_rsvp_english")}
                                </a>
                            </p>
                            <p className='font_main v_small_font font_extra_spacing'>
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSchjZ89KD92DKOF_IXVpQQN9FvQWRfLQg9dXMAKbenU78PoRA/viewform?usp=sf_link"
                                    target="_blank">
                                    {t("homepage_rsvp_mandarin")}
                                </a>
                            </p>     
                        </div>
                    </div>
                </div>
            </div>
            <div className="section paypal_section_container flex_reverse double_height font_light small_font">
                <div className="box square font_normal">
                <motion.div 
                    initial={{ opacity: 0, y: -50, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }} 
                >
                    <p>
                        {t("homepage_paypal_message")}</p>
                    <p>{t("homepage_paypal_message2")}</p>
                    <div className="paypal_box">
                        <form action="https://www.paypal.com/donate" method="post" target="_blank">
                            <input type="hidden" name="business" value="E8GXZZ6J2WQUS" />
                            <input type="hidden" name="no_recurring" value="1" />
                            <input type="hidden" name="item_name" value={t("homepage_paypal_page_note")} />
                            <input type="hidden" name="currency_code" value="GBP" />
                            <input type="image" src="https://pics.paypal.com/00/s/NmJhZDljMDctNjcxMy00NTY5LWI4Y2EtNGM4ODk0NDcxZjEw/file.PNG" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                        </form>
                    </div>
                    </motion.div>
                </div>
                <div className="box square background_image angpao_background">
                </div>
            </div>
            <div className="section double_height font_dark large_font">
                <div className="box square background_image bristol_background">
                </div>
                <div className="box square font_normal">
                    <div className="day_plan_container">
                        <h2 className="font_written">{t("uk_day_plan_title")}</h2>
                        <div className="font_main v_small_font font_extra_spacing">
                            <h3>{t("uk_day_plan_date")}</h3>
                            <ul>
                                <li>
                                    <p>{t("uk_day_plan_registration")}</p>
                                    <p>{t("uk_day_plan_registration_location")}</p>
                                </li>    
                                <li>
                                    <p>{t("uk_day_plan_reception")}</p>
                                    <p>{t("uk_day_plan_reception_location")}</p>
                                </li>
                            </ul>
                        </div>
                        <UK_modal />
                    </div>
                </div>
            </div>
            <div className="section flex_reverse double_height font_light large_font">
                <div className="box square font_normal">
                    <div className="day_plan_container">
                        <h2 className="font_written">{t("malay_day_plan_title")}</h2>
                        <div className="font_main v_small_font font_extra_spacing">
                            <h3>{t("malay_day_plan_date")}</h3>
                            <ul>
                                <li>
                                    <p>{t("malay_day_plan_registration")}</p>
                                    <p>{t("malay_day_plan_registration_location")}</p>
                                </li>    
                                <li>
                                    <p>{t("malay_day_plan_reception")}</p>
                                    <p>{t("malay_day_plan_reception_location")}</p>
                                </li>
                            </ul>
                        </div>
                        <Malaysia_modal />
                    </div>
                </div>
                <div className="box square background_image kl_background">
                </div>
            </div>
            <div className="bottom_photo"></div>
        </div>
    )
}