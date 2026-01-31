import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 skew-x-12 transform origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Column */}
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium mb-6">
                            LEADERSHIP
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                            Stewards of Intelligence
                        </h2>
                        <div className="prose prose-lg text-slate-600 space-y-6">
                            <p>
                                Atlas AI Labs was founded on a simple premise: <span className="font-semibold text-slate-900">Intelligence must be safe to be useful.</span>
                            </p>
                            <p>
                                We are a team of systems engineers, cognitive architects, and industrial safety experts. We don't just build models; we build the containment, the memory systems, and the safety rails that allow AI to operate in the real world.
                            </p>
                            <p>
                                Our leadership brings decades of experience from high-stakes environments where failure is not an option. We apply that same rigor to Artificial Intelligence.
                            </p>

                            {/* Founder Details - Matching CorelTex Data Points */}
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-4">Founder Profile</h3>
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
                                    <div>
                                        <dt className="text-slate-500">Identity</dt>
                                        <dd className="font-medium text-slate-900">Hassan Salum</dd>
                                    </div>
                                    <div>
                                        <dt className="text-slate-500">Origin</dt>
                                        <dd className="font-medium text-slate-900">September 2007</dd>
                                    </div>
                                    <div>
                                        <dt className="text-slate-500">Role</dt>
                                        <dd className="font-medium text-slate-900">Chief Architect, Founder & CEO</dd>
                                    </div>
                                    <div>
                                        <dt className="text-slate-500">Focus</dt>
                                        <dd className="font-medium text-slate-900">AI Systems, Cognitive Architecture</dd>
                                    </div>
                                    <div className="sm:col-span-2 pt-2">
                                        <a
                                            href="https://www.linkedin.com/in/hassan-salum-0779133a7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                        >
                                            Connect on LinkedIn <span className="ml-1">→</span>
                                        </a>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-10"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                            <div className="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-4">
                                <img
                                    src="/ceo.jpg"
                                    alt="Atlas AI Leadership"
                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-24 text-white">
                                <div className="font-bold text-xl">Hassan Salum</div>
                                <div className="text-blue-200 text-sm">Chief Architect, Founder & CEO</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
