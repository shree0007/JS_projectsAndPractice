//Event Propagation: 3 phases -- event capturing, target, event bublling
// event capturing: this phase starts from the root and travels all the way to target and then to the bubbling phase which travels back up from the target to the root. bubbling is oposite of capturing
//true represents capturing and false/default represents bubbling
//e.stopPropagation() stops propagation
//e.preventDefault(), prevents the default behiviour for instance when we click button with anchor tag, it try to redirect to somewhere that results in quick refreshing of page.
//{once:true} will run event just for one time

window.addEventListener("click", function () {
    console.log('Window')
}, false)

document.addEventListener("click", function () {

    console.log('Document')
}, false)


document.querySelector('.div2').addEventListener("click", function () {
    // e.stopPropagation();
    console.log('DIV 2');
}, { once: true })


document.querySelector('.div1').addEventListener("click", function () {
    console.log('DIV 1');
}, false)

document.querySelector(".button").addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.innerText = 'clicked')
}, false)
























