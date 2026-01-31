import React from 'react';
import { Server, Cpu, Radio } from 'lucide-react';

const Products = () => {
    return (
        <section id="products" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Modular Systems</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Our hardware-agnostic platform integrates seamlessly with your existing infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Server className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Atlas Core</h3>
                                <p className="text-slate-600">Centralized command unit for data aggregation and model orchestration. Deploys on-premise or cloud.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                    <Cpu className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Edge Nodes</h3>
                                <p className="text-slate-600">Low-latency inference devices for remote field operations. Runs lightweight vision and sensor models.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Radio className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Mesh Link</h3>
                                <p className="text-slate-600">Resilient communication protocol for disconnected environments. Swarm intelligence capable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-100 rounded-2xl p-8 aspect-square relative overflow-hidden group">
                        {/* Abstract Representation of Modular System */}
                        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
                        <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between animate-pulse">
                                <div className="w-8 h-8 bg-blue-500 rounded-full" />
                                <div className="h-2 bg-slate-200 rounded w-2/3" />
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between mt-8">
                                <div className="w-8 h-8 bg-indigo-500 rounded-full" />
                                <div className="h-2 bg-slate-200 rounded w-2/3" />
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between -mt-8">
                                <div className="w-8 h-8 bg-emerald-500 rounded-full" />
                                <div className="h-2 bg-slate-200 rounded w-2/3" />
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
                                <div className="w-8 h-8 bg-slate-500 rounded-full" />
                                <div className="h-2 bg-slate-200 rounded w-2/3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
