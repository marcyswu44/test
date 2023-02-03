// // const products_container = document.querySelector('.products-container');
// // const random_user_add_button = document.querySelector('.random-user-add-button');
// // const search_input = document.querySelector('.search-input');

// // const random_users = [];

// // search_input.addEventListener('input', searchUser);

// // function searchUser(event) {
// // 	event.preventDefault();

// // 	const searched_random_users = random_users.filter((user) => user.email.includes(event.target.value));

// // 	products_container.innerHTML = '';

// // 	searched_random_users.forEach((random_user) => {
// // 		products_container.innerHTML += `
// // 				<div class="card col-4">
// // 					<h3 class="card-text"> ${random_user.userid}</h3>
// // 					<h5 class="card-text"> ${random_user.id}</h5>
// // 					<h5 class="card-text"> ${random_user.title}</h5>
			
// // 				</div>
// // 			`;
// // 	});
// // }



// // random_user_add_button.addEventListener('click', addRandomUser);


// // function addRandomUser(event) {
// // 	event.preventDefault();

// // 	fetch('https://jsonplaceholder.typicode.com/albums')
// // 		.then((response) => response.json())
// // 		.then((user) => {
// // 			random_users.push(user);

// // 			products_container.innerHTML += `
// // 				<div class="card col-4">
// // 				<h3 class="card-text">Albums</h3>
// // 					<h5 class="card-text">UserId: ${user.userid}</h5>
// // 					<h5 class="card-text">Id: ${user.id}</h5>
// // 					<h5 class="card-text">Title: ${user.title}</h5>

// // 				</div>
// // 			`;
// // 		});
// // }


// const products_container = document.querySelector('.products-container');
// const random_user_add_button = document.querySelector('.random-user-add-button');
// const search_input = document.querySelector('.search-input');

// const random_users = [];

// search_input.addEventListener('input', searchUser);

// function searchUser(event) {
// 	event.preventDefault();

// 	const searched_random_users = random_users.filter((user) => user.email.includes(event.target.value));

// 	products_container.innerHTML = '';

// 	searched_random_users.forEach((random_user) => {
// 		products_container.innerHTML += `
// 				<div class="card col-4">
// 					<h3 class="card-text">${random_user.email}</h3>
// 					<h5 class="card-text">${random_user.credit_card.cc_number}</h5>
// 					<h5 class="card-text">${random_user.employment.key_skill}</h5>
// 					<img src="${random_user.avatar}" />
// 				</div>
// 			`;
// 	});
// }

// random_user_add_button.addEventListener('click', addRandomUser);

// function addRandomUser(event) {
// 	event.preventDefault();

// 	fetch('https://jsonplaceholder.typicode.com/albums')
// 		.then((response) => response.json())
// 		.then((user) => {
// 			random_users.push(user);

// 			products_container.innerHTML += `
// 				<div class="card col-4">
// 					<h3 class="card-text">${user.userId}</h3>
// 					<h5 class="card-text">${user.id}</h5>
// 					<h5 class="card-text">${user.title}</h5>
// 					<img src="${user.avatar}" />
// 				</div>
// 			`;
// 		});
// }


const products_container = document.querySelector('.container');
const random_user_add_button = document.querySelector('.random-user-add-button');
const search_input = document.querySelector('.form-control');
const random_users = [];
let all_users = [];
let user_index = 0;

search_input.addEventListener('input', searchUser);

function searchUser(event) {
	event.preventDefault();
console.log('gamarjoba');
    // console.log(event.target.value)

	const searched_random_users = all_users.filter((user) => {
       
        // console.log(event.target.value);
       return (user.name).toLowerCase().includes(event.target.value.toLowerCase()) ||  (user.lastname).toLowerCase().includes(event.target.value.toLowerCase()) ||  (user.gender).toLowerCase().includes(event.target.value.toLowerCase()) || (user.phone).toLowerCase().includes(event.target.value.toLowerCase())

    });
console.log(searched_random_users);

	products_container.innerHTML = '';
    console.log(searched_random_users);
	searched_random_users.forEach((random_user) => {
		products_container.innerHTML += `
				<div class="card col-4">
					<h3 class="card-text">${random_user.name}</h3>
					<h5 class="card-text">${random_user.lastName}</h5>
					<h5 class="card-text">${random_user.gender}</h5>
					<h5 class="card-text">${random_user.phone}</h5>
				</div>
			`;
	});
}

// random_user_add_button.addEventListener('click', addRandomUser);
function FetchUsers(){
	fetch('https://dummyjson.com/users') 

    
	.then((response) => response.json())
		.then((responsedata) => {
			const users = responsedata.users
			all_users = users;
            console.log(users);
            // const user = users[user_index];
			// random_users.push(user);

        
	users.forEach((user)=> {
                products_container.innerHTML += `
				<div class="card col-4">
					<h3 class="card-text">${user.age}</h3>
					<h5 class="card-text">${user.lastName}</h5>
					<h5 class="card-text">${user.gender}</h5>
					<h5 class="card-text">${user.phone}</h5>
 			<img  src="https://robohash.org/${user.id} ">
				</div>
			`;

            user_index = user_index + 1;
            if (user_index >= 10) {
                user_index = 0;
            }
        
                console.log(user);
            });
		
		});

};
var loader = document.getElementById('preloader');

    window.addEventListener('load', function() {
		FetchUsers();
    });
function addRandomUser(event) {
	event.preventDefault();

	FetchUsers();

	// fetch('https://dummyjson.com/users') 

    
	// .then((response) => response.json())
	// 	.then((responsedata) => {
	// 		const users = responsedata.users
    //         console.log(users);
    //         // const user = users[user_index];
	// 		// random_users.push(user);

        
	// users.forEach((user)=> {
    //             products_container.innerHTML += `
	// 			<div class="card col-4">
	// 				<h3 class="card-text">${user.age}</h3>
	// 				<h5 class="card-text">${user.lastName}</h5>
	// 				<h5 class="card-text">${user.gender}</h5>
	// 				<h5 class="card-text">${user.phone}</h5>
	// 			<img  src="https://robohash.org/hicveldicta.png?size=150x150&set=set${user.id}">
	// 			</div>
	// 		`;

    //         user_index = user_index + 1;
    //         if (user_index >= 10) {
    //             user_index = 0;
    //         }
        
    //             console.log(user);
    //         });
		
	// 	});



		//             users.forEach((user)=> {
//             products_container.innerHTML += `
// 			<div class="card col-4">

// 			<h5 class="card-text">${user.lastName}</h5>
// 		<h5 class="card-text">${user.age}</h5>
// 		   <h5 class="card-text">${user.gender}</h5>
// 		   <h5 class="card-text">${user.birthDate}</h5>
// 		   <h5 class="card-text">${user.height}</h5>
//  <img  src="https://robohash.org/hicveldicta.png?size=150x150&set=set${user.id}">
// 			</div>
// 					`;});
//             user_index = user_index + 1;
//             if (user_index >= 10) {
//                 user_index = 0;
//             }
}

