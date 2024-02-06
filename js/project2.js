class revealModal {
  constructor(button, modal, overlay, xIcon) {
    this.button = button;
    this.modal = modal;
    this.overlay = overlay;
    this.xIcon = xIcon;
    this.init();
  }

  addModal = () => {
    this.modal.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  }

  removeModal = () => {
    this.modal.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }

  init = () => {
    this.button.addEventListener('click', this.addModal);
    this.xIcon.addEventListener('click', this.removeModal);
    this.overlay.addEventListener('click', this.removeModal)
  }
}

const elements = new revealModal(document.querySelector('#button'), document.querySelector('#modal'), document.querySelector('#overlay'),document.querySelector('#xIcon'));