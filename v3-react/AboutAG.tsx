import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Users, Target, Heart, Sparkles, TrendingUp,
  Award, Globe, Zap, BookOpen, Coffee, Rocket, Building2,
  CheckCircle, Star, Quote, ArrowUpRight, MapPin, Calendar,
  Lightbulb, Handshake, Shield, Clock, ChevronRight
} from 'lucide-react';

const AboutAG = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const countersSection = document.getElementById('stats');
      if (countersSection) {
        const rect = countersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCountersVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: 6, suffix: '+', label: 'Years of Excellence', icon: <Award className="h-6 w-6" /> },
    { value: 25, suffix: '+', label: 'Projects Delivered', icon: <Rocket className="h-6 w-6" /> },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: <Heart className="h-6 w-6" /> },
    { value: 16, suffix: '+', label: 'Team Members', icon: <Users className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Culture First, Skills Second',
      description: 'We hire for passion and potential. Technical skills can be taught, but empathy, dedication, and the drive to excel come from within.',
      color: 'from-pink-50 to-red-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Unity',
      description: 'No rigid hierarchies here. We work as one team, where every voice matters and everyone contributes to our collective success.',
      color: 'from-purple-50 to-indigo-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Continuous Learning',
      description: 'We empower our team to grow, learn, and evolve. Every project is an opportunity to expand our horizons and master new technologies.',
      color: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: 'Client Partnership',
      description: 'We treat every project as our own, building lasting relationships that go beyond code to create true business value.',
      color: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started as a solo project with Formester, laying the foundation for what would become Acorn Globus.',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      year: '2019',
      title: 'Team Formation',
      description: 'Ankit Singhania and Tarun Bhukya joined forces, transforming a solo venture into a collaborative powerhouse.',
      icon: <Users className="h-5 w-5" />
    },
    {
      year: '2020',
      title: 'Scaling Up',
      description: 'Expanded our team and services, taking on more complex projects and building our reputation.',
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      year: '2021',
      title: 'Product Success',
      description: 'Launched Formester as a full SaaS product, proving our capability to build and scale successful products.',
      icon: <Rocket className="h-5 w-5" />
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded our client base globally, working with startups and enterprises across continents.',
      icon: <Globe className="h-5 w-5" />
    },
    {
      year: '2024',
      title: 'Innovation Leader',
      description: 'Continue to push boundaries with AI-powered solutions and cutting-edge technologies.',
      icon: <Zap className="h-5 w-5" />
    }
  ];

  const founders = [
    {
      name: 'Ankit Singhania',
      role: 'Co-Founder',
      bio: 'Visionary leader with a passion for building innovative solutions that make a real impact.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    },
    {
      name: 'Tarun Bhukya',
      role: 'Co-Founder',
      bio: 'Technical architect who believes in the power of clean code and exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
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
              <Link to="/v3/about" className="text-purple-600 font-medium">About</Link>
              <Link to="/v3/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</Link>
              <Link to="/v3/portfolio" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portfolio</Link>
              <Link to="/v3/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</Link>
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
              <Building2 className="h-4 w-4 mr-2" />
              About Acorn Globus
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Build More Than
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                Software, We Build Partnerships
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              From a solo project to a thriving team of passionate innovators, we're on a mission to
              transform ideas into exceptional digital experiences that drive real business value.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/v3/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/v3/portfolio"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
              >
                View Our Work
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  animation: countersVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a solo venture with Formester has evolved into something much greater.
                When Ankit Singhania and Tarun Bhukya joined forces, they didn't just create a company –
                they built a culture.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, Acorn Globus stands as a testament to what happens when passion meets purpose.
                We're not just developers; we're problem solvers, innovators, and partners in our
                clients' success stories.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 6 years of experience and a team of 16+ talented individuals, we've delivered
                25+ successful projects while maintaining a 98% client satisfaction rate. But numbers
                only tell part of our story – the real magic lies in our approach.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl opacity-10 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Acorn Globus Team"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <Quote className="h-8 w-8 text-purple-200 mb-2" />
                <p className="text-sm font-medium text-gray-900 italic">
                  "Culture First, Skills Second"
                </p>
                <p className="text-xs text-gray-600 mt-1">- Our Hiring Philosophy</p>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founders</h3>
            <p className="text-lg text-gray-600">The visionaries behind Acorn Globus</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-24 h-24 rounded-full border-4 border-purple-100"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{founder.name}</h4>
                    <p className="text-purple-600 font-medium">{founder.role}</p>
                    <p className="text-gray-600 mt-2">{founder.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-200 to-indigo-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`inline-block p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className={`flex items-center space-x-3 mb-3 ${
                        index % 2 === 0 ? 'justify-end' : 'justify-start'
                      }`}>
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                          {item.icon}
                        </div>
                        <span className="text-2xl font-bold text-purple-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-white shadow-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
                onClick={() => setActiveValue(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 bg-gradient-to-br ${value.color} rounded-2xl ${value.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Acorn Globus?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the digital landscape
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8">
              <Handshake className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">True Partnership</h3>
              <p className="text-gray-600">
                We don't just deliver code; we become an extension of your team, invested in your success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We stay ahead of the curve, bringing cutting-edge solutions to solve your business challenges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <Shield className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                With a 98% client satisfaction rate, our commitment to excellence speaks for itself.
              </p>
            </div>
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
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's transform your ideas into reality with passion, innovation, and a team that truly cares.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/v3/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/v3/services"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              Explore Services
              <ChevronRight className="ml-2 h-5 w-5" />
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
                Crafting digital experiences with passion and innovation.
              </p>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/v3/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
                <li><Link to="/v3/services" className="hover:text-purple-600 transition-colors">Services</Link></li>
                <li><Link to="/v3/portfolio" className="hover:text-purple-600 transition-colors">Portfolio</Link></li>
                <li><Link to="/v3/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Resource Augmentation</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Project Development</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Maintenance & Support</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">MVP Development</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>Gachibowli, Hyderabad, India</span>
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

export default AboutAG;