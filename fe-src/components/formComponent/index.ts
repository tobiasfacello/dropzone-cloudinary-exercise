//? Funciona importandolo de ésta forma aunque marque error
//! Si se importa de la manera que recomienda, devuelve "Dropzone is not a constructor"

import { Dropzone } from "dropzone";
import { state } from "../../state";

class FormComponent extends HTMLElement {
	shadow: ShadowRoot = this.attachShadow({ mode: "open" });

	constructor() {
		super();

		let style: HTMLStyleElement = document.createElement("style");

		style.textContent = `
			.form {
				width: 100%;
				height: 100%;
				margin: 0;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
			}

			.form__field {
				width: 80%;
				height: 20vh;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
			}

			.form__label {
				margin-bottom: 10px;
				font-family: "Open Sans", monospace;
				font-size: 30px;
				align-text: center;
				color: var(--light);
			}

			.form__input {
				width: 100%;
				height: 50px;
				font-family: "Open Sans", monospace;
				font-size: 20px;
				text-align: center;
				border: none;
				border-radius: 5px;
				color: var(--light);
				background-color: var(--dark);
			}

			@media (min-width: 768px) {
				.form__input {
					width: 50%;
				}
			}

			.form__input:focus {
				outline: 1px solid var(--light);
			}

			.form__textarea {
				width: 100%;
				font-family: "Open Sans", monospace;
				font-size: 20px;
				text-align: center;
				border: none;
				border-radius: 5px;
				color: var(--light);
				background-color: var(--dark);
			}

			@media (min-width: 768px) {
				.form__textarea {
					width: 50%;
				}
			}

			.form__upload-file {
				width: 100%;
				height: 50px;
				font-size: 15px;
				border: none;
				border-radius: 5px;
				color: var(--light);
				background-color: var(--dark);
			}

			@media (min-width: 768px) {
				.form__upload-file {
					width: 20%;
				}
			}

			.form__upload-file:hover {
				background-color: #000;
				cursor: pointer;
			}

			.form__upload-file:active {
				background-color: var(--dark);
			}
			@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0px)}100%{opacity:0;transform:translateY(-40px)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0px)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{width:40%;min-height:150px;border:none;border-radius:5px;padding:20px 20px}.dropzone.dz-clickable{background-color: var(--dark);cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:3em 0}.dropzone .dz-message .dz-button{background:none;font-family: "Open Sans", monospace;color: var(--light);border:none;padding:0;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom, #eee, #ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:rgba(255,255,255,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:rgba(255,255,255,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05, 1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px;background:rgba(0,0,0,.8);border-radius:50%}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px;fill:#fff}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:20px;top:50%;margin-top:-10px;left:15%;right:15%;border:3px solid rgba(0,0,0,.8);background:rgba(0,0,0,.8);border-radius:10px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#fff;display:block;position:relative;height:100%;width:0;transition:width 300ms ease-in-out;border-radius:17px}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#b10606;padding:.5em 1em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:"";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #b10606}/*# sourceMappingURL=dropzone.css.map */
        `;

		this.render();
		this.shadow.appendChild(style);
		this.addListeners();
		this.setupDropzoneElement();
	}

	render() {
		this.shadow.innerHTML = `
        <form action="" class="form">
			<div class="form__field">
				<label class="form__label" for="fullname">Nombre completo</label>
				<input id="fullname" class="form__input" type="text" name="fullname">
			</div>
			<div class="form__field">
				<label class="form__label" for="biography">Biografia</label>
				<textarea id="biography" class="form__textarea" name="biography" rows="5"></textarea>
			</div>
			<div class="dropzone"></div>
			<div class="form__field">
				<input id="upload" class="submit-btn form__upload-file" type="button" value="Enviar datos">
			</div>
		</form>
        `;
	}

	addListeners() {
		const formEl: HTMLFormElement = this.shadow.querySelector(".form");
		const submitFormEl: HTMLInputElement =
			this.shadow.querySelector(".submit-btn");

		formEl.addEventListener("submit", async (e) => {
			e.preventDefault();
			const fullName = formEl.fullname.value;
			const userBio = formEl.biography.value;
			const pictureUrl = state.getDataURL();

			await state.postProfileData({
				full_name: fullName,
				biography: userBio,
				picture_url: pictureUrl,
			});
		});

		submitFormEl.addEventListener("click", async (e) => {
			formEl.requestSubmit();
		});
	}

	setupDropzoneElement() {
		const submitFormEl: HTMLInputElement =
			this.shadow.querySelector(".submit-btn");
		const dropzoneFormEl: HTMLDivElement =
			this.shadow.querySelector(".dropzone");

		const myDropzone = new Dropzone(dropzoneFormEl, {
			url: "/false",
		});

		myDropzone.on("thumbnail", (file) => {
			//? Usando este evento pueden acceder al dataURL directamente
			state.saveDataURL(file.dataURL);
		});

		submitFormEl.addEventListener("click", () => {
			myDropzone.removeAllFiles();
			state.cleanDataURL();
		});
	}
}

customElements.define("form-comp", FormComponent);
