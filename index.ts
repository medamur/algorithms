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

// Алшоритм Хоара

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
