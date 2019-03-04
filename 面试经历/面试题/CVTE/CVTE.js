var name = 'CVTE';

function makeFunc() {
  function displayName() {
    console.log(name);
  }
  var name = 'SEEWO';
  return displayName;
}

var myFunc = makeFunc();
myFunc();
// undefined
