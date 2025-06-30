"use client"
import React, { useState } from 'react'
import FieldOrder from '../components/fieldOrder'
import FieldList from '../components/fields'
import TextComponent from '../components/text'
import ParagraphComponent from '../components/paragraph'
import MultiChoiceComponent from '../components/multiChoice'
import CheckBoxComponent from '../components/checkbox'
import { IField, IFormField } from '@/types/ICampaign'


const page = () => {
    const [formFields, setFormFields] = useState<IFormField[]>([]);

    const handleSelect = (field: IField) => {
        setFormFields((prev:IFormField[] | any) => [...prev, { id: field.id, order: prev.length + 1 }]);
    };

    const handleDelete = (field: IField, fieldIndex: number) => {
        setFormFields((prev:IFormField[]) => prev.filter((item:IFormField, index:number) => index !== fieldIndex));
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
            <div className="col-span-1"><FieldOrder formFields={formFields} /></div>
            <div className='col-span-1 md:col-span-3 mb-20'>
                <div className='p-6 bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                    <input type="text" id="text" className="mb-5 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Campaign" required />
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>
                </div>
                <FieldList handleSelect={handleSelect} />
                {[...formFields]
                    .sort((a:any, b:any) => a.order - b.order).map((field:IFormField, index:number) => (
                        <div key={index} >
                            {field.id === 1 && <TextComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            {field.id === 2 && <ParagraphComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            {field.id === 3 && <MultiChoiceComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            {field.id === 4 && <CheckBoxComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            <FieldList handleSelect={handleSelect} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default page