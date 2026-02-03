"use client";

import React, { useEffect, useState } from 'react';
import { Clock, ArrowRight, AlertCircle, FileText } from 'lucide-react';
import { Button } from '@/components';
import { getTrains } from '@/app/actions/getTrains';

interface Train {
    train_number: string;
    train_name: string;
    source: string;
    destination: string;
    departure_time: string;
    arrival_time: string;
}

export default function SchedulesPage() {
    const [trains, setTrains] = useState<Train[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getTrains();
                setTrains(data);
            } catch (error) {
                console.error("Failed to fetch schedules");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="max-w-5xl">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Train Schedules</h1>
                <p className="text-gray-500">View departure and arrival times for all active trains</p>
            </div>

            {loading ? (
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="grid gap-4">
                    {trains.map((train) => (
                        <div key={train.train_number} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-200 transition-colors">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-mono font-bold rounded">
                                        #{train.train_number}
                                    </span>
                                    <h3 className="font-bold text-gray-900">{train.train_name}</h3>
                                </div>
                                <div className="flex items-center gap-8 text-sm">
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-semibold">Departs</p>
                                        <p className="font-medium text-gray-900">{train.source}</p>
                                        <p className="text-blue-600 font-bold">{train.departure_time}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300" />
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-semibold">Arrives</p>
                                        <p className="font-medium text-gray-900">{train.destination}</p>
                                        <p className="text-blue-600 font-bold">{train.arrival_time}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                    <Clock className="w-3.5 h-3.5" />
                                    On Time
                                </div>
                                <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-3 h-3" />}>
                                    Details
                                </Button>
                            </div>
                        </div>
                    ))}

                    {trains.length === 0 && (
                        <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500">No scheduled trains found.</p>
                            <Button variant="outline" className="mt-4">Refresh Data</Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
