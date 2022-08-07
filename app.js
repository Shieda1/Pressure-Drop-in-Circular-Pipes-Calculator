// https://calculator.swiftutors.com/pressure-drop-in-circular-pipes-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pressureDropRadio = document.getElementById('pressureDropRadio');
const pipeFrictionCoefficientRadio = document.getElementById('pipeFrictionCoefficientRadio');
const pipeLengthRadio = document.getElementById('pipeLengthRadio');
const pipeDiameterRadio = document.getElementById('pipeDiameterRadio');
const fluidDensityRadio = document.getElementById('fluidDensityRadio');
const flowVelocityRadio = document.getElementById('flowVelocityRadio');

let pressureDrop;
let pipeFrictionCoefficient = v1;
let pipeLength = v2;
let pipeDiameter = v3;
let fluidDensity = v4;
let flowVelocity = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

pressureDropRadio.addEventListener('click', function() {
  variable1.textContent = '(λ) Pipe Friction Coefficient';
  variable2.textContent = '(L) Pipe Length (mts)';
  variable3.textContent = '(D) Pipe Diameter (cms)';
  variable4.textContent = '(ρ) Fluid Density (kg/l)';
  variable5.textContent = '(w) Flow Velocity (m/s)';
  pipeFrictionCoefficient = v1;
  pipeLength = v2;
  pipeDiameter = v3;
  fluidDensity = v4;
  flowVelocity = v5;
  result.textContent = '';
});

pipeFrictionCoefficientRadio.addEventListener('click', function() {
  variable1.textContent = '(ΔP) Pressure Drop (kPa)';
  variable2.textContent = '(L) Pipe Length (mts)';
  variable3.textContent = '(D) Pipe Diameter (cms)';
  variable4.textContent = '(ρ) Fluid Density (kg/l)';
  variable5.textContent = '(w) Flow Velocity (m/s)';
  pressureDrop = v1;
  pipeLength = v2;
  pipeDiameter = v3;
  fluidDensity = v4;
  flowVelocity = v5;
  result.textContent = '';
});

pipeLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(ΔP) Pressure Drop (kPa)';
  variable2.textContent = '(λ) Pipe Friction Coefficient';
  variable3.textContent = '(D) Pipe Diameter (cms)';
  variable4.textContent = '(ρ) Fluid Density (kg/l)';
  variable5.textContent = '(w) Flow Velocity (m/s)';
  pressureDrop = v1;
  pipeFrictionCoefficient = v2;
  pipeDiameter = v3;
  fluidDensity = v4;
  flowVelocity = v5;
  result.textContent = '';
});

pipeDiameterRadio.addEventListener('click', function() {
  variable1.textContent = '(ΔP) Pressure Drop (kPa)';
  variable2.textContent = '(λ) Pipe Friction Coefficient';
  variable3.textContent = '(L) Pipe Length (mts)';
  variable4.textContent = '(ρ) Fluid Density (kg/l)';
  variable5.textContent = '(w) Flow Velocity (m/s)';
  pressureDrop = v1;
  pipeFrictionCoefficient = v2;
  pipeLength = v3;
  fluidDensity = v4;
  flowVelocity = v5;
  result.textContent = '';
});

fluidDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(ΔP) Pressure Drop (kPa)';
  variable2.textContent = '(λ) Pipe Friction Coefficient';
  variable3.textContent = '(L) Pipe Length (mts)';
  variable4.textContent = '(D) Pipe Diameter (cms)';
  variable5.textContent = '(w) Flow Velocity (m/s)';
  pressureDrop = v1;
  pipeFrictionCoefficient = v2;
  pipeLength = v3;
  pipeDiameter = v4;
  flowVelocity = v5;
  result.textContent = '';
});

flowVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(ΔP) Pressure Drop (kPa)';
  variable2.textContent = '(λ) Pipe Friction Coefficient';
  variable3.textContent = '(L) Pipe Length (mts)';
  variable4.textContent = '(D) Pipe Diameter (cms)';
  variable5.textContent = '(ρ) Fluid Density (kg/l)';
  pressureDrop = v1;
  pipeFrictionCoefficient = v2;
  pipeLength = v3;
  pipeDiameter = v4;
  fluidDensity = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pressureDropRadio.checked)
    result.textContent = `Pressure Drop = ${computePressureDrop().toFixed(2)} kPa`;

  else if(pipeFrictionCoefficientRadio.checked)
    result.textContent = `Pipe Friction Coefficient = ${computePipeFrictionCoefficient().toFixed(2)}`;

  else if(pipeLengthRadio.checked)
    result.textContent = `Pipe Length = ${computePipeLength().toFixed(2)} mts`;

  else if(pipeDiameterRadio.checked)
    result.textContent = `Pipe Diameter = ${computePipeDiameter().toFixed(2)} cms`;

  else if(fluidDensityRadio.checked)
    result.textContent = `Fluid Density = ${computeFluidDensity().toFixed(2)} kg/l`;

  else if(flowVelocityRadio.checked)
    result.textContent = `Flow Velocity = ${computeFlowVelocity().toFixed(2)} m/s`;
})

// calculation

function computePressureDrop() {
  return Number(pipeFrictionCoefficient.value) * (Number(pipeLength.value) / Number(pipeDiameter.value)) * (Number(fluidDensity.value) / 2) * Math.pow(Number(flowVelocity.value), 2);
}

function computePipeFrictionCoefficient() {
  return (Number(pressureDrop.value) * Number(pipeDiameter.value) * 2) / (Number(pipeLength.value) * Number(fluidDensity.value) * Math.pow(Number(flowVelocity.value), 2));
}

function computePipeLength() {
  return (Number(pressureDrop.value) * Number(pipeDiameter.value) * 2) / (Number(pipeFrictionCoefficient.value) * Number(fluidDensity.value) * Math.pow(Number(flowVelocity.value), 2));
}

function computePipeDiameter() {
  return Number(pipeFrictionCoefficient.value) * (Number(pipeLength.value) / Number(pressureDrop.value)) * (Number(fluidDensity.value) / 2) * Math.pow(Number(flowVelocity.value), 2);
}

function computeFluidDensity() {
  return (Number(pressureDrop.value) * Number(pipeDiameter.value) * 2) / (Number(pipeFrictionCoefficient.value) * Number(pipeLength.value) * Math.pow(Number(flowVelocity.value), 2));
}

function computeFlowVelocity() {
  return Math.sqrt((Number(pressureDrop.value) * Number(pipeDiameter.value) * 2) / (Number(pipeFrictionCoefficient.value) * Number(pipeLength.value) * Number(fluidDensity.value)));
}