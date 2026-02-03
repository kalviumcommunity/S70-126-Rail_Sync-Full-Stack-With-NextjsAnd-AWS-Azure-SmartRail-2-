"use client";

import React from 'react';
import { Home, Map, Clock, Settings, LogOut, TrainFront } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/components';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
    const { logout } = useAuth();

    const navItems = [
        { icon: <Home className="w-5 h-5" />, label: 'Dashboard', href: '/dashboard', active: true },
        { icon: <Map className="w-5 h-5" />, label: 'Route Map', href: '/dashboard/map', active: false },
        { icon: <Clock className="w-5 h-5" />, label: 'Schedules', href: '/dashboard/schedules', active: false },
        { icon: <Settings className="w-5 h-5" />, label: 'Settings', href: '/dashboard/settings', active: false },
    ];

    return (
        <aside className={`w-64 h-full bg-white border-r border-gray-200 flex flex-col ${className}`}>
            {/* Logo Section */}
            <div className="h-16 flex items-center px-6 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
                        <TrainFront className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800">
                        RailSync
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${item.active
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <span className={`${item.active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600 transition-colors'}`}>
                            {item.icon}
                        </span>
                        <span>{item.label}</span>
                        {item.active && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                        )}
                    </Link>
                ))}
            </nav>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-gray-100">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors group"
                >
                    <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
};
