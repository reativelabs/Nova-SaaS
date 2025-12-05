import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Users, BarChart, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp size={32} />,
    title: 'Real-time Analytics',
    description: 'Track your performance in real-time with our advanced analytics dashboard.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Global Connectivity',
    description: 'Connect with teams and clients around the world with zero latency.'
  },
  {
    icon: <BarChart size={32} />,
    title: 'Automated Reporting',
    description: 'Generate detailed reports automatically and schedule them for delivery.'
  },
  {
    icon: <Users size={32} />,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with built-in chat, comments, and file sharing.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols to keep your data safe and compliant.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Instant Integration',
    description: 'Integrate with your favorite tools in seconds with our one-click setup.'
  }
];

const Features = ({ showHeader = true, showLearnMore = true }) => {
  return (
    <section id="features" className={`py-16 lg:py-24 bg-bg-light ${!showHeader ? 'pt-0' : ''}`}>
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Powerful Features</h2>
            <p className="text-lg text-text-muted max-w-[600px] mx-auto">Everything you need to scale your business</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-lg hover:border-secondary">
              <div className="inline-flex p-4 bg-secondary text-primary rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-main">{feature.title}</h3>
              <p className="text-text-muted mb-6">{feature.description}</p>
              {showLearnMore && (
                <Link to="/features" className="text-primary font-semibold text-sm hover:underline">Learn more →</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
