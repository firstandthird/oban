##Bar

The bar module gives you a quick way to make a nice gradient bar for your header or navigation.  You just pass in the background and foreground color and out comes a nice gradient bar.

####Example

<iframe class="embed" src="examples/bar.html" height="75"></iframe>

[View Full Example](examples/bar.html)

####Less Usage

```css
.bar {
	.oban-bar(@bg: #333, @fg: #fff, @height: 50px, @fontSize: 20px, @degree: 10);
}
```

####HTML Usage
```html
<div class="bar"><h1 class="title">App Title</h1></div>
```

