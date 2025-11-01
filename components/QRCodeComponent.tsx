import React, { useEffect, useRef } from 'react';

// Declare the QRCode library loaded from CDN to satisfy TypeScript
declare const QRCode: {
  toCanvas(canvas: HTMLCanvasElement, text: string, options: object, callback: (error: Error | null) => void): void;
};

interface QRCodeComponentProps {
  url: string;
  size?: number;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ url, size = 256 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && typeof QRCode !== 'undefined') {
      const canvas = canvasRef.current;
      if (canvas) {
        QRCode.toCanvas(canvas, url, { width: size, margin: 1, color: { dark: '#000000', light: '#FFFFFF' } }, (error) => {
          if (error) {
            console.error('Error generating QR code:', error);
          }
        });
      }
    }
  }, [url, size]);

  return (
    <div className="bg-white p-2 rounded-lg inline-block">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default QRCodeComponent;
