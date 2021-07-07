function tellMe(inputs) { 
    var xhttp;
    var var11=document.getElementById("var1").value;
    var var12=document.getElementById("var2").value;
    var var13=document.getElementById("var3").value;
    var var14=document.getElementById("var4").value;
    var var15=document.getElementById("var5").value;
    var var16=document.getElementById("var6").value;
    var var17=document.getElementById("var7").value;
    var var18=document.getElementById("var8").value;
    var var19=document.getElementById("var9").value;
    var var110=document.getElementById("var10").value;
    var var111=document.getElementById("var11").value;
    var var112=document.getElementById("var12").value;

    console.log("test " + var11);
    var data = var11 + "," + var12 + "," + var13 + "," + var14 + "," + var15 + "," + var16 + "," + var17 + "," + var18 + "," + var19 + "," + var110 + "," + var111 + "," + var112;
    console.log("test " + data);
    //var var12=document.getElementById("var12").value;

    //console.log("test " + var11 + ",test " + var12);
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("WelcomeM").innerHTML = "Here are the matched patterns :"
        document.getElementById("Suggestions").innerHTML = this.responseText;
        //document.getElementById("warning").innerHTML = "";
      }
    };
    //xhttp.open("POST", "/"+game, true);
    xhttp.open("POST", "/getSuggestion", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    //xhttp.open("GET", "/ajax/test2"+str, true);
    var Jdata = JSON.stringify({"data":data});
    xhttp.send(Jdata);
}