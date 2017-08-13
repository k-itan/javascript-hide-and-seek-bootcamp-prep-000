function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  const list = document.getElementById('grand-node').querySelectorAll('div')
  return list[list.length - 1]
  // for (let i = 0; i < list.length; i++) {
  // }
}
