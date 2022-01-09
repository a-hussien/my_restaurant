// index.js

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
});


// fetch foods from data.json 
const foodCard = document.getElementById("foods");

const renderFoods = async () => {
    let uri = 'http://localhost:3000/foods';
    const response = await fetch(uri);
    const foods = await response.json();
    let cards = '';
    
    if (foods) {
        foods.map((food) => {
        
            cards += `
                <div class="card" id="${food.id}"> 
                    <img class="w-full h-32 sm:h-48 object-cover rounded" src="../img/${food.media}.jpg" alt="${food.media}">
                    <div class="m-4">
                    <span class="font-bold">${food.name}</span>
                    <span class="text-gray-500 text-sm block">${food.chef} ${food.id}</span>
                    <p class="font-sail text-lg">${food.desc}</p>
                        <div class="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-full inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>${food.time} mins</span>
                        </div>
                    </div>
                </div>
                `;
        });
    }
    else
    {
        cards = 
        `   <figure class=" bg-purple-100 rounded-xl p-8 shadow-lg shadow-purple-200 hover:shadow-purple-400 col-span-3">
                <div class="text-center space-y-4 text-purple-500">
                <blockquote>
                    <p class="text-lg font-medium">
                    “Sorry, we can't find any recipe at this moment.”
                    </p>
                </blockquote>
                </div>
            </figure>
        `;
    }
    

    foodCard.innerHTML = cards;
}

window.addEventListener("DOMContentLoaded", () => renderFoods());