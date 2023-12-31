import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { set_language, language_selector } from '../../redux/main_slice';
import { useTranslation } from "react-i18next";
import gb_flag from '../../../public/images/british_flag_icon.png';
import malaysia_flag from '../../../public/images/malaysia_flag_icon.png';
import arrow from '../../../public/images/arrow_icon.png'

export function Change_language() {
    const dispatch = useDispatch();
    const language = useSelector(language_selector);
    const { i18n } = useTranslation();
    const current_flag = language === 'en' ? gb_flag : malaysia_flag;
    const other_flag = language === 'en' ? malaysia_flag : gb_flag;

    function handleClick() {
        const new_language = language === 'en' ? 'zh-CN' : 'en';
        dispatch(set_language(new_language));
    }
    
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language, i18n])
    return (
        <div className='lang-btn-container'>
            <div onClick={handleClick}> 
                <img src={current_flag} alt="current language"/>
                <img src={arrow}/>
                <img src={other_flag} alt="language option"/>
            </div>
        </div>
    )
}