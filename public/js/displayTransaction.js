let displayTransaction = document.querySelector(".transaction-appendhere");



const getTransactionRecord = async () =>{
    let result = await fetch('http://localhost:3000/api');
    let resultRecord = await result.json();
    console.log(resultRecord);
    // resultRecord.forEach(eachTransaction=>{
    //     console.log(eachTransaction);
    // })
}

getTransactionRecord()