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
    last_login_month = login_month;
    last_login_day = login_day;
  }else if(login_year == last_login_year){
    if(login_month > last_login_month){
        last_login_year = login_year;
        last_login_month = login_month;
        last_login_day = login_day;
    }else if(login_month == last_login_month){
      if(login_day > last_login_day){
        last_login_year = login_year;
        last_login_month = login_month;
        last_login_day = login_day;
      }
    }
  }
  document.querySelector("#last_login").textContent = last_login_year+"/"+last_login_month+"/"+last_login_day;
}


