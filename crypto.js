function GCal() {
  var amount = parseInt(document.getElementById("value").value);
  var n = parseInt(document.getElementById("num").value);

  console.log(amount + " " + n);
  if (isNaN(amount) || isNaN(n)) {
    alert("Enter Valid Values");
  }
  else {
    var table = document.createElement("TABLE")
    table.border = "2"

    var row = table.insertRow(-1)
    var cella1 = row.insertCell(-1)
    var cella2 = row.insertCell(-1)
    cella1.innerHTML="<h5>Percent</h5>"
    cella2.innerHTML="<h5>Value</h5>"
    for (var i = 1; i <= n; i++) {
      var row1 = table.insertRow(-1);
      var cell1 = row1.insertCell(-1)
      var cell2 = row1.insertCell(-1)
      var ea = (i * 0.0625) * amount;
      var ta = amount + ea;
      cell1.innerHTML=i*6.25+"%";
      cell2.innerHTML=ta;
      console.log(ta);
    }
    var Dtable=document.getElementById("cal_table")
    Dtable.append(table);
  }

}