const buttonData = async ()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories') 
    const data = await response.json()
    const button = data.data;
    const buttonContainer = document.getElementById('button-container');
   button.forEach(button =>{
          console.log(button);
       const div = document.createElement('div')
       div.innerHTML = `
       <button class="btn ">${button.category}</button>
       ` 
       buttonContainer.appendChild(div)             
   })                      
}
buttonData()