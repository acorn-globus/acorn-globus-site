import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, Code2, Filter, ExternalLink, Award, Globe, Zap,
  BookOpen, Rocket, Target, Users, Star, Quote, ArrowUpRight,
  ShoppingCart, Briefcase, Heart, School, Package, Layers,
  CheckCircle, TrendingUp, Building2, ChevronRight, Sparkles,
  Building, Cloud
} from 'lucide-react';

const PortfolioAG = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Layers className="h-4 w-4" /> },
    { id: 'saas', label: 'SaaS', icon: <Cloud className="h-4 w-4" /> },
    { id: 'enterprise', label: 'Enterprise', icon: <Building2 className="h-4 w-4" /> },
    { id: 'ecommerce', label: 'E-Commerce', icon: <ShoppingCart className="h-4 w-4" /> },
    { id: 'nonprofit', label: 'Non-Profit', icon: <Heart className="h-4 w-4" /> }
  ];

  const projects = [
    {
      id: 1,
      name: 'Formester',
      category: 'saas',
      tagline: 'AI-Powered No-Code Form Builder',
      description: 'Our flagship SaaS product - a revolutionary no-code form builder with AI capabilities. Build complex forms with advanced logic without writing a single line of code.',
      longDescription: 'We built Formester to showcase our capability in creating innovative SaaS solutions. It empowers businesses to create intelligent forms with conditional logic, AI-powered generation, and seamless integrations.',
      isOwnProduct: true,
      technologies: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'AI Integration', 'AWS'],
      features: [
        'AI-powered form generation',
        'No-code drag & drop builder',
        'Advanced conditional logic',
        '100+ integrations',
        'Real-time analytics'
      ],
      metrics: {
        users: '1000+',
        forms: '50K+',
        rating: '4.8'
      },
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-blue-500 to-purple-600',
      link: 'https://formester.com',
      featured: true
    },
    {
      id: 2,
      name: 'Eitoss',
      category: 'enterprise',
      tagline: 'Bridging Management & Frontline Workers',
      description: 'An innovative platform implementing Kaizen principles to bridge the communication gap between management and frontline workers, driving continuous improvement.',
      longDescription: 'Eitoss revolutionizes workplace communication by creating a seamless channel between decision-makers and ground-level employees, fostering a culture of continuous improvement and innovation.',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'AI Integration', 'Real-time Analytics'],
      features: [
        'Real-time communication channels',
        'Kaizen implementation tools',
        'Performance analytics',
        'Mobile-first design',
        'Automated workflow management'
      ],
      metrics: {
        efficiency: '+40%',
        adoption: '95%',
        roi: '3x'
      },
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-green-500 to-teal-600',
      featured: true
    },
    {
      id: 3,
      name: 'Invoice Falcon',
      category: 'ecommerce',
      tagline: 'Shopify Invoicing Revolution',
      description: 'A comprehensive invoicing solution for Shopify merchants, transforming how businesses handle their billing and compliance needs globally.',
      longDescription: 'Invoice Falcon simplifies invoicing for Shopify stores with automated generation, multi-currency support, and compliance with global tax regulations, making it the go-to solution for merchants worldwide.',
      technologies: ['Ruby on Rails', 'React', 'Shopify API', 'AWS', 'Stripe'],
      features: [
        'Automated invoice generation',
        'Multi-currency support',
        'Tax compliance automation',
        'Custom branding options',
        'Bulk operations'
      ],
      metrics: {
        merchants: '500+',
        invoices: '100K+',
        countries: '30+'
      },
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-indigo-500 to-blue-600',
      link: '#',
      featured: false
    },
    {
      id: 4,
      name: 'Rumie',
      category: 'nonprofit',
      tagline: 'Democratizing Education Globally',
      description: 'Democratizing education through bite-sized learning experiences, reaching learners across 176 countries with accessible, quality content.',
      longDescription: 'Rumie breaks down barriers to education by providing micro-learning content that works on any device, anywhere in the world, making quality education accessible to everyone.',
      technologies: ['Nuxt', 'Vue.js', 'Flutter', 'AWS', 'Firebase'],
      features: [
        'Offline-first architecture',
        'Multi-language support',
        'Bite-sized lessons',
        'Progress tracking',
        'Community features'
      ],
      metrics: {
        countries: '176',
        learners: '1M+',
        lessons: '10K+'
      },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-pink-500 to-orange-500',
      link: '#',
      featured: true
    },
    {
      id: 5,
      name: 'HealthTrack Pro',
      category: 'enterprise',
      tagline: 'Healthcare Management Platform',
      description: 'End-to-end healthcare management system streamlining patient care, appointments, and medical records for healthcare providers.',
      technologies: ['Node.js', 'React', 'MongoDB', 'HIPAA Compliant', 'Docker'],
      features: [
        'Patient management',
        'Appointment scheduling',
        'Electronic health records',
        'Billing integration',
        'Telemedicine support'
      ],
      metrics: {
        clinics: '50+',
        patients: '100K+',
        uptime: '99.9%'
      },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      id: 6,
      name: 'EduConnect',
      category: 'saas',
      tagline: 'Online Learning Platform',
      description: 'Comprehensive e-learning platform connecting educators and students with interactive courses and real-time collaboration tools.',
      technologies: ['Python', 'Django', 'React', 'WebRTC', 'AWS'],
      features: [
        'Live video classes',
        'Course management',
        'Assignment tracking',
        'Discussion forums',
        'Progress analytics'
      ],
      metrics: {
        students: '50K+',
        courses: '1000+',
        satisfaction: '96%'
      },
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(p => p.featured && p.id === 1); // Formester as main feature

  const stats = [
    { value: '25+', label: 'Successful Projects', icon: <Rocket className="h-6 w-6" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6" /> },
    { value: '15+', label: 'Industries Served', icon: <Globe className="h-6 w-6" /> },
    { value: '1M+', label: 'End Users Impacted', icon: <Users className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: 'Alon Diamant',
      role: 'CTO',
      company: 'Mayple',
      content: 'Acorn Globus has been instrumental in our success. Their technical expertise and collaborative approach made them the perfect partner.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Enzo Zadrima',
      role: 'CTO',
      company: 'Viewber',
      content: 'The team\'s attention to detail and ability to deliver complex solutions on time is remarkable.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
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
              <Link to="/v3/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</Link>
              <Link to="/v3/portfolio" className="text-purple-600 font-medium">Portfolio</Link>
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
              <Briefcase className="h-4 w-4 mr-2" />
              Our Portfolio
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block mt-2">
                Digital Success Stories
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              From innovative startups to established enterprises, we've helped businesses across the globe
              achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                <Award className="h-4 w-4 mr-2" />
                Featured Success Story
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Flagship Product</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {featuredProject.name}
                  <span className="block text-xl text-purple-600 mt-2">{featuredProject.tagline}</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredProject.longDescription}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">{featuredProject.metrics.users}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">{featuredProject.metrics.forms}</div>
                    <div className="text-sm text-gray-600">Forms Created</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">{featuredProject.metrics.rating}★</div>
                    <div className="text-sm text-gray-600">User Rating</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {featuredProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {featuredProject.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Visit Formester
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl opacity-20 blur-2xl"></div>
                <img
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.icon}
                <span className="ml-2">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => {
                  if (project.id === 1) {
                    navigate('/v3/case-studies/formester');
                  } else if (project.id === 2) {
                    navigate('/v3/case-studies/eitoss');
                  } else if (project.id === 3) {
                    navigate('/v3/case-studies/invoice-falcon');
                  } else if (project.id === 4) {
                    navigate('/v3/case-studies/rumie');
                  }
                }}
                style={{
                  boxShadow: hoveredProject === project.id
                    ? '0 20px 40px -10px rgba(147, 51, 234, 0.3)'
                    : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>

                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold capitalize inline-flex items-center">
                      {project.category === 'saas' && <Cloud className="h-3 w-3 mr-1.5" />}
                      {project.category === 'enterprise' && <Building className="h-3 w-3 mr-1.5" />}
                      {project.category === 'ecommerce' && <ShoppingCart className="h-3 w-3 mr-1.5" />}
                      {project.category === 'nonprofit' && <Heart className="h-3 w-3 mr-1.5" />}
                      {project.category}
                    </span>
                    {(project as any).isOwnProduct && (
                      <span className="px-4 py-1.5 bg-purple-600/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold inline-flex items-center">
                        <Rocket className="h-3 w-3 mr-1.5" />
                        Our Product
                      </span>
                    )}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-yellow-400/90 backdrop-blur-sm rounded-full">
                        <Star className="h-4 w-4 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-purple-600 font-semibold mb-4">{project.tagline}</p>
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex items-center justify-around pt-6 border-t border-gray-100">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize mt-1">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Case Study Button for projects with case studies */}
                {(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4) && (
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all">
                      View Case Study →
                    </button>
                  </div>
                )}

                {/* Hover Effect Bottom Bar */}
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform transition-transform duration-300 ${
                  hoveredProject === project.id ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Success is best measured by client satisfaction</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
                <Quote className="h-8 w-8 text-purple-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's collaborate to transform your vision into a digital success story.
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
              View Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-600">&copy; 2024 Acorn Globus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioAG;