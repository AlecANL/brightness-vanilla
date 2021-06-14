const $sliders = document.querySelectorAll('.input-range');
const $sliderBgColor = document.getElementById('bg_color');
const $sliderBlur = document.getElementById('blur');
const $sliderSpace = document.getElementById('space');
const $cardControl = document.getElementById('controls-content');
const $document = document.querySelector(':root');

function getVarialbesCSS(variable) {
  return getComputedStyle($document).getPropertyValue(variable);
}

const orangeColor = getVarialbesCSS('--just-orange');
const sliderColor = getVarialbesCSS('--slider-color');

function handleSlider(element, value) {
  console.log(value);
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

// $sliders.forEach(slider => {
//   slider.addEventListener('input', function () {
//     const value = (
//       ((this.value - this.min) / (this.max - this.min)) *
//       100
//     ).toFixed(0);

//   });
// });

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
  console.log(rgba);
}

function handleChangeColor() {
  const value = (
    ((this.value - this.min) / (this.max - this.min)) *
    100
  ).toFixed(0);
  console.log(value);

  handleSlider(this, value);
  chancheColor(value);
}
$sliderBgColor.addEventListener('input', handleChangeColor);
