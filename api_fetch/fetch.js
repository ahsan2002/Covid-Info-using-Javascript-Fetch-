fetch('https://api.covid19api.com/summary').then((apidata)=>
        {
            // console.log(apidata);
            return apidata.json();
        })
        .then((actualdata)=>{
            console.log(actualdata);
            const mydata=actualdata.Countries[130];
            document.getElementById('api').innerHTML=`The name of the country is ${mydata.Country},the total new confirmed cases are ${mydata.NewConfirmed},total confirmed cases are ${mydata.TotalConfimed} and the total deaths till now are ${mydata.TotalDeaths}`
        })
        .catch((error)=>{
            console.log(error);
        });