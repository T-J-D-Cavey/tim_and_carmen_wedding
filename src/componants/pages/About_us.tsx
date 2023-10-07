import { Change_language } from "../widgets/Change_language";
import { useTranslation } from "react-i18next";

export function About_us() {
    const { t } = useTranslation();

    return (
        <>
            <Change_language />
            {t('about')}
        </>
    )
}