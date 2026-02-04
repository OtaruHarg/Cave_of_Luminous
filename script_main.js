window.onload = load();

function load(){
  key = "pl_name";
  test = window.localStorage.getItem(key);
  if(!test){
    window.location.href = "tutorial.html";
  }else{
    pl_name = test;
  }
  login_year = date.getFullYear();
  login_month = date.getMonth();
  login_day = date.getDate();
  if(login_year > last_login_year){
    last_login_year = login_year;
  }
}


