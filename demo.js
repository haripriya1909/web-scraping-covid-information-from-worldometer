function temp() {
    console.log("Hello");
    return true;
}
let rval = temp();
console.log(rval);
console.log(temp());
if (temp()) {
    console.log(1);
}