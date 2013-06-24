##Arrows

The arrow mixins allow you do add ticks to any side of a block level element.  They are great for Tooltips.

####Example

<iframe class="embed" src="examples/arrows.html"></iframe>

[View Full Example](examples/arrows.html)

####Less Usage

```css
.arrow-top {
	//.oban-arrow-top(@color, @size: 10px);
	.oban-arrow-top(red);
}
.arrow-right {
	.oban-arrow-right(@color, @size: 10px);
}
.arrow-left {
	.oban-arrow-bottom(@color, @size: 10px);
}
.arrow-right {
	.oban-arrow-left(@color, @size: 10px);
}
```

####HTML Usage

```html
<div class="arrow-top">This has an up arrow</div>
<div class="arrow-right">This has a right arrow</div>
<div class="arrow-bottom">This has a down arrow</div>
<div class="arrow-left">This has a left arrow</div>
```
