"use client";
import React from 'react';
import { Coffee, DollarSign, TrendingUp, Users, Plus, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    {
      label: 'Total Revenue',
      value: 'Rp 12.5M',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      label: 'Total Menus',
      value: '12',
      change: '+2',
      icon: Coffee,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      label: 'Active Promos',
      value: '3',
      change: '-1',
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      label: 'Total Users',
      value: '1,234',
      change: '+8.2%',
      icon: Users,
      color: 'bg-orange-100 text-orange-700'
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <Link
          href="/admin/menus/create"
          className="bg-fore-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-fore-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Plus className="w-5 h-5" />
          Add New Menu
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                {stat.change}
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-1 tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="bg-gray-50 p-4 rounded-full inline-block mb-4">
              <TrendingUp className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-400 font-medium">Revenue Analytics Chart</p>
            <p className="text-xs text-gray-300 mt-2">Coming Soon</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6 font-heading">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-fore-secondary mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">New menu item added</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
