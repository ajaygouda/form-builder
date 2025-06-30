"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Optional: helps clean up className logic

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-36 h-screen border-r border-gray-200 transition-transform -translate-x-full sm:translate-x-0 bg-white">
            <div className="h-full overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    {[
                        { href: "/dashboard", label: "Dashboard", icon: "M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Z" },
                        { href: "/campaigns", label: "Campaigns", icon: "M480-400 40-640l440-240 440 240-440 240Z" },
                        { href: "/users", label: "Users", icon: "M40-160v-112q0-34 17.5-62.5T104-378..." },
                    ].map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={clsx(
                                    "flex flex-col items-center justify-center h-20 p-3 text-sm hover:bg-gray-100 transition-all",
                                    pathname.startsWith(item.href)
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-900"
                                )}
                            >
                                <svg className="w-6 h-6 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d={item.icon} />
                                </svg>
                                <span className="text-xs">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};
