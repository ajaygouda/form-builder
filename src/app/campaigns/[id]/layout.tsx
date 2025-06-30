"use client"
import Link from 'next/link';
import { Navbar } from './components/navbar';
import { use, useState } from 'react';
import { useRouter } from "next/navigation";

export default function CampaignTabLayout({ children, params }: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {

    const { id } = use(params); 
    const router:any = useRouter();
    const [activeTab, setActiveTab] = useState<any>(1);

    const handleTab = (tab: any) => {
        setActiveTab(tab.id)
        router.push(`/campaigns/${id}/${tab.label.toLowerCase()}`);
    }

    return (
        <>
            <Navbar handleTab={handleTab} activeTab={activeTab} />
            {children}
        </>
    );
}
