import { whotofollow } from '../../../data/data';
import CrearWhotofollow, { datacosas } from '../toFollow/tofollow';
import styles from './cardfollow.css';

class CardFollow extends HTMLElement {
	profiles: CrearWhotofollow[] = [];
	showless: boolean = false;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	mostrartoggle() {
		let contador = 0;

		this.profiles.forEach((profile) => {
			if (this.showless) {
				contador++;
				if (contador > 3) {
					profile.className = 'ocultar';
				}
				this.shadowRoot!.querySelector('#btntoggle')!.innerHTML = 'Show More';
			} else {
				profile.className = 'mostrar';
				this.shadowRoot!.querySelector('#btntoggle')!.innerHTML = 'Show Less';
			}
		});

		this.showless = !this.showless;
	}
	connectedCallback() {
		whotofollow.forEach((profile) => {
			const recomcard = this.ownerDocument.createElement('crear-whotofollow') as CrearWhotofollow;
			recomcard.setAttribute(datacosas.image, profile.image);
			recomcard.setAttribute(datacosas.name, profile.name);
			recomcard.setAttribute(datacosas.arroba, profile.arroba);

			this.profiles.push(recomcard);
		});
		this.render();
		this.shadowRoot?.querySelector('#btntoggle')?.addEventListener('click', () => {
			this.mostrartoggle();
		});
	}

	attributeChangedCallback(attrName: datacosas, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		let contador = 0;
		if (this.shadowRoot) {
			const tarjeta = this.ownerDocument.createElement('div');
			tarjeta.className = 'wrapper-tarjeta';

			const titulo = this.ownerDocument.createElement('h2');
			titulo.innerHTML = 'Who to follow';
			titulo.className = 'csstitulo';

			tarjeta.appendChild(titulo);

			this.profiles.forEach((profile) => {
				contador++;
				if (contador > 3) {
					profile.className = 'ocultar';
				}

				tarjeta.appendChild(profile);
			});

			const showmore = this.ownerDocument.createElement('button');
			showmore.innerHTML = 'Show More';
			showmore.setAttribute('id', 'btntoggle');
			tarjeta.appendChild(showmore);

			this.shadowRoot?.appendChild(tarjeta);
		}

		const csscardfollow = this.ownerDocument.createElement('style');
		csscardfollow.innerHTML = styles;
		this.shadowRoot?.appendChild(csscardfollow);
<<<<<<< HEAD
	}
}



customElements.define('tarjeta-whotofollow', CardFollow);
=======
		//this.shadowRoot!.innerHTML = '<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>';

		/* 				const cssbox = this.ownerDocument.createElement('style');
		cssbox.innerHTML = boxicon;
		this.shadowRoot?.appendChild(cssbox); */
	}
}

window.customElements.define('tarjeta-whotofollow', CardFollow);
>>>>>>> 22e0a98b70b3c75bf9a609a5b226d90fe4dc2a1f
export default CardFollow;
