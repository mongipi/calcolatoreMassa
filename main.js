const btnCalcola = document.getElementById('btnCalcola');
const btnCalcolaTelai = document.getElementById('btnCalcolaTelai');

btnCalcola.addEventListener('click', function() {
    
    const txtAcqua = document.getElementById('txtAcqua');
    const txtFarina = document.getElementById('txtFarina');
    const txtSale = document.getElementById('txtSale');
    const txtOlio = document.getElementById('txtOlio');

    let farina = document.getElementById('farina').value;
    let litri = document.getElementById('litri').value;
    let sale = document.getElementById('sale').value;
    let olio = document.getElementById('olio').value;

    
    txtAcqua.innerText = litri
    txtFarina.innerText = farina * litri
    txtSale.innerText = litri * sale;
    txtOlio.innerHTML = litri * olio   
});

btnCalcolaTelai.addEventListener('click', function(){
    console.log("ENTRaTO");
    let txtLitri = document.getElementById('txtLitri');
    
    let farinaTelaio = document.getElementById("farinaTelaio").value;
    let panzerotti = document.getElementById("panzerotti").value; 
    let pizze = document.getElementById("pizze").value;
    let giganti = document.getElementById("giganti").value;
    let misto = document.getElementById("misto").value;
    let napoli = document.getElementById("napoli").value;

    let telaioPanzerotto = 1800 * panzerotti;
    let telaioPizze = 2400 * pizze;
    let telaioGiganti = 2520 * giganti;
    let telaioMisto = 2820 * misto;
    let telaioNapoli = 3360 * napoli;
   
    console.log("telaioPanzerotto " + telaioPanzerotto);
    console.log("telaioPizze " + telaioPizze);
    console.log("telaioGiganti " + telaioGiganti);
    console.log("telaioMisto " + telaioMisto);
    console.log("telaioNapoli " + telaioNapoli);

    let kiliMassa = telaioPanzerotto + telaioPizze + telaioGiganti + telaioMisto + telaioNapoli;
     console.log("KiliMassa " +kiliMassa);

     let farinaPerLitro =  parseInt(farinaTelaio) + parseInt(1000);
     
    let totaleLitri = kiliMassa /farinaPerLitro;
    console.log("TOTALE LITRI " + totaleLitri);
    
    txtLitri.innerHTML = totaleLitri;
})
