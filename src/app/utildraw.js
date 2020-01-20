module.exports.drawImage = (canvas, dataArray) => {
  console.log("__работает__модуль__drawImage____");
  let sizePixel = 0;
  let x = 0;
  let y = 0;
  sizePixel = 512 / dataArray.length;    
  for (let row of dataArray) {      
    for (let cell of row) {        
        drawPixel(canvas, y, x, sizePixel, cell);
        x++;
    }
    y++;
    x = 0;
  }
}