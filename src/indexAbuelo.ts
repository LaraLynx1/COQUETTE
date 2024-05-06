import './components/mainPage/mainPagePadre';
import './exportscreens';
import dashboard from './screens/dashboard';
/* import CardFollow from './components/mainPage/cardFollow/cardfollow'; */
/* import publicwrapper from './components/mainPage/publicwrapper/publicwrapper';
import wrapperopinion from './components/mainPage/opinionwrapper/opinionwrapper'; */
import styles from './abuelo.css';
/* import cardInicio from './components/mainPage/sidebar/sidebar';
import cardStories from './components/mainPage/cardStories/cardStories'; */

class appContainer extends HTMLElement {
	pantallaprincipal?: dashboard;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	attributeChangedCallback(attrName: any, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const divbase = this.ownerDocument.createElement('div');
			divbase.className = 'div-base';

			this.pantallaprincipal = this.ownerDocument.createElement('create-dashbard') as dashboard;

			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);

			divbase.appendChild(this.pantallaprincipal);
			this.shadowRoot.appendChild(divbase);
		}
	}
}

window.customElements.define('app-container', appContainer);
