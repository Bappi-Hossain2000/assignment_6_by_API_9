// Function_01//
const allPosts = async(inputF='') => {
const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputF}`);
const data = await response.json();
// console.log(data.posts)
const allPostsArray = data.posts;
const cardContainer = document.getElementById("cardContainer")
cardContainer.textContent = '';
allPostsArray.forEach(item => {
  const image = item.image;
  const category = item.category;
  const authorName = item.author.name;
  const title = item.title;
  const description = item.description;
  const comment_count = item.comment_count;
  const view_count = item.view_count;
  const posted_time = item.posted_time;
  const isActive = item.isActive;
  
  // console.log(isActive);
  
  const div = document.createElement("div")

 div.innerHTML = `
 <div class="flex gap-4 my-7">
  
          <div class="card_1 lg:flex p-2 gap-2 border rounded-md lg:w-11/12 shadow-2xl">
            <div class="relative lg:w-3/12">
            <div class="absolute right-0 rounded-full w-5 h-5 ${item.isActive? "bg-green-500":"bg-red-600"} "></div>
              <img src="${item.image}" class="w-full" alt="">
            </div>
            <div class="ml-3">
              <div class="flex gap-5">
                <p>${item.category}</p>
                <p>${item.author.name}</p>
              </div>
              <h1 class="text-[20px] font-extrabold my-2">${item.title}</h1>
              <p>${item.description}</p>
              <hr class="border-dashed my-7">
             
              <div class="flex justify-between">
                <div class="my-3 ">
                  <i class="fa-regular fa-message  mr-5"><span class="text-[#000]"> ${item.comment_count}</span></i>
                  <i class="fa-regular fa-eye mr-3"><span class="text-[#000]">  ${item.view_count}</span></i>
                  <i class="fa-regular fa-clock"><span class="text-[#000] ml-3">  ${item.
                    posted_time}</span> <span class="ml-3">min</span></i>
                </div>
                <button onclick="titleView('${title}', '${view_count}')" class="btn bg-green-400 rounded-full"><i class="fa-regular fa-envelope-open text-white"></i></button>
              </div>
            </div>
          </div>
  
        </div>
 `; 
 cardContainer.append(div)
});
const loaderS = document.getElementById('loading_spinner')
loaderS.classList.add('hidden')
}

allPosts()

// Function_03//
const LatestPosts = async() => {
  const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const data = await response.json();
  // console.log(data)
  const latestPosts = data;
  const latestPostContainer = document.getElementById("latestPost")
  latestPosts.forEach(item => {
    // console.log(item);
    const coverImage = item.cover_image
    const posted_date = item.author.posted_date
    const title = item.title
    const description = item.description
    const profile_image = item.profile_image
    const name = item.author.name
    const designation = item.author.designation

    // const cImg = item.cover_image ${}
    console.log(item.author.name);

    const div = document.createElement("div")
    div.innerHTML = `
    <div class="border p-4">
          <img class="bg-slate-400 rounded-2xl mb-5 " src="${coverImage}" alt="">
          <p><i class="fa-regular fa-calendar-check"></i><span> ${item.author?.posted_date || 'No publish date'}</span></p>
          <h3 class="my-3 text-[#12132D] font-extrabold">${title}</h3>
          <p>${description}</p>
          <div class="flex gap-8 my-3">
            <img class="w-4/12 rounded-full" src="${profile_image}" alt="">
            <div>
              <h3 class=" text-[#12132D] font-extrabold">${item.author.name}</h3>
              <p>${item.author?.designation || 'Unknown'}</p>
            </div>
          </div>
        </div>
    `; 
    latestPostContainer.append(div)
  });
  const loaderS = document.getElementById('loading_spinner')
loaderS.classList.add('hidden')
}

LatestPosts()


// Function_03//
let sum = 0;
titleView = (title, view) =>{
  sum = sum + 1; 
  let markRead = document.getElementById('markRead')
  markRead.innerText = sum;
  
  // console.log(markRead);
  let titleA = document.getElementById('titleMark')
  // console.log(titleA);
  const div = document.createElement("div")
  div.innerHTML = `
  <div class="flex justify-between bg-white p-3 rounded-lg">
  <h2 id="title">${title}</h2>
  <p><i class="fa-regular fa-eye"></i><span id="view">${view}</span></p>
  </div>
  `; 
  titleA.append(div)
}

// Function_04//
// const myInterval = setInterval(handleSearch, 2000);
handleSearch = () =>{
  const loaderS = document.getElementById('loading_spinner')
  loaderS.classList.remove('hidden')
  const inputF = document.getElementById('inputF').value;
  allPosts(inputF)
  console.log(inputF)
}