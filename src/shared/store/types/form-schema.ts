export type TFormNames = 'authForm';

export type TFieldMeta = {
    disabled: boolean;
    hidden: boolean;
};

export type TField = {
    value?: string;
    meta: TFieldMeta;
};

export type TAuthForm = {
    login: TField;
    password: TField;
    isLoading: boolean;
    error?: string;
};

export type TFormFields = {
    authForm: Record<keyof TAuthForm, TField>;
};

export type TFormSchema = {
    fields: Partial<TFormFields>;
    currentFormName: TFormNames;
    isLoading: boolean;
    error?: string;
};

export type TFormFieldsName = keyof TAuthForm;
