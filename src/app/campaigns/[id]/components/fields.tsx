"use client";
import { IField } from "@/types/ICampaign";
import { useState, useRef, useEffect } from "react";
import { FIELDS } from "@/constant/field";

export default function FieldList(props: any) {
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isAbove, setIsAbove] = useState<boolean>(false);

    // Close on outside click
    useEffect(() => {
        if (open && dropdownRef.current) {
            const rect:any = dropdownRef.current.getBoundingClientRect();
            const spaceBelow:number = window.innerHeight - rect.top;
            const dropdownHeight:number = 360; // approximate height of dropdown
            setIsAbove(spaceBelow < dropdownHeight);
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="relative w-full" ref={menuRef}>
            <div
                className="flex items-center gap-2 mt-2 mb-2 rounded-lg cursor-pointer dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:bg-gray-700"
                onClick={() => setOpen(!open)}
            >
                <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>

                <div className="bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full relative z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 -960 960 960"
                        width="18px"
                        fill="#1f1f1f"
                    >
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                </div>

                <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
            </div>

            {open && (<>
                <div
                    ref={dropdownRef}
                    className={`absolute left-1/2 z-50 -translate-x-1/2 w-56 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-lg ${isAbove ? "bottom-full mb-2" : "top-full mt-2"
                        }`}
                >
                    {FIELDS.map((field: IField) => (
                        <div onClick={() => {
                            props.handleSelect(field)
                            setOpen(false);
                        }} className={`flex justify-between p-4 pt-3 pb-3 hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200 last:border-b-0`} key={field.id}><span className='flex text-sm justify-between items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d={field.iconPath}/></svg>{field.name}</span></div>
                    ))}
                </div>
            </>
            )}
        </div>
    );
}
