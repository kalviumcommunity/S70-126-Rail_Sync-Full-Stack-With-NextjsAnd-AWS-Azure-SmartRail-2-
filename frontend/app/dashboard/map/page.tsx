import React from 'react';
import { Button } from '@/components';
import { MapPin, Navigation } from 'lucide-react';

export default function RouteMapPage() {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Live Route Map</h1>
                    <p className="text-gray-500">Visualize train positions and network status</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">Filter Views</Button>
                    <Button size="sm" leftIcon={<Navigation className="w-4 h-4" />}>Optimize Route</Button>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 backdrop-blur-sm z-10 transition-opacity opacity-100">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <MapPin className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Interactive Map Loading...</h3>
                        <p className="text-gray-500 max-w-sm mx-auto mt-2">
                            Connect an API like Google Maps or Leaflet here to visualize geospatial data.
                        </p>
                    </div>
                </div>

                {/* Mock Map Background Grid */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}>
                </div>
            </div>
        </div>
    );
}
