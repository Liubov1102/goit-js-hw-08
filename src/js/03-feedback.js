import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

const FEEDBACK_FORM = "feedback-form-state";
const formData = {
    email: '',
    message: '',
};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
};

function onPageData() {
    const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
        
        if (savedData) {
            emailEl.value = savedData.email;
            messageEl.value = savedData.message;
    
            formData.email = savedData.email;
            formData.message = savedData.message;
        }        
};  
onPageData();  

function onFormSubmit(evt) {
    evt.preventDefault();
     evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM);
   
    console.log(formData);
} ;   

