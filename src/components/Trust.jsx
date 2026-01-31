import React from 'react';
import { Shield, Lock, Database } from 'lucide-react';

const Trust = () => {
    return (
        <section id="trust" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Trust Protocol</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Data & Sovereignty</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="prose prose-lg text-slate-600">
                            <p>
                                Atlas is designed on the principle of data sovereignty. <span className="text-slate-900 font-semibold">We build the logic, but the data remains yours.</span>
                            </p>
                            <p>
                                Our systems are architected to ensure that critical operational data stays within the partner's control boundary—auditable, secure, and portable by default.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 pt-6">
                            {[
                                { icon: Shield, title: "Sovereign Ownership", desc: "No vendor lock-in on your own operational intelligence." },
                                { icon: Lock, title: "Boundary Control", desc: "Architecture that respects your firewall and security clearance." },
                                { icon: Database, title: "Auditability", desc: "Complete transparent logging of all system decisions." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="bg-slate-50 p-3 rounded-lg text-brand-900">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Placeholder for Trust Architecture */}
                    <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full min-h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                        <div className="relative z-10 text-center space-y-4">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto shadow-xl flex items-center justify-center text-brand-900 ring-4 ring-slate-50">
                                <Lock size={40} />
                            </div>
                            <div className="text-sm font-mono text-slate-400">
                                ENCRYPTION: AES-256<br />
                                ACCESS: SOVEREIGN<br />
                                STATUS: SECURE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
