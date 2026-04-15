var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();

xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dataset = JSON.parse(this.responseText);
        addNewData(dataset);
    }
};

function addNewData(dataset) {
    var myTable = document.getElementById("csie");
    dataset.forEach(function(data, index) {
        var row = myTable.insertRow(-1);
        row.insertCell(0).innerHTML = data['title'];
        
        if (data['showInfo'] && data['showInfo'].length > 0) {
            row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
            row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
        } else {
            row.insertCell(1).innerHTML = "無資訊";
            row.insertCell(2).innerHTML = "無資訊";
        }
    });
}

function delOldData() {
    var myTable = document.getElementById("csie");
    
    var deleteTimer = setInterval(function() {
        if (myTable.rows.length > 1) {
            myTable.deleteRow(1);
        } else {
            clearInterval(deleteTimer);
            alert("資料已全數刪除！");
        }
    }, 50);
}