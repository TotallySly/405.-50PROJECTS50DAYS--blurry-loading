## 404.- 50 Projects 50 Days - Hidden Search Widget

### What was the project about?

The project is part of the 50 Projects in 50 Days with Brad Travesy via Udemy. The course is a code-a-long to further cement skills used within HTML, CSS, and Vanilla JavaScript.

This particular project was introducing a blurred loading screen. When the page loads, the background image starts of blurred and the text opaque. As the page 'loads', the image becomes unblurred and the loading text becomes 'invisible'.

[Blurry Loading Screen](https://totallysly.github.io/405.-50PROJECTS50DAYS--blurry-loading/)

#### CSS

The CSS was rather simple. However, it took on the calc function for creating the sizing for the Width and Height. I have not used this function personally, as maths is not one of my strong points. I understand how to use it - but my skill in Maths is rather lacking.

#### JavaScript

The JavaScript was somewhat complicated at first. The whole project centered around an already created function which we sourced from [Stack Overflow](https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers).

With the function being:

    const  scale = (num, in_min, in_max, out_min, out_max) => {
    	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }

This seemed complex at first, but the tutorial gave a simple breakdown of how this function works, paired with the JavaScript already being used.

    const  loadText = document.querySelector('.loading-text')
    const  bg = document.querySelector('.bg')

    let  load = 0
    let  int = setInterval(blurring, 30)

    function  blurring() {
    	load++
    		if (load > 99) {
    			clearInterval(int)
    	}

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }

> In reference to loadText.style.opacity =
> @param {load} num - The "num" we require is from the variable num.

    @param  {0}  in_min - The "in_min" is the start of the load = 0%
    @param  {100}  in_max - The "in_max" is the start of the load = 100%
    @param  {1}  out_min - Is the opacity. It starts at 1 as that begins the opacity effect - making the text solid
    @param  {0}  out_max - Is the opacity. It ends at 0 as that removes the opacity effect - making the text 'invisible'

> In reference to bg.style.filter =

    @param  {load}  num - The "num" we require is from the variable num.
    @param  {0}  in_min - The "in_min" is the start of the load = 0%
    @param  {100}  in_max - The "in_max" is the start of the load = 100%
    @param  {30}  out_min - Is the blur. It starts at 30px as that is the maximum blur effect we would like.
    @param  {0}  out_max - Is the blur. It ends at 0 as that removes the blur effect.

> Written with [StackEdit](https://stackedit.io/).
