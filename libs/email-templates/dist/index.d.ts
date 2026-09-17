import { ComponentType } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ResetPasswordEmailProps {
    title: string;
    fullName?: string;
    resetPasswordUrl: string;
}
declare function ResetPasswordEmail({ title, fullName, resetPasswordUrl, }: ResetPasswordEmailProps): react_jsx_runtime.JSX.Element;

declare function renderEmail<T extends object>(Component: ComponentType<T>, props: T): Promise<string>;

export { ResetPasswordEmail, renderEmail };
