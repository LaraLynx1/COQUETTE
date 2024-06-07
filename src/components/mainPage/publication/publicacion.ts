import { addMegusta, deleteMegusta, getMegustaById, sumarMegusta } from '../../../services/firebase';
import { appState } from '../../../store';
import { publicacion } from '../../../types/publicacion';
import styles from './publicacion.css';
import 'boxicons';

export enum datacosas2 {
	'idpost' = 'idpost',
	'user' = 'user',
	'userpfp' = 'userpfp',
	'image' = 'image',
	'likes' = 'likes',
}

class Crearpublicacion extends HTMLElement {
	idpost?: string;
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
			idpost: null,
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
		console.log('Me gusta cambiado');
	}

	favoritotoggle() {
		const favorito = this.shadowRoot?.querySelector('#favorito');
		if (this.megusta) {
			favorito?.setAttribute('type', 'regular');
		} else {
			favorito?.setAttribute('type', 'solid');
		}
		this.megusta = !this.megusta;
	}

	async connectedCallback() {
		//this.render();

		const megusta1 = await getMegustaById(this.idpost!);
		if (megusta1.length > 0) {
			this.megusta = true;
		}

		this.shadowRoot?.querySelector('#seguir2')?.addEventListener('click', this.followprofile);

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

	async render() {
		if (this.shadowRoot) {
			console.log('ENTRANDO A RENDER');

			this.shadowRoot.innerHTML = '';
			this.shadowRoot.innerHTML = `<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>`;

			const contenedor = this.ownerDocument.createElement('div');
			contenedor.setAttribute('id', 'publicacion');

			const cabecera = this.ownerDocument.createElement('div');
			cabecera.className = 'header';

			let imagenpfp!: HTMLImageElement;
			if (this.userpfp) {
				imagenpfp = this.ownerDocument.createElement('img');
				imagenpfp.className = 'fotopfp';
				imagenpfp.setAttribute('src', this.userpfp!);
			} else {
				imagenpfp = this.ownerDocument.createElement('img');
				imagenpfp.className = 'fotopfp';
			}

			const usrname = this.ownerDocument.createElement('h3');
			usrname.innerHTML = this.user!;

			const btnfollow = this.ownerDocument.createElement('button');
			btnfollow.setAttribute('id', 'seguir2');
			btnfollow.innerHTML = 'FOLLOW';

			cabecera.appendChild(imagenpfp);
			cabecera.appendChild(usrname);
			cabecera.appendChild(btnfollow);

			let imagenpublic!: HTMLImageElement;
			if (this.image) {
				imagenpublic = this.ownerDocument.createElement('img');
				imagenpublic.className = 'fotopublic';
				imagenpublic.setAttribute('src', this.image!);
			} else {
				imagenpublic = this.ownerDocument.createElement('img');
				imagenpublic.className = 'fotopublic';
			}

			const pie = this.ownerDocument.createElement('div');
			pie.className = 'footer';

			const corazon = this.ownerDocument.createElement('box-icon');
			corazon.setAttribute('id', 'corazon');
			corazon.setAttribute('name', 'heart');
			corazon.setAttribute('size', 'md');
			corazon.setAttribute('color', 'red');

			if (this.megusta) {
				corazon?.setAttribute('type', 'solid');
			} else {
				corazon?.setAttribute('type', 'regular');
			}
			corazon.addEventListener('click', this.toggleCorazon.bind(this));
			if (this.megusta) {
				corazon?.setAttribute('type', 'solid');
			} else {
				corazon?.setAttribute('type', 'regular');
			}

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

	async toggleCorazon() {
		const usuario = appState.user;
		if (this.megusta) {
			//Restar el contado
			const post: publicacion = {
				id: this.idpost!,
				user: this.user!,
				userpfp: this.userpfp!,
				image: this.image!,
				likes: (parseInt(this.likes!) - 1).toString(),
			};

			//quitar de la lista me gusta
			const postIdtodelete = post.id;
			console.log('postIdtodelete', postIdtodelete);

			const megusta = await getMegustaById(postIdtodelete);
			console.log('megusta', megusta);

			if (megusta.length > 0) {
				deleteMegusta(megusta[0].id);
			}

			this.likes = (parseInt(this.likes!) - 1).toString();
			sumarMegusta(post);
		} else {
			//Sumar contador
			const post: publicacion = {
				id: this.idpost!,
				user: this.user!,
				userpfp: this.userpfp!,
				image: this.image!,
				likes: (parseInt(this.likes!) + 1).toString(),
			};
			this.likes = (parseInt(this.likes!) + 1).toString();
			addMegusta(usuario!, post);
			sumarMegusta(post);
		}

		this.corazontoggle();
		this.render();
	}
}

window.customElements.define('crear-publicacion', Crearpublicacion);
export default Crearpublicacion;
