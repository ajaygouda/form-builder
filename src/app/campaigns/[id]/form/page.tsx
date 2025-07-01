"use client"
import { useEffect, useState } from 'react'
import FieldOrder from '../components/fieldOrder'
import FieldList from '../components/fields'
import TextComponent from '../components/text'
import ParagraphComponent from '../components/paragraph'
import MultiChoiceComponent from '../components/multiChoice'
import CheckBoxComponent from '../components/checkbox'
import { IField, IFormField } from '@/types/ICampaign'


const page = () => {
    const [formFields, setFormFields] = useState<IFormField[]>([]);

    const handleSelect = (field: IField, insertAfterIndex: number) => {
        setFormFields((prev: any[]) => {
            const uniqueId = Date.now(); 
            const newField = { id: uniqueId, fieldId: field.id, order: 0 };

            // Insert at index + 1
            const updated = [
                ...prev.slice(0, insertAfterIndex + 1),
                newField,
                ...prev.slice(insertAfterIndex + 1)
            ];

            // Recalculate order
            const reordered = updated.map((f, i) => ({ ...f, order: i + 1 }));

            return reordered;
        });
    };




    const handleDelete = (field: IField, fieldIndex: number) => {
        setFormFields((prev: IFormField[]) => prev.filter((item: IFormField, index: number) => index !== fieldIndex));
    };

    const handleReorder = (reorderData: any) => {
        setFormFields(reorderData)
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
            <div className="col-span-1"><FieldOrder formFields={formFields} handleReorder={handleReorder} /></div>
            <div className='col-span-1 md:col-span-3 mb-20'>
                <div className='p-6 bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                    <input type="text" id="text" className="mb-5 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Campaign" required />
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>
                </div>
                <FieldList handleSelect={handleSelect} />
                {[...formFields]
                    .map((field: IFormField, index: number) => (
                        <div key={index} >
                            {field.fieldId === 1 && <TextComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            {field.fieldId === 2 && <ParagraphComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            {field.fieldId === 3 && <MultiChoiceComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            {field.fieldId === 4 && <CheckBoxComponent formFields={formFields} field={field} index={index} handleDelete={handleDelete} />}
                            <FieldList handleSelect={(f: any) => handleSelect(f, index)} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default page