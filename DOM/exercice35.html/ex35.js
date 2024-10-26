// function ChangeImage(){
//     const image = document.querySelector("#image");
//     const url = prompt("Please enter the image url");
//     image.setAttribute( 'src' ,url);
// }


function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false; // If the current element is greater than the next, it's not sorted
      }
    }
    return true; // If no elements are out of order, the array is sorted
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  console.log(isSorted(array)); // true
  