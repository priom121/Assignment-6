const buttonData = async ()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories') 
    const data = await response.json()
    const button = data.data;
    const buttonContainer = document.getElementById('button-container');
   button.forEach(button =>{
//           console.log(button);
       const div = document.createElement('div')
       div.innerHTML = `
       <button onclick="loadData('${button.category_id}')" class="btn ">${button.category}</button>
       ` 
       buttonContainer.appendChild(div)             
   });

}

//    card data
const cardContainer = document.getElementById('card-container')
const loadData = async (id) =>{
 const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
 const data = await res .json()
 const cards = data.data;
 
 const cardContainer = document.getElementById('card-container')
 cardContainer.textContent = '';
 cards.forEach(card =>{
            console.log(card)
      const div = document.createElement('div');
        //  remove hidden
  //  const imgContainer = document.getElementById('img-container')
  //  if(card.length < 0){
  //   imgContainer.classList.remove('hidden')
  //  }
      div.innerHTML =`
      <div class="card w-80 h-80  card-compact bg-base-100 shadow-xl">
  <figure><img src="${card.thumbnail}" alt="Shoes" /></figure>
  <div class="card-body">
   <div class="flex gap-4">
   <img class="w-2/12 rounded-3xl h-12 " src ="${card.authors[0].profile_picture}">
   <h2 class="card-title text-xl font-bold">${card.title}</h2>
   </div>
    <img src = "">
    <div class="flex ">
    <p class="text-sm font-semibold">${card.authors[0].profile_name}</p>
    <p></p>
    </div>
    <p>${card.others.views}</p>
  </div>
</div>
      ` 
  cardContainer.appendChild(div);

 })

}

buttonData()
loadData(1000)
