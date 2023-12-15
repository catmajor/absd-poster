var frames = animationFrames()
const fish1 = new Fish(DOM_LIST)
fish1.width = 200
fish1.height = 200
fish1.top = 300
const fish2 = new Fish(DOM_LIST)
const fish3 = new Fish(DOM_LIST)
fish3.width = 150
fish3.height = 150
fish3.top = 500
const fish4 = new Fish(DOM_LIST)
fish4.top = 125
const fish5 = new Fish(DOM_LIST)
fish5.top = 800
fish5.height = 110
fish5.width = 110
const fish6 = new Fish(DOM_LIST)
fish6.top = 600
fish6.width = 75
fish6.height = 75
const car = new Car(DOM_LIST)
car.height = 300
car.width = 300
car.bottom = -70
const bubble1 = new Bubble(DOM_LIST, BUBBLE_SVG4)
bubble1.left = 400
bubble1.height = 400
bubble1.width = 400
const bubble2 = new Bubble(DOM_LIST, BUBBLE_SVG1)
bubble2.left = 700
bubble2.height = 200
bubble2.width = 200
bubble2.rotation = 80
const bubble3 = new Bubble(DOM_LIST, BUBBLE_SVG2)
bubble3.left = 300
const bubble4 = new Bubble(DOM_LIST, BUBBLE_SVG3)
const bubble5 = new Bubble(DOM_LIST, BUBBLE_SVG5)
bubble5.left = 800
bubble5.height = 200
bubble5.width = 200
const anims = [
    linearPath(fish1, 0, frames),
    linearPath(fish2, 100, frames),
    linearPath(fish3, 50, frames),
    linearPath(fish4, 75, frames),
    linearPath(fish5, 90, frames),
    linearPath(fish6, 300, frames),
    linearPath(car, 150, frames),
    verticalPathReset(bubble1, 0, frames),
    verticalPathReset(bubble2, 100, frames),
    verticalPathReset(bubble3, 150, frames),
    verticalPathReset(bubble4, 120, frames),
    verticalPathReset(bubble5, 40, frames),
    recordingHelp(DOM_LIST, 0, frames)
]

anims.forEach(anim => frames.addToList(anim))


