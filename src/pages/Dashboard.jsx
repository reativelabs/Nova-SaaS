import React from 'react';
import { Link } from 'react-router-dom';
import {
    Briefcase,
    LayoutDashboard,
    Users,
    Settings,
    BarChart2,
    Bell,
    Search,
    Menu,
    LogOut,
    Plus
} from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-bg-light flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-full z-10">
                <div className="p-6 border-b border-gray-100">
                    <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-primary">
                        <span className="flex items-center text-accent"><Briefcase size={24} /></span>
                        <span>Nova<span className="text-accent">SaaS</span></span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-primary bg-primary/5 rounded-lg font-medium">
                        <LayoutDashboard size={20} />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-text-muted hover:bg-gray-50 rounded-lg font-medium transition-colors">
                        <Users size={20} />
                        Team
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-text-muted hover:bg-gray-50 rounded-lg font-medium transition-colors">
                        <BarChart2 size={20} />
                        Analytics
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-text-muted hover:bg-gray-50 rounded-lg font-medium transition-colors">
                        <Settings size={20} />
                        Settings
                    </a>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center font-bold">JD</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-main truncate">John Doe</p>
                            <p className="text-xs text-text-muted truncate">john@example.com</p>
                        </div>
                    </div>
                    <Link to="/" className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg font-medium transition-colors text-sm">
                        <LogOut size={18} />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 min-h-screen flex flex-col">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-text-muted">
                            <Menu size={24} />
                        </button>
                        <div className="relative hidden sm:block">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative text-text-muted hover:text-primary transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors flex items-center gap-2">
                            <Plus size={16} />
                            <span className="hidden sm:inline">New Project</span>
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-6 max-w-7xl mx-auto w-full">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-text-main mb-2">Dashboard Overview</h1>
                        <p className="text-text-muted">Welcome back, here's what's happening today.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: 'Total Revenue', value: '$45,231', change: '+20.1%', positive: true },
                            { label: 'Active Users', value: '2,345', change: '+15.2%', positive: true },
                            { label: 'Bounce Rate', value: '42.3%', change: '-5.4%', positive: true },
                            { label: 'Avg. Session', value: '4m 32s', change: '-1.2%', positive: false },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <p className="text-sm text-text-muted mb-2">{stat.label}</p>
                                <div className="flex items-end justify-between">
                                    <h3 className="text-2xl font-bold text-text-main">{stat.value}</h3>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {stat.change}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Section (Mock) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-text-main">Revenue Growth</h3>
                                <select className="text-sm border-gray-200 rounded-lg text-text-muted focus:ring-0">
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option>Last 90 days</option>
                                </select>
                            </div>
                            <div className="h-64 flex items-end justify-between gap-2 px-2">
                                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                    <div key={i} className="w-full bg-primary/10 rounded-t-sm hover:bg-primary/20 transition-colors relative group">
                                        <div
                                            className="absolute bottom-0 left-0 w-full bg-primary rounded-t-sm transition-all duration-500"
                                            style={{ height: `${h}%` }}
                                        ></div>
                                        {/* Tooltip */}
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            ${h}k
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4 text-xs text-text-muted">
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-text-main mb-6">Traffic Sources</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Direct', value: 40, color: 'bg-primary' },
                                    { label: 'Social', value: 25, color: 'bg-accent' },
                                    { label: 'Referral', value: 20, color: 'bg-green-400' },
                                    { label: 'Organic', value: 15, color: 'bg-amber-400' },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-text-main">{item.label}</span>
                                            <span className="text-text-muted">{item.value}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <button className="w-full py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                    View Full Report
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-text-main">Recent Activity</h3>
                            <button className="text-sm text-primary hover:underline">View All</button>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { user: 'Sarah J.', action: 'created a new project', time: '2 mins ago' },
                                { user: 'Mike T.', action: 'uploaded 3 files', time: '15 mins ago' },
                                { user: 'Anna L.', action: 'commented on "Marketing Plan"', time: '1 hour ago' },
                                { user: 'David R.', action: 'completed task "Update Homepage"', time: '3 hours ago' },
                            ].map((item, index) => (
                                <div key={index} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                        {item.user.charAt(0)}
                                    </div>
                                    <div className="flex-1 text-sm">
                                        <span className="font-medium text-text-main">{item.user}</span> <span className="text-text-muted">{item.action}</span>
                                    </div>
                                    <span className="text-xs text-text-muted">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
