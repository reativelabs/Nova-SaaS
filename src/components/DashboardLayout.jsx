import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    BarChart2,
    Settings,
    LogOut,
    Bell,
    Search,
    Menu,
    X,
    Plus
} from 'lucide-react';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => {
        return location.pathname === path ? 'bg-primary text-white' : 'text-text-muted hover:bg-secondary hover:text-primary';
    };

    const handleLogout = () => {
        // Add logout logic here
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-bg-light flex">
            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out flex flex-col
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-primary">NovaSaaS</Link>
                    <button
                        className="md:hidden text-text-muted"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link to="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/dashboard')}`}>
                        <LayoutDashboard size={20} />
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link to="/dashboard/team" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/dashboard/team')}`}>
                        <Users size={20} />
                        <span className="font-medium">Team</span>
                    </Link>
                    <Link to="/dashboard/analytics" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/dashboard/analytics')}`}>
                        <BarChart2 size={20} />
                        <span className="font-medium">Analytics</span>
                    </Link>
                    <Link to="/dashboard/settings" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/dashboard/settings')}`}>
                        <Settings size={20} />
                        <span className="font-medium">Settings</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">JD</div>
                        <div className="overflow-hidden">
                            <p className="font-semibold text-sm text-text-main truncate">John Doe</p>
                            <p className="text-xs text-text-muted truncate">john@example.com</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 min-h-screen flex flex-col">
                {/* Header */}
                <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden text-text-muted"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        <div className="relative hidden sm:block">
                            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary w-64"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-text-muted hover:text-primary transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
                            <Plus size={20} />
                            <span>New Project</span>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
