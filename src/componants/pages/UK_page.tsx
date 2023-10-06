import { Change_language } from "../Change_language";
import { useTranslation } from "react-i18next";

export function UK_page() {
    const { t } = useTranslation();

    return (
        <>
            <Change_language />
            {t("uk_page")}
        </>
    )
}