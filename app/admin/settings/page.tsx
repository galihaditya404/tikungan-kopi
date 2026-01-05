"use client";
import React, { useState, useEffect } from 'react';
import { useShopSettings } from '@/hooks/useShopSettings';
import { Save } from 'lucide-react';

export default function SettingsPage() {
  const { closedDay, loading, updateClosedDay } = useShopSettings();
  const [selectedDay, setSelectedDay] = useState(closedDay);
  const [isSaving, setIsSaving] = useState(false);

  // Sync local state when fetched
  useEffect(() => {
    setSelectedDay(closedDay);
  }, [closedDay]);

  const days = [
    { value: '0', label: 'Sunday' },
    { value: '1', label: 'Monday' },
    { value: '2', label: 'Tuesday' },
    { value: '3', label: 'Wednesday' },
    { value: '4', label: 'Thursday' },
    { value: '5', label: 'Friday' },
    { value: '6', label: 'Saturday' },
  ];

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateClosedDay(selectedDay);
      alert('Settings saved successfully!');
    } catch (e) {
      alert('Failed to save settings.');
    }
    setIsSaving(false);
  };

  if (loading) return <div className="p-8">Loading settings...</div>;

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">Shop Settings</h1>
      <p className="text-gray-500 mb-8">Manage global configurations for Tikungan Kopi.</p>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-xl">
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Weekly Closed Day
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Select the day of the week when the shop is regularly closed.
          </p>
          
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-fore-primary outline-none bg-white"
          >
            {days.map((day) => (
              <option key={day.value} value={day.value}>
                {day.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-3 bg-fore-primary text-white font-bold rounded-xl hover:bg-fore-secondary transition-all disabled:opacity-50"
        >
          <Save className="w-5 h-5" />
          {isSaving ? 'Saving...' : 'Save Configuration'}
        </button>
      </div>
    </div>
  );
}
