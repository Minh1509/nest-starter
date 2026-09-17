import type { ComponentType } from "react";
import { render } from "@react-email/components";

export async function renderEmail<T extends object>(
  Component: ComponentType<T>,
  props: T,
): Promise<string> {
  return render(<Component {...props} />);
}
