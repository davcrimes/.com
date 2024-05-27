document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent right-click menu
    var alertBox = document.createElement('div');
    alertBox.setAttribute('class', 'alert-box');
    alertBox.innerText = 'Alert: Content is protected';
    document.body.appendChild(alertBox);
    setTimeout(function(){
        alertBox.classList.add('hidden'); // Add 'hidden' class after 2 seconds
        setTimeout(function(){
            alertBox.remove(); // Remove the alert box from the DOM after the transition
        }, 100); // Decreased from 500 to 200 milliseconds
    }, 2000); // Remove alert after 2 seconds
});


