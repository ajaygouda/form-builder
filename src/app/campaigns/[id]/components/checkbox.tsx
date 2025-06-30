"use client"
import React, { useState } from 'react'
import FieldAction from './fieldAction';
import { IOption } from '@/types/ICampaign';

const CheckBoxComponent = (props: any) => {
    const [options, setOptions] = useState<IOption[]>([]);

    const handleAdd = () => {
        setOptions((prev: IOption[] | any) => {
            const nextId = prev.length > 0 ? prev.at(-1).id + 1 : 1;
            return [...prev, { id: nextId, label: `Option ${nextId}` }];
        });
    };

    const handleDelete = (optionId: number) => {
        setOptions((prev: IOption[]) => {
            return prev.filter((item: IOption) => item.id !== optionId)
        });
    };

    const handleChange = (optionId: number, value: string) => {
        setOptions((prev: IOption[]) => {
            return prev.map((item: IOption) => item.id === optionId ? { ...item, label: value } : item)
        });
    };

    return (
        <div className='bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <div className='p-6'>
                <div className="flex gap-4 mb-5">
                    <input
                        type="text"
                        id="text"
                        className="w-[30%] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Label"
                        required
                    />

                    <textarea
                        rows={1}
                        id="description"
                        className="w-[70%] border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Description"
                    />
                </div>
                <div>
                    {options.map((option: IOption, index: number) => (
                        <div key={index} className="flex items-center mb-4">
                            <input disabled id={`checkbox-${option.id}`} type="checkbox" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <input onChange={(e) => handleChange(option.id, e.target.value)} value={option.label} type="text" id={`${option.id}`} placeholder={option.label} required className="ml-2 w-full border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                            <div onClick={() => handleDelete(option.id)} className='ml-2 cursor-pointer bg-gray-100 h-7 w-7 flex items-center justify-center rounded-full relative z-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" /></svg>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center mb-4">
                        <input disabled type="checkbox" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <a onClick={handleAdd} className='cursor-pointer ml-2 text-sm'>Add option</a>
                    </div>
                </div>
            </div>
            <FieldAction formFields={props.formFields} handleDelete={props.handleDelete} index={props.index} field={props.field} fieldType="Checkboxes" />
        </div>
    )
}

export default CheckBoxComponent;