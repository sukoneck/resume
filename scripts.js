// print

function stylePrint() {
  return new Promise((resolve, reject) => {
    let link = document.getElementById('stylesheet');
    link.href = 'style-print.css';
    setTimeout(() => resolve(), 500); // 500ms delay
  });
}

function triggerPrint() {
  window.print();
}

function styleAndPrint() {
  stylePrint().then(triggerPrint).catch(err => console.log(err));
}

function styleDefault() {
  document.getElementById('stylesheet').href = 'style-default.css';
}

// fun hover

var colorPairs = [
  ['#abb2bf', '#282c34'],
  ['#636d83', '#282c34'],
  ['#10b1fe', '#282c34'],
  ['#3fc56b', '#282c34'],
  ['#ce9887', '#282c34'],
  ['#f9c859', '#282c34'],
  ['#ff78f8', '#282c34'],
  ['#9f7efe', '#282c34'],
  ['#3691ff', '#282c34'],
  ['#ff936a', '#282c34'],
  ['#ff6480', '#282c34'],
  ['#7a82da', '#282c34']
];

function changeColors() {
  var randomColorPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];

  this.style.backgroundColor = randomColorPair[0];
  this.style.color = randomColorPair[1];
}

function resetColors() {
  this.style.backgroundColor = '';
  this.style.color = '';
}

document.querySelectorAll('fun').forEach(function(fun) {
  fun.onmouseover = changeColors;
  fun.onmouseout = resetColors;
});
