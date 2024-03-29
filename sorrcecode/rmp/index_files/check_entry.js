
function check_date_entry_fields(form, prefixes, check_time_too, required) {
    var seen = {}

    if (check_time_too == undefined) {
        check_time_too = false;
    }
    
    if (required == undefined) {
        required = false;
    }
    
    for (var i = 0; i < form.elements.length; i++) {
        var objj = form.elements[i];
        for (var j = 0; j < prefixes.length; j++) {
            prefix = objj.name.substr(0, prefixes[j].length)
            if (prefix == prefixes[j]) {
                index_pos_start = objj.name.indexOf('[') + 1;
                index_pos_end = objj.name.indexOf(']');
                index = objj.name.substring(index_pos_start,
                    index_pos_end);
                
                if (seen[index]) {
                    continue;
                }

                seen[index] = 1;
                
                if (! _validate_entry_fields_date(form, prefix, index, required)) {
                    alert("Invalid date specified.");
                    return false;
                }
                if (check_time_too) {
                    if (! _validate_entry_fields_time(form, prefix, index, required)) {
                        alert("Invalid time specified.");
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

function _validate_entry_fields_date(form, prefix, index, required) {
    var y = form.elements[prefix + '_year' + '[' + index + ']'];
    var m = form.elements[prefix + '_mon' + '[' + index + ']'];
    var d = form.elements[prefix + '_day' + '[' + index + ']'];

    if (!required && 
        (y.value == "yyyy") && (m.value == "mm") && (d.value == "dd")) {
        return true;
    }
    
    var yv = parseInt(y.value, 10);
    var mv = parseInt(m.value, 10) - 1;
    var dv = parseInt(d.value, 10);

    if ((yv < 1) || (yv > 9999)) {
        return false;
    }

    if ((mv < 0) || (mv > 11)) {
        return false;
    }

    if ((dv < 1) || (mv > 31)) {
        return false;
    }

    return true;

    //var dte = new Date(yv, mv, dv);
    //if (dte) {
    //    if ((yv == dte.getFullYear()) &&
    //       (mv == dte.getMonth()) &&
    //       (dv == dte.getDate())) {
    //        return dte;
    //    }
    //}
    //return false;
}

function _validate_entry_fields_time(form, prefix, required) {
    var h = form.elements[prefix + '_hour' + '[' + index + ']'];
    var m = form.elements[prefix + '_min' + '[' + index + ']'];
    var s = form.elements[prefix + '_sec' + '[' + index + ']'];

    if (!required && 
        (h.value == "hh") && (m.value == "mm") && (s.value == "ss")) {
        return true;
    }
    
    var hv = parseInt(h.value, 10);
    var mv = parseInt(m.value, 10);
    var sv = parseInt(s.value, 10);

    if ((hv > 23) || (hv < 0)) {
        return false;
    }

    if ((mv > 59) || (mv < 0)) {
        return false;
    }

    if ((sv > 59) || (sv < 0)) {
        return false;
    }

    return true;
}
