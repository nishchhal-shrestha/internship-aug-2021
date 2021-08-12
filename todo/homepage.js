const onloadHandler = (event) => {
    event.preventDefault();
    console.log('page loaded from handler', event)    
}

const onloadHandler2 = (event) => {
    event.preventDefault();
    console.log('page loaded from handler2', event)    
}

const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submit from handler2', event)    
}

// document.getElementsByTagName('body')[0].addEventListener('click', onloadHandler)
// document.getElementsByTagName('body')[0].addEventListener('click', onloadHandler2)
document.getElementsByTagName('form')[0].addEventListener('submit', onSubmitHandler)
document.getElementsByTagName('a')[0].addEventListener('click', (event) => {
    event.preventDefault();
    console.log('anchor clicked');
})

document.getElementById('printDate').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(document.getElementById('due-date').value)
})

document.getElementById('due-date').addEventListener('blur', (event) => {
    console.log('Blur Triggered', event.target.value)
    
    if(event.target.value && new Date(event.target.value) < new Date()) {
        event.target.value = '';
    }
})

document.getElementById('due-date').addEventListener('input', (event) => {
    console.log('input triggered', event.target.value)
})