import { useDispatch, useSelector } from 'react-redux';
import { set_language, language_selector } from '../redux/main_slice';
import { useTranslation } from "react-i18next";
import i18n from '../translation/i18n';

export function Change_language() {
    const dispatch = useDispatch();
    const language = useSelector(language_selector);
    const { t } = useTranslation(); 

    // Will be much better logic, this is just a test:
    function handleClick() {
        if(language === 'en') {
            dispatch(set_language('zh-CN'));
            i18n.changeLanguage('zh-CN');
        } else {
            dispatch(set_language('en'));
            i18n.changeLanguage('en');
        }
    }
    // will use much better button:
    return (
        <button onClick={handleClick}>{t('test')}</button>
    )
}