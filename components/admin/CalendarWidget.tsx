"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShopSettings } from '@/hooks/useShopSettings';

export default function CalendarWidget() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { closedDay } = useShopSettings();

    const daysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderDays = () => {
        const days = [];
        const totalDays = daysInMonth(currentDate);
        const firstDay = firstDayOfMonth(currentDate);

        // Previous month empty slots
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
        }

        // Current month days
        for (let i = 1; i <= totalDays; i++) {
            const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const dayOfWeek = dateObj.getDay();
            const isClosed = dayOfWeek.toString() === closedDay;

            const isToday =
                i === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear();

            let className = "h-8 w-8 flex items-center justify-center rounded-full text-xs font-medium cursor-pointer transition-colors ";

            if (isToday) {
                className += "bg-fore-primary text-white shadow-lg shadow-fore-primary/30";
            } else if (isClosed) {
                className += "bg-red-50 text-red-500 font-semibold";
            } else {
                className += "text-gray-700 hover:bg-gray-100";
            }

            days.push(
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    key={i}
                    className={className}
                >
                    {i}
                </motion.div>
            );
        }
        return days;
    };

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-gray-900 text-lg">
                    {monthNames[currentDate.getMonth()]} <span className="text-gray-400 font-medium">{currentDate.getFullYear()}</span>
                </h3>
                <div className="flex gap-2">
                    <button onClick={prevMonth} className="p-1.5 hover:bg-gray-50 rounded-full text-gray-500 hover:text-fore-primary">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={nextMonth} className="p-1.5 hover:bg-gray-50 rounded-full text-gray-500 hover:text-fore-primary">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 text-center mb-1">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-xs font-bold text-gray-400 py-1">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1 justify-items-center">
                <AnimatePresence mode="popLayout">
                    {renderDays()}
                </AnimatePresence>
            </div>
        </div>
    );
}
