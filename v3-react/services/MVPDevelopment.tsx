import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Rocket,
  Clock,
  Code2,
  Users,
  TrendingUp,
  Target,
  Zap,
  Shield,
  BarChart,
  FileCode,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  Package,
  GitBranch,
  Repeat,
  Calendar,
  DollarSign,
  Award,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
const MVPDevelopment: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: 'Discovery & Planning',
      duration: '1-2 weeks',
      icon: Lightbulb,
      activities: [
        'Define core features',
        'Create user stories',
        'Establish success metrics',
        'Technical architecture planning',
        'Risk assessment',
        'Resource allocation'
      ]
    },
    {
      title: 'Rapid Development',
      duration: '6-8 weeks',
      icon: Code2,
      activities: [
        'Agile sprints',
        'Weekly demonstrations',
        'Continuous feedback integration',
        'Core feature implementation',
        'UI/UX development',
        'API integration'
      ]
    },
    {
      title: 'Launch & Iterate',
      duration: '1-2 weeks',
      icon: Rocket,
      activities: [
        'Quick market launch',
        'Data-driven improvements',
        'User feedback collection',
        'Performance optimization',
        'Bug fixes and refinements',
        'Analytics implementation'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Time-to-Market',
      description: '8-12 week development cycle to get your product in front of users quickly'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Validation',
      description: 'Test your product idea without the investment of a full-scale application'
    },
    {
      icon: TrendingUp,
      title: 'Investor-Ready',
      description: 'Professional-grade MVPs designed to impress investors and secure funding'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Focus on core features that deliver real value to your target users'
    },
    {
      icon: Shield,
      title: 'Scalable Foundation',
      description: 'Clean, production-ready codebase that can grow with your business'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Built-in analytics to track user behavior and validate assumptions'
    }
  ];

  const deliverables = [
    {
      icon: Package,
      title: 'Core Product Features',
      items: [
        'Essential functionality',
        'User authentication',
        'Data management',
        'Core workflows'
      ]
    },
    {
      icon: GitBranch,
      title: 'Clean Codebase',
      items: [
        'Modular architecture',
        'Version control setup',
        'CI/CD pipeline',
        'Testing framework'
      ]
    },
    {
      icon: FileCode,
      title: 'Documentation',
      items: [
        'Technical documentation',
        'API documentation',
        'User guides',
        'Deployment guides'
      ]
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      items: [
        'User tracking',
        'Performance metrics',
        'Error monitoring',
        'Usage analytics'
      ]
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: '.NET', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'Docker', category: 'DevOps' }
  ];

  const testimonials = [
    {
      quote: "Acorn Globus helped us launch our MVP in just 10 weeks. Their agile approach and weekly demos kept us aligned throughout the development process.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "TechStart Inc"
    },
    {
      quote: "The MVP they delivered helped us secure our seed funding. Clean code, great documentation, and a product that impressed our investors.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "InnovateLab"
    },
    {
      quote: "Their focus on core features and user validation helped us save months of development time and thousands in costs.",
      author: "Emily Watson",
      role: "Product Manager",
      company: "NextGen Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Acorn Globus</div>
                <div className="text-xs text-gray-500">MVP Development</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/v3" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</Link>
              <Link to="/v3/about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">About</Link>
              <Link to="/v3/services" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Services</Link>
              <Link to="/v3/portfolio" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Portfolio</Link>
              <Link to="/v3/contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact</Link>
            </div>

            <Link
              to="/v3/contact"
              className="hidden lg:inline-flex items-center px-6 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Your MVP
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              MVP Development Service
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Launch Your Product
              <span className="block text-amber-600 mt-2">In Just 8-12 Weeks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your idea into a market-ready MVP. We help startups and enterprises
              validate product concepts quickly with professional-grade minimum viable products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/v3/contact"
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all transform hover:scale-105"
              >
                Start Your MVP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl border-2 border-amber-200 hover:bg-amber-50 transition-all">
                View Success Stories
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '8-12', label: 'Weeks to Launch', suffix: '' },
              { value: '50+', label: 'MVPs Delivered', suffix: '' },
              { value: '85', label: 'Success Rate', suffix: '%' },
              { value: '3x', label: 'Faster to Market', suffix: '' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our MVP Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to market faster, validate your ideas, and attract investors with a professional MVP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                  <benefit.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our MVP Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven agile methodology that delivers results in 8-12 weeks
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                onClick={() => setActivePhase(index)}
                className={`cursor-pointer p-8 rounded-2xl transition-all ${
                  activePhase === index
                    ? 'bg-gradient-to-br from-amber-100 to-yellow-100 shadow-xl'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    activePhase === index ? 'bg-amber-200' : 'bg-gray-200'
                  }`}>
                    <phase.icon className={`w-7 h-7 ${
                      activePhase === index ? 'text-amber-700' : 'text-gray-600'
                    }`} />
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    activePhase === index ? 'bg-amber-200 text-amber-800' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {phase.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Phase {index + 1}: {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.activities.slice(0, 3).map((activity, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                        activePhase === index ? 'text-amber-600' : 'text-gray-400'
                      }`} />
                      <span className="text-sm text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Active Phase Details */}
          <div
            key={activePhase}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {phases[activePhase].title} - Detailed Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {phases[activePhase].activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch, test, and scale your product
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <deliverable.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {deliverable.title}
                </h3>
                <ul className="space-y-2">
                  {deliverable.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tech stack for scalable and maintainable MVPs
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-lg text-sm font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from founders who launched successful MVPs with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-amber-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your MVP?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join 50+ startups who validated their ideas and secured funding with our MVP development service
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/v3/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-800 transition-all">
                Schedule a Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-200" />
                <span>business@acornglobus.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-200" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-amber-200" />
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
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Acorn Globus</div>
                <div className="text-xs text-gray-500">Digital Solutions Partner</div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href="mailto:business@acornglobus.com" className="text-gray-600 hover:text-amber-600 transition-colors">
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

export default MVPDevelopment;