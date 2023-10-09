import { useTranslation } from "react-i18next";

export function Malaysia_page() {
    const { t } = useTranslation();

    return (
        <>
            {t('malay_page')}
        </>
    )
}