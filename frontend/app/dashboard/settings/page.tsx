"use client";

import React from 'react';
import { User, Mail, Bell, Shield, Save } from 'lucide-react';
import { Button, useAuth } from '@/components';

export default function SettingsPage() {
    const { user } = useAuth();

    return (
        <div className="max-w-3xl">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-gray-500">Manage your profile and notification preferences</p>
            </div>

            <div className="space-y-6">
                {/* Profile Card */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                            {user?.name?.[0] || 'U'}
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">{user?.name || 'User'}</h2>
                            <p className="text-sm text-gray-500">Premium Member</p>
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input type="text" defaultValue={user?.name || ''} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input type="email" defaultValue={user?.email || ''} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex justify-end">
                            <Button leftIcon={<Save className="w-4 h-4" />}>Save Changes</Button>
                        </div>
                    </form>
                </div>

                {/* Preferences Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                            <Bell className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Notifications</h3>
                        <p className="text-sm text-gray-500 mb-4">Manage how you receive alerts for route changes and schedule updates.</p>
                        <Button variant="outline" size="sm" className="w-full">Configure</Button>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                            <Shield className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Privacy & Security</h3>
                        <p className="text-sm text-gray-500 mb-4">Update your password and manage active sessions.</p>
                        <Button variant="outline" size="sm" className="w-full">Manage Access</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
