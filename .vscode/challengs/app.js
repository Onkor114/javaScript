// const box = document.getElementById('box');
// const borderRadiusInput = document.getElementById('borderRadius');
// const customColorInput = document.getElementById('customColor');
// const randomColorBtn = document.getElementById('randomColorBtn');

// // Change border radius based on user input
// borderRadiusInput.addEventListener('input', () => {
//     const radius = borderRadiusInput.value;
//     box.style.borderRadius = `${radius}px`;
// });

// // Change box color based on user input
// customColorInput.addEventListener('input', () => {
//     const color = customColorInput.value;
//     box.style.backgroundColor = color;
// });

// // Generate a random color
// randomColorBtn.addEventListener('click', () => {
//     const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//     box.style.backgroundColor = randomColor;
// });

// // Initialize default border-radius
// box.style.borderRadius = `${borderRadiusInput.value}px`;


const box = document.getElementById('box');
const borderRadiusInput = document.getElementById('borderRadius');
const customColorInput = document.getElementById('customColor');
const fontSizeInput = document.getElementById('fontSize');
const randomColorBtn = document.getElementById('randomColorBtn');
const fontSizeBtn = document.getElementById('fontSizeBtn');

// Change border radius based on user input
borderRadiusInput.addEventListener('input', () => {
    const radius = borderRadiusInput.value;
    box.style.borderRadius = `${radius}px`;
});

// Change box color based on user input
customColorInput.addEventListener('input', () => {
    const color = customColorInput.value;
    box.style.backgroundColor = color;
});

// Generate a random color
randomColorBtn.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    box.style.backgroundColor = randomColor;
});

// Change font size based on user input
fontSizeBtn.addEventListener('click', () => {
    const fontSize = fontSizeInput.value;
    box.style.fontSize = `${fontSize}px`;
});

// Initialize default styles
box.style.borderRadius = `${borderRadiusInput.value}px`;
box.style.fontSize = `${fontSizeInput.value}px`;
