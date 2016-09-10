var _idx = 0;

export function putCurrentPaperCenter(paper, paperList, wall){
  var beforePaper = false;
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
  paper.putWhere = getCenterAddr(wall);
  // set before paper putWhere
  if (paper !== beforePaper && beforePaper) {
    putAnyWhere(beforePaper, wall, _idx++);
  }
}

export function putAnyWhere(paper, wall, idx){

  paper.putWhere['-webkit-transform'] = 'rotate(' + Math.random()*360 + 'deg)';
  paper.putWhere['-moz-transform'] = 'rotate(' + Math.random()*360 + 'deg)';

  var _half_x = wall.width / 2;
  var _half_y = wall.height / 2;
  var _any = Math.random();
  var _any_x, _any_y;
  switch (idx%4) {
    case 0:
      _any_x = _half_x * _any;
      _any_y = _half_y * _any;
      break;
    case 1:
      _any_x = _half_x * (_any+1);
      _any_y = _half_y * _any;
      break;
    case 2:
      _any_x = _half_x/2 * _any;
      _any_y = _half_y * (_any+1);
      break;
    case 3:
      _any_x = _half_x/2 * _any + 1.5*_half_x;
      _any_y = _half_y * (_any+1);
      break;
    default:
      console.log('vivijin');
  }

  paper.putWhere.left = _any_x - 130 + 'px';
  paper.putWhere.top = _any_y - 200 + 'px';
}

export function getCenterAddr(wall){
  return {
    top: wall.height/2-200+'px',
    left: wall.width/2-130+'px',
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)'

  };
}
