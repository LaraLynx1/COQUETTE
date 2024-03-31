import './components/mainPage/mainPagePadre';
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import cardInicio from './components/mainPage/sidebar/sidebar';
import storyCard from './components/mainPage/stories/stories'


class appContainer extends HTMLElement {


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });


	}
	connectedCallback() {
		this.render();
	}

	render() {
		const tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
		const barra = this.ownerDocument.createElement('card-inicio') as cardInicio;
		const story = this.ownerDocument.createElement('story-inicio') as storyCard;

		
		this.shadowRoot?.appendChild(tarjeta);
		this.shadowRoot?.appendChild(barra);
		this.shadowRoot?.appendChild(story);
		}
	}



customElements.define('app-container', appContainer);
