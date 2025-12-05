import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart",
    content: "NovaSaaS has completely revolutionized how we manage our development workflow. The analytics features alone are worth the price.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, Global Corp",
    content: "The best SaaS platform we've used. It's intuitive, fast, and the support team is incredible. Highly recommended for any growing team.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Founder, Creative Solutions",
    content: "We were able to scale our operations 10x without adding more headcount thanks to the automation features in NovaSaaS.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Client Success Stories</h2>
          <p className="text-lg text-text-muted max-w-[600px] mx-auto">Hear from businesses we've helped grow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="italic text-text-muted mb-8 text-lg">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-text-main">{testimonial.name}</span>
                  <span className="text-sm text-text-muted">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
