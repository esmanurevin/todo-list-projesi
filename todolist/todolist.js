

let list=document.getElementById("list");
const gorevListesi = ["Ev İsleri", "Okul Dersleri", "Okul Odevi","Biraz da Oyun"]


function diziyiYazdir(){
    console.log("Dizi Yazdırıldı")

    let initialInnerHtml = ``
    
    for (let index = 0; index < gorevListesi.length; index++) {
        initialInnerHtml = initialInnerHtml + `<li>${gorevListesi[index]}<button class="deletebutton" onclick="tekTekSil(this)"><i class="fa-solid fa-xmark" style="color: #929396;"></i></button></li>`       
    }
    list.innerHTML = initialInnerHtml
}

diziyiYazdir()


function elemanekle(){
    let inputelement = document.getElementById("textinput");
    let inputvalue=inputelement.value;

    
    if(inputvalue!==""){  

        gorevListesi.push(inputvalue);  

        diziyiYazdir();
      
        inputelement.value="";
    }
    console.log("eleman eklendi.");
}

 
function hepsiSil(){
    gorevListesi.splice(0,gorevListesi.length);
    diziyiYazdir()
}

function tekTekSil(element){
    const parent = element.parentElement
    const text = parent.innerText

    const index = gorevListesi.indexOf(text)
    gorevListesi.splice(index,1)

    diziyiYazdir()


   
}