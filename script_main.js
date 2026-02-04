window.onload = load();

function load(){
  key = "pl_name";
  test = window.localStorage.getItem(key);
  if(!test){
    window.location.href = "tutorial.html";
  }else{
    pl_name = test;
  }
  
}
