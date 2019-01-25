# AnimationControl.js

A lightweight Javascript package providing fine-grained control of CSS animation timing.  Useful for greater control over timing and duration of [Animate.css](https://daneden.github.io/animate.css/) classes or similar.

## How to Use

The `animation-control.js` distributable can be found in the `/dist` directory of this repository

Include via `<script>` tag just before the closing `</body>` tag on a web page:

* `	<script type="text/javascript" src="path/animation-control.js"></script>`

By default, AnimationControl.js will detect delay and duration classes in the [Animate.css](https://daneden.github.io/animate.css/) format of `.delay-100ms` or `.duration-2s`, parse the timing value and apply the appropriate styles to the html element.

## Advanced

If you need to get timing values from classes with prefixes other than `.delay-` or `.duration-`, you can configure Animation Control as follows:

```javascript
	<script type="text/javascript" src="path/animation-control.js"></script>
	<script>
		var classPrefix = "custom-delay-prefix-";
		var targetAttributes = [ "animation-delay", "-webkit-animation-delay" ];
		animationControl.applyTimingValues( classPrefix, targetAttributes );
	</script>
```

## Compiling

* `npm run watch` Watch and re-compile on changes.
* `npm run build` Generate a minified, production-ready build.

## License

AnimationControl.js is licensed under the MIT license (http://opensource.org/licenses/MIT)