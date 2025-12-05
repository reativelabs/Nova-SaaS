import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import heroImage from '../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-16 lg:py-24 overflow-hidden bg-bg-light lg:bg-[linear-gradient(to_right,var(--color-bg-light)_50%,white_50%)]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        <div className="max-w-[600px]">
          <div className="inline-block px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">New: AI-Powered Analytics</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-primary">The All-in-One Platform for <span className="text-accent">SaaS Growth</span></h1>
          <p className="text-lg text-text-muted mb-8">Streamline your operations, boost team productivity, and scale your business with NovaSaaS. The only tool you need to manage your entire workflow.</p>
          <div className="flex gap-4 mb-12 flex-wrap">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 border-none bg-primary text-white hover:bg-primary-hover hover:-translate-y-px hover:shadow-md">
              Start Free Trial <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-transparent border-2 border-primary text-primary hover:bg-secondary">
              View Demo
            </button>
          </div>
          <div className="flex gap-8 border-t border-gray-200 pt-8">
            <div className="stat-item">
              <span className="block text-2xl font-bold text-primary">10k+</span>
              <span className="text-sm text-text-muted">Active Users</span>
            </div>
            <div className="stat-item">
              <span className="block text-2xl font-bold text-primary">99.9%</span>
              <span className="text-sm text-text-muted">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="block text-2xl font-bold text-primary">24/7</span>
              <span className="text-sm text-text-muted">Support</span>
            </div>
          </div>
        </div>

        {/* CSS Dashboard Mockup */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="bg-slate-50 rounded-xl overflow-hidden border border-gray-100">
            {/* Mock Window Header */}
            <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-400 w-64">novasaas.com/dashboard</div>
            </div>
            {/* Mock Content */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {/* Sidebar */}
              <div className="col-span-1 space-y-3">
                <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded-md w-4/5"></div>
                <div className="mt-8 h-32 bg-primary/5 rounded-lg border border-primary/10"></div>
              </div>
              {/* Main Area */}
              <div className="col-span-2 space-y-4">
                <div className="flex justify-between">
                  <div className="h-8 bg-gray-200 rounded-md w-1/3"></div>
                  <div className="h-8 bg-primary rounded-md w-1/4"></div>
                </div>
                <div className="h-40 bg-white border border-gray-100 rounded-lg shadow-sm p-4">
                  <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                    <div className="w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
                    <div className="w-full bg-primary/40 rounded-t-sm h-[70%]"></div>
                    <div className="w-full bg-primary/60 rounded-t-sm h-[50%]"></div>
                    <div className="w-full bg-primary/80 rounded-t-sm h-[85%]"></div>
                    <div className="w-full bg-primary rounded-t-sm h-[60%]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white border border-gray-100 rounded-lg shadow-sm"></div>
                  <div className="h-24 bg-white border border-gray-100 rounded-lg shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
