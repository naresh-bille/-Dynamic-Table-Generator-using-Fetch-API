
function printdata(data){
    let table = document.createElement('table');
    // Create table header
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let keys = Object.keys(data[0]);
    keys.forEach(key => {
        if(key === "rating") return; // Skip the "rating" key
        let th = document.createElement('th');
        th.innerText = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    let tbody = document.createElement('tbody');
    data.forEach(item => {
        let row = document.createElement('tr');
        keys.forEach(key => {
            if(key !== "rating"){
                if(key === "image"){
                    let img=document.createElement('img');
                    img.src=item[key];
                    img.width=100;
                    let td = document.createElement('td');
                    td.appendChild(img);
                    row.appendChild(td);
                    // Skip to the next key
                }
                 // Skip the "rating" key
                 else{
            let td = document.createElement('td');
            td.innerText = item[key];
            row.appendChild(td);
                 }
        }
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
}


async function getdata() {
    try {
   let response=  await fetch('http://localhost:3000/data')
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        let data= await response.json() 
        console.log(data)
        printdata(data)
    } catch (error) {
        console.log('There has been a problem with your fetch operation:', error);
        
    }

}
getdata()
document.body.appendChild(table);