"use client";

import Link from "next/link";
import { useAuth } from "@/components"; // Assuming you have this exported from components
import { TrainFront, Map, Clock, ShieldCheck, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      
      {/* ==================== 1. NAVBAR ==================== */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <TrainFront className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800">
              RailSync
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-500/20">
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  Sign In
                </Link>
                <Link href="/signup">
                  <button className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all">
                    Get Started
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
            {isAuthenticated ? (
              <Link href="/dashboard" className="block w-full">
                <button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white font-medium rounded-lg">
                  Dashboard <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login" className="block text-center text-gray-600 font-medium py-2">
                  Sign In
                </Link>
                <Link href="/signup">
                  <button className="w-full px-5 py-3 bg-gray-900 text-white font-medium rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* ==================== 2. HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-sm">
            🚀 Now Live: Real-Time Delay Prediction
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Transform Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
              Daily Commute
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Millions of trains run late every day. <strong>RailSync</strong> gives you real-time intelligence, smart routing alternatives, and live status updates to keep you moving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
               <Link 
                href="/dashboard" 
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
              >
                Launch Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <Link 
                href="/signup" 
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
            
            <Link 
              href="/about" 
              className="px-8 py-4 bg-transparent border border-blue-300 text-white font-semibold rounded-xl hover:bg-white/10 transition flex items-center justify-center"
            >
              How it Works
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 3. FEATURES GRID ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to stay on track
            </h2>
            <p className="text-gray-600">
              Built with a modern tech stack to deliver data refreshed every 15 seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Map className="w-6 h-6 text-blue-600" />}
              title="Live Tracking"
              description="Visualize train positions in real-time on our interactive map interface with high precision updates."
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-indigo-600" />}
              title="Smart Schedules"
              description="Get accurate arrival predictions powered by advanced algorithms that learn from historical delays."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-teal-600" />}
              title="Secure & Reliable"
              description="Enterprise-grade security ensures your travel data and personal information is always protected."
            />
          </div>
        </div>
      </section>

      {/* ==================== 4. FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-white flex items-center gap-2">
                <TrainFront className="w-6 h-6" /> RailSync
              </span>
              <p className="mt-2 text-sm">Real-Time Train Intelligence for the Modern Commuter.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition">Contact Support</Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
            &copy; {new Date().getFullYear()} RailSync. Built with Next.js & PostgreSQL.
          </div>
        </div>
      </footer>

    </div>
  );
}

// Helper Component for Features
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}