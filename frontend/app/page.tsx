"use client";

import Link from "next/link";
import { Button, useAuth } from "@/components";
import { TrainFront, Map, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <TrainFront className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800">
              RailSync
            </span>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Sign In
                </Link>
                <Link href="/signup">
                  <Button size="sm">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live Train Tracking Now Available
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            Smarter Commutes, <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Seamless Journeys
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience real-time tracking, intelligent routing, and precise scheduling.
            RailSync brings the power of modern logistics to your daily commute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-lg shadow-xl shadow-blue-500/20" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Launch Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-lg shadow-xl shadow-blue-500/20" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Your Journey
                </Button>
              </Link>
            )}
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 mix-blend-multiply"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Map className="w-6 h-6 text-blue-600" />}
              title="Live Tracking"
              description="Visualize train positions in real-time on our interactive map interface."
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-indigo-600" />}
              title="Smart Schedules"
              description="Get accurate arrival predictions powered by advanced algorithms."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-teal-600" />}
              title="Secure & Reliable"
              description="Enterprise-grade security ensures your travel data is always protected."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}