let surName = document.querySelector('#surname')
let lastName = document.querySelector('#lastname')
let email = document.querySelector('#email')
let button = document.querySelector('#but')
let password = document.querySelector('#password')
let comfirmPass = document.querySelector('#comfirmpass')
let textError = document.createElement('div')
textError.style.color = 'red'
textError.style.marginRight = '100px'

function validate(input) {
    if (input === "text") {
        if (input.value.length >= 5) {
            console.log('valid')
            return true
        }
        else {
            if (surName.value.length < 5) {
                textError.textContent = "please enter more than 5 characters"
                return false
            }
            else if (lastName.value.length < 5) {
                textError.textContent = "please enter more than 5 characters"
                return false
            }
        }
    }
    else if (input.type === "email"){
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        textError.textContent = "invalid email"
        return false;

    }
}

    button.addEventListener('click', function (input) {
        validate(input)
    })
