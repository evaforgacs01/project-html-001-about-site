const form = document.querySelector('.form-div form');
form.addEventListener('submit', (ev) => {
    //ev.preventDefault();
    
    const name = document.querySelector('input[name=name]');
    const email = document.querySelector('input[name=email]');
    const message = document.querySelector('textarea[name=message]');

console.log(name, email, message);

    if ( parseInt(name.getAttribute('minlength')) > name['value'].length ) {
        alert('A Név mező tartalma nem megfelelő.');
        ev.preventDefault();
    
});