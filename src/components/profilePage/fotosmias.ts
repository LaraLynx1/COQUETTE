import styles from './fotosmias.css';
import 'boxicons';

export enum datacosasfotos {
	'image' = 'image',
}

class Crearfoto extends HTMLElement {
	image?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const fijateEn: Record<datacosasfotos, null> = {
			image: null,
		};
		return Object.keys(fijateEn);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(attrName: datacosasfotos, oldVal: any, newVal: any) {
		switch (attrName) {
			default:
				this[attrName] = newVal;
				break;
		}

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			const contenedor = this.ownerDocument.createElement('div');
			contenedor.setAttribute('id', 'cuadradofoto');

			const imagenpublic = this.ownerDocument.createElement('img');
			imagenpublic.className = 'fotocuadrado';
			imagenpublic.setAttribute('src', this.image!);

			contenedor.appendChild(imagenpublic);

			this.shadowRoot?.appendChild(contenedor);
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

window.customElements.define('crear-foto', Crearfoto);
export default Crearfoto;
