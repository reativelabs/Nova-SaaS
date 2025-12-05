import React from 'react';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import { HelpCircle } from 'lucide-react';

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <div>
                <Pricing paddingTop="pt-32 pb-16 lg:pt-40 lg:pb-24" />
            </div>

            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
                        <p className="text-text-muted">Have questions? We're here to help.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-text-main">
                                <HelpCircle size={20} className="text-primary" />
                                Can I change plans later?
                            </h3>
                            <p className="text-text-muted ml-7">Yes, you can upgrade or downgrade your plan at any time. Changes will take effect immediately.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-text-main">
                                <HelpCircle size={20} className="text-primary" />
                                Is there a free trial?
                            </h3>
                            <p className="text-text-muted ml-7">Yes, we offer a 14-day free trial for all plans. No credit card required to start.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-text-main">
                                <HelpCircle size={20} className="text-primary" />
                                What payment methods do you accept?
                            </h3>
                            <p className="text-text-muted ml-7">We accept all major credit cards (Visa, Mastercard, Amex) and PayPal.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-text-main">
                                <HelpCircle size={20} className="text-primary" />
                                Do you offer enterprise pricing?
                            </h3>
                            <p className="text-text-muted ml-7">Yes, for large teams with specific needs, please contact our sales team for a custom quote.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default PricingPage;
