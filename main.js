/*Abre e fecha o menu*/
const nav = document.querySelector('.container-top nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Quando clicar nos links, fecha o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const btnCustomer = document.querySelector('#register-customer');

btnCustomer.addEventListener("click", function(e){

    e.preventDefault();

    const name = document.querySelector('#name');
    const nameValue = name.value;
    
    const phone = document.querySelector('#phone');
    const phoneValue = phone.value;
    
    const VDocument = document.querySelector('#document');
    const documentValue = VDocument.value;

    const email = document.querySelector('#email');
    const emailValue = email.value;  

    const address = document.querySelector('#address');
    const addressValue = address.value;

    const number = document.querySelector('#number');
    const numberValue = number.value;

    const zip = document.querySelector('#zipcode');
    const zipValue = zip.value;

    const neighborhood = document.querySelector('#neighborhood');
    const neighborhoodValue = neighborhood.value; 

    localStorage.setItem('Nome', JSON.stringify(nameValue));
    localStorage.setItem('Phone', JSON.stringify(phoneValue));
    localStorage.setItem('Document', JSON.stringify(documentValue));
    localStorage.setItem('E-mail', JSON.stringify(emailValue));
    localStorage.setItem('Address', JSON.stringify(addressValue));
    localStorage.setItem('Number', JSON.stringify(numberValue));
    localStorage.setItem('Zip code', JSON.stringify(zipValue));
    localStorage.setItem('Neighborhood', JSON.stringify(neighborhoodValue)); 

    window.location.href = 'customer.html'

    alert('Registrado com sucesso!')
})
  

