"use client"

import { IOption } from "@/types/ICampaign";

export const Navbar = (props: any) => {
    const tabs:IOption[] = [
        { id: 1, label: 'Form' },
        { id: 2, label: 'Preview' },
        { id: 3, label: 'Report' },
    ];
    return (
        <div className="flex justify-between items-center h-18 py-3">
            <a href="/campaigns">
                <h1 className="text-xl font-medium flex items-center gap-4">
                    <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    New Campaign</h1>
            </a>

            <div className="w-80">
                {/* Tabs */}
                <ul className="hidden text-xs font-medium text-center border border-gray-200 text-gray-500 rounded-sm sm:flex dark:divide-gray-700 dark:text-gray-400">
                    {tabs.map((tab:IOption, index:number) => (
                        <li key={tab.id} className="w-full focus-within:z-10">
                            <button
                                onClick={() => props.handleTab(tab)}
                                className={`inline-block w-full p-3 cursor-pointer focus:outline-none ${props.activeTab === tab.id
                                    ? 'bg-sky-500 text-white'
                                    : 'bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                                    } ${index === 0 ? 'rounded-l-sm' : ''} ${index === tabs.length - 1 ? 'rounded-r-sm' : ''
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
