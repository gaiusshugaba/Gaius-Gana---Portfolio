"use client";

import { useState, useEffect } from "react";
import { X, Loader2, CheckCircle2, Video, Monitor, Zap, Handshake, Mail } from "lucide-react";

const projectTypes = [
  { 
    id: "video", 
    label: "An AI video or ad", 
    icon: Video, 
    text: "Hi Gaius, I'd love to create an AI video or ad for my brand." 
  },
  { 
    id: "design", 
    label: "A design project", 
    icon: Monitor, 
    text: "Hi Gaius, I'd love to discuss a UI/UX design project with you." 
  },
  { 
    id: "automation", 
    label: "AI workflow automation", 
    icon: Zap, 
    text: "Hi Gaius, I'd love to discuss building an AI workflow automation." 
  },
  { 
    id: "collaboration", 
    label: "A collaboration", 
    icon: Handshake, 
    text: "Hi Gaius, I'd love to explore a potential collaboration." 
  },
];

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedType, setSelectedType] = useState("video");
  const [message, setMessage] = useState("");

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setSelectedType("video");
      setMessage(projectTypes[0].text + " Could you share your availability and how we can get started?");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (type: typeof projectTypes[0]) => {
    setSelectedType(type.id);
    setMessage(type.text + " Could you share your availability and how we can get started?");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    // ⚠️ REPLACE THIS WITH YOUR ACTUAL WEB3FORMS ACCESS KEY
    formData.append("access_key", "a2ef78b3-13c5-4e6b-b8b2-c91814e9708d"); 
    formData.append("project_type", selectedType);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-bg/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-bg border border-border-subtle rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">
          
          {/* Left Side (Heading) */}
          <div className="bg-surface p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border-subtle">
            <div>
              <h2 className="font-display-bold text-text text-4xl sm:text-5xl mb-4">
                Let's talk.
              </h2>
              <p className="font-body text-muted text-sm leading-relaxed max-w-xs">
                Whether you have a specific project in mind or just want to explore an idea, I'm all ears.
              </p>
            </div>
            
            <div className="hidden md:block mt-12">
              <a 
                href="mailto:designbygaius@gmail.com" 
                className="inline-flex items-center gap-2 font-body text-sm text-text hover:text-accent transition-colors"
              >
                <Mail size={16} />
                designbygaius@gmail.com
              </a>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="p-8 sm:p-10 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface text-muted hover:text-text transition-colors z-10"
            >
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center h-full">
                <CheckCircle2 size={48} className="text-accent mb-4" />
                <h3 className="font-display-bold text-text text-2xl mb-2">Message Sent!</h3>
                <p className="font-body text-muted text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 font-body font-semibold bg-accent text-on-accent rounded-full px-6 py-2.5 hover:brightness-110 transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Project Type Cards */}
                <div>
                  <label className="block font-body text-text text-sm mb-3">What do you have in mind?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleSelect(type)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "border-accent bg-accent/10 text-text"
                              : "border-border-subtle bg-surface text-muted hover:border-text/30"
                          }`}
                        >
                          <Icon size={18} className={isSelected ? "text-accent" : ""} />
                          <span className="font-body text-sm">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-body text-text text-sm mb-2">Your message — ready to send, or make it yours</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-surface border border-border-subtle rounded-xl px-4 py-3 font-body text-text text-sm focus:outline-none focus:border-accent transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body text-text text-sm mb-2">Where can I reply?</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-surface border border-border-subtle rounded-xl px-4 py-3 font-body text-text text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* WhatsApp (Optional) */}
                <div>
                  <label className="block font-body text-text text-sm mb-2">
                    WhatsApp number <span className="text-muted">(include country code)</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    className="w-full bg-surface border border-border-subtle rounded-xl px-4 py-3 font-body text-text text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="+234 801 234 5678"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm font-body">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full flex items-center justify-center gap-2 font-body font-semibold bg-accent text-on-accent rounded-xl px-6 py-4 hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Mail size={18} />
                    </>
                  )}
                </button>

                <p className="font-body text-muted text-xs text-center">
                  I'll reply to this email. You can also <a href="mailto:designbygaius@gmail.com" className="underline hover:text-text">email me directly</a>.
                </p>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}