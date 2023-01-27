import {createContext} from "react";
import type {FieldProps} from "./types";

export const initialContext = {
    formFieldsRef: {current: [] as FieldProps[]},
    recomputeErrors: () => {
        return undefined as void;
    },
    errors: [] as string[],
    onSubmit: async () => {
        return undefined as void;
    },
    getFieldValue: (val: string) => {
        return undefined as FieldProps | undefined;
    }
};

export const FormContext = createContext(initialContext);