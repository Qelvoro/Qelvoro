import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-slate-100 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#domains" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Domains</a>
                        <a href="#vision" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Vision</a>
                        <a href="#about" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Company</a>
                        <a href="#contact" className="bg-brand-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-800 transition-colors">
                            Contact
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand-900">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#domains" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-900 hover:bg-slate-50 rounded-md">Domains</a>
                        <a href="#vision" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-900 hover:bg-slate-50 rounded-md">Vision</a>
                        <a href="#about" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-900 hover:bg-slate-50 rounded-md">Company</a>
                        <div className="px-3 py-2">
                            <a href="#contact" className="block w-full text-center bg-brand-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-800 transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
