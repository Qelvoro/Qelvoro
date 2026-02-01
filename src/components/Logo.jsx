import React from 'react';

const Logo = () => {
    return (
        <div className="relative overflow-hidden" style={{ width: '300px', height: '75px' }}>
            <style>
                {`
                @keyframes shimmer {
                    0% { transform: translateX(-150%) skewX(-20deg); }
                    100% { transform: translateX(150%) skewX(-20deg); }
                }
                .logo-shimmer {
                    animation: shimmer 4s infinite linear;
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
                }
                `}
            </style>

            <img
                src="/qelvoro-logo.png"
                alt="Qelvoro Logo"
                className="absolute h-full w-full object-contain"
                style={{
                    mixBlendMode: 'multiply' // Helps blend white background onto white nav
                }}
            />

            {/* Blue Shimmer Overlay */}
            <div className="absolute inset-0 logo-shimmer z-10 h-full w-full pointer-events-none" />
        </div>
    );
};

export default Logo;
