import React from 'react';

const Vision = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* VISION */}
                <div className="max-w-3xl">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Vision</h2>
                    <p className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed font-serif">
                        Qelvoro envisions a world where critical systems do not fail silently, and humans are not reduced to weak links.
                        <br /><br />
                        As technology becomes more autonomous, the infrastructure that supports safety, accountability, and resilience must evolve alongside it.
                        <br /><br />
                        <span className="text-brand-900">Qelvoro exists to build that missing layer.</span>
                    </p>
                </div>

                {/* MISSION */}
                <div className="max-w-3xl ml-auto text-right">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Mission</h2>
                    <p className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed font-serif">
                        Our mission is to design and deploy systems that strengthen human–machine collaboration in high-stakes environments.
                        <br /><br />
                        We focus on safety, continuity, and resilience across industries where <span className="text-brand-900">failure is not an option.</span>
                    </p>
                </div>

                {/* WHY QELVORO */}
                <div className="bg-slate-50 p-12 rounded-2xl border-l-4 border-brand-900">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Why Qelvoro Exists</h2>
                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <p>
                            Modern systems are optimized for efficiency, not resilience.
                            When conditions change—fatigue, overload, unexpected events—these systems break down, often placing the burden on humans without adequate support.
                        </p>
                        <p className="font-bold text-slate-900 pt-4">
                            Qelvoro was founded to correct this imbalance by building infrastructure that adapts to real human behavior and real-world uncertainty.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Vision;
