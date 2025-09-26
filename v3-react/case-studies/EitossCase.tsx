import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code2, Users, MessageSquare, TrendingUp, Rocket,
  CheckCircle, Star, ChevronRight, Brain, BarChart3, Zap,
  ArrowLeft, ExternalLink, Clock, Target, Award, Sparkles,
  Building2, Lightbulb, GitBranch, Shield, Globe, DollarSign
} from 'lucide-react';

const EitossCase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const projectOverview = {
    client: 'Eitoss',
    industry: 'Enterprise Software',
    type: 'MVP to Full Product',
    duration: '12 weeks',
    status: 'Live & Funded',
    website: 'eitoss.com',
    tagline: 'Bridging Management & Frontline Workers'
  };

  const challenge = {
    title: 'The Challenge',
    description: 'Eitoss approached us with a vision to transform workplace communication. They needed to create a platform that could effectively bridge the gap between management and frontline workers, implementing Kaizen principles for continuous improvement.',
    points: [
      'Fragmented communication between management and workers',
      'Lack of structured feedback mechanisms',
      'No systematic approach to continuous improvement',
      'Difficulty in capturing and processing workplace insights'
    ]
  };

  const solution = {
    title: 'Our Solution',
    description: 'We developed a comprehensive communication platform that leverages AI to facilitate seamless interaction between all organizational levels, creating a culture of continuous improvement.',
    points: [
      'Kaizen-based communication channels',
      'AI-powered knowledge base for instant query resolution',
      'Intelligent document processing and analysis',
      'Real-time feedback and improvement tracking'
    ]
  };

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Kaizen Communication',
      description: 'Structured channels implementing continuous improvement principles to capture and act on frontline insights.',
      details: [
        'Organized feedback channels',
        'Improvement suggestion tracking',
        'Priority-based routing',
        'Action item management'
      ]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI Knowledge Base',
      description: 'Intelligent system powered by Gemini and ChatGPT APIs to provide instant answers and process workplace queries.',
      details: [
        'Dual AI integration',
        'Smart query processing',
        'Contextual responses',
        'Learning from interactions'
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into communication patterns, improvement metrics, and organizational health.',
      details: [
        'Real-time metrics',
        'Improvement tracking',
        'Response time analytics',
        'Engagement reports'
      ]
    }
  ];

  const results = [
    { metric: '95%', label: 'User Satisfaction', icon: <Star className="h-6 w-6" /> },
    { metric: '¥60M', label: 'Funding Secured', icon: <DollarSign className="h-6 w-6" /> },
    { metric: '40%', label: 'Faster Response Times', icon: <Clock className="h-6 w-6" /> },
    { metric: '60%', label: 'More Suggestions', icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const technologies = {
    frontend: ['React.js', 'TypeScript', 'TailwindCSS'],
    backend: ['Ruby on Rails', 'PostgreSQL', 'Redis'],
    ai: ['Gemini API', 'ChatGPT API'],
    devops: ['Docker', 'AWS', 'CI/CD Pipeline']
  };

  const timeline = [
    {
      phase: 'Discovery',
      duration: 'Week 1-2',
      activities: ['Requirements gathering', 'User research', 'Architecture planning']
    },
    {
      phase: 'Design',
      duration: 'Week 3-4',
      activities: ['UI/UX design', 'User flow mapping', 'Prototype creation']
    },
    {
      phase: 'Development',
      duration: 'Week 5-10',
      activities: ['Core platform build', 'AI integration', 'Feature implementation']
    },
    {
      phase: 'Launch',
      duration: 'Week 11-12',
      activities: ['Testing & QA', 'Deployment', 'User onboarding']
    }
  ];

  const impact = {
    title: 'Business Impact',
    description: 'Eitoss has transformed from a concept to a funded startup, revolutionizing workplace communication',
    achievements: [
      {
        title: 'Successful Funding Round',
        description: 'Secured ¥60M in funding to scale operations',
        icon: <DollarSign className="h-5 w-5" />
      },
      {
        title: 'Market Validation',
        description: 'Validated the core concept with early adopters',
        icon: <CheckCircle className="h-5 w-5" />
      },
      {
        title: 'Industry Recognition',
        description: 'Positioned as a pioneer in workplace collaboration',
        icon: <Award className="h-5 w-5" />
      },
      {
        title: 'Rapid Growth',
        description: 'Expanding to multiple industries and regions',
        icon: <Globe className="h-5 w-5" />
      }
    ]
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/v3/portfolio"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <Building2 className="h-4 w-4 mr-2" />
                Enterprise Solution
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Eitoss
              </h1>
              <p className="text-2xl text-green-600 font-semibold mb-4">
                {projectOverview.tagline}
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A revolutionary platform implementing Kaizen principles to transform workplace
                communication, creating seamless channels between management and frontline workers.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`https://${projectOverview.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Visit Live Site
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <div className="inline-flex items-center px-6 py-3 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                  <DollarSign className="h-4 w-4 mr-2" />
                  ¥60M Funded
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Eitoss Platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-4">
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
              We built a comprehensive platform that revolutionizes workplace communication
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
                  activeFeature === idx
                    ? 'shadow-2xl scale-105 border-2 border-green-500'
                    : 'shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(idx)}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12-Week Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to funded startup in just 12 weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((phase, idx) => (
              <div key={idx} className="relative">
                {idx < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0"></div>
                )}
                <div className="bg-white rounded-2xl p-6 shadow-lg relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
                    <span className="font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-sm text-green-600 font-semibold mb-3">{phase.duration}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, actIdx) => (
                      <li key={actIdx} className="text-sm text-gray-600">• {activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600">
              Built with modern, scalable technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {techs.map((tech, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Zap className="h-4 w-4 text-green-600 mr-2" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{impact.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {impact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impact.achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Vision Into Reality?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Just like Eitoss, we can help you build and launch your MVP in weeks, not months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/v3/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/v3/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border border-green-200"
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

export default EitossCase;