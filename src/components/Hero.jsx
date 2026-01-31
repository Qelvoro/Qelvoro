import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';

const Hero = () => {
    return (
        <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-50 to-slate-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                        Empowering Field Operations
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                        Practical AI for the <br />
                        <span className="text-brand-600">Physical World</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                        Atlas AI Labs builds modular intelligence systems for safety, energy efficiency, and field autonomy.
                        We turn data into physical action.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#domains" className="inline-flex items-center justify-center gap-2 bg-brand-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-brand-800 transition-all hover:scale-105 shadow-lg shadow-brand-900/10">
                            Explore Capabilities
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#case-studies" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all">
                            View Case Studies
                        </a>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        { icon: ShieldCheck, title: "Safety First", desc: "Predictive hazard detection for industrial environments." },
                        { icon: Zap, title: "Energy Optimization", desc: "Automated grid balancing and resource management." },
                        { icon: Activity, title: "Real-time Ops", desc: "Sub-millisecond decision making at the edge." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
