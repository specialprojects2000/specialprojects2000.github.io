function swapContent () {
    document.getElementById("initial").style.display="none";
    document.getElementById("result").style.display="block";
}

function testRes() {
    $("#target").hide();
  var res = ["NEGATIF", "POSITIF"];
  var choose = Math.floor(Math.random() * res.length);
  document.getElementById("target").innerHTML = res[choose];
  $("#target").fadeIn();
}

