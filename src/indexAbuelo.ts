import './components/mainPage/mainPagePadre';
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import cardInicio from './components/mainPage/sidebar/sidebar';
import storyCard from './components/mainPage/stories/stories';
import cardStories from './components/mainPage/cardStories/cardstories';


class appContainer extends HTMLElement {
	tarjeta?: CardFollow;
	tarjeta4?: cardStories;
	

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
		const tarjeta4 = this.ownerDocument.createElement('card-stories') as cardStories;
		
		this.shadowRoot?.appendChild(tarjeta);
		this.shadowRoot?.appendChild(barra);
		this.shadowRoot?.appendChild(tarjeta4);
		}
	}



customElements.define('app-container', appContainer);
