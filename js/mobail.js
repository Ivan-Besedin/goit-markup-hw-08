(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobail-open]'),
    closeModalBtn: document.querySelector('[mobail-close]'),
    modal: document.querySelector('[data-mobail]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();