const scriptURL ='https://script.google.com/macros/s/AKfycbxDtB-u0z8g0y52dYNdib7Ec0KGhNOj83i6fTf5I5S_UEmXKrh6qgX5pmdcqkIMvWkT/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your messsage is submitted successfully."))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})