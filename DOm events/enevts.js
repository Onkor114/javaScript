// const button = document.querySelector('#myButton');

// const remove = document.querySelector('#removeButton');
// function handleClick(){
//     console.log('button clicked');
// }

// button.addEventListener('click', handleClick);    

// removeButton.addEventListener('click', function(){
//     button.removeEventListener('click', handleClick);
//     console.log("button enevt removed");
// });



// const colorSelect = document.querySelector('#colorSelect');
// const selectedColor = document.querySelector('#selectedColor');

// const userName = document.querySelector('#userName');
// const currenUser = document.querySelector('#currentUser');

// userName.addEventListener('change',function(){
//     console.log('username changed',userName.value);
//     currenUser.textContent = `current user:  ${userName.value}`;
// })

// colorSelect.addEventListener('change',function(){
//     console.log('changed to', colorSelect.value)
//     selectedColor.textContent = `Selected Color: ${colorSelect.value}`
// })

//// default preventdefault actions

const form = document.querySelector("#myForm");

const forMessage = document.querySelector("#forMessage")

form.addEventListener('submit', function (event){
    event.preventDefault();

    forMessage.textContent = "form submision submited"

})