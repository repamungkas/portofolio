"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Loader2, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@developer.dev", href: "mailto:hello@developer.dev" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  ];

  const socialLinks = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com", color: "hover:text-gray-400" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: TwitterXIcon, label: "Twitter", href: "https://twitter.com", color: "hover:text-sky-400" },
    { icon: Mail, label: "Email", href: "mailto:hello@developer.dev", color: "hover:text-green-400" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-white dark:bg-dark-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Have a project in mind? Want to collaborate? Or just say hi? I&apos;d love to hear from you.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated" className="p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Let&apos;s Start a Conversation</h3>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 group ${social.color} dark:text-gray-300`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * i }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="elevated" className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="John Doe"
                    icon={<Mail className="w-5 h-5" />}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="john@example.com"
                    icon={<Mail className="w-5 h-5" />}
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder="Project Inquiry"
                  icon={<Mail className="w-5 h-5" />}
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-dark-200 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 dark:border-dark-100 hover:border-gray-300 dark:hover:border-dark-200"
                      }`}
                      placeholder="Tell me about your project, idea, or just say hi..."
                    />
                    {errors.message && (
                      <motion.span
                        className="absolute bottom-2 right-3 text-red-500 text-sm flex items-center gap-1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </motion.span>
                    )}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" isLoading={status === "submitting"}>
                  {status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Sent Successfully!
                    </>
                  ) : status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <motion.p
                    className="text-center text-green-600 dark:text-green-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </motion.p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-dark-200 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 dark:border-dark-100 hover:border-gray-300 dark:hover:border-dark-200"
          }`}
        />
        {error && (
          <motion.span
            className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-sm flex items-center gap-1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.span>
        )}
      </div>
    </div>
  );
}
