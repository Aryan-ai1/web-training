
const url = "https://restcountries.com/v3.1/all";
const element = document.getElementById("container");
async function fetchData() 
{
    
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);


        for(let i = 0; i< data.length; i++){
            const value = data[i];
            
            const html =`
            <div class = 'card'>
            <img src=${value?.flags?.png} />
            <h3>
            Country:
                ${value?.name?.common}
            </h3>
            <h3>
            Population:
                ${value?.population}
                
            </h3>
            <h4>
            Capital:
            ${value?.capital}
            </h4>
            
            <h2>
            Region:
            ${value?.region}
            </h2>
            </div> `;
            element.innerHTML += html;
        } 
    }
    catch (error) {
        console.log("------error------",error.message);
    }
}
// const container = document.getElementById("container");
// for(let i= 1; 1<= url.length; i++){
//     const firstvalue = url[i].common;
//     const name1 = ("firstvalue",common);
//     element.innerHtml += name1
// }
