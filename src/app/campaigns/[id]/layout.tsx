"use client";
import { Navbar } from './components/navbar';
import { use, useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function CampaignTabLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>; // ✅ Promise
}) {
    const { id } = use(params); // ✅ Unwrapped with React.use()
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTab = (tab: { id: number; label: string }) => {
        setActiveTab(tab.id);
        if (id) {
            router.push(`/campaigns/${id}/${tab.label.toLowerCase()}`);
        }
    };

    useEffect(() => {
        router.push(`/campaigns/${id}/form`);
    }, [])

    return (
        <>
            <Navbar handleTab={handleTab} activeTab={activeTab} />
            {children}
        </>
    );
}
