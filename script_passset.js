var x = 0,test;

window.onload = load();

function load(){
  x = 1;
  while(x == 1){
    test = Number(window.prompt("6桁のパスワードを入力してください。"));
    if(test < 1000000 & test >= 100000){
      x = 2;
      key = "pl_pass";
      val = test;
      window.localStorage.setItem(key,val);
    }
  }
}
