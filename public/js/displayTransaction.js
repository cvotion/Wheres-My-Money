$(()=>{




let displayTransaction = document.querySelector(".transaction-appendhere");

//! DOUGHNUT CHART START
const data = {
    labels: [
      'Auto and Transport',
      'Bills & Utilities',
      'Business Services',
      'Education',
      'Entertainment',
      'Fees and Charges',
      'Financial',
      'Food & Dining',
      'Gifts & Donations',
      'Health & Fitness',
      'Home',
      'Income',
      'Investments',
      'Kids',
      'Loan Payments',
      'Misc Expenses',
      'Personal Care',
      'Pets',
      'Shopping',
      'Taxes',
      'Transfer',
      'Travel',
      'Uncategorized'
    ],
    datasets: [{
      label: 'Spending Summary',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
        
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
          },
        cutoutPercentage: 85,
        animation: {
            animateScale: true
        },
        responsive: true,
        maintainAspectRatio: false
    }
  };

  const myChart = new Chart(
    document.getElementById('student-doughnut-chart'),
    config
);

// DOUGHNUT CHART END

//! EXPENSE CHART START 
const expenseData = {
    labels: [
      'Last Month',
      'This Month'
    ],
    datasets: [{
      label: 'Expense Comparison',
      data: [0,0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
        
      ],
      hoverOffset: 4
    }]
  };

  const expenseConfig = {
    type: 'bar',
    data: expenseData,
    options: {
        indexAxis: 'y',
        animation: {
            animateScale: true
        },
        responsive: true,
        maintainAspectRatio: false
    }
  };

  const expenseChart = new Chart(
    document.getElementById('monthly-Expense-Chart'),
    expenseConfig
);

// EXPENSE CHART END

//! INCOME CHART START

const incomeData = {
    labels: [
      'Last Month',
      'This Month'
    ],
    datasets: [{
      label: 'Income Comparison',
      data: [0,0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
        
      ],
      hoverOffset: 4
    }]
  };

  const incomeConfig = {
    type: 'bar',
    data: incomeData,
    options: {
        indexAxis: 'y',
        animation: {
            animateScale: true
        },
        responsive: true,
        maintainAspectRatio: false
    }
  };

  const incomeChart = new Chart(
    document.getElementById('monthly-Income-Chart'),
    incomeConfig
);
    
//! UPDATE DOUGHNUT CHART
const updateDoughnut = (results)=>{
    results.forEach(transaction => {
        switch(transaction.category){
            
            case 'Auto and Transport':
                myChart.data.datasets[0].data[0] += transaction.amount;
                break;
            case 'Bills & Utilities':
                myChart.data.datasets[0].data[1] += transaction.amount;
                break;
            case 'Business Services':
                myChart.data.datasets[0].data[2] += transaction.amount;
                break;
            case 'Education':
                myChart.data.datasets[0].data[3] += transaction.amount;
                break;
            case 'Entertainment':
                myChart.data.datasets[0].data[4] += transaction.amount;
                break;
            case 'Fees and Charges':
                myChart.data.datasets[0].data[5] += transaction.amount;
                break;
            case 'Financial':
                myChart.data.datasets[0].data[6] += transaction.amount;
                break;
            case 'Food & Dining':
                myChart.data.datasets[0].data[7] += transaction.amount;
                break;
            case 'Gifts & Donations':
                myChart.data.datasets[0].data[8] += transaction.amount;
                break;
            case 'Health & Fitness':
                myChart.data.datasets[0].data[9] += transaction.amount;
                break;
            case 'Home':
                myChart.data.datasets[0].data[10] += transaction.amount;
                break;
            case 'Income':
                // myChart.data.datasets[0].data[11] += transaction.amount;
                break;
            case 'Investments':
                myChart.data.datasets[0].data[12] += transaction.amount;
                break;
            case 'Kids':
                myChart.data.datasets[0].data[13] += transaction.amount;
                break;
            case 'Loan Payments':
                myChart.data.datasets[0].data[14] += transaction.amount;
                break;
            case 'Misc Expenses':
                myChart.data.datasets[0].data[15] += transaction.amount;
                break;
            case 'Personal Care':
                myChart.data.datasets[0].data[16] += transaction.amount;
                break;
            case 'Pets':
                myChart.data.datasets[0].data[17] += transaction.amount;
                break;
            case 'Shopping':
                myChart.data.datasets[0].data[18] += transaction.amount;
                break;
            case 'Taxes':
                myChart.data.datasets[0].data[19] += transaction.amount;
                break;
            case 'Transfer':
                myChart.data.datasets[0].data[20] += transaction.amount;
                break;
            case 'Travel':
                myChart.data.datasets[0].data[21] += transaction.amount;
                break;
            case 'Uncategorized':
                myChart.data.datasets[0].data[22] += transaction.amount;
                break;
        }
    });
    myChart.update();
   
}


let transactions = []
const getTransactionRecord = async () =>{
    let transactions = []
    let result = await fetch('http://localhost:3000/api');
    let resultRecord = await result.json();
    let recordArr = await resultRecord.records
    let eachDisplay = ""
    recordArr.forEach(eachTransaction=>{

        transactions.push(eachTransaction)
        
        eachDisplay +=`
            <tr id="${eachTransaction.id}">
                
                <td class="text-center">${eachTransaction.date}</td>
                <td>${eachTransaction.description}</td>
                <td>${eachTransaction.amount}</td>
                <td>${eachTransaction.type}</td>
                <td>${eachTransaction.category}</td>
                <td><button type="submit" class="fw-btn-fill btn-gradient-yellow" id="edit-button" name="${eachTransaction.id}">EDIT</button></td>
                <td id="delete"> <button class="fw-btn-fill btn-gradient-yellow delete-button" id="delete-button" name="${eachTransaction.id}">DELETE</button></td>
            
            </tr>
        `
        displayTransaction.innerHTML = eachDisplay

        //! UPDATE EXPENSE CHART
        if (eachTransaction.type == "Transaction" && eachTransaction.date > "2022-08-30"){
            expenseChart.data.datasets[0].data[1] += eachTransaction.amount;
        }
        else if(eachTransaction.type == "Transaction" && eachTransaction.date < "2022-09-01"){
            expenseChart.data.datasets[0].data[0] += eachTransaction.amount;
        }

        //! UPDATE INCOME CHART
        if (eachTransaction.type == "Income" && eachTransaction.date > "2022-08-30"){
            incomeChart.data.datasets[0].data[1] += eachTransaction.amount;
        }
        else if(eachTransaction.type == "Income" && eachTransaction.date < "2022-09-01"){
            incomeChart.data.datasets[0].data[0] += eachTransaction.amount;
        }

         //try out the dom
    
        
    })
   
    //delete button
    let deleteButton = document.querySelectorAll('#delete-button');
    // console.log(deleteButton);
    deleteButton.forEach(button =>{
        button.addEventListener('click', async e=>{
            // console.log(e.target.name);
            // console.log(e);
            let rowID = e.target.name;
            //make api fetch call to delete the record
            let deleteItem = await fetch('http://localhost:3000/api', {
                method: "DELETE",
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({rowID})
            })
            getTransactionRecord()
        })
    })

    // edit button
    let editButton = document.querySelectorAll('#edit-button');
    // console.log(editButton);


    editButton.forEach(button =>{
        button.addEventListener('click', async e=>{
            console.log(e);

            let rowID = e.target.name;
            // console.log(rowID);

            $('#exampleModalLabel').html('Edit Transaction')
            $('#form-date-modal').html(``)

            $('#exampleModal').modal('show')

            let modalSubmit = document.getElementById('transaction-button-modal')

            modalSubmit.addEventListener('click', async e =>{

                e.preventDefault();
                console.log(e);

                let editDate = document.getElementById('form-date-modal')
                let editDescription = document.getElementById('form-description-modal')
                let editAmount = document.getElementById('form-amount-modal')
                let editType = document.getElementById('form-type-modal')
                let editCategory = document.getElementById('form-category-modal')

                // console.log(editDescription);

                let results = await fetch('http://localhost:3000/api', {
                    method: "PUT",
                    headers: {'Content-type': 'application/json; charset=UTF-8'},
                    body: JSON.stringify({
                        date: editDate.value, 
                        description: editDescription.value, 
                        amount: editAmount.value, 
                        type: editType.value, 
                        category: editCategory.value, 
                        rowID})
                })
                getTransactionRecord()
            })
 
           
        })

    })




    expenseChart.update();
    incomeChart.update();
    updateDoughnut(recordArr)
    // updateExpenseChart(recordArr)
}


// function displayModal(){

//     $('#exampleModalLabel').html('Edit Transaction')

//     $('#exampleModal').modal('show')
    
// }

getTransactionRecord()


}) //end of jQuery document ready





