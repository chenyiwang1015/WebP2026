var allData = [];
var filteredData = [];
var currentPage = 1;
const pageSize = 10;

var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        allData = JSON.parse(this.responseText);
        filteredData = allData;
        renderTable();
    }
};

function handleSearch() {
    var keyword = document.getElementById("searchInput").value.toLowerCase();
    filteredData = allData.filter(function(item) {
        return item.title.toLowerCase().indexOf(keyword) !== -1;
    });
    currentPage = 1;
    renderTable();
}

function renderTable() {
    var myTableBody = document.getElementById("csie").getElementsByTagName('tbody')[0];
    myTableBody.innerHTML = ""; 
    var totalPages = Math.ceil(filteredData.length / pageSize) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    var start = (currentPage - 1) * pageSize;
    var end = start + pageSize;
    var pageData = filteredData.slice(start, end);

    pageData.forEach(function(data) {
        var row = myTableBody.insertRow(-1);
        row.insertCell(0).innerHTML = data['title'];
        
        var location = (data['showInfo'] && data['showInfo'][0]) ? data['showInfo'][0]['location'] : "無資訊";
        row.insertCell(1).innerHTML = location;
    });

    document.getElementById("pageInfo").innerHTML = currentPage + " / " + totalPages + " 頁";
}

function changePage(direction) {
    var totalPages = Math.ceil(filteredData.length / pageSize) || 1;
    
    var newPage = currentPage + direction;

    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderTable();
    }
}