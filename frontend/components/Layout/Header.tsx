"use client";

import React from 'react';
import { Bell, Search, Menu, UserCircle } from 'lucide-react';
import { useAuth } from '@/components';
import Link from 'next/link';

export const Header: React.FC = () => {
    const { user, isAuthenticated } = useAuth();

    return (
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all">
            <div className="flex items-center gap-4 flex-1">
                <button className="md:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                    <Menu className="w-5 h-5" />
                </button>

                {/* Search Bar */}
                <div className="hidden md:flex items-center max-w-md w-full gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search trains, stations, or routes..."
                        className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-900"
                    />
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 sm:gap-4">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                {isAuthenticated ? (
                    <div className="flex items-center gap-3 pl-3 sm:pl-4 border-l border-gray-200">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-gray-900 leading-tight">{user?.name || 'User'}</p>
                            <p className="text-[11px] text-blue-600 font-medium tracking-wide">PREMIUM</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium shadow-md ring-2 ring-white">
                            {user?.name?.[0] || 'U'}
                        </div>
                    </div>
                ) : (
                    <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                        <UserCircle className="w-5 h-5" />
                        <span>Sign In</span>
                    </Link>
                )}
            </div>
        </header>
    );
};
