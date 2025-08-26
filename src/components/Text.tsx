import { useTranslation } from 'react-i18next'


const Text = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1>{t("hello")}</h1>
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
                <option value="eng">eng</option>
                <option value="ru">ru</option>
            </select>
        </div>
    );
};

export default Text;