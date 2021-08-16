export interface IDataCell {
    label: string|number;
    value: string|number;
}

export interface IFormInput {
    key: string;
    label: string;
    type: string;
    placeholder?: string;
    dataset?: IDataCell[]|undefined;
}

class FormInput {
    constructor(key:string, label:string, type:string, placeholder?:string, dataset?:IDataCell[]|undefined) {
        this.key = key;
        this.label = label;
        this.type = type;
        this.placeholder = placeholder;
        this.dataset = dataset;
    }
    key: string;
    label: string;
    type: string;
    placeholder?: string;
    dataset: IDataCell[] | undefined;
}

class DataCell {
    constructor(label:string|number, value:string|number) {
        this.label = label;
        this.value = value;
    }
    label: string|number;
    value: string|number;
}

export {FormInput, DataCell};