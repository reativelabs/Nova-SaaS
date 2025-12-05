import React from 'react';
import Features from '../components/Features';
import CTA from '../components/CTA';

const FeaturesPage = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-primary text-white py-24 pb-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-white text-5xl mb-4 font-bold">Platform Features</h1>
                    <p className="text-xl opacity-90 max-w-[600px] mx-auto">Discover the tools that will power your growth.</p>
                </div>
            </div>

            <Features showHeader={false} showLearnMore={false} />
            <CTA />
        </div>
    );
};

export default FeaturesPage;
