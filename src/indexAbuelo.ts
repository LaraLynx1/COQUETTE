import './components/mainPage/mainPagePadre';
<<<<<<< HEAD
import './screens/exportscreens';
import CardFollow from './components/mainPage/cardFollow/cardfollow';

import styles from './abuelo.css';

class appContainer extends HTMLElement {
    // tarjeta?: CardFollow;
    // pantallaprincipal?: dashboard;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
=======
import './components/profilePage/profilePadre';
import './screens/exportscreens';
import dashboard from './screens/dashboard';
import styles from './abuelo.css';
import { AppState } from './types/store';
import { addObserver, appState } from './store/index';

import { PANTALLAS } from './types/enumeraciones';
import { Perfil } from './screens/exportscreens';

class appContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}
>>>>>>> 57cae36f0a8d5138fdd1ed694ba99516e028c70a

    connectedCallback() {
        this.render();
    }

<<<<<<< HEAD
    attributeChangedCallback(attrName: any, oldVal: any, newVal: any) {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';  // Clear previous content
            const csscardfollow = this.ownerDocument.createElement('style');
            csscardfollow.innerHTML = styles;
            this.shadowRoot?.appendChild(csscardfollow);

            // Create elements based on the imported classes
            // this.tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
            // this.pantallaprincipal = this.ownerDocument.createElement('create-dashboard') as dashboard;

			const dashboard = this.ownerDocument.createElement('create-dashbard');
        this.shadowRoot?.appendChild(dashboard);
            
            // Append new elements
            // this.shadowRoot?.appendChild(this.tarjeta);
            // this.shadowRoot?.appendChild(this.pantallaprincipal);
        }
    }
=======
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);

			switch (appState.screen) {
				case PANTALLAS.DASHBOARD:
					const pantallaprincipal = this.ownerDocument.createElement('create-dashbard') as dashboard;

					this.shadowRoot.appendChild(pantallaprincipal);
					break;
				case PANTALLAS.PERFIL:
					const pantallaperfil = this.ownerDocument.createElement('create-perfil') as Perfil;

					this.shadowRoot.appendChild(pantallaperfil);
					break;

				default:
					break;
			}
		}
	}
>>>>>>> 57cae36f0a8d5138fdd1ed694ba99516e028c70a
}

window.customElements.define('app-container', appContainer);
