// // Select the necessary elements
// const box = document.getElementById('box');
// const fontSizeInput = document.getElementById('fontSize');
// const borderRadiusInput = document.getElementById('borderRadius');
// const randomBoxColorBtn = document.getElementById('randomBoxColor');
// const randomBodyColorBtn = document.getElementById('randomBodyColor');
// const clearStateBtn = document.getElementById('clearState');
// const info = document.getElementById('info');

// // Update box styles based on user input
// fontSizeInput.addEventListener('input', () => {
//     const fontSize = fontSizeInput.value;
//     box.style.fontSize = fontSize + 'px';
//     updateInfo();
// });

// borderRadiusInput.addEventListener('input', () => {
//     const borderRadius = borderRadiusInput.value;
//     box.style.borderRadius = borderRadius + 'px';
//     updateInfo();
// });

// // Function to generate a random color
// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// // Randomize box color
// randomBoxColorBtn.addEventListener('click', () => {
//     const randomColor = getRandomColor();
//     box.style.backgroundColor = randomColor;
//     updateInfo();
// });

// // Randomize body background color
// randomBodyColorBtn.addEventListener('click', () => {
//     const randomColor = getRandomColor();
//     document.body.style.backgroundColor = randomColor;
//     updateInfo();
// });

// // Clear all styles
// clearStateBtn.addEventListener('click', () => {
//     box.style.fontSize = '36px';
//     box.style.borderRadius = '10px';
//     box.style.backgroundColor = 'lightgreen';
//     document.body.style.backgroundColor = 'white';
//     fontSizeInput.value = '';
//     borderRadiusInput.value = '';
//     updateInfo();
// });

// // Update the information display
// function updateInfo() {
//     info.innerHTML = `
//         font size: ${box.style.fontSize || '36px'}<br>
//         border radius: ${box.style.borderRadius || '10px'}<br>
//         box color: ${box.style.backgroundColor || 'rgb(144, 238, 144)'}<br>
//         body background color: ${document.body.style.backgroundColor || 'white'}
//     `;
// }


// Select the necessary elements
const box = document.getElementById('box');
const fontSizeInput = document.getElementById('fontSize');
const borderRadiusInput = document.getElementById('borderRadius');
const randomBoxColorBtn = document.getElementById('randomBoxColor');
const randomBodyColorBtn = document.getElementById('randomBodyColor');
const clearStateBtn = document.getElementById('clearState');
const info = document.getElementById('info');

// Load saved state from localStorage
function loadState() {
    const fontSize = localStorage.getItem('fontSize') || '36px';
    const borderRadius = localStorage.getItem('borderRadius') || '10px';
    const boxColor = localStorage.getItem('boxColor') || 'lightgreen';
    const bodyColor = localStorage.getItem('bodyColor') || 'white';

    // Apply the saved styles
    box.style.fontSize = fontSize;
    box.style.borderRadius = borderRadius;
    box.style.backgroundColor = boxColor;
    document.body.style.backgroundColor = bodyColor;

    // Set the input values
    fontSizeInput.value = parseInt(fontSize); // Remove 'px' and set number
    borderRadiusInput.value = parseInt(borderRadius);

    // Update the info display
    updateInfo();
}

// Save the current state to localStorage
function saveState() {
    localStorage.setItem('fontSize', box.style.fontSize);
    localStorage.setItem('borderRadius', box.style.borderRadius);
    localStorage.setItem('boxColor', box.style.backgroundColor);
    localStorage.setItem('bodyColor', document.body.style.backgroundColor);
}

// Update box styles based on user input
fontSizeInput.addEventListener('input', () => {
    const fontSize = fontSizeInput.value;
    box.style.fontSize = fontSize + 'px';
    saveState();
    updateInfo();
});

borderRadiusInput.addEventListener('input', () => {
    const borderRadius = borderRadiusInput.value;
    box.style.borderRadius = borderRadius + 'px';
    saveState();
    updateInfo();
});

// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Randomize box color
randomBoxColorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    saveState();
    updateInfo();
});

// Randomize body background color
randomBodyColorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    saveState();
    updateInfo();
});

// Clear all styles and localStorage
clearStateBtn.addEventListener('click', () => {
    box.style.fontSize = '36px';
    box.style.borderRadius = '10px';
    box.style.backgroundColor = 'lightgreen';
    document.body.style.backgroundColor = 'white';
    fontSizeInput.value = '';
    borderRadiusInput.value = '';

    // Clear localStorage
    localStorage.removeItem('fontSize');
    localStorage.removeItem('borderRadius');
    localStorage.removeItem('boxColor');
    localStorage.removeItem('bodyColor');

    updateInfo();
});

// Update the information display
function updateInfo() {
    info.innerHTML = `
        font size: ${box.style.fontSize || '36px'}<br>
        border radius: ${box.style.borderRadius || '10px'}<br>
        box color: ${box.style.backgroundColor || 'rgb(144, 238, 144)'}<br>
        body background color: ${document.body.style.backgroundColor || 'white'}
    `;
}

// Load state on page load
window.onload = loadState;
