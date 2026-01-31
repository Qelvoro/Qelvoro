import React from 'react';
import { Activity, Shield, Zap, FileText } from 'lucide-react';

const Domains = () => {
    return (
        <section id="domains" className="py-24 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Domains</h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Foundational infrastructure for high-stakes operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-6">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">HumanOS</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Human-centered operating systems that adapt to how work is actually done—not how it was imagined.
                            Bridging the gap between rigid protocols and fluid reality.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-6">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Pocket OSHA</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Lightweight, adaptive safety intelligence designed for real-world operations, not paperwork compliance.
                            Proactive hazard detection at the edge.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 mb-6">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Microgrid Stabilizer</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Systems that enhance stability and continuity in distributed energy and infrastructure networks.
                            Ensuring power reliability when the main grid falters.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 mb-6">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Portable EHR</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Patient-centered health records designed for continuity across borders, systems, and providers.
                            Data that travels with the patient, securely.
                        </p>
                    </div>

                </div>

                <div className="mt-12 text-center text-slate-500 font-medium italic">
                    Each Atlas system is designed to operate independently—and integrate seamlessly.
                </div>
            </div>
        </section>
    );
};

export default Domains;
