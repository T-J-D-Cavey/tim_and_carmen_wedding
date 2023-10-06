import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { set_language, language_selector } from '../redux/main_slice';
import { useTranslation } from "react-i18next";

export function Change_language() {
    const dispatch = useDispatch();
    const language = useSelector(language_selector);
    const { t, i18n } = useTranslation();

    function handleClick() {
        const new_language = language === 'en' ? 'zh-CN' : 'en';
        dispatch(set_language(new_language));
    }
    
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language, i18n])
    // will use bootstrap button and/or add an image flag icon
    return (
        <button onClick={handleClick}>{t("langauge")}</button>
    )
}