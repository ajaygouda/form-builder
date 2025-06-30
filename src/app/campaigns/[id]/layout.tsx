"use client"
import { Navbar } from './components/navbar';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function CampaignTabLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { id: string };
}) {
    const { id } = params;
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTab = (tab: { id: number; label: string }) => {
        setActiveTab(tab.id);
        router.push(`/campaigns/${id}/${tab.label.toLowerCase()}`);
    };

    return (
        <>
            <Navbar handleTab={handleTab} activeTab={activeTab} />
            {children}
        </>
    );
}
