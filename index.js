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
   ranked[i].innerHTML=parseInt(ranked[i].innerHTML)+n
  }
  return ranked
}
function deepestChild() {
  var child=document.getElementById('#grand-node')
    for (let i=0; i< child.length; i++) {
    child[i].innerHTML=document.querySelector(child[i].innerHTML)
   }
  return child
}
