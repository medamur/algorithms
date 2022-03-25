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
