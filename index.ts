const cities = [
  { from: 'Казань', to: 'Новосибирск' },
  { from: 'Тула', to: 'Казань' },
  { from: 'Москва', to: 'Питер' },
  { from: 'Пермь', to: 'Тула' },
  { from: 'Питер', to: 'Пермь' },
];

function findCitiesWay(cities: any[]) {
  const startCity = cities.find(
    (city) => !cities.some((innerCity) => city.from === innerCity.to)
  );

  const sortedCities = [startCity];

  while (sortedCities.length < cities.length) {
    const nextCity = cities.find(
      (city) => city.from === sortedCities[sortedCities.length - 1].to
    );

    sortedCities.push(nextCity);
  }

  return sortedCities;
}

// console.log(findCitiesWay(cities));

// Алгоритм Хоара

const arrNumebers: number[] =
  '24524134572524513841093840138193657143657460518734810239847'
    .split('')
    .map(Number);

let countHoar = 0;

function sortByHoar(nums: number[]) {
  countHoar++;

  if (nums.length < 1) return nums;

  const currentNum = nums[0];
  const less = [];
  const more = [];

  nums.forEach((elNum, idxNum) => {
    if (idxNum === 0) return;

    if (elNum > currentNum) more.push(elNum);
    else less.push(elNum);
  });

  return [...sortByHoar(less), currentNum, ...sortByHoar(more)];
}

// console.log(sortByHoar(arrNumebers), 'countHoar: ', countHoar);

// Graph поиск в ширину

interface IGraph {
  [k: string]: string[];
}

const graph: IGraph = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

type typeSearchGraph<T> = (graph: IGraph, start: string, end: string) => T;

const isPath: typeSearchGraph<boolean> = (graph, start, end) => {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (!graph[current]) graph[current] = [];

    if (graph[current].includes(end)) return true;

    queue = [...queue, ...graph[current]];
  }

  return false;
};

// console.log(isPath(graph, 'f', 'g'));

// Функция, определяющая правильные пары скобок

function braces(s: string): boolean {
  const openBraces = ['(', '[', '{'];
  const closeBraces = [')', ']', '}'];

  const stack = [];
  const arrBraces = s.split('');

  for (let i = 0; i < arrBraces.length; i++) {
    const openIdx = openBraces.indexOf(arrBraces[i]);

    if (openIdx !== -1) {
      stack.push(openIdx);

      continue;
    }

    const closeIdx = closeBraces.indexOf(arrBraces[i]);

    if (closeIdx !== -1) {
      const lastOpenIdx = stack.pop();

      if (closeIdx !== lastOpenIdx) return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
}

//Тесты:
// console.log(braces('(){}[]') === true);
// console.log(braces('([{}])') === true);
// console.log(braces('(())') === true);
// console.log(braces('({})[({})]') === true);

// console.log(braces('(}') === false);
// console.log(braces('[(])') === false);
// console.log(braces('(})') === false);
// console.log(braces(')(}{][') === false);

function rotate(nums: number[], k: number) {
  k = k > nums.length ? k % nums.length : k;

  const arr = [];

  for (let i = 0; i < k; i++) {
    arr.push(nums[nums.length - (k - i)]);

    if (k - 1 === i) {
      console.log('nums start: ', nums);
      console.log('arr start: ', arr);

      if (nums.length - k !== 0) {
        // for (let y = nums.length; k < y; y--) {
        // console.log(y - k);
        // nums[y - k] = nums[nums.length - y];
        // console.log('nums[y]: ', nums[y - 1]);
        // console.log('nums: ', nums);
        // }

        for (let y = k; y < nums.length; y++) {
          nums[nums.length - (y - k)] = nums[y - k];
          console.log(y - k);
          console.log('nums: ', nums);
        }
      }

      for (let j = 0; j < arr.length; j++) {
        nums[j] = arr[j];

        console.log('arr: ', nums);
      }
    }
  }

  return nums;
}

// console.log(rotate([1, 2], 3).join() === '2,1');
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3).join() === '5,6,7,1,2,3,4');
// console.log(rotate([-1, -100, 3, 99], 2).join() === '3,99,-1,-100');
