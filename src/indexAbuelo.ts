import './components/mainPage/mainPagePadre';
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

    connectedCallback() {
        this.render();
    }

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
}

window.customElements.define('app-container', appContainer);
