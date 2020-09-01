import { html, css, LitElement } from 'lit-element';

export class ComponentePrueba extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--componente-prueba-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      nombre: {
        type: String
      },
      email: {
        type: String
      },
      verMas: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.verMas = false;
    this.nombreCliente = 'Bryanna';
  }

  

  render() {
    return html`
      <style>
        div {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
        }
        h1 {
          font-size: 1.2em;
          font-weight: normal;
        }
      </style>

      <div>
        <h1>${this.nombre}</h1>
        <p><a href="#" @click="${this.toggle}">Ver más</a></p>
        ${this.verMas?
          html`Email: ${this.email}`  :
          ''
        }
      </div>
    `;
  }

  toggle(e){
    e.preventDefault();
    this.verMas = !this.verMas;
  }
}
