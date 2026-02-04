import React from 'react';
import { getTrains } from '../actions/getTrains'; 
import { Sidebar } from '../../components/Layout/Sidebar';
import { Header } from '../../components/Layout/Header';
import TrainDashboard from '../../components/Dashboard/TrainDashboard'; 

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  // 1. Fetch Real Data
  let trains = [];
  try {
    trains = await getTrains();
  } catch (e) {
    console.error("Error fetching trains:", e);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* 1. SIDEBAR (Fixed Left) */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 hidden md:block">
        <Sidebar />
      </div>

      {/* 2. MAIN WRAPPER (Pushed Right to make room for Sidebar) */}
      <div className="flex flex-col min-h-screen md:ml-64">
        
        {/* HEADER (Sticky Top) */}
        <div className="sticky top-0 z-40 w-full bg-white shadow-sm">
           <Header />
        </div>

        {/* CONTENT AREA */}
        <main className="flex-1 p-4 md:p-8 overflow-hidden">
          
          {/* Welcome Section */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back! 👋</h1>
              <p className="text-gray-500 mt-1">Real-time status of the RailSync Network.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100 shadow-sm w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Data
            </div>
          </div>

          {/* DASHBOARD GRID */}
          {/* Added 'min-w-0' to prevent overlapping cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: Smart Dashboard (Train List/Map) */}
            <div className="lg:col-span-2 space-y-6 min-w-0">
               <TrainDashboard trains={trains} />
            </div>

            {/* RIGHT COLUMN: Static Widgets */}
            <div className="space-y-6 min-w-0">
              
              {/* Quick Routes */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">Quick Routes</h2>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Edit</button>
                </div>
                
                <div className="space-y-6">
                  {/* Route Item 1 */}
                  <div className="relative pl-6 border-l-2 border-blue-100 pb-1">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-50"></div>
                    <p className="font-medium text-gray-900 mb-0.5">Whitefield</p>
                    <p className="text-xs text-gray-400">09:00 AM • On Time</p>
                  </div>
                  {/* Route Item 2 */}
                  <div className="relative pl-6 border-l-2 border-gray-100">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <p className="font-medium text-gray-900 mb-0.5">KSR Bengaluru</p>
                    <p className="text-xs text-gray-400">~09:45 AM • 5m Delay</p>
                  </div>
                </div>

                <button className="w-full mt-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all">
                  Start Navigation
                </button>
              </div>

              {/* Service Alert */}
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3 items-start">
                 <div className="text-amber-600 mt-0.5">⚡</div>
                 <div>
                   <h4 className="text-amber-800 font-bold text-sm">Service Alert</h4>
                   <p className="text-amber-700 text-xs mt-1 leading-relaxed">
                     Delays on Purple Line due to maintenance.
                   </p>
                 </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}