//芸工の緯度
var latitude;
//芸工の経度
var longitude;
//芸工の緯度
var geikoLat = 35.181382;
//芸工の経度
var geikoLng = 136.947885;

//ユーザーの現在の位置情報を取得
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



//ユーザーの現在の位置情報を取得
function successCallback(position) {
	console.log('成功');
	//緯度
	lat = position.coords.latitude;
	//経度
	lng = position.coords.longitude;

  var dis = getDistance(lat, lng, geikoLat, geikoLng);
  console.log(dis+'km');

  if(dis < 0.05){
    console.log('出席おめ');
  }else if(dis < 1){
    console.log('あと少しがんば');
  }else{
    console.log('てめぇまだ家やろ');
  }

}

//位置情報が取得できない
function errorCallback(error) {
  var err_msg = "";
  switch(error.code)
  {
    case 1:
      err_msg = "位置情報の利用が許可されていません";
      break;
    case 2:
      err_msg = "デバイスの位置が判定できません";
      break;
    case 3:
      err_msg = "タイムアウトしました";
      break;
  }
  console.log(err_msg);
}

function radians(deg){
  return deg * Math.PI / 180;
}

function getDistance(lat1, lng1, lat2, lng2) {
  return 6378.14 * Math.acos(Math.cos(radians(lat1))* 
    Math.cos(radians(lat2))*
    Math.cos(radians(lng2)-radians(lng1))+
    Math.sin(radians(lat1))*
    Math.sin(radians(lat2)));
}