"use client";
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { IField } from '@/types/ICampaign';
import { FIELDS } from '@/constant/field';

const FieldOrder = ({ formFields: data, handleReorder }: { formFields: any, handleReorder:any }) => {
  const [formFields, setFormFields] = useState<IField[]>([]);

  useEffect(() => {
    if (data) {
      setFormFields(data);
    }
  }, [data]);

  useEffect(() => {
    console.log("formFields",formFields)
}, [formFields])

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const updatedFields = Array.from(formFields);
    const [movedItem] = updatedFields.splice(source.index, 1);
    updatedFields.splice(destination.index, 0, movedItem);

    const reordered = updatedFields.map((field, index) => ({
      ...field,
      order: index + 1,
    }));
    handleReorder(reordered)
  };


  return (
    <div className='bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 block bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className={`flex justify-between text-sm tracking-widest p-4 pt-3 pb-3 text-gray-500 uppercase border-b-1 border-gray-200 last:border-b-0`}><span className='flex text-sm justify-between items-center gap-2'>Field Order</span></div>
      <div className={`flex justify-between p-4 pt-3 pb-3 hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200 last:border-b-0`}><span className='flex text-sm justify-between items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M420-160v-520H200v-120h560v120H540v520H420Z" /></svg>Title</span></div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fields" isDropDisabled={false}>
          {(provided: any) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {formFields.map((field: any, index: number) => {
                const originalItem: any = FIELDS.filter((item: any) => item.id === field.fieldId)[0];
                const fieldItem = { ...originalItem, order: field.order }
                if (!fieldItem) return null; // handle missing item

                return (
                  <Draggable
                    key={fieldItem.id.toString()}
                    draggableId={fieldItem.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`flex justify-between p-4 pt-3 pb-3 hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200 last:border-b-0`} key={index}><span className='flex text-sm justify-between items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d={fieldItem.iconPath} /></svg>{fieldItem.name}</span><span className=''><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" /></svg></span></div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  );
};

export default FieldOrder;
