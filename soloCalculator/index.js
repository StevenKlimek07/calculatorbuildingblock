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

    // want to change background image on click of light/dark mode
