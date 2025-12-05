import React from 'react';
import {
    Users,
    TrendingUp,
    Activity,
    DollarSign,
    MoreHorizontal
} from 'lucide-react';

const DashboardOverview = () => {
    return (
        <div className="max-w-7xl mx-auto w-full">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-text-main mb-2">Dashboard Overview</h1>
                <p className="text-text-muted">Welcome back, John! Here's what's happening with your projects.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', icon: <DollarSign size={24} />, color: 'text-green-500', bg: 'bg-green-50' },
                    { title: 'Active Users', value: '2,345', change: '+15.2%', icon: <Users size={24} />, color: 'text-blue-500', bg: 'bg-blue-50' },
                    { title: 'Bounce Rate', value: '42.3%', change: '-5.4%', icon: <Activity size={24} />, color: 'text-red-500', bg: 'bg-red-50' },
                    { title: 'Avg. Session', value: '4m 32s', change: '+12.5%', icon: <TrendingUp size={24} />, color: 'text-purple-500', bg: 'bg-purple-50' },
                ].map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-text-muted text-sm font-medium mb-1">{stat.title}</h3>
                        <p className="text-2xl font-bold text-text-main">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section (Mock) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-text-main">Revenue Growth</h3>
                        <button className="text-text-muted hover:text-primary"><MoreHorizontal size={20} /></button>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((height, i) => (
                            <div key={i} className="w-full bg-secondary rounded-t-sm hover:bg-primary transition-colors relative group" style={{ height: `${height}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    ${height}k
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-text-muted">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-text-main">Traffic Sources</h3>
                        <button className="text-text-muted hover:text-primary"><MoreHorizontal size={20} /></button>
                    </div>
                    <div className="h-64 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-[16px] border-secondary border-t-primary border-r-accent relative">
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-3xl font-bold text-text-main">85%</span>
                                <span className="text-xs text-text-muted">Organic</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-sm text-text-muted">Direct</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-accent"></div>
                            <span className="text-sm text-text-muted">Social</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                            <span className="text-sm text-text-muted">Referral</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-text-main">Recent Activity</h3>
                    <button className="text-primary text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="divide-y divide-slate-100">
                    {[
                        { user: 'Sarah Jenkins', action: 'created a new project', target: 'Marketing Campaign', time: '2 hours ago' },
                        { user: 'David Miller', action: 'commented on', target: 'Q4 Financial Report', time: '4 hours ago' },
                        { user: 'Emily Zhang', action: 'uploaded new assets to', target: 'Brand Guidelines', time: '5 hours ago' },
                        { user: 'Michael Ross', action: 'completed task', target: 'Data Migration', time: '1 day ago' },
                    ].map((activity, index) => (
                        <div key={index} className="p-4 hover:bg-bg-light transition-colors flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-sm shrink-0">
                                {activity.user.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-text-main">
                                    <span className="font-semibold">{activity.user}</span> {activity.action} <span className="font-medium text-primary">{activity.target}</span>
                                </p>
                                <p className="text-xs text-text-muted mt-1">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
