var test,key,pl_name,login_year
  ,login_month,login_day;
var eria = ["ゼロの地","ホールⅠ","ホールⅡ","ホールⅢ","ホールⅣ","ホールⅤ"];
var last_login_year = 0;
var last_login_month = 0;
var last_login_day = 0;
window.onload = load();

//0.00001 = 1m



function success(pos){
  eria_y = pos.coords.latitude;
  eria_x = pos.coords.longitude;
  loops = 0;
  while(eria.length - 1 >= loops){
    loops = loops + 1;
    kyori_x = Math.abs(hole_x[loops] - eria_x);
    kyori_y = Math.abs(hole_y[loops] - eria_y)
    kyori = kyori_x**2 + kyori_y**2;
    kyori = Math.sqrt(kyori);
    if(kyori <= 0.00010){
      check_eria[loops] = "login";
      login(loops);
    }
  }
}

function login(x){
}

function fail(pos){
  alert('位置情報の取得に失敗しました。エラーコード：');
}

function eria_check(){
  navigator.geolocation.getCurrentPosition(success,fail);
}

function new_login(){
  last_login_year = login_year;
  last_login_month = login_month;
  last_login_day = login_day;
  loops = 0;
  while(eria.length - 1 >= loops){
    loops = loops + 1;
    check_eria[loops] = "yet";
  }
}

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
    new_login();
  }else if(login_year == last_login_year){
    if(login_month > last_login_month){
      new_login();
    }else if(login_month == last_login_month){
      if(login_day > last_login_day){
        new_login();
      }
    }
  }
  document.querySelector("#last_login").textContent = last_login_year+"/"+last_login_month+"/"+last_login_day;
}
