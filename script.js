document.addEventListener("DOMContentLoaded", function () {
    //counter
    const body = document.querySelector('body');
    const btns = document.querySelectorAll('.counter__btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__input');
            const currentValue = +inp.value;
            let newValue;
        
            if (direction === 'plus') {
                newValue = currentValue + 1;
            } else {
            newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
                if (currentValue === 1) {
                    this.parentElement.parentElement.classList.toggle("active-count");
                }
            } 
            inp.value = newValue;
        })
    });
});