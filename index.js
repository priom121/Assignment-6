const buttonData = async ()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories') 
    const data = await response.json()
    const button = data.data;
    const buttonContainer = document.getElementById('button-container');
   button.forEach(button =>{
//           console.log(button);
       const div = document.createElement('div')
       div.innerHTML = `
       <button class="btn ">${button.category}</button>
       ` 
       buttonContainer.appendChild(div)             
   });

}

//    card data
const cardContainer = document.getElementById('card-container')
const loadData = async () =>{
 const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
 const data = await res .json()
 const cards = data.data;
 const cardContainer = document.getElementById('card-container')
 cards.forEach(card =>{
            console.log(card)
      const div = document.createElement('div');
      div.innerHTML =`
      <div class="card w-80 h-80  card-compact bg-base-100 shadow-xl">
  <figure><img src="${card.thumbnail}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${card.title}</h2>
    <p>${card.authors[0].profile_name} ${card.authors[1]?.verified}</p>
    <p>${card.others.views}</p>
  </div>
</div>
      ` 
  cardContainer.appendChild(div)
 })

 
}



buttonData()
loadData()