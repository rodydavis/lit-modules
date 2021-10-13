import {
  html,
  css,
  LitElement,
  ReactiveController,
  ReactiveControllerHost,
} from "lit";
import { customElement } from "lit/decorators.js";

export const counterModuleStyles = [css`
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .counter > .actions > * {
    margin: 0.5rem;
  }
  .counter > span {
    font-size: 1.5em;
  }
`];

export class CounterModuleController implements ReactiveController {
  constructor(public host: ReactiveControllerHost) {
    host.addController(this);
  }

  value: number = 0;

  hostConnected() {
    this.value = 0;
  }

  increment() {
    this.value++;
    this.host.requestUpdate();
  }

  decrement() {
    this.value--;
    this.host.requestUpdate();
  }
}

export interface CounterModuleProps {
  counter: CounterModuleController;
}

export function counterModuleTemplate(props: CounterModuleProps) {
  return html`<div class="counter">
    <span>${props.counter.value}</span>
    <div class="actions">
      <button @click=${() => props.counter.increment()}>Increment +</button>
      <button @click=${() => props.counter.decrement()}>Decrement -</button>
    </div>
  </div>`;
}

@customElement("counter-module")
export class CounterModule extends LitElement implements CounterModuleProps {
  static styles = counterModuleStyles;

  counter = new CounterModuleController(this);

  render() {
    return counterModuleTemplate(this);
  }
}
