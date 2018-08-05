function inputListener(evx) {
  isMirror = ['r', 'g', 'b'].indexOf(evx.target.getAttribute('class').substr(0, 1))
  if (isMirror > -1 && !!window.isMirrorMode) {
    var classToModify = '.' + ['c', 'm', 'y'][isMirror]
    document.querySelector(classToModify + 'i').value = 100 - evx.target.value
    document.querySelector(classToModify + 'p').style.opacity = (100 - evx.target.value) / 100
  }
  classID = '.' + evx.target.getAttribute('class').substr(0, 1)
  document.querySelector(classID + 'p').style.opacity = evx.target.value / 100
  updatePreviews()
}

function setColour(col) {
  col[3] = 100 - col[0]
  col[4] = 100 - col[1]
  col[5] = 100 - col[2]
  for (let i = 0; i < col.length; i++) {
    document.querySelector('.' + ['r', 'g', 'b', 'c', 'm', 'y'][i] + 'i').value = col[i]
    document.querySelector('.' + ['r', 'g', 'b', 'c', 'm', 'y'][i] + 'p').style.opacity = document.querySelector('.' + ['r', 'g', 'b', 'c', 'm', 'y'][i] + 'i').value / 100
  }
  updatePreviews()
}

function updatePreviews() {
  r = Number(document.querySelector('.rp').style.opacity || 1) * 255
  g = Number(document.querySelector('.gp').style.opacity || 1) * 255
  b = Number(document.querySelector('.bp').style.opacity || 1) * 255
  document.querySelector('.rgbc').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
  c = 1 - Number(document.querySelector('.cp').style.opacity || 1)
  m = 1 - Number(document.querySelector('.mp').style.opacity || 1)
  y = 1 - Number(document.querySelector('.yp').style.opacity || 1)
  document.querySelector('.cmyc').style.backgroundColor = 'rgb(' + c * 255 + ',' + m * 255 + ',' + y * 255 + ')'
}

document.addEventListener('DOMContentLoaded', ev => {
  ['r', 'g', 'b', 'c', 'm', 'y'].forEach(i => {
    document.querySelector('.' + i + 'i').addEventListener('input', inputListener)
  })
  
  document.querySelector('.b1').addEventListener('click', evx => {
    var c = {
      r: Math.floor(Math.random() * 101),
      g: Math.floor(Math.random() * 101),
      b: Math.floor(Math.random() * 101)
    }
    
    c['c'] = 100 - c.r
    c['m'] = 100 - c.g
    c['y'] = 100 - c.b
    
    document.querySelector('.ri').value = c.r;
    document.querySelector('.gi').value = c.g;
    document.querySelector('.bi').value = c.b;
    document.querySelector('.ci').value = c.c;
    document.querySelector('.mi').value = c.m;
    document.querySelector('.yi').value = c.y;
    document.querySelector('.rp').style.opacity = c.r / 100
    document.querySelector('.gp').style.opacity = c.g / 100
    document.querySelector('.bp').style.opacity = c.b / 100
    document.querySelector('.cp').style.opacity = c.c / 100
    document.querySelector('.mp').style.opacity = c.m / 100
    document.querySelector('.yp').style.opacity = c.y / 100
    
    updatePreviews()
  })
  document.querySelector('.b2').addEventListener('click', evx => {
    if (!!window.isMirrorMode) {
      evx.target.innerText = 'Mirror RGB to CMY (off)'
      window.isMirrorMode = false
    } else {
      evx.target.innerText = 'Mirror RGB to CMY (on)'
      window.isMirrorMode = true
    }
  })
  document.querySelectorAll('.bc').forEach(el => {
    el.addEventListener('click', evx => {
      setColour(evx.target.getAttribute('data-colour').split(','))
    })
  })
  updatePreviews()
})