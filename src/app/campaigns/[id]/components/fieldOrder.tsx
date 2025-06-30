import { IField, IFormField } from '@/types/ICampaign';
import React from 'react'
import { FIELDS } from '@/constant/field';

const fieldOrder = (props:any) => {
  const fetchList = (fieldId: number, index: number) => {
    let field: IField = FIELDS?.filter((item: IField) => item.id === fieldId)[0];
    return <div className={`flex justify-between p-4 pt-3 pb-3 hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200 last:border-b-0`} key={index}><span className='flex text-sm justify-between items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d={field.iconPath}/></svg>{field.name}</span><span className=''><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" /></svg></span></div>
  }
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/></svg>
  return (
    <div className='bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className={`flex justify-between text-sm tracking-widest p-4 pt-3 pb-3 text-gray-500 uppercase border-b-1 border-gray-200 last:border-b-0`}><span className='flex text-sm justify-between items-center gap-2'>Field Order</span></div>
      <div className={`flex justify-between p-4 pt-3 pb-3 hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200 last:border-b-0`}><span className='flex text-sm justify-between items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M420-160v-520H200v-120h560v120H540v520H420Z" /></svg>Title</span></div>
      {props.formFields?.map((field: IField, index: number) => (
        fetchList(field.id, index)
      ))}
    </div>
  )
}

export default fieldOrder

