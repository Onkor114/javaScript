// const list = document.getElementById('list');

// function AddItem(){
//     //creat element

//     const AddItem = document.createElement('li')
//     AddItem.textContent = "item 3"

//     list.appendChild(AddItem)
// }
// // remove elemetn
//  function removeitem(){

//     if(list.lastChild){
//        list.removeChild(list.lastChild) 
//     }else{
//         alert("waad wada masaxdey ")
//     }

    
//  }

// function changeImage() {

//     const image = document.querySelector("#image");
//     const url = prompt("please enter image url");

//     image.setAttribute( 'src' ,url)
// }

function changeStyle(){
    const header = document.querySelector('#header');
    const text = document.querySelector('.text');

    header.style.color = "blue"
    text.style.border = "2px solid red"
    text.style.padding = "20px"
    text.style.backgroundColor = "grey"
}



function SetLightMode(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    
}
function SetDarkmode(){

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

}

