
export interface IOption {
    id: number,
    label: string,
}

export interface IFormField {
    id: number,
    order: string,
}

export interface IField {
    id: number,
    name: string,
    iconPath: any
}

export interface IFieldAction {
    formFields: any,
    handleDelete(field: any, index: number): void
    index: number,
    field: any,
    fieldType?: string
}