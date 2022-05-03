const fetch = require('node-fetch');
const fs = require('fs').promises;
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) =>{
        return response.json();

    })
    .then((data) =>{
        console.log(data)
    })
    .catch((error) =>{
        console.log(error)
    })

    async function getCoins(){
        try{
            const response = await fetch ('https://api.coindesk.com/v1/bpi/currentprice.json');
            const data = await response.json();
            let coinsList = "";
            Array.from(data).forEach(coin => {
                coinsList+= `${coin['rate']}`;
            });
    
            fs.writeFile('Bitcoin.csv', coinsList, (error) => {
                if (error){
                    console.log(error);
                    return;
                }
                console.log('se ha creado el archivo');
            })
    
            //console.log(data)
        }catch(error){
            console.log(error)
        }
        
    }
    getCoins();