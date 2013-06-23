##Gradients

The gradient module gives you a simple way of adding gradients to backgrounds.  It handles all of the cross browser issues and gives you a nice fallback for older browsers.

####Less Usage

```css
.module1 {
	.oban-gradient(@startColor: #555, @endColor: #333);
}

.module2 {
	.oban-gradient-three-color(@startColor: #00b3ee, @midColor: #7a43b6, @colorStop: 50%, @endColor: #c3325f);
}
```
