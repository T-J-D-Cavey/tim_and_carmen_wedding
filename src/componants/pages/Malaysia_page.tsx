import { Change_language } from "../widgets/Change_language";
import { useTranslation } from "react-i18next";

export function Malaysia_page() {
    const { t } = useTranslation();

    return (
        <>
            <Change_language />
            {t('malay_page')}
        </>
    )
}