import { useTranslation } from "react-i18next";

export function UK_page() {
    const { t } = useTranslation();

    return (
        <>
            {t("uk_page")}
        </>
    )
}