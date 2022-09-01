let displayTransaction = document.querySelector(".transaction-appendhere");



const getTransactionRecord = async () =>{
    let result = await fetch('http://localhost:3000/api');
    let resultRecord = await result.json();
    let recordArr = resultRecord.records
    console.log(recordArr);
    let eachDisplay = ""
    recordArr.forEach(eachTransaction=>{
        console.log(eachTransaction);
        console.log(eachTransaction.description);
        
        eachDisplay +=`
            <tr>
                
                <td class="text-center">${eachTransaction.date}</td>
                <td>${eachTransaction.description}</td>
                <td>${eachTransaction.amount}</td>
                <td>${eachTransaction.type}</td>
                <td>${eachTransaction.category}</td>
            
            </tr>
        `
        displayTransaction.innerHTML = eachDisplay
    })
}

getTransactionRecord()

