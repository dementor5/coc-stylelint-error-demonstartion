import {LitElement, html, css} from 'lit-element';

class TestComponent extends LitElement {
  static get styles() {
    return css`
      p {
        border: 1px solid blue;
        color:  red;
      }
    `;
  }

  render() {
    return html`
      <p>Hello world!</p>
    `;
  }
}
window.customElements.define('test-component', TestComponent);
