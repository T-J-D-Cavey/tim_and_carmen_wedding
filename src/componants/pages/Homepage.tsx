import { useTranslation } from "react-i18next";
import { Change_language } from "../Change_language";
import { Wedding_bells } from '../audio_componants/Wedding_bells';

export function Homepage() {
    const { t } = useTranslation();
    return (
        <>
            <Change_language />
            <Wedding_bells />
            <p>{t("homepage")}</p>
        </>
    )
}