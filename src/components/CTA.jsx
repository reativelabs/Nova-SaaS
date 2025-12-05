import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-accent blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">Join thousands of companies using NovaSaaS to streamline their workflow and boost productivity.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/signup" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-primary bg-white hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Start Your Free Trial
                    </Link>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-200">
                        Contact Sales <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
                <p className="mt-6 text-sm text-white/60">No credit card required. 14-day free trial.</p>
            </div>
        </section>
    );
};

export default CTA;
