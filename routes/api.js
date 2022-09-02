
const express = require('express');
const router = express.Router();
const auth = require('../auth');



const db = require('../models');
require('../public/chartjs/index')
require('chart.js');


// const updateDoughnut = (results)=>{
//     results.forEach(transaction => {
//         console.log("step 1");
//         switch(transaction.category){
//             case 'Auto and Transport':
//                 myChart.data.datasets[0].data[0] += transaction.amount;
//             case 'Bills & Utilities':
//                 myChart.data.datasets[0].data[1] += transaction.amount;
//             case 'Business Services':
//                 myChart.data.datasets[0].data[2] += transaction.amount;
//             case 'Education':
//                 myChart.data.datasets[0].data[3] += transaction.amount;
//             case 'Entertainment':
//                 myChart.data.datasets[0].data[4] += transaction.amount;
//             case 'Fees and Charges':
//                 myChart.data.datasets[0].data[5] += transaction.amount;
//             case 'Financial':
//                 myChart.data.datasets[0].data[6] += transaction.amount;
//             case 'Food & Dining':
//                 myChart.data.datasets[0].data[7] += transaction.amount;
//             case 'Gifts & Donations':
//                 myChart.data.datasets[0].data[8] += transaction.amount;
//             case 'Health & Fitness':
//                 myChart.data.datasets[0].data[9] += transaction.amount;
//             case 'Home':
//                 myChart.data.datasets[0].data[10] += transaction.amount;
//             case 'Income':
//                 myChart.data.datasets[0].data[11] += transaction.amount;
//             case 'Investments':
//                 myChart.data.datasets[0].data[12] += transaction.amount;
//             case 'Kids':
//                 myChart.data.datasets[0].data[13] += transaction.amount;
//             case 'Loan Payments':
//                 myChart.data.datasets[0].data[14] += transaction.amount;
//             case 'Misc Expenses':
//                 myChart.data.datasets[0].data[15] += transaction.amount;
//             case 'Personal Care':
//                 myChart.data.datasets[0].data[16] += transaction.amount;
//             case 'Pets':
//                 myChart.data.datasets[0].data[17] += transaction.amount;
//             case 'Shopping':
//                 myChart.data.datasets[0].data[18] += transaction.amount;
//             case 'Taxes':
//                 myChart.data.datasets[0].data[19] += transaction.amount;
//             case 'Transfer':
//                 myChart.data.datasets[0].data[20] += transaction.amount;
//             case 'Travel':
//                 myChart.data.datasets[0].data[21] += transaction.amount;
//             case 'Uncategorized':
//                 myChart.data.datasets[0].data[22] += transaction.amount;
//         }
//     });
//     console.log("step 2");
//     myChart.update();
// }

router.get('/api', auth.authReq, async (req,res) => {

    console.log('accessing the api');
    let records = await db.records.findAll({where :{ 'userID': req.user.id }})
    
    res.json({records})
})

router.post('/api', auth.authReq, async (req,res) => {
    console.log('accessing the api');

    try {

        let userID = req.user.id
        let { date, description, amount, type, category } = req.body

        let records = await db.records.create({
            date,
            description,
            amount,
            type,
            category,
            userID
        })

        let results = await db.records.findAll({where: {'userID': req.user.id}})

        updateDoughnut(results)

        // myChart.data.datasets[0].data[2] = 50; // Would update the first dataset's value of 'March' to be 50
        // myChart.update(); // Calling update now animates the position of March from 90 to 50.

        res.status(201).json({records})

    } catch (error) {
        res.status(400).json({error})
    }
    
   
})

router.put('/api', auth.authReq, async (req,res) => {

    console.log('accessing the api');
    let records = await db.records.findAll({where :{ 'userID': req.user.id }})
   
    res.json({records})
})

router.delete('/api', auth.authReq, async (req,res) => {

    console.log('accessing the api');
    let records = await db.records.findAll({where :{ 'userID': req.user.id }})
   
    res.json({records})
})

module.exports = router;


