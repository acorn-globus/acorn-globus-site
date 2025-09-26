import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Shield, Clock, AlertCircle, CheckCircle,
  Activity, Bug, Lock, TrendingUp, Headphones, Monitor,
  ChevronRight, ArrowLeft, Sparkles, Settings, Zap, BarChart3,
  Bell, RefreshCw, Users, Award, Star, Package, Cloud, Database,
  Search
} from 'lucide-react';

const MaintenanceSupport = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Proactive Monitoring',
      description: '24/7 system monitoring to identify and resolve issues before they impact your business.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Rapid Response',
      description: 'Quick resolution of critical issues with guaranteed response times based on priority levels.'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Security Updates',
      description: 'Regular security patches and updates to protect against vulnerabilities and threats.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Performance Optimization',
      description: 'Continuous performance tuning to ensure your applications run at peak efficiency.'
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: 'Bug Resolution',
      description: 'Swift identification and fixing of bugs to maintain seamless user experience.'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Regular Backups',
      description: 'Automated backup systems to ensure your data is always safe and recoverable.'
    }
  ];

  const supportPlans = {
    basic: {
      title: 'Basic Maintenance',
      price: 'Starting at $999/month',
      description: 'Essential maintenance for small to medium applications',
      features: [
        { text: 'Regular updates and patches', included: true },
        { text: 'Security monitoring', included: true },
        { text: 'Monthly health reports', included: true },
        { text: 'Business hours support (9-6 PM)', included: true },
        { text: 'Response time: 24 hours', included: true },
        { text: 'Bug fixes', included: true },
        { text: '24/7 emergency support', included: false },
        { text: 'Dedicated support team', included: false },
        { text: 'On-site support', included: false }
      ],
      gradient: 'from-green-500 to-emerald-600',
      recommended: false
    },
    premium: {
      title: 'Premium Support',
      price: 'Starting at $2,499/month',
      description: 'Comprehensive support for mission-critical applications',
      features: [
        { text: 'All Basic features', included: true },
        { text: '24/7 emergency support', included: true },
        { text: 'Priority response times', included: true },
        { text: 'Response time: 4 hours', included: true },
        { text: 'Dedicated support team', included: true },
        { text: 'Weekly health reports', included: true },
        { text: 'Performance optimization', included: true },
        { text: 'Database maintenance', included: true },
        { text: 'On-site support', included: false }
      ],
      gradient: 'from-purple-500 to-indigo-600',
      recommended: true
    },
    enterprise: {
      title: 'Enterprise Care',
      price: 'Custom Pricing',
      description: 'Tailored solutions for large-scale enterprise applications',
      features: [
        { text: 'All Premium features', included: true },
        { text: 'Custom SLA agreements', included: true },
        { text: 'Response time: 1 hour', included: true },
        { text: 'On-site support options', included: true },
        { text: 'Proactive monitoring', included: true },
        { text: 'Strategic consulting', included: true },
        { text: 'Disaster recovery planning', included: true },
        { text: 'Compliance management', included: true },
        { text: 'Dedicated account manager', included: true }
      ],
      gradient: 'from-orange-500 to-red-600',
      recommended: false
    }
  };

  const services = [
    {
      icon: <Bug className="h-5 w-5" />,
      title: 'Bug Fixes',
      description: 'Quick identification and resolution of software bugs',
      items: ['Critical bug fixes', 'Regression testing', 'Code debugging', 'Error tracking']
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: 'Security Updates',
      description: 'Regular security patches and vulnerability assessments',
      items: ['Security patches', 'Vulnerability scanning', 'SSL certificates', 'Compliance updates']
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: 'Performance Tuning',
      description: 'Optimization for speed and efficiency',
      items: ['Database optimization', 'Code refactoring', 'Caching strategies', 'Load balancing']
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: 'System Monitoring',
      description: '24/7 monitoring of your applications and infrastructure',
      items: ['Uptime monitoring', 'Error tracking', 'Performance metrics', 'Automated alerts']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'System Assessment',
      description: 'Comprehensive evaluation of your current infrastructure and applications.',
      icon: <Search className="h-5 w-5" />
    },
    {
      step: 2,
      title: 'Maintenance Plan',
      description: 'Custom maintenance strategy tailored to your specific needs.',
      icon: <Settings className="h-5 w-5" />
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Set up monitoring tools, establish procedures, and integrate with your team.',
      icon: <Package className="h-5 w-5" />
    },
    {
      step: 4,
      title: 'Continuous Monitoring',
      description: '24/7 system monitoring with automated alerts and issue detection.',
      icon: <Activity className="h-5 w-5" />
    },
    {
      step: 5,
      title: 'Regular Maintenance',
      description: 'Scheduled updates, patches, and performance optimization.',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      step: 6,
      title: 'Reporting & Review',
      description: 'Regular reports on system health, performance, and recommendations.',
      icon: <BarChart3 className="h-5 w-5" />
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime SLA', icon: <TrendingUp className="h-6 w-6" /> },
    { value: '24/7', label: 'Support Available', icon: <Clock className="h-6 w-6" /> },
    { value: '<4hr', label: 'Avg Response Time', icon: <Zap className="h-6 w-6" /> },
    { value: '500+', label: 'Systems Maintained', icon: <Shield className="h-6 w-6" /> }
  ];

  const technologies = [
    'Ruby on Rails', 'Node.js', 'React', 'Vue.js', 'Angular',
    'Python', 'PHP', '.NET', 'Java', 'PostgreSQL',
    'MySQL', 'MongoDB', 'Redis', 'AWS', 'Azure',
    'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab'
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
                <div className="text-xs text-gray-500 uppercase tracking-wider">Maintenance & Support</div>
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
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/v3/services"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Maintenance & Support
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Keep Your Systems
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 block mt-2">
                  Running at Peak Performance
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive maintenance and support services to ensure your applications
                remain secure, efficient, and up-to-date with 24/7 monitoring and rapid
                issue resolution.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/v3/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200">
                  <Headphones className="h-5 w-5 mr-2" />
                  24/7 Support
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Maintenance Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proactive maintenance to prevent issues before they impact your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-green-600 rounded-xl mb-4 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          {/* Plan Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(supportPlans).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {supportPlans[key as keyof typeof supportPlans].title}
              </button>
            ))}
          </div>

          {/* Plan Details */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {supportPlans[activeTab as keyof typeof supportPlans].recommended && (
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 text-sm font-semibold">
                  RECOMMENDED
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {supportPlans[activeTab as keyof typeof supportPlans].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {supportPlans[activeTab as keyof typeof supportPlans].description}
                  </p>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {supportPlans[activeTab as keyof typeof supportPlans].price}
                  </div>
                </div>

                <div className="space-y-4">
                  {supportPlans[activeTab as keyof typeof supportPlans].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0"></div>
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/v3/contact"
                    className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${
                      supportPlans[activeTab as keyof typeof supportPlans].gradient
                    } text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to keep your applications running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center text-sm text-gray-700">
                      <Sparkles className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Maintenance Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure optimal performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
                )}
                <div className="bg-white rounded-2xl p-6 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
                    {step.icon}
                  </div>
                  <div className="text-sm text-green-600 font-semibold mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert maintenance across all major technologies and platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700 rounded-full font-semibold hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Support Available</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Critical issues? Our emergency support team is available 24/7 to help resolve
              urgent problems and minimize downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/v3/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Bell className="h-5 w-5 mr-2" />
                Get Emergency Support
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-red-200">
                <Headphones className="h-5 w-5 mr-2" />
                Talk to Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Keep Your Systems Running Smoothly
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us handle the maintenance while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/v3/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/v3/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200"
            >
              View All Services
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

export default MaintenanceSupport;