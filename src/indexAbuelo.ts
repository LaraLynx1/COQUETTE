import './components/mainPage/mainPagePadre';
<<<<<<< HEAD
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import cardInicio from './components/mainPage/sidebar/sidebar';
import storyCard from './components/mainPage/stories/stories';
import cardStories from './components/mainPage/cardStories/cardstories';


class appContainer extends HTMLElement {
	tarjeta?: CardFollow;
	tarjeta4?: cardStories;
	
=======
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
>>>>>>> 22e0a98b70b3c75bf9a609a5b226d90fe4dc2a1f

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
<<<<<<< HEAD


	}
	connectedCallback() {
		this.render();
	}

	render() {
		const tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
		const barra = this.ownerDocument.createElement('card-inicio') as cardInicio;
		const story = this.ownerDocument.createElement('story-inicio') as storyCard;
		const tarjeta4 = this.ownerDocument.createElement('card-stories') as cardStories;
		
		this.shadowRoot?.appendChild(tarjeta);
		this.shadowRoot?.appendChild(barra);
		this.shadowRoot?.appendChild(tarjeta4);
		}
	}



customElements.define('app-container', appContainer);
=======
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
>>>>>>> 22e0a98b70b3c75bf9a609a5b226d90fe4dc2a1f
