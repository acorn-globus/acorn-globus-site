import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Users, Zap, Shield, CheckCircle,
  Clock, TrendingUp, Layers, Globe, Award, Star,
  ChevronRight, ArrowLeft, Sparkles, Settings, GitBranch,
  Rocket, Target, Brain, Package, Database, Cloud
} from 'lucide-react';

const ResourceAugmentation = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Flexible Scaling',
      description: 'Scale your team up or down based on project requirements with minimal notice period.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Seamless Integration',
      description: 'Our professionals adapt to your workflows and culture, becoming true extensions of your team.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Vetted Talent',
      description: 'Rigorously screened professionals with proven expertise and technical excellence.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Cost Effective',
      description: 'Access top-tier talent without the overhead of full-time hiring and training.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Onboarding',
      description: 'Get skilled professionals integrated into your team within days, not months.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Domain Expertise',
      description: 'Specialists across various technologies and industries at your disposal.'
    }
  ];

  const expertise = {
    frontend: {
      title: 'Frontend Development',
      icon: <Package className="h-6 w-6" />,
      technologies: [
        { name: 'React.js', level: 'Expert', projects: '50+' },
        { name: 'Vue.js', level: 'Expert', projects: '30+' },
        { name: 'Next.js', level: 'Advanced', projects: '25+' },
        { name: 'Angular', level: 'Advanced', projects: '20+' },
        { name: 'TypeScript', level: 'Expert', projects: '40+' },
        { name: 'Nuxt.js', level: 'Advanced', projects: '15+' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      technologies: [
        { name: 'Node.js', level: 'Expert', projects: '45+' },
        { name: 'Ruby on Rails', level: 'Expert', projects: '60+' },
        { name: 'Python/Django', level: 'Advanced', projects: '35+' },
        { name: 'Java Spring', level: 'Advanced', projects: '25+' },
        { name: 'PHP/Laravel', level: 'Advanced', projects: '20+' },
        { name: '.NET Core', level: 'Intermediate', projects: '15+' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      technologies: [
        { name: 'AWS', level: 'Expert', projects: '50+' },
        { name: 'Google Cloud', level: 'Advanced', projects: '30+' },
        { name: 'Azure', level: 'Advanced', projects: '20+' },
        { name: 'Docker', level: 'Expert', projects: '60+' },
        { name: 'Kubernetes', level: 'Advanced', projects: '35+' },
        { name: 'CI/CD', level: 'Expert', projects: '70+' }
      ]
    },
    other: {
      title: 'Other Skills',
      icon: <Layers className="h-6 w-6" />,
      technologies: [
        { name: 'UI/UX Design', level: 'Advanced', projects: '40+' },
        { name: 'Mobile Development', level: 'Advanced', projects: '25+' },
        { name: 'QA & Testing', level: 'Expert', projects: '50+' },
        { name: 'Project Management', level: 'Expert', projects: '60+' },
        { name: 'Technical Writing', level: 'Advanced', projects: '30+' },
        { name: 'Data Science', level: 'Intermediate', projects: '15+' }
      ]
    }
  };

  const process = [
    {
      step: 1,
      title: 'Requirement Analysis',
      description: 'We understand your project needs, team dynamics, and technical requirements.',
      icon: <Target className="h-5 w-5" />
    },
    {
      step: 2,
      title: 'Talent Matching',
      description: 'We identify the perfect professionals from our pre-vetted talent pool.',
      icon: <Users className="h-5 w-5" />
    },
    {
      step: 3,
      title: 'Technical Assessment',
      description: 'Candidates undergo rigorous technical evaluation specific to your needs.',
      icon: <Brain className="h-5 w-5" />
    },
    {
      step: 4,
      title: 'Client Interview',
      description: 'You interview shortlisted candidates to ensure the perfect fit.',
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      step: 5,
      title: 'Quick Onboarding',
      description: 'Selected professionals integrate seamlessly into your team.',
      icon: <Rocket className="h-5 w-5" />
    },
    {
      step: 6,
      title: 'Ongoing Support',
      description: 'Continuous monitoring and support to ensure project success.',
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const engagementModels = [
    {
      title: 'Dedicated Team',
      description: 'Full-time professionals working exclusively on your projects.',
      features: ['100% dedicated resources', 'Direct team management', 'Long-term engagement', 'Scalable team size'],
      ideal: 'Ideal for long-term projects and product development'
    },
    {
      title: 'Part-Time Resources',
      description: 'Skilled professionals for specific hours or days per week.',
      features: ['Flexible hours', 'Cost-effective', 'Multiple skill sets', 'Quick scaling'],
      ideal: 'Perfect for specific tasks and ongoing support'
    },
    {
      title: 'Project-Based',
      description: 'Resources allocated for the duration of specific projects.',
      features: ['Fixed timeline', 'Clear deliverables', 'Milestone-based', 'Result-oriented'],
      ideal: 'Best for well-defined projects with clear scope'
    }
  ];

  const testimonials = [
    {
      content: "The team from Acorn Globus integrated seamlessly with our development workflow. Their proficiency in learning our tech stack and innovative problem-solving approach has been invaluable.",
      author: "Alon Diamant",
      role: "CTO",
      company: "Mayple",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    {
      content: "Working with Acorn Globus resources feels like having an extended in-house team. Their attention to detail and proactive suggestions for improvements have exceeded our expectations.",
      author: "Enzo Zadrima",
      role: "CTO",
      company: "Viewber",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    },
    {
      content: "The quality of talent and the speed of integration has been exceptional. Acorn Globus has become our go-to partner for scaling our development capabilities.",
      author: "Sarah Mitchell",
      role: "VP Engineering",
      company: "PerformLine",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
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
                <div className="text-xs text-gray-500 uppercase tracking-wider">Resource Augmentation</div>
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
                Get Started
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
          <Link
            to="/v3/services"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                <Users className="h-4 w-4 mr-2" />
                Team Augmentation
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Scale Your Team with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                  Top-Tier Talent
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access skilled professionals who seamlessly integrate into your team,
                bringing expertise across various technologies and domains to accelerate
                your project delivery.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/v3/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Build Your Team
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200">
                  <Clock className="h-5 w-5 mr-2" />
                  Quick Integration
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Users className="h-8 w-8 text-purple-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <p className="text-sm text-gray-600">Expert Developers</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Globe className="h-8 w-8 text-indigo-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <p className="text-sm text-gray-600">Technologies</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <p className="text-sm text-gray-600">Client Retention</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Clock className="h-8 w-8 text-blue-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">48hr</div>
                  <p className="text-sm text-gray-600">Quick Start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Resource Augmentation?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the right talent at the right time to accelerate your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-purple-600 rounded-xl mb-4 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technical Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise across modern technology stacks
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(expertise).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="flex items-center">
                  {expertise[key as keyof typeof expertise].icon}
                  <span className="ml-2">{expertise[key as keyof typeof expertise].title}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise[activeTab as keyof typeof expertise].technologies.map((tech, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{tech.name}</h4>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {tech.level}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
                  {tech.projects} Projects Delivered
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Engagement Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient process to get you started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent z-0"></div>
                )}
                <div className="bg-white rounded-2xl p-6 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-xl mb-4">
                    {step.icon}
                  </div>
                  <div className="text-sm text-purple-600 font-semibold mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Engagement Models</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the model that best fits your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-purple-600 font-medium">{model.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from companies that have scaled successfully with our talent
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
                <div className="flex items-start mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
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

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Scale Your Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get access to pre-vetted talent and start building within 48 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/v3/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/v3/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200"
            >
              View Success Stories
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

export default ResourceAugmentation;