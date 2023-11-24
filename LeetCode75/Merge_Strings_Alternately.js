const find_max_length = (str1, str2) => {
    if (str1.length < str2.length) {return str2.length;}
    else if (str1.length > str2.length) {return str1.length;}
    return str1.length;
}

const mergeAlternately = (str1, str2) => {
    const max = find_max_length(str1, str2);
    let result = "";
    for (let i = 0; i < max; i++) {
        if (i < str1.length) {
            result += str1[i];
        }
        if (i < str2.length) {
            result += str2[i];
        }
    }
    return result;
}

