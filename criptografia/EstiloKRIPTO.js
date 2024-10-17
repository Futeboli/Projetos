/*KRIPTO*/
function kripto() {
    let krip = document.getElementById("KRIPTOGRAFA").value;
    let kript = krip.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    document.getElementById("txtDESKRIPTO").value = kript;
}

function deskripto() {
    let deskrip = document.getElementById("DESKRIPTOGRAFA").value;
    let deskript = deskrip.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.getElementById("txtDESKRIPTO").value = deskript;
}
/*FIM KRIPTO*/

/*COPIA*/
function copiar(){
    let textcopy = document.getElementById("txtDESKRIPTO");
    textcopy.select();
    textcopy.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(textcopy.value);
    alert ("PARABÉNS, FUNCIONOU PORRA, você copiou o texto: "+ textcopy.value)
    alert ("VAMBORA PAPAPUPU🎆🎇PAPUL🎆🎇🎇🎆FIIILLLPUUUUUPOWPOWPOWPOW🎇🎇🎇🎆🎆🎆PAPAPA🎇🎆🎇🎆🎇🎆🎇🎆🎇TATATATATAFIIIIILLLFIIIIILLLLFIIIIIIILLLPOOOWWWWWW🎇🎆🎇🎆🎇🎆🎇🎇🎆🎇🎆🎇🎆🎇🎆🎇PAPAPAPAPUPUPUPUPU🎉🎉🎉🎊🎊🎊🎉🎉🎉")
   };
/*FIM COPIA*/