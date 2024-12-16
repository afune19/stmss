const scriptURL ='https://script.google.com/macros/s/AKfycbxKsyLkFTYmhkd7BIpWOZfrheaHYDhSRo6Zyx6r4buhW7UadgVbyza82PtzngafW5ec/exec'

const form = document.forms['admission-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your application is submitted successfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})
