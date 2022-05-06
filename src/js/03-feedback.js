import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const FEEDBACK_FORM = "feedback-form-state";
const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
const formData = savedData ?? {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
};

function onPageData() {

     if(savedData) { 
       Object.keys(savedData) 
       .forEach(item =>
        formEl.elements[item].value = savedData[item]) 
    };            
};  
onPageData();  
 
function onFormSubmit(evt) {
    evt.preventDefault();
    
    if (formEl.elements.email.value === "" || 
       formEl.elements.message.value === "") {

      return alert("Please fill in all the fields!");
        
    };

    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM);
   
    console.log(formData);
} ;   

