// const Chart = require('chart.js');
// require('../chartjs/index')
// import fetch from 'node-fetch';


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

//   const ctx = document.getElementById('student-doughnut-chart')
//   const myChart = new Chart(
//     ctx,
//     config
// );

const getDB = async () =>{
    let transactions = await fetch('http://localhost:3000/api')
    let data =  transactions.json()
    console.log(data);
}

getDB()

const updateDoughnut = (results)=>{
    results.forEach(transaction => {
        console.log("step 1");
        switch(transaction.category){
            
            case 'Auto and Transport':
                myChart.data.datasets[0].data[0] += transaction.amount;
            case 'Bills & Utilities':
                myChart.data.datasets[0].data[1] += transaction.amount;
            case 'Business Services':
                myChart.data.datasets[0].data[2] += transaction.amount;
            case 'Education':
                myChart.data.datasets[0].data[3] += transaction.amount;
            case 'Entertainment':
                myChart.data.datasets[0].data[4] += transaction.amount;
            case 'Fees and Charges':
                myChart.data.datasets[0].data[5] += transaction.amount;
            case 'Financial':
                myChart.data.datasets[0].data[6] += transaction.amount;
            case 'Food & Dining':
                myChart.data.datasets[0].data[7] += transaction.amount;
            case 'Gifts & Donations':
                myChart.data.datasets[0].data[8] += transaction.amount;
            case 'Health & Fitness':
                myChart.data.datasets[0].data[9] += transaction.amount;
            case 'Home':
                myChart.data.datasets[0].data[10] += transaction.amount;
            case 'Income':
                myChart.data.datasets[0].data[11] += transaction.amount;
            case 'Investments':
                myChart.data.datasets[0].data[12] += transaction.amount;
            case 'Kids':
                myChart.data.datasets[0].data[13] += transaction.amount;
            case 'Loan Payments':
                myChart.data.datasets[0].data[14] += transaction.amount;
            case 'Misc Expenses':
                myChart.data.datasets[0].data[15] += transaction.amount;
            case 'Personal Care':
                myChart.data.datasets[0].data[16] += transaction.amount;
            case 'Pets':
                myChart.data.datasets[0].data[17] += transaction.amount;
            case 'Shopping':
                myChart.data.datasets[0].data[18] += transaction.amount;
            case 'Taxes':
                myChart.data.datasets[0].data[19] += transaction.amount;
            case 'Transfer':
                myChart.data.datasets[0].data[20] += transaction.amount;
            case 'Travel':
                myChart.data.datasets[0].data[21] += transaction.amount;
            case 'Uncategorized':
                myChart.data.datasets[0].data[22] += transaction.amount;
        }
    });
    console.log("step 2");
    myChart.update();
}


    