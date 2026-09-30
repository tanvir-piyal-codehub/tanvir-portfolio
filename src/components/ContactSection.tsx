import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto generation for real sending without mock backend pretend
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Tanvir,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Trigger user mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-[#16f2b3]/10 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="LET'S CONNECT"
          subtitle="I'm always interested in learning, building, and connecting with other people in tech."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you'd like to discuss a project, collaborate on competitive programming problems, or simply connect, feel free to reach out through any of these channels.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4">
                {/* Email Card with Copy button */}
                <div className="p-4 rounded-xl bg-[#10172d] border border-[#1b2c68a0] hover:border-[#16f2b3]/60 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0a0f24] border border-[#1b2c68] text-[#16f2b3]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Email Address</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#16f2b3] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#0a0f24] hover:bg-[#1b2c68] text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#16f2b3]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Card */}
                <div className="p-4 rounded-xl bg-[#10172d] border border-[#1b2c68a0] hover:border-[#16f2b3]/60 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0a0f24] border border-[#1b2c68] text-slate-200">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">GitHub</p>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        tanvir-piyal-codehub
                      </span>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0a0f24] hover:bg-[#1b2c68] text-[#16f2b3] transition-colors"
                    aria-label="Visit GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* LinkedIn Card */}
                <div className="p-4 rounded-xl bg-[#10172d] border border-[#1b2c68a0] hover:border-[#16f2b3]/60 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0a0f24] border border-[#1b2c68] text-cyan-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">LinkedIn</p>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        md-tanvir-hossain-48554b298
                      </span>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0a0f24] hover:bg-[#1b2c68] text-[#16f2b3] transition-colors"
                    aria-label="Visit LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-[#10172d] border border-[#1b2c68a0] flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0a0f24] border border-[#1b2c68] text-pink-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-xl bg-[#090d1c] border border-[#1b2c68]/80 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16f2b3] animate-pulse" />
              <span>Open to hackathons, team projects, and software discussions.</span>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#1b2c68a0] bg-[#10172d]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
              {/* Form Header */}
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#16f2b3]" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#16f2b3]/20 flex items-center justify-center text-[#16f2b3]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Email Client Triggered!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been formatted and loaded into your device's email client ready to send to <span className="text-[#16f2b3] font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-[#0d1224] border border-[#1b2c68] text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d1c] border border-[#1b2c68] text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d1c] border border-[#1b2c68] text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Collaboration / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d1c] border border-[#1b2c68] text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Tanvir, I came across your portfolio and would love to connect..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d1c] border border-[#1b2c68] text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#16f2b3] focus:ring-1 focus:ring-[#16f2b3] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-mono">
                    Directly drafts an email to {PERSONAL_INFO.email}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
