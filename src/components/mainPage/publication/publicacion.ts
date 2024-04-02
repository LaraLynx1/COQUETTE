import styles from './publicacion.css';
import 'boxicons';

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
	megusta: boolean = false;

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
	corazontoggle() {
		const corazon = this.shadowRoot?.querySelector('#corazon');
		if (this.megusta) {
			corazon?.setAttribute('type', 'regular');
		} else {
			corazon?.setAttribute('type', 'solid');
		}
		this.megusta = !this.megusta;
	}
	favoritotoggle() {
		const corazon = this.shadowRoot?.querySelector('#favorito');
		if (this.megusta) {
			corazon?.setAttribute('type', 'regular');
		} else {
			corazon?.setAttribute('type', 'solid');
		}
		this.megusta = !this.megusta;
	}

	connectedCallback() {
		this.render();
		this.shadowRoot?.querySelector('#seguir2')?.addEventListener('click', this.followprofile);

		this.shadowRoot?.querySelector('#corazon')?.addEventListener('click', () => {
			this.corazontoggle();
		});
		this.shadowRoot?.querySelector('#favorito')?.addEventListener('click', () => {
			this.favoritotoggle();
		});
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
			<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>`;

			const contenedor = this.ownerDocument.createElement('div');
			contenedor.setAttribute('id', 'publicacion');

			const cabecera = this.ownerDocument.createElement('div');
			cabecera.className = 'header';

			const imagenpfp = this.ownerDocument.createElement('img');
			imagenpfp.className = 'fotopfp';
			imagenpfp.setAttribute('src', this.userpfp!);

			const usrname = this.ownerDocument.createElement('h3');
			usrname.innerHTML = this.user!;

			const btnfollow = this.ownerDocument.createElement('button');
			btnfollow.setAttribute('id', 'seguir2');
			btnfollow.innerHTML = 'FOLLOW';

			cabecera.appendChild(imagenpfp);
			cabecera.appendChild(usrname);
			cabecera.appendChild(btnfollow);

			const imagenpublic = this.ownerDocument.createElement('img');
			imagenpublic.className = 'fotopublic';
			imagenpublic.setAttribute('src', this.image!);

			const pie = this.ownerDocument.createElement('div');
			pie.className = 'footer';

			const corazon = this.ownerDocument.createElement('box-icon');
			corazon.setAttribute('id', 'corazon');
			corazon.setAttribute('name', 'heart');
			corazon.setAttribute('size', 'md');
			corazon.setAttribute('color', 'red');

			const favorito = this.ownerDocument.createElement('box-icon');
			favorito.setAttribute('id', 'favorito');
			favorito.setAttribute('name', 'message-alt');
			favorito.setAttribute('size', 'md');
			favorito.setAttribute('color', 'yellow');

			pie.appendChild(corazon);
			pie.appendChild(favorito);

			const likes = this.ownerDocument.createElement('p');
			likes.className = 'margintexto';
			likes.innerHTML = this.likes + ' Likes';

			contenedor.appendChild(cabecera);
			contenedor.appendChild(imagenpublic);
			contenedor.appendChild(pie);
			contenedor.appendChild(likes);

			this.shadowRoot?.appendChild(contenedor);
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

window.customElements.define('crear-publicacion', Crearpublicacion);
export default Crearpublicacion;
