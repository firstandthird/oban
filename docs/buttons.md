##Buttons

The buttons module provides a quick way to make elegate flat and gradient buttons.

####Example

<iframe class="embed" src="examples/buttons.html"></iframe>

[View Full Example](examples/buttons.html)

####Less Usage

```css
.btn-flat {
	.oban-button-flat(@bgColor: #333, @textColor: #fff, @hoverBgColor: #336699, @hoverTextColor: #fff);
}

.btn-fancy {
	.oban-button-gradient(@bgColor: #fff, @textColor: #333, @hoverBgColor: #666, @hoverTextColor: #fff);
}
```

####HTML Usage

```html
<button class="btn-flat">Flat Button</button>
<button class="btn-fancy">Gradient Button</button>
<a class="btn-fancy">Fancy Button on an anchor tag</a>
```

