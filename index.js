let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = 0

function Count() {
    count += 1
    countEl.innerHTML = count
}

function save() {
    let previousEnt = ' - ' + count
    saveEl.innerText += previousEnt
    count = 0
    countEl.textContent = 0 
}
let errorparagraph = document.getElementById('error')
function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = 'Previous Entries: 0' 

    // errorparagraph.textContent = 'Something went wrong, please try again.'
}

