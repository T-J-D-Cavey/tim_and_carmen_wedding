import { useTranslation } from "react-i18next";
import { Change_language } from "../Change_language";

export function Homepage() {
    const { t } = useTranslation();
    return (
        <>
            <Change_language />
            <p>{t("homepage")}</p>
        </>
    )
}