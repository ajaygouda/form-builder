
export interface IOption {
    id: number,
    label: string,
}

export interface IFormField {
    id: number,
    fieldId:number,
    order: string,
}

export interface IField {
    id: number,
    name: string,
    iconPath: string
}

export interface IFieldAction {
    formFields: IFormField[],
    handleDelete(field: any, index: number): void
    index: number,
    field: IFormField,
    fieldType?: string
}

export interface ICampaign {
    id: number,
    title: string,
    description: string,
    status: IOption
}