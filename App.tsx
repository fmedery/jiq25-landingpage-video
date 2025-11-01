import React from 'react';
import { useTranslation } from 'react-i18next';
import qrCode from '/assets/qrcode.png';

const LogoIcon: React.FC = () => (
    <svg className="w-16 h-16 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
    </svg>
);

const App: React.FC = () => {
    const { t, i18n } = useTranslation();
    const appUrl = 'https://jiq-2025.fmedery.demo.altostrat.com/';

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <main className="relative min-h-screen w-full flex items-end justify-center p-4 sm:p-8 text-white font-sans overflow-hidden">
            <div className="relative z-10 bg-black bg-opacity-40 backdrop-blur-lg px-8 py-4 rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl flex items-center justify-center space-x-8">
                <div className="absolute top-4 right-4 flex space-x-2">
                    <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded-full text-sm ${i18n.language === 'en' ? 'bg-white text-black' : 'bg-black/20'}`}>EN</button>
                    <button onClick={() => changeLanguage('fr')} className={`px-3 py-1 rounded-full text-sm ${i18n.language === 'fr' ? 'bg-white text-black' : 'bg-black/20'}`}>FR</button>
                </div>
                <div className="flex-shrink-0">
                    <img src={qrCode} alt="QR Code" className="rounded-lg border-4 border-white shadow-lg" style={{ width: '220px', height: '220px' }} />
                </div>
                <div className="flex flex-col items-center text-center">
                    <LogoIcon />
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        {t('title')}
                    </h1>
                    <p className="mt-4 text-lg text-gray-300" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        {t('subtitle')}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default App;