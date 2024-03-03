type EventNames = 'click' | 'scroll' | 'mousemove';
type EvnetNums = 1 | 2 | 3;

function handleEvent(ele: Element, event: EventNames) {
    // do something
}

const element = document.getElementById('hello');
if (element) {
    handleEvent(element, 'scroll');
} else {
    console.error('Element does not exist!');
}

const element2 = document.getElementById('world');
if (element2) {
    handleEvent(element2, 'mousemove');
} else {
    console.error('Element does not exist!');
}