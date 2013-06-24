##Lists

Oban gives you a few helpers to style your list elements

####Example

<iframe class="embed" src="examples/lists.html" height="475"></iframe>

[View Full Example](examples/lists.html)

####Less Usage

```css
.list-unstyled {
	.oban-list-unstyled();
}

.list-inline {
	.oban-list-inline();
}
```

####HTML Usage

```html
<ul class="list-inline">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
<ul class="list-unstyled">
	<li>
		Item 1
		<ul>
			<li>SubItem 1</li>
			<li>SubItem 2</li>
			<li>SubItem 3</li>
		</ul>
	</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
```

