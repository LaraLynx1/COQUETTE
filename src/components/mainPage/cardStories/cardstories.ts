import { stories } from '../../../data/data';
import storyCard, {storyType} from '../stories/stories';
import styles from './cardstories.css';

class cardStories extends HTMLElement {
    storiesArray: storyCard[] = [];

    constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

    connectedCallback() {
        stories.forEach((historia) => {
            const story1 = this.ownerDocument.createElement('crear-story') as storyCard;
            story1.setAttribute(storyType.image, historia.image);
            story1.setAttribute(storyType.name, historia.name);

            this.storiesArray.push(story1);
        });
        this.render();
    }

    attributeChangedCallback(attrName: storyType, oldVal: any, newVal: any) {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const ficha = this.ownerDocument.createElement('div');
            ficha.className = 'wrapper-ficha';

            this.storiesArray;

            this.shadowRoot?.appendChild(ficha);
        }
        const csscardfollow = this.ownerDocument.createElement('style');
		csscardfollow.innerHTML = styles;
		this.shadowRoot?.appendChild(csscardfollow);
    }
}

window.customElements.define('card-stories', cardStories);
export default cardStories;

