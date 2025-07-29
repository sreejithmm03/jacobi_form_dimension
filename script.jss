function dim_jacobi(k, m) {
  if (k < 2 || m < 1) return 0;
  let dim = Math.floor((k - 1) * m / 12) + 1;
  return dim;
}

function calculate() {
  const k = parseInt(document.getElementById("weight").value);
  const m = parseInt(document.getElementById("index").value);
  const result = dim_jacobi(k, m);
  document.getElementById("result").innerHTML = `<p>Dimension: <b>${result}</b></p>`;
  plotDim(k);
}

function plotDim(k) {
  let x = [], y = [];
  for (let m = 1; m <= 30; m++) {
    x.push(m);
    y.push(dim_jacobi(k, m));
  }
  Plotly.newPlot('plot', [{
    x: x,
    y: y,
    type: 'scatter',
    mode: 'lines+markers',
    name: `Weight ${k}`
  }], {
    title: `Dimension vs Index for k = ${k}`,
    xaxis: { title: 'Index (m)' },
    yaxis: { title: 'Dimension' }
  });
}

