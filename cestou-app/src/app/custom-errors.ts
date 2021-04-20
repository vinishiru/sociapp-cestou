import { ErrorMessage } from "ng-bootstrap-form-validation";

export const CUSTOM_ERRORS: ErrorMessage[] = [
    {
        error: "required",
        format: requiredFormat
    }, {
        error: "email",
        format: emailFormat
    }
];

export function requiredFormat(label: string | undefined, error: any): string {
    return `${label} é obrigatório.`;
}

export function emailFormat(label: string | undefined, error: any): string {
    return `O e-mail informado não parece ser válido.`;
}