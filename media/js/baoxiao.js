$(document).ready(function(){
    $("#baoxiao-submit-btn").click(function(){
        var id = $(this).attr('iid');
        forms = $(".baoxiao-form");
        var serialized_forms = new Array()
        for(var i = 0; i < forms.length; i++) {
            var tmp_form = $(forms[i]).serialize(true);
            serialized_forms.push(tmp_form);
        }
        Dajaxice.bills.baoxiao(submit_Baoxiao_callback, {"forms": serialized_forms, "bid": id});
    });
})

function submit_Baoxiao_callback(data){
    if(data['statu'] == -1) {
        alert("提交成功");
        window.location.href = '/baoxiao/list';
    }
    else alert("Something Wrong");
}

$(document).on('click', '.delect-btn', function(){
    var tr = $(this).closest("tr");
    var form = $("#search-form").serialize(true);
    var bid = tr.attr("iid");
    Dajaxice.bills.delect(delect_callback, {'bid': bid, 'form': form});
})

function delect_callback(data){
    if(data['statu'] == 0) {
        $('.result-table').html(data['html']);
    } else {
        alert('请检查查询关键字');
    }
}