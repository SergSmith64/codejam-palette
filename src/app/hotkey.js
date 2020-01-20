// ___БЫЛО___
// export default function setHotKey(keyCode) {
//   switch(keyCode) {
//     case 'KeyP': {      
//       return 'pensil';      
//     }
//     case 'KeyB':{
//       return 'paint-bucket';      
//     }
//     case 'KeyC': {
//       return 'select-color';
//     }
//     case 'KeyS': {
//       return 'save';
//     }
//     default:
//   }
// }


// ____СТАЛО____
export default function setHotKey(keyCode) {
  switch(keyCode) {
    case 'KeyP': {      
      return 'pensil';      
    }
    case 'KeyB':{
      return 'paint-bucket';      
    }
    case 'KeyC': {
      return 'select-color';
    }
    case 'KeyS': {
      return 'save';
    }
    default:
  }
  console.log("__работает___Set-Hot-Key___");
}