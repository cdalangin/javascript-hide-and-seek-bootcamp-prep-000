function getFirstSelector(selector) {
  var element=document.querySelector(selector)
  return element
}
function nestedTarget() {
 var nest=document.querySelector('#nested .target')
 return nest
}
function increaseRankBy(n) {
  var ranked=document.getElementById('app').querySelectorAll('ul.ranked-list li')
 for (let i=0; i< ranked.length; i++) {
   parseInt(ranked[i].innerHTML)+n
  }
  return ranked
}
function deepestChild() {
  var child=document.getElementById('#grand-node').querySelector('div[4]')
  return child
}
