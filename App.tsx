import React from 'react';
import { useTranslation } from 'react-i18next';
import qrCode from '/assets/qrcode.png';
import googleLogo from '/assets/google-logo.png';

const LogoIcon: React.FC = () => {
    return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-16 h-16 mb-4" />;
};

const App: React.FC = () => {
    const { t, i18n } = useTranslation();
    const appUrl = 'https://jiq-2025.fmedery.demo.altostrat.com/';

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <main className="relative min-h-screen w-full flex items-end justify-center p-4 sm:p-8 text-white font-sans overflow-hidden">
            <div className="relative z-10 bg-black bg-opacity-40 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md sm:max-w-4xl flex flex-col sm:flex-row items-center justify-center sm:space-x-8">
                <div className="absolute top-4 right-4 flex space-x-2">
                    <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded-full text-sm ${i18n.language === 'en' ? 'bg-white text-black' : 'bg-black/20'}`}>EN</button>
                    <button onClick={() => changeLanguage('fr')} className={`px-3 py-1 rounded-full text-sm ${i18n.language === 'fr' ? 'bg-white text-black' : 'bg-black/20'}`}>FR</button>
                </div>
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <img src={qrCode} alt="QR Code" className="rounded-lg border-4 border-white shadow-lg w-40 h-40 sm:w-56 sm:h-56" />
                </div>
                <div className="flex flex-col items-center text-center">
                    <LogoIcon />
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        {t('title')}
                    </h1>
                    <p className="mt-2 sm:mt-4 text-lg sm:text-2xl text-gray-300" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        {t('subtitle')}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default App;