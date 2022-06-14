// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    let newDNa = '';
    for (char of dna) {
        if (char == 'A') {
            newDNa += 'T';
        } else if (char == 'T') {
            newDNa += 'A';
        } else if (char == 'C') {
            newDNa += 'G';
        } else if (char == 'G') {
            newDNa += 'C';
        }
    }
    return newDNa;
  }

  console.log(DNAStrand("ATTGC"));

  function DNAStrand2(dna) {
    return dna.replace(/./g, function(arg) {
      return DNAStrand2.pairs[arg]
    })
  }
  
  DNAStrand2.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  console.log(DNAStrand("TAACG"));