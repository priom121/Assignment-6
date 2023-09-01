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
       //  remove hidden
       const imgContainer = document.getElementById('img-container')
       if(id.length > 0 ){
        imgContainer.classList.remove('hidden')
       }
       else if(id.length < 0) {
        imgContainer.classList.add('hidden')
       }
 const cardContainer = document.getElementById('card-container')
 cardContainer.textContent = '';
 cards.forEach(card =>{
            console.log(card)
      const div = document.createElement('div');
      div.innerHTML =`
      <div class="card w-80 h-80  card-compact bg-base-100 shadow-xl">
      <figure><img class="relative" src="${card.thumbnail}" alt =""/> </figure>
      <span class=" text-white absolute mt-32 ml-52">${card.others.posted_date}</span>

  <div class="card-body">
   <div class="flex gap-4">
   <img class="w-2/12 rounded-3xl h-12 " src ="${card.authors[0].profile_picture}">
   <h2 class="card-title text-2xl font-bold">${card.title}</h2>
   </div>
    <img src = "">
    <div class="flex ">
    <p class="text-xl font-semibold">${card.authors[0].profile_name}</p>
    <p>${card.authors[0].verified}</p>
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

// another page load data blog 
anotherPage =()=>{
  window.location.href = 'blog.html'
}
