import { useTranslation } from "react-i18next";
import { Change_language } from "../widgets/Change_language";
import { Wedding_bells } from '../audio_componants/Wedding_bells';

export function Homepage() {
    const { t } = useTranslation();
    return (
        <>
            <Change_language />
            <Wedding_bells />
            <div className='main-image i1'></div>
            <div className='main-image i2'></div>
            <div className='main-image i3'></div>
            <div className='main-image i4'></div>
            <div className='main-image i5'></div>
            <div className='main-image i6'></div>
            <div className='main-image i7'></div>
            <div className='main-image i8'></div>
            <div className='main-image i9'></div>
            <div className='main-image i10'></div>
            <p>{t("homepage")}</p>
        </>
    )
}