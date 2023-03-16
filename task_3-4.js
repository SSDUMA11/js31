document.addEventListener('DOMContentLoaded', async function() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await result.json();

    const filteredDataA = data.filter(item => item.title.startsWith('a'));
    const filteredDataAB = data.filter(item => item.title.startsWith('ab'));

    let userDivA = document.querySelector('.user-a');
    let userDivAB = document.querySelector('.user-ab');
    let buttonA = document.querySelector('.add-a');
    let buttonAB = document.querySelector('.add-ab');
    let buttonAll = document.querySelector('.add-all');

    function displayData(filteredData, element) {
      let myJson = filteredData.map(item => JSON.stringify(item)).join('<br>');
      element.innerHTML = myJson;
    }

    buttonA.addEventListener('click', function(event) {
      userDivAB.innerHTML = '';
      displayData(filteredDataA, userDivA);
    });

    buttonAB.addEventListener('click', function(event) {
      userDivA.innerHTML = '';
      displayData(filteredDataAB, userDivAB);
    });

    buttonAll.addEventListener('click', function(event) {
      userDivA.innerHTML = '';
      userDivAB.innerHTML = '';
      displayData(filteredDataA, userDivA);
      displayData(filteredDataAB, userDivAB);
    });
    
  } catch (error) {
    console.error(error);
  }
});