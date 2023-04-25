const firstName = document.querySelector('#first_name')
const lastName = document.querySelector('#last_name')
const email = document.querySelector('#email')
const phoneNum = document.querySelector('#phone_num')
const radioBtn = document.querySelectorAll('#radio_option')
const radioBtnArray = Array.from(radioBtn)
const checkBox = document.querySelectorAll('#checkbox')
const checkBoxArray = Array.from(checkBox)
const message = document.querySelector('#message')

const slide1NextButton = document.querySelector('#slide1_nxt')
const slide2NextButton = document.querySelector('#slide2_nxt')
const slide3NextButton = document.querySelector('#slide3_nxt')
const slide4NextButton = document.querySelector('#slide4_nxt')
const previousButton = document.querySelectorAll('.prev_btn')
const previousButtons = Array.from(previousButton)
const radioFieldsWrapper = document.querySelector('#radio_fields_wrapper')
const checkboxWrapper = document.querySelector('#checkbox_wrapper')

const rightArrow = document.querySelector('.right_arrow')
const leftArrow = document.querySelector('.left_arrow')

const firstNameError = document.querySelector('#first_name_error')
const lastNameError = document.querySelector('#last_name_error')
const emailError = document.querySelector('#email_error')
const phoneNumError = document.querySelector('#phone_num_error')
const radioErr = document.querySelector('#radio_btns_err')
const checkboxErr = document.querySelector('#checkbox_err')

previousButtons.forEach(item => {
    item.addEventListener('click', ()=>{
        leftArrow.click()
    })
})

const inputChange = function(field, err ){
    field.addEventListener('input', ()=>{
        err.style.display = 'none'
    })
}

inputChange(firstName, firstNameError)
inputChange(lastName, lastNameError)
inputChange(email, emailError)
inputChange(phoneNum, phoneNumError)


radioFieldsWrapper.addEventListener('click', (e)=>{
    if(e.target.type == 'radio'){
        const radioChecked = radioBtnArray.filter(function(curr){
            curr.checked == true
        })

        if(radioChecked){
            radioErr.style.display = 'none'
        }
    }
})

checkboxWrapper.addEventListener('click', (e)=>{
    if(e.target.type == 'checkbox'){
        const checkboxChecked = checkBoxArray.filter(function(curr){
            return curr.checked == true
        })

        if(checkboxChecked){
            checkboxErr.style.display = 'none'
        }
    }
})

const labelPositionChange = function(fieldName, labelId, ){
    fieldName.addEventListener('focus', ()=>{
        document.getElementById(labelId).classList.remove('focus_out')
    })

    fieldName.addEventListener('focusout', ()=>{
        if(fieldName.value == ''){
            document.getElementById(labelId).classList.add('focus_out')
        }
    })
}

labelPositionChange(email, 'email_label')
labelPositionChange(firstName, 'first_name_label')
labelPositionChange(lastName, 'last_name_label')
labelPositionChange(phoneNum, 'phone_label')
labelPositionChange(message, 'mssg_label')

slide1NextButton.addEventListener('click', ()=>{
    if(firstName.value == ''){
        firstNameError.style.display = 'flex'
    } else if (lastName.value == ''){
        lastNameError.style.display = 'flex'
    } else {
        rightArrow.click()
    }
})

slide2NextButton.addEventListener('click', ()=>{
    if(email.value == ''){
        emailError.style.display = 'flex'
    } else if(!email.value.includes('@' && '.com')){
        emailError.style.display = 'flex'
        document.querySelector('#email_err_txt').textContent = 'Please fill a valid Email ID'
    }
    else if (phoneNum.value == ''){
        phoneNumError.style.display = 'flex'
    } 
    
    else if(phoneNum.value.length < 10 || phoneNum.value.length > 10){
        phoneNumError.style.display = 'flex'
        document.querySelector('#phone_err_txt').textContent = 'Please fill a valid Phone number'
    }

    else {
        rightArrow.click()
    }
})

slide3NextButton.addEventListener('click', ()=>{

    const checkedStatus = radioBtnArray.filter(function(curr){
        return curr.checked == true
    })    
   
    if(checkedStatus == false){
        radioErr.style.display = 'flex'
    } else {
        rightArrow.click()
    }
})

slide4NextButton.addEventListener('click', ()=>{
    const checkboxCheckedStatus = checkBoxArray.filter(function(curr){
        return curr.checked == true
    })

    if(checkboxCheckedStatus == false){
        checkboxErr.style.display = 'flex'
    } else {
        rightArrow.click()
    }
})