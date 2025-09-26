import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Sparkles, Zap, Users, TrendingUp, Rocket,
  CheckCircle, Star, ChevronRight, Brain, BarChart3, Layout,
  MessageSquare, ArrowLeft, ExternalLink, Clock, Target, Award
} from 'lucide-react';

const FormesterCase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const projectOverview = {
    product: 'Formester',
    industry: 'SaaS / Software',
    type: 'Our Own Product',
    status: 'Live & Growing',
    launched: '2023',
    website: 'formester.com',
    tagline: 'AI-Powered No-Code Form Builder'
  };

  const challenge = {
    title: 'Why We Built Formester',
    description: 'We saw an opportunity in the form builder market. Most solutions were either too complex for non-technical users or too limited for advanced needs. We wanted to create something different - a platform that combines simplicity with power.',
    points: [
      'Most form builders required coding knowledge',
      'Lack of AI-powered form generation',
      'Limited insights and analytics',
      'Poor user experience for non-technical users'
    ]
  };

  const solution = {
    title: 'What We Built',
    description: 'We created Formester as a bootstrapped SaaS product, demonstrating our ability to conceptualize, build, and scale a complete product. Every feature was carefully crafted based on real user needs.',
    points: [
      'Intuitive no-code builder anyone can use',
      'First-to-market AI form generation',
      'Comprehensive analytics dashboard',
      'Enterprise-grade integrations'
    ]
  };

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI Form Generation',
      description: 'Describe your form in plain English and watch AI create it instantly. No templates, no restrictions - just pure creativity.',
      details: [
        'Natural language processing',
        'Smart field suggestions',
        'Automatic validation rules',
        'Multi-language support'
      ]
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: 'No-Code Builder',
      description: 'Build complex, multi-step forms with conditional logic without writing a single line of code.',
      details: [
        'Drag-and-drop interface',
        'Conditional logic builder',
        'Custom styling options',
        'Responsive design'
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Smart Analytics',
      description: 'Get deep insights into form performance, user behavior, and conversion rates with our intelligent analytics.',
      details: [
        'Real-time data tracking',
        'Conversion funnel analysis',
        'A/B testing capabilities',
        'Custom report generation'
      ]
    }
  ];

  const results = [
    { metric: '1000+', label: 'Active Users', icon: <Users className="h-6 w-6" /> },
    { metric: '50K+', label: 'Forms Created', icon: <Layout className="h-6 w-6" /> },
    { metric: '95%', label: 'User Satisfaction', icon: <Star className="h-6 w-6" /> },
    { metric: '3x', label: 'Faster Form Creation', icon: <Zap className="h-6 w-6" /> }
  ];

  const technologies = [
    'Ruby on Rails',
    'Vue.js',
    'PostgreSQL',
    'Redis',
    'AWS',
    'OpenAI API',
    'Stripe',
    'SendGrid'
  ];

  const principles = [
    {
      title: 'Ship Fast, Learn Faster',
      description: 'We believe in rapid iteration and continuous deployment to quickly validate ideas.'
    },
    {
      title: 'User Feedback Drives Our Roadmap',
      description: 'Every feature is built based on real user needs and feedback.'
    },
    {
      title: 'Embrace Mistakes as Learning',
      description: 'We view failures as opportunities to improve and innovate.'
    },
    {
      title: 'Focus on User Happiness',
      description: 'Without investor pressure, we can focus solely on making users successful.'
    }
  ];

  const testimonial = {
    content: "Formester has completely transformed how we collect customer feedback. The AI form generation saves us hours every week, and the analytics help us understand our users better than ever before.",
    author: "Sarah Mitchell",
    role: "Product Manager",
    company: "TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  };

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
                <div className="text-xs text-gray-500 uppercase tracking-wider">Case Study</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/v3" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</Link>
              <Link to="/v3/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</Link>
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
          <Link
            to="/v3/portfolio"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                SaaS Product
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Formester
              </h1>
              <p className="text-2xl text-purple-600 font-semibold mb-4">
                {projectOverview.tagline}
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our flagship SaaS product showcasing our expertise in building scalable,
                user-centric applications. Formester demonstrates our ability to identify market
                opportunities and deliver innovative solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`https://${projectOverview.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Visit Live Site
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <button className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-purple-200">
                  Try Formester Free
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries({
                  Product: projectOverview.product,
                  Type: projectOverview.type,
                  Status: projectOverview.status,
                  Launched: projectOverview.launched
                }).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-gray-500 mb-1">{key}</p>
                    <p className="font-semibold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Formester Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                  {result.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{result.metric}</div>
                <div className="text-gray-600">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-2xl mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{challenge.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{challenge.description}</p>
                <ul className="space-y-3">
                  {challenge.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-6">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Delivered</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We built comprehensive features that set Formester apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
                  activeFeature === idx
                    ? 'shadow-2xl scale-105 border-2 border-purple-500'
                    : 'shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(idx)}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Principles */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Formester embodies our approach to product development - user-focused, iterative, and built to last
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                      <Rocket className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600">
              Built with modern, scalable technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-gradient-to-br from-purple-50 to-indigo-50 text-purple-700 rounded-full font-semibold hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl relative">
            <div className="absolute top-8 left-8">
              <MessageSquare className="h-8 w-8 text-purple-200" />
            </div>

            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Build Your Own Success Story
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Just like Formester, we can help transform your ideas into successful products
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
              View More Projects
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

export default FormesterCase;