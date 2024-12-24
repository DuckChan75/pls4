function plotGraph(func) {
    const xValues = [];
    const yValues = [];

    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        try {
            const y = eval(func.replace(/\^/g, '**').replace(/x/g, `(${x})`));
            yValues.push(y);
        } catch {
            yValues.push(null); // Handles invalid functions gracefully
        }
    }

    Plotly.newPlot('graph', [{
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines',
        line: { shape: 'spline' }
    }], {
        title: 'Graph of the Function',
        xaxis: { title: 'x' },
        yaxis: { title: 'f(x)' }
    });
}

document.getElementById('graphForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const func = document.getElementById('functionInput').value;
    plotGraph(func);
});
