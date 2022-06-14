// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    let code = cc.split('').reverse().join('').substring(0,4).split('').reverse().join('');
    let mask = cc.replace(/./g , '#')
    return mask.substring(0,cc.length - 4) + code;
}

console.log(maskify('123456789'));


function maskify2(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

  console.log(maskify2('657575r32'));


  function maskify3(cc) {
    return cc.replace(/.(?=....)/g, '#');
  }

  console.log(maskify3('aloneTonight'));

  function maskify4(cc) {
    return '#'.repeat(cc.length-4) + cc.slice(-4);
  }

  console.log(maskify4('СтариксГитарой'));

