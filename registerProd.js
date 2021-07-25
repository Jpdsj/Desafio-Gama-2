const btnProducts = document.querySelector('#register-products');

btnProducts.addEventListener("click", function(a){ 

  a.preventDefault();

  const brand = document.querySelector('#brand');
  const brandValue = brand.value;
  
  const identifier = document.querySelector('#identifier');
  const identifierValue = identifier.value;
  
  const price = document.querySelector('#price');
  const priceValue = price.value;

  const count = document.querySelector('#count');
  const countValue = count.value;  

  const category = document.querySelector('#category');
  const categoryValue = category.value;

  const weight = document.querySelector('#weight');
  const weightValue = weight.value;

  const barcode = document.querySelector('#barcode');
  const barcodeValue = barcode.value;

  const description = document.querySelector('#description');
  const descriptionValue = description.value;

  localStorage.setItem('Brand', JSON.stringify(brandValue));
  localStorage.setItem('ID', JSON.stringify(identifierValue));
  localStorage.setItem('Price', JSON.stringify(priceValue));
  localStorage.setItem('Count', JSON.stringify(countValue));
  localStorage.setItem('Category', JSON.stringify(categoryValue));
  localStorage.setItem('Weight', JSON.stringify(weightValue));
  localStorage.setItem('Bar code', JSON.stringify(barcodeValue));
  localStorage.setItem('Description', JSON.stringify(descriptionValue));

  window.location.href = 'products.html'

  alert('Registrado com sucesso!')

})