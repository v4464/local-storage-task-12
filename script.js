/*1. In the html file create a form with 3 input fields: one for collecting username, second for 
collecting email, and third for collecting phone number.
2. Make sure you use label tag for each of these input fields.
3. The form should have a button of submit type.

4. On form submission collect the user details mentioned above and then store them in the browser's local storage.

Input elements should be given “name” attribute with values: */

const form=document.getElementById('userDetailsForm')
form.addEventListener('submit',function(event){
    const username=event.target.username.value;
    const email=event.target.email.value;
    const num=event.target.phone.value;
    const userDetails ={
        username:username,
        email: email,
        phone:num
    }
    const userDetailsJSON=JSON.stringify(userDetails);
    localStorage.setItem('userDetails',userDetailsJSON);
})



