// set variables to find the class of each mode
// we use .dark to find the class of the 
// we use .light for lightmode 
const darkModeButton = document.querySelector('.dark'); 
    const lightModeButton = document.querySelector('.light');

    darkModeButton.addEventListener('click', () => {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add('dark')
    })

    lightModeButton.addEventListener('click', () => {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add('light')
    })


// Define the openUrl function
function openUrl(url) {
    // Open the URL in a new tab
    window.open(url, "_blank");
}

// Get the element with the class "falsezero"
const falseZeroButton = document.querySelector('.falsezero');

// Get the result box element
const resultBox = document.querySelector('.resultbox');

// Add a click event listener to the "00" button
falseZeroButton.addEventListener('click', function() {
    // Call the openUrl function with the YouTube URL
    openUrl('https://www.youtube.com/watch?v=2qBlE2-WL60');
    
    // Display the message in the result box
    resultBox.children[1].value = "RICK ROLLED!";
});