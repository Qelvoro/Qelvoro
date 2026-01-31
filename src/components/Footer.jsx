import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Atlas AI Labs</h3>
                        <p className="max-w-xs">
                            Pioneering safe, energy-efficient AI systems for the real world.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Platform</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Atlas Core</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Edge Nodes</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carrers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/Atlasailab/Atlas----lab.git" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left">
                    © 2026 Atlas AI Labs Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
