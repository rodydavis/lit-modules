import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  CounterModuleController,
  counterModuleStyles,
  counterModuleTemplate,
} from "./counter";
import { headerModuleStyles, headerModuleTemplate } from "./header";

export const appModuleStyles = [
  css`
    main {
      display: flex;
      flex-direction: column;
    }
  `,
  headerModuleStyles,
  counterModuleStyles,
];

export interface AppModuleProps {
  name: string;
  counter: CounterModuleController;
}

export function appModuleTemplate(props: AppModuleProps) {
  return html`<main>
    ${headerModuleTemplate({
      title: window.document.title,
    })}
    ${counterModuleTemplate({
      counter: props.counter,
    })}
  </main> `;
}

@customElement("app-module")
export class AppModule extends LitElement implements AppModuleProps {
  static styles = appModuleStyles;

  @property({ type: String }) name = "World";

  counter = new CounterModuleController(this);

  render() {
    return appModuleTemplate(this);
  }
}
