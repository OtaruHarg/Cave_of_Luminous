var pass = 0;
var true_pass = 0;
var pl_pass;
var test;
var x;

window.onload = load();

function load(){
  test = window.localStorage.getItem("pl_pass");
  if(!test){
    passset();
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
        window.location.reload();
      }
    }
}

function press_E(){
    document.querySelector("#passes").textContent = "ERROR";
    pass = 0;
    true_pass = 0;
}


dunction passet(){
  x = 1;
  while(x == 1){
    test = Number(window.prompt("5桁のパスワードを入力してください。"));
    if(test < 100000 & test >= 10000){
      x = 2;
      key = "pl_pass";
      val = test;
      window.localStorage.setItem(key,val);
    }
  }
  window.location.reload();
}
