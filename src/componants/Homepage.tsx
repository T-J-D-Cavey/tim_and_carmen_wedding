import { useTranslation } from "react-i18next";

export function Homepage() {
    const { t } = useTranslation();
    return (
        <>
            <p>{t("homepage")}</p>
        </>
    )
}