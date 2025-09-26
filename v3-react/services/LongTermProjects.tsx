import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  Code2,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  BarChart,
  CheckCircle,
  Calendar,
  Layers,
  GitBranch,
  Package,
  Settings,
  Award,
  Building2,
  Briefcase,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Lightbulb,
  Rocket,
  DollarSign,
  FileText
} from 'lucide-react';

const LongTermProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('short');

  const projectTypes = {
    short: {
      title: 'Short-Term Projects',
      duration: '1-6 months',
      description: 'Quick wins and rapid deployments for immediate business needs',
      features: [
        'MVP Development',
        'Feature Enhancements',
        'Bug Fixes & Optimization',
        'Proof of Concepts',
        'System Integrations',
        'Migration Projects'
      ],
      benefits: [
        {
          icon: Zap,
          title: 'Quick Turnaround',
          description: 'Fast delivery with focused execution on specific objectives'
        },
        {
          icon: DollarSign,
          title: 'Fixed Budget',
          description: 'Clear cost structure with defined deliverables and timelines'
        },
        {
          icon: Target,
          title: 'Focused Scope',
          description: 'Well-defined objectives with measurable outcomes'
        }
      ]
    },
    long: {
      title: 'Long-Term Partnerships',
      duration: '6+ months',
      description: 'Strategic partnerships for continuous development and growth',
      features: [
        'Enterprise Applications',
        'Digital Transformation',
        'Product Development',
        'Platform Building',
        'Continuous Innovation',
        'Strategic Consulting'
      ],
      benefits: [
        {
          icon: Users,
          title: 'Dedicated Team',
          description: 'Fully integrated team that understands your business deeply'
        },
        {
          icon: TrendingUp,
          title: 'Strategic Growth',
          description: 'Long-term planning aligned with your business objectives'
        },
        {
          icon: Shield,
          title: 'Reduced Risk',
          description: 'Consistent team with accumulated knowledge and expertise'
        }
      ]
    }
  };

  const process = [
    {
      phase: 'Initial Assessment',
      icon: Lightbulb,
      description: 'Understanding your needs, goals, and technology stack',
      activities: [
        'Requirements gathering',
        'Technical audit',
        'Resource planning',
        'Timeline estimation'
      ]
    },
    {
      phase: 'Team Formation',
      icon: Users,
      description: 'Building a team with the required expertise',
      activities: [
        'Skill matching',
        'Team composition',
        'Role definition',
        'Onboarding process'
      ]
    },
    {
      phase: 'Integration',
      icon: GitBranch,
      description: 'Seamless alignment with your processes',
      activities: [
        'Workflow integration',
        'Tool setup',
        'Communication channels',
        'Collaboration protocols'
      ]
    },
    {
      phase: 'Continuous Delivery',
      icon: Rocket,
      description: 'Ongoing development and optimization',
      activities: [
        'Sprint planning',
        'Regular deliveries',
        'Performance monitoring',
        'Continuous improvement'
      ]
    }
  ];

  const engagementModels = [
    {
      title: 'Fixed Price',
      icon: DollarSign,
      description: 'Best for well-defined projects with clear requirements',
      features: [
        'Predetermined budget',
        'Fixed timeline',
        'Defined deliverables',
        'Minimal risk'
      ],
      recommended: 'Short-term projects'
    },
    {
      title: 'Time & Material',
      icon: Clock,
      description: 'Flexible approach for evolving requirements',
      features: [
        'Pay as you go',
        'Flexible scope',
        'Adaptable timeline',
        'Full transparency'
      ],
      recommended: 'Medium-term projects'
    },
    {
      title: 'Dedicated Team',
      icon: Users,
      description: 'Full-time resources working exclusively on your project',
      features: [
        'Full-time commitment',
        'Direct management',
        'Scalable team size',
        'Long-term focus'
      ],
      recommended: 'Long-term partnerships'
    }
  ];

  const deliverables = [
    {
      icon: Package,
      title: 'Dedicated Team',
      description: 'Full-time professionals committed to your success'
    },
    {
      icon: FileText,
      title: 'Technical Roadmap',
      description: 'Strategic planning for long-term technology goals'
    },
    {
      icon: BarChart,
      title: 'Regular Reports',
      description: 'Performance metrics and progress updates'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Organized codebase with proper documentation'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality control'
    },
    {
      icon: Settings,
      title: 'Knowledge Transfer',
      description: 'Documentation and training for your team'
    }
  ];

  const successMetrics = [
    { value: '200+', label: 'Projects Delivered' },
    { value: '50+', label: 'Long-term Partners' },
    { value: '95%', label: 'Client Retention' },
    { value: '4.8', label: 'Average Rating' }
  ];

  const technologies = [
    'React.js', 'Vue.js', 'Angular', 'Next.js', 'Node.js',
    'Ruby on Rails', 'Python', 'Django', '.NET', 'Java',
    'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'GraphQL'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Acorn Globus</div>
                <div className="text-xs text-gray-500">Project Partnerships</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/v3" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/v3/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link to="/v3/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
              <Link to="/v3/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Portfolio</Link>
              <Link to="/v3/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            </div>

            <Link
              to="/v3/contact"
              className="hidden lg:inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Start a Project
            </Link>

            <button className="lg:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Flexible Project Engagements
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Short & Long-Term
              <span className="block text-blue-600 mt-2">Development Partnerships</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From quick wins to strategic partnerships, we adapt to your project needs
              with flexible engagement models and dedicated expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/v3/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition-all">
                View Success Stories
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Tabs */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Engagement Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a quick solution or a long-term partnership, we have the right approach
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-white shadow-lg p-1">
              <button
                onClick={() => setActiveTab('short')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'short'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Short-Term Projects
              </button>
              <button
                onClick={() => setActiveTab('long')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'long'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Long-Term Partnerships
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {projectTypes[activeTab].duration}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {projectTypes[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {projectTypes[activeTab].description}
                </p>

                <div className="space-y-3 mb-8">
                  {projectTypes[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/v3/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="grid gap-6">
                {projectTypes[activeTab].benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Engagement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
                )}
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 transition-colors relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <phase.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {phase.description}
                  </p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-gray-500">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the pricing model that best fits your project requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <model.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {model.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t">
                  <span className="text-sm text-gray-500">Recommended for:</span>
                  <div className="text-sm font-semibold text-blue-600 mt-1">
                    {model.recommended}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive deliverables for successful project outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Excel In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across modern tech stack
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether it's a short sprint or a long journey, we're ready to be your technology partner
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/v3/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all">
                Download Portfolio
                <FileText className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-200" />
                <span>business@acornglobus.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-200" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-200" />
                <span>Gachibowli, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Acorn Globus</div>
                <div className="text-xs text-gray-500">Digital Solutions Partner</div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href="mailto:business@acornglobus.com" className="text-gray-600 hover:text-blue-600 transition-colors">
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

export default LongTermProjects;