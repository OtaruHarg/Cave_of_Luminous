var test,key,pl_name,login_year
  ,login_month,login_day;

var last_login_year = 0;
var last_login_month = 0;
var last_login_day = 0;
window.onload = load();



function load(){
  key = "pl_name";
  test = "test";
  //test = window.localStorage.getItem(key);
  if(!test){
    window.location.href = "tutorial.html";
  }else{
    pl_name = test;
  }
  document.querySelector("#pl_name").textContent = test;
  var today = new Date;
  login_year = today.getFullYear();
  login_month = today.getMonth();
  login_day = today.getDate();
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
