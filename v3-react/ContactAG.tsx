import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Mail, MapPin, Clock, Send, CheckCircle,
  Calendar, MessageSquare, Globe, Building, User, Phone,
  Linkedin, Instagram, ChevronRight, Sparkles, Users, Rocket
} from 'lucide-react';

const ContactAG = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    company: '',
    services: [] as string[],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Resource Augmentation',
    'Maintenance & Support',
    'Long-term Projects',
    'Rapid MVP Development',
    'Consultation',
    'Other'
  ];

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'India',
    'Australia',
    'Singapore',
    'Japan',
    'Other'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          country: '',
          company: '',
          services: [],
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'business@acornglobus.com',
      description: 'For business inquiries and partnerships'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: 'Gachibowli, Hyderabad',
      description: 'India'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Response Time',
      details: 'Within 8 hours',
      description: 'Business hours response guarantee'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we start a project?',
      answer: 'We can typically begin within 1-2 weeks after initial consultation, depending on project scope and resource availability.'
    },
    {
      question: 'What engagement models do you offer?',
      answer: 'We offer flexible engagement models including dedicated teams, fixed-price projects, and time & material arrangements.'
    },
    {
      question: 'Do you provide support after project completion?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! Our resource augmentation service is designed to seamlessly integrate with your existing workflows and team.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Acorn Globus</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Digital Solutions</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/v3" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</Link>
              <Link to="/v3/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</Link>
              <Link to="/v3/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</Link>
              <Link to="/v3/portfolio" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portfolio</Link>
              <Link to="/v3/contact" className="text-purple-600 font-medium">Contact</Link>
              <Link
                to="/v3/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                Amazing Together
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help
              bring your ideas to life.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Message
                <Send className="h-5 w-5 ml-2" />
              </a>
              <button className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200">
                <Calendar className="h-5 w-5 mr-2" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg text-purple-600 font-semibold mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Main Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - 2 columns */}
            <div id="contact-form" className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        id="country"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select Country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Services Required *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map(service => (
                        <label
                          key={service}
                          className={`flex items-center justify-center px-4 py-2 rounded-xl cursor-pointer transition-all ${
                            formData.services.includes(service)
                              ? 'bg-purple-100 text-purple-700 border-2 border-purple-400'
                              : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-purple-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message / Query *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      submitSuccess
                        ? 'bg-green-500 text-white'
                        : isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {submitSuccess ? (
                      <span className="inline-flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Message Sent Successfully!
                      </span>
                    ) : isSubmitting ? (
                      'Sending...'
                    ) : (
                      <span className="inline-flex items-center">
                        Send Message
                        <Send className="h-5 w-5 ml-2" />
                      </span>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    We'll get back to you within 8 business hours
                  </p>
                </form>
              </div>
            </div>

            {/* Right Sidebar - 1 column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl hover:shadow-md transition-all">
                    <span className="flex items-center">
                      <Calendar className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium text-gray-700">Book Free Consultation</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl hover:shadow-md transition-all">
                    <span className="flex items-center">
                      <Users className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium text-gray-700">View Our Team</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl hover:shadow-md transition-all">
                    <span className="flex items-center">
                      <Rocket className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium text-gray-700">Start a Project</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-all group"
                  >
                    <span className="flex items-center">
                      <Linkedin className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium text-gray-700">LinkedIn</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-all group"
                  >
                    <span className="flex items-center">
                      <Instagram className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium text-gray-700">@acornglobus</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <Sparkles className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
            <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 mb-2">Gachibowli, Hyderabad</p>
            <p className="text-gray-600 mb-8">India</p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200">
              <Globe className="h-5 w-5 mr-2" />
              View on Map
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Acorn Globus</div>
                <div className="text-xs text-gray-500">Digital Solutions Partner</div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href="mailto:business@acornglobus.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                business@acornglobus.com
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">© 2024 Acorn Globus</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactAG;