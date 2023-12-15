var frames = animationFrames();

const swimmer1 = new Swimmer(DOM_LIST)
swimmer1.width = 400
swimmer1.height = 400
swimmer1.top = 250
const swimmer2 = new Swimmer(DOM_LIST, "blue")
swimmer2.width = 350
swimmer2.height = 350
swimmer2.top = 0
const swimmer3 = new Swimmer(DOM_LIST)
swimmer3.width = 300
swimmer3.height = 300
swimmer3.top = 800
const swimmer4 = new Swimmer(DOM_LIST, "blue")
swimmer4.width = 250
swimmer4.height = 250
swimmer4.top = 600
const anims = [
    linearPath(swimmer1, 0, frames),
    linearPath(swimmer2, 100, frames),
    linearPath(swimmer3, 120, frames),
    linearPath(swimmer4, 60, frames),
    recordingHelp(DOM_LIST),
]

anims.forEach(anim => frames.addToList(anim))