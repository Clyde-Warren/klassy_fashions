const carousal = document.querySelector(".carousal");

let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
}

const dragging = (e) => {
    if(! isDragStart) return
    carousal.scrollLeft = e.pageX;
    e.preventDefault();

}

const dragStop = () => {
    isDragStart = false;
}
carousal.addEventListener("mousemove", dragging);
carousal.addEventListener("mousedown", dragStart);
carousal.addEventListener("mouseup", dragStop);