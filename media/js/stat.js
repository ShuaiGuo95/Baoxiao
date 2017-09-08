$('.datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd'
});

$("#search-submit-btn").click(function(){
    var form = $("#search-form").serialize(true);
    Dajaxice.statistic.search(search_callback, {"form": form});
});

function search_callback(data){
    if(data['statu'] == 0) {
        $('.result-table').html(data['html']);
    } else {
        alert('请检查输入');
    }
}

$('#stat-submit-btn').click(function(){
    var form = $("#search-form").serialize(true);
    Dajaxice.statistic.stat(stat_callback, {"form": form});
})

function stat_callback(data){
    if(data['statu'] == 0) {
        $('.result-table').html(data['html']);
    } else {
        alert('请检查输入');
    }
}

$(document).on('click', '.pay-btn', function(){
    var tr = $(this).closest("tr");
    var form = $("#search-form").serialize(true);
    var bid = tr.attr("iid");
    Dajaxice.statistic.pay(pay_callback, {'bid': bid, 'form': form});
})

function pay_callback(data){
    if(data['statu'] == 0) {
        $('.result-table').html(data['html']);
    } else {
        alert('请检查查询关键字');
    }
}

$(document).on('click', '.accept-btn', function(){
    var tr = $(this).closest("tr");
    var form = $("#search-form").serialize(true);
    var bid = tr.attr("iid");
    Dajaxice.statistic.accept(accept_callback, {'bid': bid, 'form': form});
})

function accept_callback(data){
    if(data['statu'] == 0) {
        $('.result-table').html(data['html']);
    } else {
        alert('请检查查询关键字');
    }
}

$(document).on('click', '.delect-btn', function(){
    var tr = $(this).closest("tr");
    var form = $("#search-form").serialize(true);
    var bid = tr.attr("iid");
    Dajaxice.statistic.delect(delect_callback, {'bid': bid, 'form': form});
})

function delect_callback(data){
    if(data['statu'] == 0) {
        $('.result-table').html(data['html']);
    } else {
        alert('删除成功');
    }
}