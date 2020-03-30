var eleAOS = document.getElementsByClassName("appear-on-scroll");
var repeat = false;
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var elementOffset = vh / 6;
const getOffsetTop = function(element) {
    let offsetTop = 0;
    while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
};
Array.from(eleAOS).forEach(function(element) {
    if (
        document.body.scrollTop + vh - elementOffset > getOffsetTop(element) ||
        document.documentElement.scrollTop + vh - elementOffset > getOffsetTop(element)
    ) {
        element.classList.add("force-appear");
    }
});
window.onscroll = function() {
    Array.from(eleAOS).forEach(function(element) {
        if (
            document.body.scrollTop + vh - elementOffset > getOffsetTop(element) ||
            document.documentElement.scrollTop + vh - elementOffset > getOffsetTop(element)
        ) {
            element.classList.add("appear");
        } else if (repeat) {
            element.classList.remove("appear");
        }
    });
};
