// custom html elements

// native elements: a, b, h1, p

// custom: modal

class Modal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
      <style>
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: ${this.getAttribute('width') || '300px'};
          height: ${this.getAttribute('width') || '300px'};
        }
      </style>
      <div class="modal">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    `;

		this.shadowRoot.querySelector('.modal').addEventListener('click', () => {
			this.setAttribute('status', 'closed');
		});

		this.shadowRoot
			.querySelector('.modal-content')
			.addEventListener('click', (event) => {
				event.stopPropagation();
			});
	}

	static get observedAttributes() {
		return ['status'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'status') {
			if (newValue === 'open') {
				this.shadowRoot.querySelector('.modal').style.display = 'flex';
			} else {
				this.shadowRoot.querySelector('.modal').style.display = 'none';
			}
		}
	}
}

customElements.define('modal-box', Modal);

console.log(Object.prototype.toString.call(document.createElement('modal')));

window.addEventListener('DOMContentLoaded', (event) => {
	const modal = document.querySelector('modal-box');
	const button = document.querySelector('button');

	button.addEventListener('click', () => {
		modal.setAttribute('status', 'open');
	});
});
