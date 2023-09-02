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
// const cardContainer = document.getElementById('card-container')
const loadData = async (id) =>{
 const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
 const data = await res .json()
 const cards = data.data;
       //  remove hidden
       const imgContainer = document.getElementById('img-container')
       if(cards.length === 0 ){
        imgContainer.classList.remove('hidden')
       }
       else if(cards.length > 0) {
        imgContainer.classList.add('hidden')
       }
 const cardContainer = document.getElementById('card-container')
 cardContainer.textContent = '';
 cards.forEach(card =>{
            // console.log(card)
            // seconds to hours and minutes /
            const secondToHourAndMinutes = card?.others?.posted_date
            const hours = Math.floor(secondToHourAndMinutes /3600) ;
             const makeMinutes = secondToHourAndMinutes;
             const minutes = Math.floor(makeMinutes / 60);
             const sToMAndH = secondToHourAndMinutes ? `${hours}hour ${minutes} minutes ago`: " " ;
            //  console.log(sToMAndH);
      const div = document.createElement('div');
      div.innerHTML =`
      <div class="card w-80 h-80  card-compact bg-base-100 shadow-xl">
      <figure><img class="relative" src="${card.thumbnail}" alt =""/> </figure>
      <span class=" text-white absolute bg-slate-400 rounded-xl mt-28 ml-40">${sToMAndH}</span>
  <div class="card-body">
   <div class="flex gap-4">
   <img class="w-2/12 rounded-3xl h-12 " src ="${card.authors[0].profile_picture}">
   <h2 class="card-title text-2xl font-bold">${card.title}</h2>
   </div>
    <img src = "">
    <div class="flex ">
    <p class="text-xl font-semibold">${card.authors[0].profile_name} </p>
    <p class="text-xl text-blue-600 font-black">${card.authors[0]?.verified? '<i class=" fa-solid fa-check"></i>': ' '}</p>
    </div>
    <p class="font-semibold">${card.others.views}</p>
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

// const sorts = [a,b]
// sort function
// const sort = async ()=>{
//  const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
//  const data = await response.json();
//  const sortFunction = `${[data.data[1].others?.views]}`
//  console.log(sortFunction);
//  }

//  sortFunction.sort(function (a ,b){
//   return b-a
//  })
//  console.log(sortFunction);

