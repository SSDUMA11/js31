async function getData(url) {
    try {
      let result  = await fetch(url);
      let data = await result.json();
      const filteredData = data.filter(item => item.title.startsWith('a'));
      console.log(filteredData);
    } 
    catch (error) {
      console.error(error);
    }
}
getData('https://jsonplaceholder.typicode.com/todos');