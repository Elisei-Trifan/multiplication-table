const elemInput = document.querySelector('.js-input')
const elemButton = document.querySelector('.js-button')
const elemOutput = document.querySelector('.js-output')
const elemGreet = document.querySelector('.greetings')


const question = prompt('Введи свое имя', 'Имя')
if (question === 'Елисей' || question === 'елисей' || question === 'елисей ' || question === 'Елисей ' ) {
    elemGreet.innerHTML = 'Привет дорогой Елисей'
} else if ( question === 'Алина' || question === 'алина' || question === 'алина ' || question === 'Алина ') {
    elemGreet.innerHTML = 'Привет дорогая Алинкааа!!'
}

elemButton.addEventListener('click', function() {
    let asd = []
    for (let i = 2; i <= 9; i++) {
        if (+   elemInput.value < 0) {
            return elemOutput.innerHTML = 'Это отрицательное значение'
        }
        else if (+elemInput.value === 0) {
            return elemOutput.innerHTML = 'Это ноль, введите положительное число'
        }  
        else if (+elemInput.value > 10) {
            return elemOutput.innerHTML = 'Число больше 10'
        }
         else {
            asd.push(+elemInput.value + ' * ' + i + ' = ' +elemInput.value*i)
        }
     }
    return elemOutput.innerHTML = asd.join('<br>')
   
})
