import React from 'react'

const fieldOrder = (props: any) => {

  const fields: any = [
    { id: 1, name: "Text", iconPath: <path d="M160-360v-80h400v80H160Zm0-160v-80h640v80H160Z" /> },
    { id: 2, name: "Paragraph", iconPath: <path d="M160-200v-80h400v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Z" /> },
    { id: 3, name: "Multiple Choice", iconPath: <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /> },
    { id: 4, name: "Checkboxes", iconPath: <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /> },
    { id: 5, name: "Dropdown", iconPath: <path d="m480-360 160-160H320l160 160Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /> },
    { id: 6, name: "File Upload", iconPath: <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" /> },
    { id: 7, name: "Date", iconPath: <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /> },
    { id: 8, name: "Time", iconPath: <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /> },
  ]


  const fetchList = (fieldId: number, index: number) => {
    let field: any = fields.filter((item: any) => item.id === fieldId)[0];
    return <div className={`flex justify-between p-4 pt-3 pb-3 hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200 last:border-b-0`} key={index}><span className='flex text-sm justify-between items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f">{field.iconPath}</svg>{field.name}</span><span className=''><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" /></svg></span></div>
  }

  return (
    <div className='bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className={`flex justify-between text-sm tracking-widest p-4 pt-3 pb-3 text-gray-500 uppercase border-b-1 border-gray-200 last:border-b-0`}><span className='flex text-sm justify-between items-center gap-2'>Field Order</span></div>
      <div className={`flex justify-between p-4 pt-3 pb-3 hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200 last:border-b-0`}><span className='flex text-sm justify-between items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M420-160v-520H200v-120h560v120H540v520H420Z" /></svg>Title</span></div>
      {props.formFields.map((field: any, index: any) => (
        fetchList(field.id, index)
      ))}
    </div>
  )
}

export default fieldOrder

