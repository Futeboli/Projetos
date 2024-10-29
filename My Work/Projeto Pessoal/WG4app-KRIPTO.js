/*KRIPTO*/
function kripto() {
    let krip = document.getElementById("txtKRIPTO").value;

    /*CODIGO CRIPTOGRAFANDO*/
    let kript = krip.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat")
    .replace(/E/g,"ENTER").replace(/I/g,"IMES").replace(/A/g,"AI").replace(/O/g,"OBER").replace(/U/g,"UFAT");

    document.getElementById("txtDESKRIPTO").value = kript;
    document.getElementById("txtKRIPTO").value = null;
}

function deskripto() {
    let deskrip = document.getElementById("txtKRIPTO").value;

    /*CODIGO DESCRIPTOGRAFANDO*/
    let deskript = deskrip.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u")
    .replace(/ENTER/g,"E").replace(/IMES/g,"I").replace(/AI/g,"A").replace(/OBER/g,"O").replace(/UFAT/g,"U");

    document.getElementById("txtDESKRIPTO").value = deskript;
    document.getElementById("txtKRIPTO").value = null;
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