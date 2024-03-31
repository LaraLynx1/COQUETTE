import styles from './tofollow.css';
export enum datacosas {
	'image' = 'image',
	'name' = 'name',
	'arroba' = 'arroba',
}

class CrearWhotofollow extends HTMLElement {
	image?: string;
	name?: string;
	arroba?: string;
	botonfollow!: HTMLElement;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const fijateEn: Record<datacosas, null> = {
			image: null,
			name: null,
			arroba: null,
		};
		return Object.keys(fijateEn);
	}

	followprofile() {
		console.log('123', this);
		if (this.innerHTML == 'UNFOLLOW') {
			this.innerHTML = 'FOLLOW';
			this.className = 'habilitar';
		} else {
			this.innerHTML = 'UNFOLLOW';
			this.className = 'deshabilitar';
		}
	}

	connectedCallback() {
		this.render();
		this.shadowRoot?.querySelector('#seguir')?.addEventListener('click', this.followprofile);
	}

	attributeChangedCallback(attrName: datacosas, oldVal: any, newVal: any) {
		switch (attrName) {
			default:
				this[attrName] = newVal;
				break;
		}

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <div id="whoto-container">
      <img class="foto" src="${this.image}">
      <div id="names">
      <p>${this.name}</p>
      <p>${this.arroba}</p>
      </div>
			<button id="seguir">FOLLOW</button>
      </div>
      `;
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

customElements.define('crear-whotofollow', CrearWhotofollow);
export default CrearWhotofollow;
