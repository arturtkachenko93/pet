import { FORM_CONFIG } from 'shared/config/form/form-config';
import { TAuthForm, TField } from 'shared/store/types/form-schema';

export const initialAuthFormFields = () => {
    return Object.keys(FORM_CONFIG['authByUsername']).reduce((acc, item) => {
        return {
            ...acc,
            [item]: {
                meta: {
                    hidden: false,
                    disabled: false,
                },
            },
        };
    }, {} as Record<keyof TAuthForm, TField>);
};
