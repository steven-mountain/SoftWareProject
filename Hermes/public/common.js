function serializeToJson(form) {
    let result = {};
    // [{name:'account', value:'用户输入的内容'} {name:'password', value:}]
    let f = form.serializeArray();
    f.forEach(item => {
        result[item.name] = item.value;
    });
    return result;
}