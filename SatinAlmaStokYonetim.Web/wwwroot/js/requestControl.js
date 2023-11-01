let requests = [];
function change() {

}

function edit() {

}

function getAllRequest() {

    var data = {
        CompanyId: parseInt(CID),
        DepartmentId: parseInt(DID)
    };

    Post('https://localhost:7172/Request/GetbyCompanyId', data, (data) => {
        requests = data;
        createRequestsTable(requests);
    });
}



function readRequest(requestId) {

    var data = {
        CompanyId: parseInt(CID),
        DepartmentId: parseInt(DID)
    };

    Post('https://localhost:7172/Request/GetbyCompanyId', data, (data) => {
        requests = data;
        (requests);
    });
}

function createRequestsTable(data) {

    html = ``;
    for (var i = 0; i < data.length; i++) {
        html += `<a href="javascript:void(readRequest(${data[i].id}));" class="text-body">`;
        html += `<div class="d-flex mt-1 p-1">`;
        html += `<div class="avatar-sm d-table">`;
        html += `<span class="avatar-title bg-info-lighten rounded-circle text-info">`;
        html += `<i class="uil uil-mountains font-24"></i>`;
        html += `</span>`;
        html += `</div>`;
        html += `<div class="ms-2">`;
        html += `<h5 class="mt-0 mb-0">${CNA}</h5>`;
        html += `<span class="badge badge-danger-lighten ms-1">+ Onay Bekliyor</span>`;
        html += `<p class="mb-0 text-muted font-12">Talep No: ${data[i].requestNo}</p>`;
        html += `</div>`;
        html += `</div>`;
        html += `</a>`;
    }
    $("#divRequests").html(html);
}

$("#searchRequest").on("keyup", function () {
    const find = $(this).val().toLowerCase();
    const result = requests.filter(request => request.requestNo.toLowerCase().includes(find));
    createRequestsTable(result);
});

$(document).ready(function () {
    getAllRequest();
});