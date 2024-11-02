function valor(x) {
  document.getElementById("display").value += x;
}

function delDisplay(y) {
  document.getElementById("display").value = "";
}

function calculateResult() {
    var result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  }

  