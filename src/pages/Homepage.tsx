import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import { Change_language } from "../componants/widgets/Change_language";
import { UK_modal } from "../componants/widgets/modals/UK_modal";
import { Malaysia_modal } from "../componants/widgets/modals/Malaysia_modal";
import audio_file from '../assets/wedding_bells_audio.wav';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Homepage() {
    const { t } = useTranslation();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const hero = useRef<HTMLDivElement | null>(null);
    const lang = useRef<HTMLDivElement | null>(null);
    const { scrollY } = useScroll();
    let timeout_id: number;
    let count = 0;

    useMotionValueEvent(scrollY, "change", (latest) => {
        clearTimeout(timeout_id);
        if(!lang.current!.classList.contains('move_off_screen')) {
            lang.current!.classList.add('move_off_screen');
        }
        timeout_id = setTimeout(() => {
            lang.current!.classList.remove('move_off_screen')
        }, 500)

        if(!hero.current!.classList.contains("hero_effects") && latest > 500) return;

        if(latest > 5 && latest < 500 && hero.current!.classList.contains("hero_effects")) return; 
        
        if(latest > 5 && latest < 500){
            hero.current!.classList.add("hero_effects");
            if(count === 0) {
                audioRef.current!.play();
                count++;
            }
        }
        
        else {
            hero.current!.classList.remove("hero_effects");
        }
    })

    useEffect(() => {
        lang.current!.classList.add('move_off_screen');
    }, [])

    return (
        <div>
            <audio ref={audioRef} src={audio_file} autoPlay />
            <div ref={lang}>
                <Change_language />
            </div>
            <div ref={hero} className="section home_hero">
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
                    <div>
                        <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }} 
                        >
                            <p className='font_written mb_1'>{t("homepage_celebrate")}</p>
                            <div className="v_small_font font_extra_spacing">
                                <p>{t("homepage__uk_date")}</p>
                                <p className="mt_1">{t("homepage__malay_date")}</p>
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
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="section paypal_section_container flex_reverse double_height font_light small_font">
                <div className="box square font_normal">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }} 
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
                    </motion.div>
                </div>
                <div className="box square background_image kl_background">
                </div>
            </div>
            <div className="bottom_photo"></div>
        </div>
    )
}
