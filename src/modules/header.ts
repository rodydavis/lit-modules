import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export const headerModuleStyles = css`
  header {
    height: 60px;
    background-color: #f5f5f5;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export interface HeaderModuleProps {
  title: string;
}

export function headerModuleTemplate(props: HeaderModuleProps) {
  return html`<header>${props.title}</header>`;
}

@customElement("header-module")
export class HeaderModule extends LitElement implements HeaderModuleProps {
  static styles = [headerModuleStyles];

  @property({ type: String }) title = "Lit Modules";

  render() {
    return headerModuleTemplate(this);
  }
}
