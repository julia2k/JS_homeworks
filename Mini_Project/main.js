// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

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
    // let div = document.createElement('div');
    // container.appendChild(ul);
    for (const user of users) {
        let div = document.createElement('div');
        let btn = document.createElement('button');

        div.innerHTML = `<span class="user_id">User ID - ${user.id}</span> <br><span class="user_name">Name - ${user.name}</span><br>`;
        btn.innerText='View';
       btn.addEventListener('click',()=>{
            location.href='user-details.html?id='+ user.id;
        })
        container.appendChild(div);
        div.appendChild(btn);

    }
}










//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)