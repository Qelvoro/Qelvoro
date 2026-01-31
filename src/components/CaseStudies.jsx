import React from 'react';
import { BarChart3, Scale, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            icon: BarChart3,
            sector: "Financial Services",
            title: "Investment Research Assistant",
            problem: "Analysts were spending 70% of their time manually parsing thousands of quarterly reports.",
            solution: "Deployed an AI agent that automatically digests financial filings and highlights key risk factors.",
            metric: "40 hrs/week Saved per Analyst"
        },
        {
            icon: Scale,
            sector: "Legal & Compliance",
            title: "Regulatory Audit Assistant",
            problem: "Cross-border compliance checks were creating a 3-week bottleneck for new client onboarding.",
            solution: "Integrated a compliance assistant that instantly cross-references documents with global regulations.",
            metric: "95% Faster Onboarding"
        },
        {
            icon: Wrench,
            sector: "Industrial Operations",
            title: "Field Maintenance Assistant",
            problem: "Junior technicians lacked real-time access to complex equipment schematics in the field.",
            solution: "Built a voice-enabled technical co-pilot that guides technicians through repair protocols.",
            metric: "50% Reduction in Downtime"
        }
    ];

    return (
        <section id="case-studies" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Proven Impact</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Enterprise AI Assistants</h3>
                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                        Specialized agents deploying expertise where it matters most.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item, i) => (
                        <div key={i} className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-200 transition-all duration-300">
                            <div className="absolute top-8 right-8 text-slate-300 group-hover:text-brand-500 transition-colors">
                                <ArrowUpRight size={24} />
                            </div>

                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>

                            <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">{item.sector}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Challenge</div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.problem}</p>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-slate-400 uppercase mb-1">AI Solution</div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-200 flex items-center gap-2 text-slate-900 font-bold">
                                <CheckCircle2 size={16} className="text-green-500" />
                                {item.metric}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
