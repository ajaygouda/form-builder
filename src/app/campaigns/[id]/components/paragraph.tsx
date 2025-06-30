import React from 'react'
import FieldAction from './fieldAction';

const ParagraphComponent = (props: any) => {
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
                <div className='flex'>
                    <div className="flex items-center">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                            Min Length
                        </label>
                        <input type="text" id="text" className="ml-2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Min Length" />
                    </div>
                    <div className="flex ml-5 items-center">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                            Max Length
                        </label>
                        <input type="text" id="text" className="ml-2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Max Length" />
                    </div>
                    <div className="flex ml-5 items-center">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                            Error Text
                        </label>
                        <input type="text" id="text" className="min-w-60 ml-2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Error text" />
                    </div>
                </div>
            </div>
            <FieldAction formFields={props.formFields} handleDelete={props.handleDelete} index={props.index} field={props.field} fieldType="Paragraph" />
        </div>
    )
}

export default ParagraphComponent;