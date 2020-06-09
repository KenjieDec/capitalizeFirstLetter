const capitalizeFirstLetter = (thetext) => {
    return string.charAt(0).toUpperCase() + thetext.slice(1);
}
const unCapitalizeFirstLetter = (thetext) => {
    return string.charAt(0).toLowerCase() + thetext.slice(1);
}
const CapitalizeFirst = (thetext) => {
    return string.charAt(0).toUpperCase() + thetext.slice(1);
}
const unCapitalizeFirst = (thetext) => {
    return string.charAt(0).toLowerCase() + thetext.slice(1);
}
const cfl = (thetext) => {
    return string.charAt(0).toUpperCase() + thetext.slice(1);
}
const ucfl = (thetext) => {
    return string.charAt(0).toLowerCase() + thetext.slice(1);
}
const cFL = (thetext) => {
    return string.charAt(0).toUpperCase() + thetext.slice(1);
}
const uCFL = (thetext) => {
    return string.charAt(0).toLowerCase() + thetext.slice(1);
}
module.exports = {
    capitalizeFirstLetter,
    unCapitalizeFirstLetter,
    CapitalizeFirst,
    unCapitalizeFirst,
    cfl,
    ucfl,
    cFL,
    uCFL,
}