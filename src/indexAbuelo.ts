import './components/mainPage/mainPagePadre';
import './screens/exportscreens';
import dashboard from './screens/dashboard';
import styles from './abuelo.css';
import { AppState } from './types/store';
import { addObserver, appState } from './store/index';
import dashboardprueba from './screens/pantallaprueba';
import { PANTALLAS } from './types/enumeraciones';
import { dashboardprueba3 } from './screens/exportscreens';

class appContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}
	attributeChangedCallback(attrName: any, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);

			const divbase = this.ownerDocument.createElement('div');
			divbase.className = 'div-base';

			switch (appState.screen) {
				case PANTALLAS.DASHBOARD:
					const pantallaprincipal = this.ownerDocument.createElement('create-dashbard') as dashboard;
					divbase.appendChild(pantallaprincipal);
					this.shadowRoot.appendChild(divbase);
					break;

				case PANTALLAS.DASHBOARDPRUEBA:
					const pantallaprueba = this.ownerDocument.createElement('create-dashbard2') as dashboardprueba;

					divbase.appendChild(pantallaprueba);
					this.shadowRoot.appendChild(divbase);
					break;

				case PANTALLAS.PANTALLA3:
					const pantallaprueba2 = this.ownerDocument.createElement('create-dashbard3') as dashboardprueba3;

					divbase.appendChild(pantallaprueba2);
					this.shadowRoot.appendChild(divbase);
					break;

				default:
					break;
			}
		}
	}
}

window.customElements.define('app-container', appContainer);
