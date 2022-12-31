const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

/**
 * In reference to loadText.style.opacity =
 * @param {load} num - The "num" we require is from the variable num.
 * @param {0} in_min - The "in_min" is the start of the load = 0%
 * @param {100} in_max - The "in_max" is the start of the load = 100%
 * @param {1} out_min - Is the opacity. It starts at 1 as that begins the opacity effect - making the text solid
 * @param {0} out_max - Is the opacity. It ends at 0 as that removes the opacity effect - making the text 'invisible'
 */

/**
 * In reference to bg.style.filter =
 * @param {load} num - The "num" we require is from the variable num.
 * @param {0} in_min - The "in_min" is the start of the load = 0%
 * @param {100} in_max - The "in_max" is the start of the load = 100%
 * @param {30} out_min - Is the blur. It starts at 30px as that is the maximum blur effect we would like.
 * @param {0} out_max - Is the blur. It ends at 0 as that removes the blur effect.
 */

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
