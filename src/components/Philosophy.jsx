import React from 'react';

const Philosophy = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* BUILD PHILOSOPHY */}
                <div className="grid md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold text-slate-900">Build Philosophy</h2>
                        <p className="mt-4 text-slate-500 italic">Qelvoro builds for the conditions people avoid designing for.</p>
                    </div>
                    <div className="col-span-2">
                        <ul className="space-y-6">
                            {[
                                "Safety is a system property, not a rulebook",
                                "Humans are adaptive assets, not liabilities",
                                "Resilience matters more than optimization",
                                "Infrastructure must work under stress",
                                "Systems should explain themselves"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-slate-800 font-medium">
                                    <span className="w-2 h-2 bg-brand-900 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* LEADERSHIP */}
                <div className="grid md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold text-slate-900">Leadership</h2>
                    </div>
                    <div className="col-span-2 prose prose-lg text-slate-600">
                        <p>
                            Qelvoro is led by a founder focused on long-term systems design, safety, and infrastructure resilience.
                        </p>
                        <p>
                            The organization operates with a research-first mindset, drawing from systems engineering, human factors, and applied AI.
                            Qelvoro prioritizes durability, clarity, and responsibility over rapid expansion.
                        </p>
                    </div>
                </div>

                {/* STATUS & AUDIENCE */}
                <div className="grid md:grid-cols-2 gap-12 border-t border-slate-200 pt-16">
                    {/* Status */}
                    <div className="bg-slate-50 p-8 rounded-xl">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Status</h3>
                        <p className="text-slate-900 font-bold text-lg mb-2">Under Active Development</p>
                        <p className="text-slate-600">
                            Core systems are being designed, validated, and tested incrementally.
                            Public communication will increase as foundational components reach operational maturity.
                        </p>
                    </div>

                    {/* Who It's For */}
                    <div className="bg-slate-900 p-8 rounded-xl text-white">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Who Qelvoro Is For</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="text-brand-400">→</span> Organizations operating in safety-critical environments
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-400">→</span> Institutions managing infrastructure, health, or energy systems
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand-400">→</span> Teams building human-centered operational technology
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-slate-700 text-slate-400 text-sm italic">
                            Qelvoro is built for environments where consequences matter.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
