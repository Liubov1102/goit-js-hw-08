import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const FEEDBACK_FORM = "feedback-form-state";
const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
const formData = (savedData !== null && savedData !== undefined) ? savedData : {};

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
    
    //if (formEl.elements.email.value === "" || 
    //   formEl.elements.message.value === "") {
    //  return alert("Please fill in all the fields!");   
    //};
    const formInputNames = Object.keys(evt.currentTarget.elements)
      .filter(item => isNaN(item)); 
      if (!formInputNames.every(item => evt.currentTarget.elements[item].value)){ alert('Заполните все поля формы!!!');
       return;
      };

    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM);
   
    console.log(formData);
} ;   

