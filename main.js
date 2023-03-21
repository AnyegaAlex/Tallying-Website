let count = 0
let countEl = document.getElementById("count_el")


function increment(){
  count += 1
  document.getElementById("count_el").textContent = count
}

function save(){
  console.log(count)
  let saveEl = document.getElementById("save_el")
  let countDashes = count + " - "

  saveEl.textContent += countDashes

  countEl.textContent = 0

  count= 0
}





