import styles from './publicacion.css';
export enum datacosas2 {
	'user' = 'user',
	'userpfp' = 'userpfp',
	'image' = 'image',
	'likes' = 'likes',
}

class Crearpublicacion extends HTMLElement {
	user?: string;
	userpfp?: string;
	image?: string;
	likes?: string;
	botonfollow!: HTMLElement;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const fijateEn: Record<datacosas2, null> = {
			user: null,
			userpfp: null,
			image: null,
			likes: null,
		};
		return Object.keys(fijateEn);
	}

	followprofile() {
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
		this.shadowRoot?.querySelector('#seguir2')?.addEventListener('click', this.followprofile);
	}

	attributeChangedCallback(attrName: datacosas2, oldVal: any, newVal: any) {
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
			<div id="publicacion">
				<div class="header">
					<img class="fotopfp" src="${this.userpfp}" />
					<h3>${this.user}</h3>
					<button id="seguir2">FOLLOW</button>
				</div>
				<img class="fotopublic" src="${this.image}" />
				<div class="footer">
				// <i class='bx bx-heart'></i>
				 </div>
				<p>${this.likes} Me gusta</p>
			</div>
      `;
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

window.customElements.define('crear-publicacion', Crearpublicacion);
export default Crearpublicacion;
