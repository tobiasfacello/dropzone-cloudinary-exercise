customElements.define(
	"home-page",
	class initHomePage extends HTMLElement {
		connectedCallback() {
			this.render();
			this.addListeners();
		}
		render() {
			this.innerHTML = `
                <div class="div-container">
                    <form-comp class="form"></form-comp>
                </div>
                `;

			const style = document.createElement("style");
			style.textContent = `
    
            .div-container {
                width: 100%;
                height: 100%;
            }
        `;

			this.appendChild(style);
		}

		addListeners() {}
	}
);
