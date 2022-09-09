let transactionButton = document.querySelector('#transaction-button');
let form = document.querySelector('#transaction-form')
let date = document.querySelector('#form-date');
let description = document.querySelector('#form-description');
let amount = document.querySelector('#form-amount');
let type = document.querySelector('#form-type');
let category = document.querySelector('#form-category');


console.log('front page');

//when the form is submitted
form.addEventListener('submit', async e=>{
    e.preventDefault();
    // console.log(description.value);

    //make fetch call to store data into an obj
    let newTransaction = {
        date: date.value,
        description: description.value,
        amount: amount.value,
        type: type.value,
        category: category.value
    }

    console.log(newTransaction);

    //make api call to add a new transaction into database
    let results = await fetch('/api', {
        method: "POST",
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(newTransaction)
    })

    date.value = "";
    description.value = "";
    amount.value = "";
    type.value = "";
    category.value = "";
    console.log(results);
   
})