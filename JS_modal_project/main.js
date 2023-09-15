const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

const modal = document.querySelector('.modal-container');

function openModal() {
    modal.style.display = 'flex'
};

function closeModal() {
    modal.style.display = 'none'
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
    if (e.target !== openBtn) {
        modal.style.display = "none"
    }
})