const $sliders = document.querySelectorAll('.input-range');
const $sliderBgColor = document.getElementById('bg_color');
const $sliderBlur = document.getElementById('blur');
const $sliderRadius = document.getElementById('radius');
const $cardControl = document.getElementById('controls-content');
const $document = document.querySelector(':root');

function getVarialbesCSS(variable) {
  return getComputedStyle($document).getPropertyValue(variable);
}

const orangeColor = getVarialbesCSS('--just-orange');
const sliderColor = getVarialbesCSS('--slider-color');

function handleSlider(element, value) {
  element.style.background = `
        linear-gradient(
            to right,
            ${orangeColor} 0%,
            ${orangeColor} ${value}%,
            ${sliderColor} ${value}%,
            ${sliderColor} 100%
        )
    `;
}

function chancheColor(data) {
  const rgba = `rgba(${data},${data},${data},0.972)`;
  const styles = [
    'color: coral',
    `background: ${rgba}`,
    'font-size: 16px',
    'padding: 5px',
  ].join(';');

  $document.style.setProperty('--currentBackground', rgba);
  console.log('%cHello World', styles);
}

function handleChangeColor() {
  const value = (
    ((this.value - this.min) / (this.max - this.min)) *
    100
  ).toFixed(0);

  handleSlider(this, value);
  chancheColor(value);
}
function changeBlur(value) {
  const parsedValue = (value / 4).toFixed(0);
  $document.style.setProperty('--currentBlur', `${parsedValue}px`);
}

function handleChangeBlur() {
  handleSlider(this, this.value);
  changeBlur(this.value);
}

function changeRadius(value) {
  $document.style.setProperty('--currentRadius', `${value}%`);
}

function handleChangeRadius() {
  handleSlider(this, this.value);
  changeRadius(this.value);
}

$sliderBgColor.addEventListener('input', handleChangeColor);
$sliderBlur.addEventListener('input', handleChangeBlur);
$sliderRadius.addEventListener('input', handleChangeRadius);
