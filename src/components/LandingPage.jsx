import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Button
} from "./ui/card";

export default function LandingPage() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "he" : "en";
        i18n.changeLanguage(newLang);
        document.body.dir = newLang === "he" ? "rtl" : "ltr";
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex flex-col">
            <header className="bg-black bg-opacity-75 shadow-lg p-6 flex justify-between items-center">
                <h1 className="text-4xl font-extrabold tracking-wide uppercase">{t('welcome')}</h1>
                <Button onClick={toggleLanguage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                    {i18n.language === "en" ? "עברית" : "English"}
                </Button>
            </header>

            <main className="flex-grow p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-gray-900 bg-opacity-75 shadow-xl rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-400">{t('overview')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300">{t('overviewContent')}</p>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900 bg-opacity-75 shadow-xl rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-400">{t('groupStructure')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300">{t('groupStructureContent')}</p>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900 bg-opacity-75 shadow-xl rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-400">{t('management')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300">{t('managementContent')}</p>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900 bg-opacity-75 shadow-xl rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-400">{t('news')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300">{t('newsContent')}</p>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900 bg-opacity-75 shadow-xl rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-blue-400">{t('contact')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300">{t('contactContent')}</p>
                    </CardContent>
                </Card>
            </main>

            <footer className="bg-black bg-opacity-75 p-6 text-center">
                <p className="text-gray-400">&copy; 2024 Moldawsky Group</p>
            </footer>
        </div>
    );
}
