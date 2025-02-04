const array = [
    {
        cell1: "Orosz",
        cell2: "Gogol",
        cell3: "A köpönyeg",
        cell4: "Csehov",
        cell5: "A csinovnyik halála",
    },
    {
        cell1: "Cseh",
        cell2: "Franz Kafka",
        cell3: "Az átváltozás",

    },
    {
        cell1: "Magyar",
        cell2: "Örkény István",
        cell3: "Egyperces Novellák",
        cell4: "József Attila",
        cell5: "Klárisok",
    },
    {
        cell1: "Svájc",
        cell2: "Friedrich Dürrenmatt",
        cell3: "A fizikusok",
    }
];


const table = document.createElement('table');
table.id="tableID";
document.body.appendChild(table);

const tbody = document.createElement('tbody'); 
tbody.id="tbodyID";
table.appendChild(tbody);

// generateColgroup();
// createHeader(); 
// renderTable(array);
// generateForm();


const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const thisForm = e.currentTarget; 
    const errorElements = thisForm.querySelectorAll('.error'); 
    for (const i of errorElements) { 
        i.innerHTML = ""; 
    }
    let valid = true; 

    const cell1HtmlElement = document.getElementById('szarmazas');
    const cell2HtmlElement = document.getElementById('szerzo1');
    const cell3HtmlElement = document.getElementById('szerzo1mu');
    const cell4HtmlElement = document.getElementById('szerzo2');
    const cell5HtmlElement = document.getElementById('szerzo2mu');
    
    const cell1Value = cell1HtmlElement.value;
    const cell2Value = cell2HtmlElement.value;
    const cell3Value = cell3HtmlElement.value;
    const cell4Value = cell4HtmlElement.value === '' ? undefined : cell4HtmlElement.value; 
    const cell5Value = cell5HtmlElement.value === '' ? undefined : cell5HtmlElement.value; 

    if (!validateFormInputFields(cell1HtmlElement, "Kötelező megadni a származást!")) {
        valid = false;
    }
    
    if (!validateFormInputFields(cell2HtmlElement, "Kötelező megadni az 1. szerzőt!")) { 
        valid = false;
    }
    
    if (!validateFormInputFields(cell3HtmlElement, "Kötelező megadni az 1. szerző művét!")) { 
        valid = false;
    }

    
    if(!validateFormInputFieldsExtra(cell4HtmlElement, cell5HtmlElement)){
        valid=false
    }

    if(valid){
        const newElement = {
            cell1: cell1Value,
            cell2: cell2Value,
            cell3: cell3Value,
            cell4: cell4Value,
            cell5: cell5Value,
          };
        array.push(newElement);
    
        tbody.innerHTML = '';
        renderTable(array); 
    
        thisForm.reset();
    }
});