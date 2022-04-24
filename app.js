// document.getElementById('button').addEventListener('click', loadData);

// function loadData(e){
//     // create an XHR object
//     const xhr = new XMLHttpRequest;

//     xhr.open('GET', 'data.txt', true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText);
//             const output = document.getElementById('output');

//             output.innerHTML = `<h1>${this.responseText}</h1>`;
//         }
    
 
//     }

//     xhr.onerror = function(){
//         console.log('Resquest error...')
//     }

//     xhr.send();
//     //HTTP statuses
//     // 200: "ok"
//     // 403: "forbidden"
//     // 404: "not found"

    

//     e.preventDefault();
// }

document.getElementById('button1').addEventListener('click', loadCustomers);
document.getElementById('button2').addEventListener('click', loadSellers);

//load customers

function loadCustomers(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function (){
        if(this.status === 200){

            const customers = JSON.parse(this.responseText);

            const output1 = document.getElementById('output1');

            let output = '';

            customers.forEach(function(customers){
                output += `
                <ul>
                    <li>NO.: ${customers.no}</li>
                    <li>NAME: ${customers.name}</li>
                    <li>PRODUCT: ${customers.product}</li>
                    <li>PHONE: ${customers.phone}</li>
                </ul>
                `;
            })
            output1.innerHTML = output;
        }

    }
    


    xhr.send();


    e.preventDefault();
}
function loadSellers(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'Seller.json', true);

    xhr.onload = function (){
        if(this.status === 200){

            const sellers = JSON.parse(this.responseText);

            const output2 = document.getElementById('output2');

            let out = '';

            sellers.forEach(function(sellers){
                out += `
                <ul>
                    <li>NO.: ${sellers.no}</li>
                    <li>NAME: ${sellers.name}</li>
                    <li>PRODUCT: ${sellers.product}</li>
                    <li>PHONE: ${sellers.phone}</li>
                </ul>
                `;
            })
            output2.innerHTML = out;
        }

    }
    


    xhr.send();


    e.preventDefault();
}