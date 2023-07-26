size1 = ['3-6', '7-10', '12-18', '20-24', '27-30', '35-40'];
size2 = ['3-6', '8-10', '12-19', '22-30', '38'];
size3 = ['6-10', '11-15', '16-25', '26-40', '41-50'];
size4 = ['3-6', '7-10', '12-20', '21-30'];
size5 = ['3-6', '7-10', '12-20', '21-30'];
size6 = ['1-2', '3', '4-6', '8-10', '19-24'];
size7 = ['1-2', '3-4', '5-6', '8-12', '15', '20-25'];
size8 = ['1-2', '3-4', '5-6', '8', '10', '12-15'];
size9 = ['2', '3-4', '5-6', '8', '10', '12-15', '20'];
size10 = ['1-3', '4-6'];
size11 = ['1', '2', '3', '4', '5'];
size12 = ['1', '2', '3-4', '5-8', '10-14', '15-18', '20-28', '30', '40', '50'];
size13 = ['2', '3', '4', '6'];
price = [
  [
    [30, 26, 24, 18],
    [35, 32, 27, 21],
    [45, 39, 35, 30],
    [67, 52, 44, 35],
    [79, 65, 57, 48],
    [107, 94, 83, 78],
  ],
  [
    [30, 25, 20, 16],
    [38, 31, 23, 19],
    [41, 35, 26, 21],
    [68, 55, 38, 32],
    [92, 79, 62, 57],
  ],
  [
    [26, 21, 16, 13],
    [37, 28, 20, 17],
    [70, 58, 42, 37],
    [98, 79, 58, 51],
    [120, 100, 88, 71],
  ],
  [
    [30, 25, 22, 18],
    [35, 32, 27, 21],
    [40, 34, 30, 25],
    [57, 51, 43, 28],
  ],
  [
    [30, 26, 22, 18],
    [38, 32, 26, 20],
    [49, 38, 30, 23],
    [53, 44, 39, 31],
  ],
  [
    [20, 18, 15, 11],
    [24, 20, 16, 13],
    [29, 25, 20, 16],
    [34, 29, 23, 18],
    [40, 35, 30, 22],
  ],
  [
    [36, 29, 24, 18],
    [40, 31, 25, 19],
    [47, 38, 31, 23],
    [61, 56, 43, 30],
    [77, 73, 55, 38],
    [94, 90, 68, 47],
  ],
  [
    [21, 19, 16, 14],
    [24, 21, 19, 16],
    [30, 28, 24, 20],
    [40, 35, 29, 28],
    [49, 44, 38, 32],
    [70, 64, 56, 48],
  ],
  [
    [22, 20, 17, 15],
    [26, 23, 22, 18],
    [32, 30, 26, 22],
    [42, 37, 31, 30],
    [52, 47, 41, 35],
    [72, 66, 58, 50],
    [90, 84, 76, 68],
  ],
  [
    [31, 28, 22, 15],
    [36, 30, 24, 17],
  ],
  [
    [47, 34, 23, 15],
    [49, 35, 25, 16],
    [51, 38, 26, 17],
    [55, 40, 28, 19],
  ],
  [
    [80, 65, 54, 44],
    [120, 95, 87, 74],
    [195, 160, 142, 125],
    [280, 230, 195, 182],
    [340, 276, 239, 218],
    [401, 318, 284, 255],
    [450, 387, 344, 289],
    [499, 406, 387, 318],
    [541, 426, 437, 338],
    [585, 469, 394, 381],
  ],
  [
    [75, 60, 49, 37],
    [85, 68, 55, 42],
    [89, 75, 61, 48],
    [108, 90, 78, 66],
  ],
];
let sizeSelect = document.querySelector('#size');
let materialSelect = document.querySelector('#material');
let metrInput = document.querySelector('#metr');
let btn = document.querySelector('#btn');

const calc = function (material, sizevalue, metr, price) {
  let totalPriceDiv = document.querySelector('#totalPrice');
  if (metr <= 500) {
    metr * price[material - 1][sizevalue - 1][0] > 5000
      ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${
          metr * price[material - 1][sizevalue - 1][0]
        } руб.`)
      : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
  }
  if (metr > 500 && metr <= 1000) {
    metr * price[material - 1][sizevalue - 1][1] > 5000
      ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${
          metr * price[material - 1][sizevalue - 1][1]
        } руб.`)
      : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
  }
  if (metr > 1000 && metr <= 3000) {
    metr * price[material - 1][sizevalue - 1][2] > 5000
      ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${
          metr * price[material - 1][sizevalue - 1][2]
        } руб.`)
      : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
  }
  if (metr > 3000 && metr <= 5000) {
    metr * price[material - 1][sizevalue - 1][2] > 5000
      ? (totalPriceDiv.innerHTML = `Итоговая стоимость составит ${
          metr * price[material - 1][sizevalue - 1][2]
        } руб.`)
      : (totalPriceDiv.innerHTML = `Итоговая стоимость составит 5000 руб.`);
  }
  if (metr > 5000) {
    totalPriceDiv.innerHTML =
      'При объемах свыше 5000 м.п. будет индивидуальный расчет (необходимо связаться с менеджером)';
  }
};

sizeSelect.addEventListener('focus', function () {
  sizeSelect.innerHTML = '';
  if (materialSelect.value == '1') {
    size1.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '2') {
    size2.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '3') {
    size3.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '4') {
    size4.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '5') {
    size5.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '6') {
    size6.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '7') {
    size7.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '8') {
    size8.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '9') {
    size9.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '10') {
    size10.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '11') {
    size11.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '12') {
    size12.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
  if (materialSelect.value == '13') {
    size13.map((size, index) => {
      let optionSelect = document.createElement('option');
      sizeSelect.append(optionSelect);
      optionSelect.textContent = size;
      optionSelect.value = index + 1;
    });
  }
});

btn.addEventListener('click', function () {
  calc(materialSelect.value, sizeSelect.value, metrInput.value, price);
});
