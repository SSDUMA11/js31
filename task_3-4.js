async function getData(url) {
  try {
    let result  = await fetch(url);
    let data = await result.json();

    let filteredDataA = data.filter(item => item.title.startsWith('a'));
    console.log(filteredDataA);

    let filteredDataAB = data.filter(item => item.title.startsWith('ab'));
    console.log(filteredDataAB);

    let buttonA = document.querySelector('.add-a');
    let buttonAB = document.querySelector('.add-ab');
    let buttonAll = document.querySelector('.add-all');

    buttonA.addEventListener('click', function(event){
      event.preventDefault(); 

      let myJsonA = JSON.stringify(filteredDataA);
      myJsonA = filteredDataA.map(item => JSON.stringify(item)).join('<br>');
      let userDivA = document.querySelector('.user-a');
      userDivA.innerHTML = myJsonA;

    }) 

    buttonAB.addEventListener('click', function(event){
      event.preventDefault(); 

      let myJsonAB = JSON.stringify(filteredDataAB);
      myJsonAB = filteredDataAB.map(item => JSON.stringify(item)).join('<br>');
      let userDivAB = document.querySelector('.user-ab');
      userDivAB.innerHTML = myJsonAB;
    
    }) 
    
    buttonAll.addEventListener('click', function(event){
      event.preventDefault(); 

      let myJsonA = JSON.stringify(filteredDataA);
      myJsonA = filteredDataA.map(item => JSON.stringify(item)).join('<br>');
      let userDivA = document.querySelector('.user-a');
      userDivA.innerHTML = myJsonA;

      let myJsonAB = JSON.stringify(filteredDataAB);
      myJsonAB = filteredDataAB.map(item => JSON.stringify(item)).join('<br>');
      let userDivAB = document.querySelector('.user-ab');
      userDivAB.innerHTML = myJsonAB;
  
    }) 
  } 

  catch (error) {
    console.error(error);
  }
}
getData('https://jsonplaceholder.typicode.com/todos');

