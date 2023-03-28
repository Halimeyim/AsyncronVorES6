//Asyncron in JS-->

//Fetch(API statt Ajax)Die Fetch-API bietet eine einfachere und mächtigere Möglichkeit,
//mit Servern zu kommunizieren und Daten in JSON-, Text- oder binären Formaten abzurufen oder zu senden.
//Die Fetch-API verwendet das Promise-Objekt, um asynchrone Anfragen zu behandeln und die Antwortdaten zu verarbeiten.,
//Node.js(die auf der JavaScript-Sprache basiert und es ermöglicht,
//serverseitige Anwendungen zu entwickeln. )

//Ajax(Asynchronous JavaScript and XML)AJAX verwendet eine Kombination
//von Technologien wie JavaScript, XML, HTML und CSS, um Daten
//asynchron zwischen dem Client und dem Server auszutauschen. ),

//AJAX sayfamizi yenilemeden herhangi bir REST-API den veya kendi 
//server'imizdanasenkron bir sekilde veri almamizi ve göndermemizi saglar.
// bu islemi"xhr Objesi"(XmlHttpRequest)üzerinden yapiyoruz
//Vriler bize XML yada JSON Formatinda geliyor

//Ajax nasil Calisir?
//bild sayfada
document.getElementById("btn").addEventListener("click", function () {
    //XmlHttpRequest objesi olusturuldu
    const xhr = new XMLHttpRequest();
    // console.log(xhr); --> bu objenin bircok özelligi var.mesela bu özellikler
    //veri aldigimizda -->responseText' den aliyoruz. JSON.Parse ile ceviriyoruz
    //responseXML -->cevap xml seklinde geliyor
    //status: istek durumunu yolunda olup olmadigini bildirir. 200 OK

    //readystate
    //    Holds the status of the XMLHttpRequest.
    // 0: request not initialized -->Herhangi bir istekte bulunulmadi
    // 1: server connection established -->Server ile baglanti saglandi
    // 2: request received -->request alindi
    // 3: processing request->server istegi calistiriyor
    // 4: request finished and response is ready -->server cevabi hazirladi

    //onreadystatechance -->readstate durumu degistigi zaman bu 
    //fonksiyon direkt calisacaktir

    //-->bu eski bir yöntem
    /*   xhr.onreadystatechange = function () { 
           // console.log(this.readyState); //Cevap 1 2 3 4 seklinde gelir. Bu readystate'nin
           //basarili bir sekilde tamamlandigini gösterir.
   
           //console.log(this.status);//cevap: 0 200 200 200 --> = server ile baglantiyi temsil eder
           //diger durumlarin sorunsuz calistigini belirtir
   
           if (this.status == 200 && this.readyState == 4) {
               //response hazir
               console.log(this.responseText);
           }
       }*/
    //-->eni yöntem
    xhr.onload = function () { // bu method readyState 4 oldugu durumlarda calisir
        //Bu yüzden sadece status kontrol edilir
        if (this.status === 200) {
            console.log(xhr);
            //Html sayfasina yazdirmak icin
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    xhr.open("GET", "example.txt", true);
    xhr.send();
});
