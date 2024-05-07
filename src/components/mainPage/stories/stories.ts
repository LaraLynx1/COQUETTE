<<<<<<< HEAD
import styles from "../stories/stories.css";

export enum storyType {
	'image' = 'image',
	'name' = 'name',

}

class storyCard extends HTMLElement {

    image?: string;
	name?: string;


    constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

    static get observedAttributes() {
		const attrs: Record<storyType, null> = {
			image: null,
			name: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback (propName: storyType, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
		
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

    connectedCallback() {
		this.render();
	}

    render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			
    <div class="stories">
	<div class="completo">
	<img class="pfp" src="${this.image}">
	  <div class="user">
	  <p>${this.name}</p>
	  </div>
	</div>
      
      
    </div>
          `;
		}
        const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

customElements.define('story-card', storyCard);
export default storyCard;
=======
import styles from '../stories/stories.css';

export enum storyType {
	'image' = 'image',
	'name' = 'name',
}

class storyCard extends HTMLElement {
	image?: string;
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<storyType, null> = {
			image: null,
			name: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: storyType, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

    <div class="stories">

	<img class="pfp" src="${this.image}">

	  <p>${this.name}</p>


	</div>


    </div>
          `;
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

customElements.define('story-card', storyCard);
export default storyCard;
>>>>>>> 22e0a98b70b3c75bf9a609a5b226d90fe4dc2a1f
