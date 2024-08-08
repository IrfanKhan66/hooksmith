const renameFromCamelToKebab = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const renameFromKebabToCamel = (str) => {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

module.exports = {
    renameFromCamelToKebab,
    renameFromKebabToCamel
}