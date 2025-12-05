import React from 'react';
import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/images/about-image.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
        <div className="relative rounded-2xl overflow-hidden lg:order-2">
          <img
            src={aboutImage}
            alt="Corporate Team Meeting"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg text-center flex flex-col">
            <span className="text-4xl font-extrabold text-primary leading-none">10+</span>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="lg:order-1">
          <h2 className="text-4xl font-bold mb-6 text-primary">Why Choose NovaSaaS?</h2>
          <p className="text-xl text-primary mb-6 font-medium">We combine cutting-edge technology with user-centric design to deliver a platform that scales with you.</p>
          <p className="text-text-muted mb-8">At NovaSaaS, we believe that every business deserves powerful tools to achieve greatness. Our platform is designed to streamline your workflow, provide actionable insights, and drive growth through automation and efficiency.</p>

          <ul className="list-none mb-10">
            <li className="flex items-center gap-4 mb-4 font-medium">
              <CheckCircle size={20} className="text-accent" />
              <span>Data-driven decision making</span>
            </li>
            <li className="flex items-center gap-4 mb-4 font-medium">
              <CheckCircle size={20} className="text-accent" />
              <span>Global network of experts</span>
            </li>
            <li className="flex items-center gap-4 mb-4 font-medium">
              <CheckCircle size={20} className="text-accent" />
              <span>Customized strategic planning</span>
            </li>
            <li className="flex items-center gap-4 mb-4 font-medium">
              <CheckCircle size={20} className="text-accent" />
              <span>Proven track record of success</span>
            </li>
          </ul>

          <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 border-none bg-primary text-white hover:bg-primary-hover hover:-translate-y-px hover:shadow-md">Meet Our Team</button>
        </div>
      </div>
    </section>
  );
};

export default About;
