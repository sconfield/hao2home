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
