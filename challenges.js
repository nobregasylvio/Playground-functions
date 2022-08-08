// Desafio 1
function compareTrue(x1, x2) {
  if (x1 && x2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (array[array.length - 1], array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = Number.NEGATIVE_INFINITY;
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highNumber) {
      highNumber = numbers[i];
    }
  }
  for (let i2 = 0; i2 < numbers.length; i2 += 1) {
    if (numbers[i2] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let result = [];
  for (let i = 0; i < arrayNumber.length; i += 1) {
    if (arrayNumber[i] % 5 === 0 && arrayNumber[i] % 3 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumber[i] % 5 === 0) {
      result.push('buzz');
    } else if (arrayNumber[i] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  string = string.replaceAll('a', '1');
  string = string.replaceAll('e', '2');
  string = string.replaceAll('i', '3');
  string = string.replaceAll('o', '4');
  string = string.replaceAll('u', '5');
  return string;
}
function decode(string) {
  string = string.replaceAll('1', 'a');
  string = string.replaceAll('2', 'e');
  string = string.replaceAll('3', 'i');
  string = string.replaceAll('4', 'o');
  string = string.replaceAll('5', 'u');
  return string;
}

// Desafio 10
function techList(array, name) {
  let result = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i in array) {
    let list = {
      tech: undefined,
      name: undefined,
    };
    list.tech = array[i];
    list.name = name;
    result.push(list);
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
