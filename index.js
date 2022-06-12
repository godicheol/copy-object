function copyObject1(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function copyObject2(obj) {
    var keys = Object.keys(obj);
    var i;
    var o = {};

    for (i = 0; i < keys.length; i++) {
        if (obj.hasOwnProperty(keys[i])) {
            o[keys[i]] = obj[keys[i]];
        }
    }
    return o;
}