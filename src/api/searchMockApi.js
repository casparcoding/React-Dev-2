import friends from 'api/searchMockData';

// mock api search
export default (query) => {
  const results = friends.filter(friend => {
    let keep = false;

    Object.keys(friend).forEach(key => {
      const val = friend[key].toString();
      if (val.toLowerCase().includes(query.search.toLowerCase())) {
        keep = true;
      }
    });

    return keep;
  });

  // setting a more realistic (random) timeout
  return new Promise((resolve) => {
    setTimeout(() => resolve(results), Math.ceil(Math.random() * 250));
  });
}