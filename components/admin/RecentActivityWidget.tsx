"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { MenuItem } from '@/types/menu';
import { Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function RecentActivityWidget() {
    const [activities, setActivities] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const { data, error } = await supabase
                    .from('menus')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(4);

                if (error) throw error;
                setActivities(data || []);
            } catch (error) {
                console.error("Error fetching recent activity:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchActivity();

        // Realtime Subscription
        const channel = supabase
            .channel('realtime-recent-activity')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'menus' }, (payload) => {
                console.log('New menu item added!', payload);
                fetchActivity(); // Refresh list on new item
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [supabase]);

    if (loading) {
        return (
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[150px]">
                <Loader2 className="w-6 h-6 animate-spin text-fore-primary" />
            </div>
        );
    }

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 font-heading">Recent Activity</h3>

            {activities.length === 0 ? (
                <p className="text-gray-400 text-sm">No recent activity found.</p>
            ) : (
                <div className="space-y-3">
                    {activities.map((item) => (
                        <div key={item.id} className="flex gap-4 items-start group">
                            <div className="w-2 h-2 rounded-full bg-fore-secondary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    New menu item <span className="font-bold text-fore-primary">"{item.name}"</span> added
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {item.created_at
                                        ? formatDistanceToNow(new Date(item.created_at), { addSuffix: true })
                                        : 'Just now'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
