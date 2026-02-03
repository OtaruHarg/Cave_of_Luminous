var x = 0,test;

window.onload = load();

function load(){
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
}
