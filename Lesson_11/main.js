// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(value => {
        //console.log(value);
        let {carts} = value;
        let content = document.getElementById('content');
        for (const cart of carts) {
            //console.log(cart);
            let wrap = document.createElement('div');
            content.appendChild(wrap);
            let  h3 = document.createElement('h3');
            h3.innerText=`UserId - ${cart.userId}`;
            let  table = document.createElement('table');
            wrap.append(h3,table);
            let headrow =  document.createElement('tr');
            let th1 =  document.createElement('th');
            th1.innerText='Product ID';
            let th2 =  document.createElement('th');
            th2.innerText='Title';
            let th3 =  document.createElement('th');
            th3.innerText='Thumbnail';
            let th4 =  document.createElement('th');
            th4.innerText='Quantity';
            let th5 =  document.createElement('th');
            th5.innerText='Price';
            let th6 =  document.createElement('th');
            th6.innerText='Total';
            let th7 =  document.createElement('th');
            th7.innerText='Discount';
            let th8 =  document.createElement('th');
            th8.innerText='Discounted Price';
            table.appendChild(headrow);
            headrow.append(th1,th2,th3,th4,th5,th6,th7,th8);
            for (let product of cart.products) {
                let  row = document.createElement('tr');
                let  col1 = document.createElement('th');
                col1.innerText=product.id;
                let  col2 = document.createElement('th');
                col2.innerText=product.title;
                let  col3 = document.createElement('th');
                col3.innerHTML=`<img src="${product.thumbnail}">`;
                let  col4 = document.createElement('th');
                col4.innerText=product.quantity;
                let  col5 = document.createElement('th');
                col5.innerText=product.price;
                let  col6 = document.createElement('th');
                col6.innerText=product.total;
                let  col7 = document.createElement('th');
                col7.innerText=`${product.discountPercentage}% `;
                let  col8 = document.createElement('th');
                col8.innerText=product.discountedPrice;

                row.append(col1,col2,col3,col4,col5,col6,col7,col8);
                table.appendChild(row);


            }
            let bottomrow =  document.createElement('tr');
            let bottomTr1 =  document.createElement('th');
            bottomTr1.innerText='';
            let bottomTr2 =  document.createElement('th');
            bottomTr2.innerText=cart.totalProducts;
            let bottomTr3 =  document.createElement('th');
            bottomTr3.innerText='';
            let bottomTr4 =  document.createElement('th');
            bottomTr4.innerText=cart.totalQuantity;
            let bottomTr5 =  document.createElement('th');
            bottomTr5.innerText='';
            let bottomTr6 =  document.createElement('th');
            bottomTr6.innerText='';
            let bottomTr7 =  document.createElement('th');
            bottomTr7.innerText='';
            let bottomTr8 =  document.createElement('th');
            bottomTr8.innerText=cart.total;
            table.appendChild(bottomrow);
            bottomrow.append(bottomTr1,bottomTr2,bottomTr3,bottomTr4,bottomTr5,bottomTr6,bottomTr7,bottomTr8);
        }


    });




//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.
//


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value;
        //console.log(recipes);
        let cookBook = document.getElementById('cookBook');
        for (const recipe of recipes) {
            let wrap = document.createElement('div');
            cookBook.appendChild(wrap);
            let  h2 = document.createElement('h2');
            h2.innerText=recipe.name;
            let description = document.createElement('p');
            description.innerHTML = `
            <p>Cusine: ${recipe.cuisine}</p>
            <p>Meal type: ${recipe.mealType}</p>
            <p>Preparation Time: ${recipe.prepTimeMinutes} minutes</p>
            <p>Cook Time: ${recipe.cookTimeMinutes} minutes</p>
            <p>Difficulty: ${recipe.difficulty}</p>
            <p>Serving: ${recipe.servings} person</p>
            <p>Calories per Serving: ${recipe.caloriesPerServing} calories</p>
            <p>Raiting: ${recipe.rating}. Rewiews: ${recipe.reviewCount}.</p>
            <br>
            <img src="${recipe.image}">
            <p>Ingridients:</p>
            `;
            let ingridientsul = document.createElement('ul');
            wrap.append(h2,description,ingridientsul);
            for (const ingridient of recipe.ingredients) {
                let  li = document.createElement('li');
                li.innerText=ingridient;
                ingridientsul.appendChild(li);
            }
            let InstrHeadling = document.createElement('h4');
            InstrHeadling.innerText= 'Instructions';
            let instructionsOl = document.createElement('ol');
            wrap.append(InstrHeadling,instructionsOl);
            for (const instr of recipe.instructions) {
                let  li = document.createElement('li');
                li.innerText=instr;
                instructionsOl.appendChild(li);
            }

        }
    });


//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
//     (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку,
// на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - айді користувача)
let URL = 'http://jsonplaceholder.typicode.com/users';
function getUsers(url){
    fetch(url)
        .then(res => res.json())
        .then(value => {

            console.log(value);
            displayUsers(value);
        });
}
getUsers(URL);

function displayUsers(users){

    let container = document.getElementById('users_container');
    //container.innerHTML = '';
    let ul = document.createElement('ul');
    container.appendChild(ul);
    for (const user of users) {
        let li = document.createElement('li');
        li.innerText = `User ID - ${user.id}, Name - ${user.name}`;
        li.addEventListener('click',()=>{
            location.href='user-details.html?id='+ user.id;
        })
        ul.appendChild(li);

    }
}
