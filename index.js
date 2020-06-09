const capitalizeFirstLetter = (thetext) => {
    return thetext.charAt(0).toUpperCase() + thetext.slice(1);
}
const unCapitalizeFirstLetter = (thetext) => {
    return thetext.charAt(0).toLowerCase() + thetext.slice(1);
}
const CapitalizeFirst = (thetext) => {
    return thetext.charAt(0).toUpperCase() + thetext.slice(1);
}
const unCapitalizeFirst = (thetext) => {
    return thetext.charAt(0).toLowerCase() + thetext.slice(1);
}
const cfl = (thetext) => {
    return thetext.charAt(0).toUpperCase() + thetext.slice(1);
}
const ucfl = (thetext) => {
    return thetext.charAt(0).toLowerCase() + thetext.slice(1);
}
const cFL = (thetext) => {
    return thetext.charAt(0).toUpperCase() + thetext.slice(1);
}
const uCFL = (thetext) => {
    return thetext.charAt(0).toLowerCase() + thetext.slice(1);
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