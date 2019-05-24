// This is a function to get datas from json in vanilla js.

function ajax_get(url, callback){
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function(){
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
      // console.log('responseText: ' + xmlHttp.responseText);
      try {
        var yourData = JSON.parse(xmlHttp.responseText);
      } catch(err){
        console.log(err.message + "in" + xmlHttp.responseText);
        return;
      }
      callback(yourData)
    }
  };

  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}



ajax_get('../path/your.json', function(yourData){

});

