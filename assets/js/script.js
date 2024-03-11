const draggableElement = document.querySelector('.active');

let offsetX = 0, offsetY = 0, isDragging = false;

draggableElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = event.clientY - draggableElement.getBoundingClientRect().top;
    draggableElement.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    draggableElement.style.left = x + 'px';
    draggableElement.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggableElement.style.cursor = 'grab';
});