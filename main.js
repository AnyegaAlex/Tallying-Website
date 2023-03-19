let count = 0

function increment(){
  count += 1
  document.getElementById("count_el").innerHTML = count
}

function save(){

  console.log(count)

  let saveEl = document.getElementById("save_el")
  let countDashes = count + " - "

  saveEl.textContent += countDashes
}





