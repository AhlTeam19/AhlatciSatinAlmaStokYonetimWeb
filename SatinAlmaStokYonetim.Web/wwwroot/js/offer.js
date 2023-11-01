
function changeOption() {

}
function editOffer() {

}
function createOffer() {

}
function deleteOffer() {

}
function getAllOffer() {

}

function getAllRequests() {

}


function createRequestTable() {

    html += `<a href="javascript:void(Goster());" class="text-body"></a>`;
    html += `<div class="d-flex mt-1 p-1"></div>`;
    html += `<div class="avatar-sm d-table"></div>`;
    html += `<span class="avatar-title bg-info-lighten rounded-circle text-info"></span>`;
    html += `<i class="uil uil-mountains font-24"></i>`;
    html += `</span>`;
    html += `</div>`;
    html += `<div class="ms-2"></div>`;
    html += `<h5 class="mt-0 mb-0">Çorum Gaz</h5>`;
    html += `<span class="badge badge-success-lighten ms-1">+ Teklif Var</span>`;
    html += `<p class="mb-0 text-muted font-12">Talep No: T02111452</p>`;
    html += `</div>`;
    html += `</div>`;
    html += `</a>`;
}


$(document).ready(function () {
    getAllRequests();
});