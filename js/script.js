var listaCognomi = ['Iovane','Dalba','Tuzzolino','Solaro'];
var inserireCognome = prompt('inserire il cognome');

inserireCognome = inserireCognome[0].toUpperCase() + inserireCognome.slice(1);

listaCognomi.push(inserireCognome);

listaCognomi.sort();

var ordineAlfa =listaCognomi.indexOf(inserireCognome) + 1;
document.getElementById('cognome').innerHTML = ordineAlfa