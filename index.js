
const text = document.getElementById("text")
const seave = document.getElementById("seave")
const message = document.getElementById("message")
const deleat = document.getElementById("deleat")

if(localStorage.getItem("memo") === null){
  text.value = ""
}else{
  text.value = localStorage.getItem("memo")
}

seave.classList.add("noactive")
deleat.classList.add("noactive")

text.addEventListener("change", handleChange)

function handleChange(event){
  const value = event.target.value
  if(value === ""){
    seave.classList.add("noactive")
    deleat.classList.add("noactive")
  }else{
    seave.classList.remove("noactive")
    deleat.classList.remove("noactive")
  }
}




seave.addEventListener("click",() => {
  message.classList.add("appear")
  setTimeout(() => {
    message.classList.remove("appear")
  },1000)
  localStorage.setItem("memo",text.value);
})

deleat.addEventListener("click",() => {
  if(confirm("削除しますか?") === true){
    text.value = ""
  localStorage.removeItem("memo")
  seave.classList.add("noactive")
deleat.classList.add("noactive")
  }
})
