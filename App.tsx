import React from 'react';
import QRCodeComponent from './components/QRCodeComponent';

const LogoIcon: React.FC = () => (
    <svg className="w-16 h-16 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
);


const App: React.FC = () => {
  const appUrl = 'https://jiq-2025.fmedery.demo.altostrat.com/';

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 text-white font-sans overflow-hidden">
      <div className="relative z-10 bg-gray-900 bg-opacity-50 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md text-center flex flex-col items-center">
        <LogoIcon />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Explore Our Interactive Experience
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Scan the QR code with your phone to begin.
        </p>

        <div className="my-8 bg-white p-4 rounded-xl shadow-lg animate-pulse-subtle">
          <QRCodeComponent url={appUrl} size={280} />
        </div>

        <div className="bg-black/30 px-4 py-2 rounded-full">
          <a href={appUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-200 hover:text-white transition-colors break-all">
            {appUrl}
          </a>
        </div>
      </div>
    </main>
  );
};

export default App;