import styles from './shareopinion.css';

export enum datacosas3 {
	'userpfp' = 'userpfp',
}

class Crearopinion extends HTMLElement {
	userpfp?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const fijateEn: Record<datacosas3, null> = {
			userpfp: null,
		};
		return Object.keys(fijateEn);
	}

	onClickPost() {
		if (this.innerHTML == 'POSTED') {
			this.innerHTML = 'POST';
			this.className = 'habilitar';
		} else {
			this.innerHTML = 'POSTED';
			this.className = 'deshabilitar';
		}
	}

	connectedCallback() {
		this.render();
		this.shadowRoot?.querySelector('#post')?.addEventListener('click', this.onClickPost);
	}

	attributeChangedCallback(attrName: datacosas3, oldVal: any, newVal: any) {
		switch (attrName) {
			default:
				this[attrName] = newVal;
				break;
		}

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

				<div class="headeropinion">
					<img class="fotopfp" src="${this.userpfp}" />
          <h2>What is happening?</h2>
        </div>

        <div class="textopinion">
        <input id="write" type="text" placeholder="write" />
        <button id="post">POST</button>

        </div>
				<div class="linea"></div>
      `;
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

window.customElements.define('crear-opinion', Crearopinion);
export default Crearopinion;
