import { IFieldAction } from '@/types/ICampaign'
import React from 'react'


const FieldAction = (props: IFieldAction) => {
    return (
        <div className="flex items-center justify-between p-6 pt-3 pb-3 border-t border-gray-200">
            <h1 className='text-gray-700 font-medium'>{props.fieldType}</h1>
            <div className='flex items-center justify-between gap-5'>
                <label className="flex inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-xs font-medium text-gray-500 dark:text-gray-500">Required</span>
                </label>
                <span className='text-gray-200'>|</span>
                <div className='flex gap-2'>
                    <a href="#" className={`bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full relative z-10 ${props.formFields && props.index === props.formFields.length - 1
                            ? 'opacity-40 pointer-events-none'
                            : ''
                        }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z" /></svg>
                    </a>
                    <a href="#" className={`bg-gray-200 h-7 w-7 rotate-180 flex items-center justify-center rounded-full relative z-10 ${props.index === 0 ? 'opacity-40 pointer-events-none' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z" /></svg>
                    </a>
                </div>
                <span className='text-gray-200'>|</span>
                <a onClick={() => props.handleDelete(props.field, props.index)} className='cursor-pointer bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full relative z-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </a>
            </div>
        </div>
    )
}

export default FieldAction