size1 = ['3-6', '7-10', '12-18', '20-24', '27-30', '35-40'];
let sizeSelect = document.querySelector('#size');
let materialSelect = document.querySelector('#material');
let metrInput = document.querySelector('#metr');
let btn = document.querySelector('#btn');

sizeSelect.addEventListener('focus', function () {
  if (materialSelect.value == '1') {
    size1.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
});

btn.addEventListener('click', function () {
  let totalPriceDiv = document.querySelector('#totalPrice');

  if (materialSelect.value == '1') {
    if (sizeSelect.value == '1') {
      if (metrInput.value <= 500) {
        metrInput.value * 30 > 5000
          ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${metrInput.value * 30} руб.`)
          : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
      }
      if (metrInput.value > 500 && metrInput.value <= 1000) {
        metrInput.value * 26 > 5000
          ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${metrInput.value * 26} руб.`)
          : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
      }
      if (metrInput.value > 1000 && metrInput.value <= 3000) {
        metrInput.value * 24 > 5000
          ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${metrInput.value * 24} руб.`)
          : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
      }
      if (metrInput.value > 3000 && metrInput.value <= 5000) {
        metrInput.value * 18 > 5000
          ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${metrInput.value * 18} руб.`)
          : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
      }
    }
  }
});
