import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, ChevronDown, Code2, Smartphone, Monitor, Database,
  Users, Globe, Award, Sparkles, Rocket, Target, Clock, CheckCircle,
  ArrowUpRight, Building2, Package, Cpu, Heart, Star, Quote,
  BarChart3, MapPin, Phone, Mail, Linkedin, Twitter, Github,
  Zap, Shield, Layers, GitBranch, Cloud, Terminal, TrendingUp, Laptop
} from 'lucide-react';

const AcornGlobusHome = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);

  const heroSlides = [
    {
      title: 'Crafting Digital',
      subtitle: 'Experiences with Passion',
      description: 'Transformative solutions that empower businesses through innovative technology and user-centric design.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
      cta: { text: 'Start Your Project', link: '/contact' }
    },
    {
      title: 'AI-Powered',
      subtitle: 'Innovation at Scale',
      description: 'Leverage cutting-edge AI and machine learning to transform your business processes.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80',
      cta: { text: 'Explore Solutions', link: '/services' }
    },
    {
      title: 'No-Code',
      subtitle: 'Development Platform',
      description: 'Build powerful applications without writing code. From MVP to production in weeks, not months.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=2000&q=80',
      cta: { text: 'See Our Work', link: '/portfolio' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Resource Augmentation',
      description: 'Boost your team with our skilled professionals.',
      features: ['Dedicated Teams', 'Flexible Engagement', 'Expert Developers'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      link: '/v3/services/resource-augmentation'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Short & Long-Term Projects',
      description: 'Flexible engagement models for projects of any duration.',
      features: ['Fixed Price', 'Time & Material', 'Dedicated Teams'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      link: '/v3/services/long-term-projects'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your systems running smoothly.',
      features: ['24/7 Support', 'Bug Fixes', 'Performance Optimization'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      link: '/v3/services/maintenance-support'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'MVP Development',
      description: 'Launch your product idea in just 8-12 weeks with our rapid MVP development.',
      features: ['8-12 Week Timeline', 'Agile Development', 'Investor-Ready'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      link: '/v3/services/mvp-development'
    }
  ];

  const testimonials = [
    {
      name: 'Alon Diamant',
      role: 'CTO',
      company: 'Mayple',
      content: 'Acorn Globus has been instrumental in our success. Their proficient and innovative development team consistently delivers beyond expectations.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      rating: 5
    },
    {
      name: 'Enzo Zadrima',
      role: 'CTO',
      company: 'Viewber',
      content: 'A gifted team with exceptional attention to detail. They transformed our vision into a powerful, user-friendly platform.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      rating: 5
    },
    {
      name: 'Bogdan Arsenie',
      role: 'CTO',
      company: 'PerformLine',
      content: 'Our trusted partner for all front-end projects. Their expertise and dedication have been crucial to our product development.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      rating: 5
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
              <Link to="/v3" className="text-purple-600 font-medium">Home</Link>
              <Link to="/v3/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</Link>
              <Link to="/v3/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</Link>
              <Link to="/v3/portfolio" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portfolio</Link>
              <Link to="/v3/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</Link>
              <Link
                to="/contact"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                  Innovative IT Solutions
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to={heroSlides[currentSlide].cta.link}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                >
                  {heroSlides[currentSlide].cta.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
                  <Sparkles className="mr-2 h-5 w-5" />
                  View Portfolio
                </button>
              </div>

              {/* Slide Navigation */}
              <div className="flex items-center space-x-4 mt-8">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronDown className="h-5 w-5 text-gray-600 rotate-90" />
                </button>
                <div className="flex space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-8 h-2 bg-purple-600 rounded-full'
                          : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronDown className="h-5 w-5 text-gray-600 -rotate-90" />
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[400px] lg:h-[600px]">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === currentSlide
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Overlay Info Cards */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Rocket className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Rapid MVP</div>
                        <div className="text-xs text-gray-600">2-4 Weeks</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Secure</div>
                        <div className="text-xs text-gray-600">Enterprise Grade</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Counter */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-gray-900">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Formester & Eitoss */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transforming ideas into successful products that make a real impact
            </p>
          </div>

          {/* Formester Case Study */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Our Own SaaS Product
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Formester
                  <span className="block text-xl text-gray-600 mt-2">Our AI-Powered Form Builder</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We built Formester as our own SaaS product, demonstrating our expertise in creating
                  scalable, innovative solutions. This AI-powered platform lets users create sophisticated
                  forms simply by describing them in plain English - no coding required.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <Terminal className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-1">AI-Powered</h4>
                    <p className="text-sm text-gray-600">Smart form generation with AI</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <Zap className="h-8 w-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-1">No-Code</h4>
                    <p className="text-sm text-gray-600">Build forms without coding</p>
                  </div>
                </div>

                <div className="flex items-center space-x-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">1000+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">50K+</div>
                    <div className="text-sm text-gray-600">Forms Created</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">4.8★</div>
                    <div className="text-sm text-gray-600">User Rating</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://formester.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Visit Formester
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                  <button
                    onClick={() => navigate('/v3/case-studies/formester')}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-10 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                    alt="Formester Platform"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Rocket className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Our Product</div>
                        <div className="text-xs text-gray-600">Live & Growing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eitoss Case Study */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl opacity-10 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80"
                    alt="Eitoss Platform"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Target className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">MVP Success</div>
                        <div className="text-xs text-gray-600">Secured Funding</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  Startup Success
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Eitoss
                  <span className="block text-xl text-gray-600 mt-2">MVP That Secured Funding</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We partnered with Eitoss to build their MVP from scratch, transforming their innovative
                  idea into a market-ready product. Our rapid development approach helped them secure
                  funding and launch successfully in record time.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <Clock className="h-8 w-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-1">8 Weeks</h4>
                    <p className="text-sm text-gray-600">From idea to MVP</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-2xl">
                    <TrendingUp className="h-8 w-8 text-emerald-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-1">Funded</h4>
                    <p className="text-sm text-gray-600">Successfully raised capital</p>
                  </div>
                </div>

                <div className="flex items-center space-x-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">On-Time Delivery</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">3x</div>
                    <div className="text-sm text-gray-600">ROI in 6 months</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">✓</div>
                    <div className="text-sm text-gray-600">Funded Startup</div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/v3/case-studies/eitoss')}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Feature Card Design */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Featured Testimonial */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-2xl opacity-60"></div>
                <div className="relative bg-gradient-to-br from-white to-purple-50/30 rounded-3xl p-10 border border-purple-100">
                  <Quote className="h-12 w-12 text-purple-200 mb-6" />

                  <p className="text-2xl text-gray-800 leading-relaxed mb-8 font-light">
                    "{testimonials[0].content}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonials[0].avatar}
                        alt={testimonials[0].name}
                        className="w-16 h-16 rounded-full mr-4 border-3 border-purple-200"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{testimonials[0].name}</h4>
                        <p className="text-gray-600">{testimonials[0].role}, {testimonials[0].company}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonials[0].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-purple-400 text-purple-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Testimonials Grid */}
            <div className="order-1 lg:order-2 space-y-4">
              {testimonials.slice(1).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                          <p className="text-xs text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimal Design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <div className="text-purple-600">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors"
                  >
                    Explore Service
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>

                {/* Hover Accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Partner with us to bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900">Acorn Globus</div>
              </div>
              <p className="text-sm mb-4">
                Crafting digital experiences with passion and innovation. Your trusted partner for transformative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-purple-600 transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-purple-600 transition-colors">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Backend Systems</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Resource Augmentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>Gachibowli, Hyderabad, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>business@acornglobus.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-sm">
            <p className="text-gray-600">&copy; 2024 Acorn Globus. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AcornGlobusHome;