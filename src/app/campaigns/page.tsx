import { Navbar } from "@/components/navbar"
import { ICampaign } from "@/types/ICampaign"

const campaigns: ICampaign[] = [
    {
        id: 1,
        title: "Annual function 2025",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order in reverse chronological order.",
        status: { label: "Draft", id: 2 }
    },
    {
        id: 2,
        title: "Annual function 2025",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order in reverse chronological order.",
        status: { label: "Published", id: 1 }
    },
    {
        id: 3,
        title: "Annual function 2025",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order in reverse chronological order.",
        status: { label: "Published", id: 1 }
    },
    {
        id: 4,
        title: "Annual function 2025",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order in reverse chronological order.",
        status: { label: "Published", id: 1 }
    },
    {
        id: 5,
        title: "Annual function 2025",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order in reverse chronological order.",
        status: { label: "Published", id: 1 }
    }

]
const page = () => {
    return (
        <>
            <Navbar name="Campaigns" isSearch={true} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
                <a href="/campaigns/0" className="flex h-48 items-center justify-center p-6 bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" /></svg>
                        <p className="font-normal line-clamp-2 text-sm text-gray-500 dark:text-gray-400 mt-3">New Campaign</p>
                    </div>
                </a>
                {campaigns?.map((item: ICampaign, index: number) => (
                    <a key={index} href={`/campaigns/${item.id}`} className="p-6 bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-xl line-clamp-1 font-medium tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        <p className="font-normal line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                        <div className="flex justify-between items-center mt-10">
                            <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ${item.status.id === 1
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                        : item.status.id === 2
                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                    }`}
                            >
                                {item.status.label}
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default page