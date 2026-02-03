var pass = 0;
var true_pass = 0;
var pl_pass;

window.onload = load();

function load(){
  test = window.localStorage.getItem("pl_pass");
  if(!test){
    window.location.href = "passset.html";
  }else{
    pl_pass = test;
  }
}

function press(x){
    true_pass = 0;
    pass = pass * 10;
    while(pass >= 100000){
        pass = pass - 100000;
    }
    pass = pass + x;
    passcheck();
}

function passcheck(){
    if(pass < 10){
        document.querySelector("#passes").textContent = "●";
    }else if(pass < 100){
        document.querySelector("#passes").textContent = "●●";
    }else if(pass < 1000){
        document.querySelector("#passes").textContent = "●●●";
    }else if(pass < 10000){
        document.querySelector("#passes").textContent = "●●●●";
    }else if(pass < 100000){
        document.querySelector("#passes").textContent = "●●●●●";
    }
}

function press_S(){
    true_pass = true_pass + 1;
    if(true_pass >= 10){
      var result = window.confirm("パスワードをリセットしますか？");
      if(result){
        window.localStorage.clear();
      }
    }
}

function press_E(){
    document.querySelector("#passes").textContent = "ERROR";
    pass = 0;
    true_pass = 0;
}
