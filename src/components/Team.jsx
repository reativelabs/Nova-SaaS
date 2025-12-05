import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';

const team = [
    {
        name: 'David Miller',
        role: 'CEO & Founder',
        image: team1,
        bio: 'David has over 20 years of experience in strategic consulting and business leadership.'
    },
    {
        name: 'Sarah Jenkins',
        role: 'Chief Strategy Officer',
        image: team2,
        bio: 'Sarah specializes in digital transformation and market expansion strategies.'
    },
    {
        name: 'Michael Ross',
        role: 'Head of Analytics',
        image: team3,
        bio: 'Michael leads our data science team, turning complex data into actionable insights.'
    },
    {
        name: 'Emily Zhang',
        role: 'Creative Director',
        image: team4,
        bio: 'Emily ensures that every brand we work with has a compelling and unique visual identity.'
    }
];

const Team = () => {
    return (
        <section className="py-16 lg:py-24 bg-bg-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Meet Our Team</h2>
                    <p className="text-lg text-text-muted max-w-[600px] mx-auto">The experts behind your success</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md group">
                            <div className="relative h-[300px] overflow-hidden">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full bg-primary/90 p-4 flex justify-center gap-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                    <a href="#" className="text-white hover:text-secondary"><Linkedin size={20} /></a>
                                    <a href="#" className="text-white hover:text-secondary"><Twitter size={20} /></a>
                                    <a href="#" className="text-white hover:text-secondary"><Mail size={20} /></a>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl mb-1 text-text-main font-bold">{member.name}</h3>
                                <span className="block text-sm text-primary font-semibold mb-4">{member.role}</span>
                                <p className="text-sm text-text-muted">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
