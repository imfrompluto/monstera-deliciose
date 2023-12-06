let images = [
    "monstera.webp",
    "monstera2.avif",
    "monstera3.webp",
    "monstera4.avif",
    "monstera5.webp",
    "monstera6.webp"
]

let image = document.getElementsByTagName("img")[0]
let imgwidth = image.offsetWidth
let imgpart = imgwidth / 6
image.onmousemove = function (event) {
    console.log("%chello","color:blue;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold")
    if (event.offsetX > 0 && event.offsetX < imgpart) {
        image.src = images[0]
    }
    else if (event.offsetX > imgpart && event.offsetX < imgpart * 2) {
        image.src = images[1]
    }
    else if (event.offsetX > imgpart * 2 && event.offsetX < imgpart * 3) {
        image.src = images[2]
    }
    else if (event.offsetX > imgpart * 3 && event.offsetX < imgpart * 4) {
        image.src = images[3]
    }
    else if (event.offsetX > imgpart * 4 && event.offsetX < imgpart * 5) {
        image.src = images[4]
    }
    else {
        image.src = images[5]
    }

}

