import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, Code2, Users, Clock, Shield, Rocket, Building, CheckCircle,
  Cpu, Layers, GitBranch, Search, Lightbulb, Target, Zap, Heart,
  ChevronRight, Star, Award, TrendingUp, Settings, Package, Globe
} from 'lucide-react';

const ServicesAG = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('process');

  const services = [
    {
      id: 1,
      icon: <Users className="h-8 w-8" />,
      title: 'Resource Augmentation',
      description: 'Integrate our skilled professionals seamlessly into your existing workflows. Our experts become an extension of your team, bringing specialized knowledge and experience.',
      features: [
        'Skilled developers & designers',
        'Flexible engagement models',
        'Quick onboarding process',
        'Cultural fit assessment'
      ],
      gradient: 'from-blue-500 to-cyan-600',
      link: '/v3/services/resource-augmentation'
    },
    {
      id: 2,
      icon: <Shield className="h-8 w-8" />,
      title: 'Maintenance & Support',
      description: 'Keep your systems running smoothly with our dedicated maintenance and support services. We ensure your applications stay updated, secure, and performant.',
      features: [
        '24/7 monitoring',
        'Regular updates & patches',
        'Performance optimization',
        'Security audits'
      ],
      gradient: 'from-green-500 to-emerald-600',
      link: '/v3/services/maintenance-support'
    },
    {
      id: 3,
      icon: <Clock className="h-8 w-8" />,
      title: 'Short & Long-Term Projects',
      description: 'Partner with us for comprehensive development projects. We handle everything from initial planning to deployment and beyond, ensuring project success.',
      features: [
        'End-to-end development',
        'Agile methodology',
        'Regular milestones',
        'Continuous delivery'
      ],
      gradient: 'from-purple-500 to-pink-600',
      link: '/v3/services/long-term-projects'
    },
    {
      id: 4,
      icon: <Rocket className="h-8 w-8" />,
      title: 'MVP Development',
      description: 'Transform your ideas into reality quickly with our MVP development service. Launch your product in just 8-12 weeks with professional-grade quality.',
      features: [
        '8-12 week timeline',
        'Investor-ready MVPs',
        'Agile development',
        'Built-in analytics'
      ],
      gradient: 'from-orange-500 to-red-600',
      link: '/v3/services/mvp-development'
    }
  ];

  const process = [
    {
      id: 1,
      phase: 'Discovery',
      title: 'Understanding Your Vision',
      description: 'We begin with in-depth problem analysis and market research to understand your goals and challenges.',
      activities: [
        'Problem Analysis',
        'Market Research',
        'Resource Assessment',
        'Team Structure Planning'
      ],
      icon: <Search className="h-6 w-6" />,
      color: 'purple'
    },
    {
      id: 2,
      phase: 'Strategy',
      title: 'Planning for Success',
      description: 'We develop a comprehensive strategy that aligns with your business objectives and technical requirements.',
      activities: [
        'Architecture Design',
        'Technology Selection',
        'Roadmap Creation',
        'Risk Assessment'
      ],
      icon: <Lightbulb className="h-6 w-6" />,
      color: 'indigo'
    },
    {
      id: 3,
      phase: 'Development',
      title: 'Building Your Solution',
      description: 'Our team executes the plan with agile methodology, ensuring quality and timely delivery.',
      activities: [
        'Agile Development',
        'Code Reviews',
        'Testing & QA',
        'Documentation'
      ],
      icon: <Code2 className="h-6 w-6" />,
      color: 'blue'
    },
    {
      id: 4,
      phase: 'Delivery',
      title: 'Launch & Beyond',
      description: 'We ensure smooth deployment and provide ongoing support to guarantee long-term success.',
      activities: [
        'Deployment',
        'Training',
        'Monitoring',
        'Continuous Support'
      ],
      icon: <Rocket className="h-6 w-6" />,
      color: 'green'
    }
  ];

  const technologies = [
    { name: 'Ruby on Rails', category: 'Backend', icon: '💎' },
    { name: 'React.js', category: 'Frontend', icon: '⚛️' },
    { name: 'Vue.js', category: 'Frontend', icon: '🟢' },
    { name: 'Angular', category: 'Frontend', icon: '🔺' },
    { name: '.NET', category: 'Backend', icon: '🟦' },
    { name: 'Node.js', category: 'Backend', icon: '🟩' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' }
  ];

  const differentiators = [
    {
      title: 'True Partnership Mindset',
      description: "We don't just work for you - we work with you, treating your goals as our own.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Beyond Project Scope',
      description: 'We think ahead, considering scalability and future requirements in every decision.',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Quality-First Approach',
      description: 'Rigorous code reviews and testing ensure robust, maintainable solutions.',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'Proactive Problem Solving',
      description: 'We identify and address potential challenges before they become issues.',
      icon: <Target className="h-6 w-6" />
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
              <Link to="/v3/services" className="text-purple-600 font-medium">Services</Link>
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
              <Settings className="h-4 w-4 mr-2" />
              Our Services
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Digital Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                For Your Business Growth
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              From resource augmentation to full-scale development, we provide the expertise and
              partnership your business needs to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 bg-white border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                activeTab === 'services'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                activeTab === 'process'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Our Process
            </button>
            <button
              onClick={() => setActiveTab('technologies')}
              className={`px-6 py-2 font-medium transition-all duration-300 ${
                activeTab === 'technologies'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Technologies
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {activeTab === 'services' && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    boxShadow: hoveredService === service.id
                      ? '0 20px 40px -10px rgba(147, 51, 234, 0.3)'
                      : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => service.link && navigate(service.link)}
                    className={`inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors ${
                      service.link ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    {service.link ? 'Learn More' : 'Coming Soon'}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

            {/* Differentiators */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Sets Us Apart</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {differentiators.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {activeTab === 'process' && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent z-0"></div>
                  )}

                  <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-${phase.color}-100 text-${phase.color}-600 rounded-xl mb-4`}>
                      {phase.icon}
                    </div>

                    <div className="text-sm font-semibold text-purple-600 mb-2">Phase {phase.id}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{phase.description}</p>

                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <ChevronRight className="h-4 w-4 text-purple-400 mr-2" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Benefits */}
            <div className="mt-20 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collaborative Approach</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We believe in daily collaboration and shared responsibility. Your success is our success,
                  and we work together to achieve your goals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-purple-600 rounded-2xl mb-4 shadow-lg">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Communication</h4>
                  <p className="text-gray-600">Regular stand-ups and updates keep everyone aligned</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-purple-600 rounded-2xl mb-4 shadow-lg">
                    <GitBranch className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Agile Methodology</h4>
                  <p className="text-gray-600">Iterative development ensures flexibility and quality</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-purple-600 rounded-2xl mb-4 shadow-lg">
                    <Target className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Goal-Oriented</h4>
                  <p className="text-gray-600">Every decision aligns with your business objectives</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {activeTab === 'technologies' && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <p className="text-lg text-gray-600">
                We use cutting-edge technologies to build robust and scalable solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                  <span className="text-sm text-gray-500">{tech.category}</span>
                </div>
              ))}
            </div>

            {/* Technology Benefits */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Cpu className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Stack</h3>
                <p className="text-gray-600">
                  We stay updated with the latest technologies to give you a competitive edge.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Layers className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Our solutions are built to grow with your business, ensuring long-term success.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Shield className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
                <p className="text-gray-600">
                  We implement best security practices to protect your data and applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/v3/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/v3/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200"
            >
              View Our Work
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
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
                <div className="text-xs text-gray-500">Gachibowli, Hyderabad</div>
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

export default ServicesAG;