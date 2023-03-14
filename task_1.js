function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        const filteredData = data.filter(item => item.title.startsWith('a'));
        console.log(filteredData);
    })
  }

getData('https://jsonplaceholder.typicode.com/todos');
