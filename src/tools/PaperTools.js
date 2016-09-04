var _idx = 0;

export function putCurrentPaperCenter(paper, paperList){
  var beforePaper = {};
  // clear center
  for (var i = 0; i < paperList.length; i++) {
    var item = paperList[i];
    if (item.center) {
      beforePaper = item;
    }
    item.center = false;
  }
  // set center and putWhere
  paper.center = true;
  paper.putWhere = {};
  // set before paper putWhere
  if (paper !== beforePaper) {
    beforePaper.putWhere = {
      top: 100 * Math.random() + '%',
      left: 100 * Math.random() + '%',
      '-webkit-transform': 'rotate(' + Math.random()*360 + 'deg)'
    }
  }
}

export function putAnyWhere(paper, wallwidth, idx){
  paper.putWhere['-webkit-transform'] = 'rotate(' + Math.random()*360 + 'deg)';

  var _half = wallwidth / 2;
  switch (idx%4) {
    case 0:
      paper.putWhere.left = 50 * Math.random() + '%';
      paper.putWhere.top = 50 * Math.random() + '%';
      break;
    case 1:
      paper.putWhere.left = 50 * Math.random() + 50 + '%';
      paper.putWhere.top = 50 * Math.random() + '%';
      break;
    case 2:
      paper.putWhere.left = _half * Math.random()-400 + 'px';
      paper.putWhere.top = 50 * Math.random() + 50 + '%';
      break;
    case 3:
      paper.putWhere.left = _half * (Math.random()+1) + 400 + 'px';
      paper.putWhere.top = 50 * Math.random() + 50 + '%';
      break;
    default:
      console.log('vivijin');
  }
}
