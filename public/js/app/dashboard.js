const notFoundCard = '<div class="text-center w-100 py-6">No data found</div>';

$(document).on('click', '#newTransactionSave', function(){
    saveTransactionData()
})

$(document).on('show.bs.modal', '#newTransactionModal', async function (e) {
    $('#transactionInputType').val('create');
    let parent = $(e.relatedTarget).data('parent');
    let id = $(e.relatedTarget).data('id');
    if (parent) {
        $('#newTransactionParent').val(parent);
    } else {
        $('#newTransactionParent').val('');
    }
    if (id) {
        $('#newTransactionId').val(id);
        let token = localStorage.getItem('token');
        let body = {
            "id": id
        };
        if (parent) {
            body.parent = parent;
        }
        let settings = {
            "url": "/api/app/getTransaction",
            "method": "POST",
            "timeout": 0,
            "headers": {
            "Content-Type": "application/json",
            "token": token
            },
            "data": JSON.stringify(body),
        };
        let result = await sentRequest(settings);
        if (result.responseCode != 200) {
            showNotif(result);
        } else if (result.data.length != 1) {
            showNotif({
                'responseCode': '500'
            });
        } else {
            let data = result.data[0];
            $('#newTransactionTitle').val(data.title);
            $('#newTransactionAmount').val(data.amount);
            $('#newTransactionType').val(data.type);
            $('#newTransactionDate').val(data.date);
            $('#transactionInputType').val('update');  
        }
    } else {
        $('#newTransactionId').val('');
        $('#newTransactionTitle').val('');
        $('#newTransactionAmount').val(0);
        $('#newTransactionType').val('');
        $('#newTransactionDate').val(getTodayDate());    
    }
});

$(document).on('click', '.deleteTransaction', async function(){
    let token = localStorage.getItem('token');
    let body = {
        id: $(this).data('id'),
    }
    let settings = {
        "url": "/api/app/deleteTransaction",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify(body),
    };
    confirmDelete($(this).data('title'), settings, getTransaction);
})

async function saveTransactionData(){
    let token = localStorage.getItem('token'),
    id = $('#newTransactionId').val(),
    parent = $('#newTransactionParent').val(),
    title = $('#newTransactionTitle').val(),
    amount =  $('#newTransactionAmount').val(),
    type = $('#newTransactionType').val(),
    date = $('#newTransactionDate').val(),
    url = "/api/app/saveTransaction",
    inputType = $('#transactionInputType').val();
    if (inputType == 'update') {
        url = "/api/app/updateTransaction"
    }
    let body = {
        title: title,
        amount: amount,
        type: type,
        date: date,
        status: '1'
    }
    if (id) {
        body.id = id;
    }
    if (parent) {
        body.parent = parent;
    }
    console.log('body::', body);
    // console.log('token::', token);
    let settings = {
        "url": url,
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify(body),
    };
    let result = await sentRequest(settings);
    showNotif(result);
    if (result.responseCode == 200) {
        $('#newTransactionModal').modal('toggle');
        getTransaction();
    }
}

async function getTransaction(){
    const transactionCard = $('#transactionCard');
    transactionCard.html('');
    let token = localStorage.getItem('token');
    let settings = {
        "url": "/api/app/getTransaction",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify({}),
    };
    let result = await sentRequest(settings);
    if (result.responseCode != 200) {
        showNotif(result);
    }
    if (result.data.length < 1) {
        transactionCard.append(notFoundCard);
    } else {
        for(let data of result.data){
            // console.log('data::', data);
            let tbody = `<tr>
                <th>
                    Amount
                </th>
                <td class="${(data.type == 'cr' ? 'text-success' : 'text-danger')}">
                    ${formatAmount(data.amount + '', 'Rp. ')}
                </td>
            </tr>`;
            if (data.children.length < 1) {
                tbody += `<tr>
                    <td colspan="3">
                        No data found
                    </td>
                </tr>`
            } else {
                for(let children of data.children){
                    tbody += `<tr>
                    <td>
                        ${children.title}
                    </td>
                    <td class="${(children.type == 'cr' ? 'text-success' : 'text-danger')}">
                        ${formatAmount(children.amount + '', 'Rp. ')}
                    </td>
                    <td>
                        <a href="#!" class="mx-2 text-app-grey" data-toggle="modal" data-target="#newTransactionModal" data-id="${children.id}" data-parent="${data.id}"><i class="fas fa-pencil-alt"></i></a>
                        <a href="#!" class="mx-2 text-app-grey deleteTransaction" data-id="${children.id}" data-title="${children.title}"><i class="fas fa-trash-alt"></i></a>
                    </td>
                    </tr>`;
                }
            }
            // console.log('volume::', data.amount, data.volume);
            let volume = data.amount + data.volume;
            let tfoot = `<tr>
                <th scope="col">
                    Volume 
                </th>
                <td colspan="2" class="${(volume > 0 ? 'text-success' : 'text-danger')}">
                    ${formatAmount(volume + '', 'Rp. ')}
                </td>
            </tr>`
            let content = `<div class="col-xl-4">
                <div class="card">
                <div class="card-header border-0">
                    <div class="row align-items-center">
                    <div class="col">
                        <h4 class="mb-0">${data.title}</h4>
                    </div>
                    <div class="col text-right">
                        <a href="#!" class="btn btn-sm btn-neutral text-app-dark" data-toggle="modal" data-target="#newTransactionModal" data-parent="${data.id}"><i class="fas fa-plus"></i></a>
                        <a href="#!" class="btn btn-sm btn-neutral text-app-dark" data-toggle="modal" data-target="#newTransactionModal" data-id="${data.id}"><i class="fas fa-pencil-alt"></i></a>
                        <a href="#!" class="btn btn-sm btn-neutral text-app-dark deleteTransaction" data-id="${data.id}" data-title="${data.title}"><i class="fas fa-trash-alt"></i></a>
                    </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tbody}
                        ${tfoot}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>`
            transactionCard.append(content);
        }
    }
}

