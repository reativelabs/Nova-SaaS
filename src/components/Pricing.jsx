import React, { useState } from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Starter',
        price: { monthly: 29, yearly: 290 },
        description: 'Perfect for small teams and startups.',
        features: [
            'Up to 5 users',
            'Basic analytics',
            '24/7 Support',
            '1GB Storage',
            'Community Access'
        ],
        highlight: false
    },
    {
        name: 'Pro',
        price: { monthly: 79, yearly: 790 },
        description: 'Best for growing businesses.',
        features: [
            'Up to 20 users',
            'Advanced analytics',
            'Priority Support',
            '10GB Storage',
            'API Access',
            'Custom Integrations'
        ],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: { monthly: 199, yearly: 1990 },
        description: 'For large organizations with custom needs.',
        features: [
            'Unlimited users',
            'Custom reporting',
            'Dedicated Account Manager',
            'Unlimited Storage',
            'SSO & Advanced Security',
            'SLA Guarantee'
        ],
        highlight: false
    }
];

const Pricing = ({ paddingTop = 'py-16 lg:py-24' }) => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className={`${paddingTop} bg-white`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-text-muted max-w-[600px] mx-auto mb-8">Choose the plan that fits your business needs.</p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-semibold ${!isYearly ? 'text-primary' : 'text-text-muted'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 bg-secondary rounded-full relative transition-colors duration-300 focus:outline-none"
                        >
                            <div className={`w-6 h-6 bg-primary rounded-full absolute top-1 transition-transform duration-300 ${isYearly ? 'left-7' : 'left-1'}`}></div>
                        </button>
                        <span className={`text-sm font-semibold ${isYearly ? 'text-primary' : 'text-text-muted'}`}>Yearly <span className="text-accent text-xs">(Save 20%)</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`rounded-2xl p-8 transition-all duration-300 ${plan.highlight ? 'bg-primary text-white shadow-xl scale-105 z-10' : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'}`}>
                            <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-primary'}`}>{plan.name}</h3>
                            <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-text-muted'}`}>{plan.description}</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                                <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-text-muted'}`}>/{isYearly ? 'year' : 'month'}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check size={18} className={plan.highlight ? 'text-accent' : 'text-primary'} />
                                        <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-text-main'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${plan.highlight ? 'bg-white text-primary hover:bg-gray-100' : 'bg-secondary text-primary hover:bg-secondary/80'}`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
