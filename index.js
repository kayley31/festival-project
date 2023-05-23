const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 5;

    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('.exit-intent-popup').classList.add('visible');
    }
};

setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
}, 5_000);

const exit = e => {
    if (e.target.className === 'close') {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};

document.querySelector('.exit-intent-popup').addEventListener('click', exit);

