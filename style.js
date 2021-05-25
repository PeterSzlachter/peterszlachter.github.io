let box = document.querySelector('.portfolio')
let body = document.querySelector('body')
let link = document.querySelectorAll('section ol li a')
let title = document.querySelector('section h1')
let puce = document.querySelector('section ol')
console.log(link)
console.log(box)


box.addEventListener('mouseover',() => {
  // box.style.backgroundColor = "red"
  // title.style.color = "var(--bg-color)"
  box.style.backgroundColor = "var(--main-color)"
  title.style.color = "var(--bg-color)"
  link.forEach((e) => {e.style.color = "var(--bg-color)"})
  box.style.boxShadow = "-12px -12px 2px 1px var(--bg-color)"
  box.style.transition = "0.4s"
  body.style.backgroundColor = "var(--bonusb-color)"
  puce.style.color = "var(--bg-color)"
  console.log(body.style.backgroundColor)
})

box.addEventListener('mouseleave',() => {
  title.style.color = "var(--main-color)"
  link.forEach((e) => {e.style.color = "var(--main-color)"})
  box.style.backgroundColor = "var(--bg-color)"
  box.style.boxShadow = "12px 12px 2px 1px var(--bonus-color)"
  body.style.backgroundColor = "var(--main-color)"
  puce.style.color = "var(--bonus-color)"
  console.log(body.style.backgroundColor)
})

link.forEach((e => {e.addEventListener('mouseover', (e) =>{
  body.style.backgroundColor = "var(--bonus-color)"
  box.style.boxShadow = "-12px 12px 2px 1px var(--bonusb-color)"
  console.log(body.style.backgroundColor)
  title.style.color = "var(--bonus-color)"
  puce.style.color = "var(--bonusb-color)"
  e.stopPropagation()
})
}))