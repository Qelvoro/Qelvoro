import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Atlas AI Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:support@atlasailab.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 bg-brand-900 text-white">
                            <h2 className="text-3xl font-bold mb-6">Engagement</h2>
                            <p className="text-blue-100 mb-6">
                                Atlas operates on a partnership model, not a transactional one. We work with organizations prepared to integrate deep infrastructure, rather than those seeking quick-fix tools.
                            </p>
                            <p className="text-blue-100 mb-12 italic border-l-2 border-brand-500 pl-4">
                                Inquiries regarding pilot programs and strategic deployment are reviewed on a rolling basis.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:support@atlasailab.com" className="flex items-center gap-4 hover:text-brand-200 transition-colors">
                                    <Mail className="text-brand-500" />
                                    <span>support@atlasailab.com</span>
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=255610675606" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-brand-200 transition-colors">
                                    <MessageCircle className="text-brand-500" />
                                    <span>Click to Chat (WhatsApp)</span>
                                </a>
                            </div>
                        </div>

                        <div className="p-12">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-600 text-white py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors">
                                    Send Message via Email
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
