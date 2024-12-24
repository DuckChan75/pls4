// Redirect user to the appropriate tool when clicking a window
document.getElementById('calcWindow').addEventListener('click', () => {
    window.location.href = 'integrate-calc.html';
});

document.getElementById('graphWindow').addEventListener('click', () => {
    window.location.href = 'graph-visualization.html';
});
