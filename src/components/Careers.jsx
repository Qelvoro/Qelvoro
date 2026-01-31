import React from 'react';
import { Users, Target, Zap } from 'lucide-react';

const Careers = () => {
    return (
        <section id="careers" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Standard</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Talent & Culture</h3>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
                        <div className="prose prose-lg text-slate-600 mb-10 max-w-none">
                            <p className="lead text-xl text-slate-900 font-medium">
                                We are a team of systems thinkers, engineers, and operators.
                            </p>
                            <p>
                                Atlas seeks individuals who prioritize <span className="text-brand-900 font-semibold">architectural integrity over speed</span>, and who are comfortable working on problems where the cost of failure is high. We value depth, discipline, and the ability to think in decades.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                            {[
                                { icon: Users, title: "Systems Thinkers", desc: "Engineers who see the whole board." },
                                { icon: Target, title: "High Stakes", desc: "Comfort in zero-failure environments." },
                                { icon: Zap, title: "Long View", desc: "Decades, not quarters." }
                            ].map((item, i) => (
                                <div key={i} className="text-center md:text-left">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-900 mb-4 ring-1 ring-slate-100">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <a href="mailto:support@atlasailab.com" className="inline-flex items-center text-brand-900 font-semibold hover:text-brand-700 transition-colors">
                                View Open Roles <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
