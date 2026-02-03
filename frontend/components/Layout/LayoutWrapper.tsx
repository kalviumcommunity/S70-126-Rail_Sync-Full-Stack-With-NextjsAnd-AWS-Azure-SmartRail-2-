import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
            {/* Sidebar - Hidden on mobile, handled by Header's mobile menu if needed, or by media queries */}
            <div className="hidden md:block flex-shrink-0 z-20">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1 min-w-0">
                <Header />

                {/* Scrollable Main Content */}
                <main className="flex-1 overflow-auto p-4 md:p-8 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
