function displayH(inputs) { 
    var xhttp;

    //console.log("test " + var11 + ",test " + var12);
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("hData").innerHTML = "Here is all your History data :"
        document.getElementById("HistoryData").innerHTML = this.responseText;
        //document.getElementById("warning").innerHTML = "";
      }
    };
    //xhttp.open("POST", "/"+game, true);
    xhttp.open("POST", "/display", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    //xhttp.open("GET", "/ajax/test2"+str, true);
    var Jdata = JSON.stringify({"data":"reuestH"});
    xhttp.send(Jdata);
}