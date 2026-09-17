import { render } from '@react-email/components';
import type { ComponentType } from 'react';

export { ResetPasswordEmail } from './emails/reset-password';

export async function renderEmail<T extends object>(
  Component: ComponentType<T>,
  props: T,
): Promise<string> {
  return render(<Component {...props} />);
}
