const elemInput = document.querySelector('.js-input')
const elemButton = document.querySelector('.js-button')
const elemOutput = document.querySelector('.js-output')
const elemGreet = document.querySelector('.greetings')
const elemFoto = document.querySelector('.foto')



const question = prompt('Введи свое имя', 'Имя')
    name = question.trim()
    if (name === 'Рувим') {
        elemFoto.innerHTML = `<img src="img/photo_2024-08-03_15-02-49.jpg" alt="фотка Рувима"></img>`
    } else if (name === 'Елисей') {
        elemFoto.innerHTML = `<img src="img/20170717_1439543.png" alt="фотка Елисея"></img>`
    } else if (name === 'Виталик') {
        elemFoto.innerHTML = `<img src="img/20170717_143953.jpg" alt="фотка Виталика"></img>`
    } else if (name === 'Вера') {
        elemFoto.innerHTML = `<img src="img/20170711_164844.jpg" alt="фотка Веры"></img>`
    } else if (name === 'Алина') {
        elemFoto.innerHTML = `<img src="img/20170711_154742.png" alt="фотка Алины"></img>`
    }  else if (name === 'Надя') {
        elemFoto.innerHTML = `<img src="img/20170711_143939.jpg" alt="фотка Нади"></img>`
    }
     elemGreet.innerHTML = `Привет  ${name}`




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
