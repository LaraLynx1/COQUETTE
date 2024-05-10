import '../components/mainPage/mainPagePadre';
import styles from './profile.css';
import { fotosperfil } from '../data/data';
import fotowrapper from '../components/profilePage/fotoswrapper';
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../types/store';
import { PANTALLAS } from '../types/enumeraciones';

class Perfil extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const button = this.shadowRoot?.querySelector('#cerrarperfil');

		button?.addEventListener('click', () => {
			dispatch(navigate(PANTALLAS.DASHBOARD));
		});
	}
	attributeChangedCallback(attrName: any, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const divfondo = this.ownerDocument.createElement('div');
			divfondo.className = 'div-fondo';

			const divarriba = this.ownerDocument.createElement('div');
			divarriba.className = 'div-arriba';

			const divarribafoto = this.ownerDocument.createElement('div');
			divarribafoto.className = 'div-arribafoto';

			const fotodeperfil = this.ownerDocument.createElement('img');
			fotodeperfil.className = 'fotopfp';
			fotodeperfil.setAttribute(
				'src',
				'https://www.semana.com/resizer/r0OI-UL1npAMnFaFqySPh7RqzLU=/arc-anglerfish-arc2-prod-semana/public/MDNDZ5QVPFDUFMXQFO54CL7PVA.jpg'
			);

			divarribafoto.appendChild(fotodeperfil);

			const divarribatexto = this.ownerDocument.createElement('div');
			divarribatexto.className = 'div-arribatexto';

			const divarribatextonombre = this.ownerDocument.createElement('div');
			divarribatextonombre.className = 'div-arribatextoboton';

			const usrname = this.ownerDocument.createElement('h3');
			usrname.innerHTML = 'Mochi_miel';

			const btncerrar = this.ownerDocument.createElement('button');
			btncerrar.setAttribute('id', 'cerrarperfil');
			btncerrar.innerHTML = 'Salir';

			divarribatextonombre.appendChild(usrname);
			divarribatextonombre.appendChild(btncerrar);

			const btneditar = this.ownerDocument.createElement('button');
			btneditar.setAttribute('id', 'editarperfil');
			btneditar.innerHTML = 'Editar Perfil';

			const seguidores = this.ownerDocument.createElement('h3');
			seguidores.innerHTML = '300 seguidores';

			const btnlogin = this.ownerDocument.createElement('button');
			btnlogin.setAttribute('id', 'alogin');
			btnlogin.innerHTML = 'Log in';

			divarribatexto.appendChild(divarribatextonombre);
			divarribatexto.appendChild(btneditar);
			divarribatexto.appendChild(seguidores);
			divarriba.appendChild(divarribafoto);
			divarriba.appendChild(divarribatexto);

			divfondo.appendChild(divarriba);

			const divfotos = this.ownerDocument.createElement('div');
			divfotos.className = 'div-fotos';

			const fotos = this.ownerDocument.createElement('foto-wrapper') as fotowrapper;
			divfotos.appendChild(fotos);
			divfondo.appendChild(divfotos);

			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);

			this.shadowRoot.appendChild(divfondo);
		}
	}
}

window.customElements.define('create-perfil', Perfil);
export default Perfil;
