import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Globe, BookOpen, Heart, Rocket,
  CheckCircle, Star, ChevronRight, Smartphone, Wifi, WifiOff,
  ArrowLeft, ExternalLink, Clock, Target, Award, Sparkles,
  Users, TrendingUp, Zap, School, MapPin, Download
} from 'lucide-react';

const RumieCase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const projectOverview = {
    client: 'Rumie',
    industry: 'Non-Profit / EdTech',
    type: 'Platform Modernization',
    duration: '4+ Years',
    status: 'Ongoing Partnership',
    website: 'rumie.org',
    tagline: 'Democratizing Education Globally'
  };

  const challenge = {
    title: 'The Challenge',
    description: 'Rumie needed to modernize their platform to reach learners in underserved communities worldwide, facing challenges with legacy systems and limited mobile accessibility.',
    points: [
      'Legacy technology infrastructure limiting scalability',
      'Lack of mobile-first learning solution',
      'Need for offline functionality in low-connectivity areas',
      'Platform performance issues affecting user experience'
    ]
  };

  const solution = {
    title: 'Our Solution',
    description: 'We transformed Rumie\'s platform with modern architecture, developed a cross-platform mobile app, and implemented offline capabilities to ensure education reaches everyone, everywhere.',
    points: [
      'Complete platform modernization with scalable architecture',
      'Cross-platform mobile app with offline functionality',
      '60% performance improvement for faster learning',
      'SEO optimization expanding global reach to 176 countries'
    ]
  };

  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Learning Platform',
      description: 'Cross-platform mobile application enabling learning on any device, reaching communities with limited computer access.',
      details: [
        'Native iOS & Android apps',
        'Progressive Web App (PWA)',
        'Responsive design',
        'Touch-optimized interface'
      ]
    },
    {
      icon: <WifiOff className="h-6 w-6" />,
      title: 'Offline Learning',
      description: 'Revolutionary offline functionality allowing learners to access content without internet connectivity.',
      details: [
        'Content caching system',
        'Offline progress tracking',
        'Smart sync when online',
        'Minimal data usage'
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Accessibility',
      description: 'Platform optimized for global reach with multi-language support and accessibility features.',
      details: [
        'Multi-language interface',
        'Accessibility compliance',
        'Low-bandwidth optimization',
        'Cultural localization'
      ]
    }
  ];

  const results = [
    { metric: '176', label: 'Countries Reached', icon: <Globe className="h-6 w-6" /> },
    { metric: '45%', label: 'Mobile Engagement Increase', icon: <Smartphone className="h-6 w-6" /> },
    { metric: '60%', label: 'Speed Improvement', icon: <Zap className="h-6 w-6" /> },
    { metric: '4+', label: 'Years Partnership', icon: <Heart className="h-6 w-6" /> }
  ];

  const impact = {
    title: 'Social Impact',
    description: 'Transforming lives through accessible education worldwide',
    achievements: [
      {
        title: 'Global Reach',
        description: 'Education now accessible in 176 countries, including remote areas',
        icon: <MapPin className="h-5 w-5" />
      },
      {
        title: 'Inclusive Learning',
        description: 'Bite-sized content accessible to learners with varying literacy levels',
        icon: <Users className="h-5 w-5" />
      },
      {
        title: 'Offline Access',
        description: 'Learning continues even without internet connectivity',
        icon: <WifiOff className="h-5 w-5" />
      },
      {
        title: 'Mobile First',
        description: '45% increase in mobile engagement democratizing access',
        icon: <Smartphone className="h-5 w-5" />
      }
    ]
  };

  const technologies = [
    'React Native',
    'Node.js',
    'MongoDB',
    'AWS',
    'Progressive Web App',
    'Service Workers',
    'CDN',
    'ElasticSearch',
    'Redis Cache'
  ];

  const milestones = [
    {
      year: 'Year 1',
      title: 'Platform Assessment',
      description: 'Comprehensive audit and modernization strategy'
    },
    {
      year: 'Year 2',
      title: 'Infrastructure Overhaul',
      description: 'Migration to modern, scalable architecture'
    },
    {
      year: 'Year 3',
      title: 'Mobile Development',
      description: 'Launch of cross-platform mobile applications'
    },
    {
      year: 'Year 4+',
      title: 'Continuous Innovation',
      description: 'Ongoing enhancements and global expansion'
    }
  ];

  const stats = {
    before: {
      reach: 'Limited regions',
      mobile: 'No mobile app',
      speed: 'Slow loading',
      offline: 'Online only'
    },
    after: {
      reach: '176 countries',
      mobile: 'Full mobile suite',
      speed: '60% faster',
      offline: 'Full offline mode'
    }
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/v3/portfolio"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                <Heart className="h-4 w-4 mr-2" />
                Non-Profit EdTech
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Rumie
              </h1>
              <p className="text-2xl text-orange-600 font-semibold mb-4">
                {projectOverview.tagline}
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering learners worldwide through accessible, bite-sized education.
                Our 4+ year partnership has transformed how Rumie delivers learning to
                underserved communities across 176 countries.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`https://${projectOverview.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Visit Rumie.org
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-semibold">
                  <Globe className="h-4 w-4 mr-2" />
                  176 Countries
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries({
                  Client: projectOverview.client,
                  Type: projectOverview.type,
                  Duration: projectOverview.duration,
                  Status: projectOverview.status
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
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                  alt="Rumie Platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <School className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Global Impact</div>
                    <div className="text-xs text-gray-600">Transforming Education</div>
                  </div>
                </div>
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-4">
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
              Innovative solutions enabling education access for everyone, everywhere
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
                  activeFeature === idx
                    ? 'shadow-2xl scale-105 border-2 border-orange-500'
                    : 'shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(idx)}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Comparison */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Evolution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              4+ years of continuous improvement and global expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Before Partnership</h3>
              <div className="space-y-4">
                {Object.entries(stats.before).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                    <span className="font-semibold text-red-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">After Transformation</h3>
              <div className="space-y-4">
                {Object.entries(stats.after).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                    <span className="font-semibold text-green-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{impact.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {impact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impact.achievements.map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building lasting impact through continuous innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                {idx < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent z-0"></div>
                )}
                <div className="bg-white rounded-2xl p-6 shadow-lg relative z-10">
                  <div className="text-orange-600 font-bold text-sm mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600">
              Modern technologies enabling global education access
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-gradient-to-br from-orange-50 to-red-50 text-orange-700 rounded-full font-semibold hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Making Education Accessible to All
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Through our partnership with Rumie, we're proud to contribute to a mission that
            transforms lives through education. Together, we've built technology that breaks
            down barriers and brings learning opportunities to communities worldwide.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-orange-600 font-semibold shadow-lg">
            <Heart className="h-5 w-5 mr-2" />
            Proud Technology Partner
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Meaningful Impact?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's build technology solutions that make a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/v3/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/v3/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-orange-200"
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

export default RumieCase;