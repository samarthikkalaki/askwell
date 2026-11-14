import { APP_NAME } from '@askwell/shared';

/**
 * Widget loader stub.
 * The button, the iframe and the panel arrive in Phase 2; this entry only
 * proves the bundle builds to a single file and runs on a customer's page.
 */
export interface AskwellWidget {
  readonly name: string;
  readonly version: string;
}

const widget: AskwellWidget = {
  name: APP_NAME,
  version: '0.0.0',
};

declare global {
  interface Window {
    Askwell?: AskwellWidget;
  }
}

if (typeof window !== 'undefined') {
  window.Askwell = widget;
}

export default widget;
