##Modal

The modal module provides all of the necessary styling to show a modal.  It doesn't provide any of the logic to show or hide the modal, but that should be trivial.  If you don't feel like writing it, the [Fidel Modal]() lib should work for you.

####Less Usage

```css
.model {
	.oban-modal([width]);
}

.modal-backdrop {
	.oban-modal-backdrop();
}
```

```html
<div class="modal">
	<button class="close">&times;</button>
	<h1>Heading 1</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo ligula, tincidunt vel congue nec, tristique vel nisl. Nullam laoreet elementum justo sed tempor. In volutpat mollis lectus non ultrices. Sed pharetra odio eget ipsum dapibus in rutrum odio facilisis. Curabitur in diam sit amet elit rutrum auctor ut sed mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nec erat gravida leo vestibulum pharetra. Proin ut libero sed purus dictum bibendum sit amet quis ipsum. Nulla elementum sodales mauris a rutrum. Nulla porta porttitor nibh, a posuere est condimentum sit amet. Etiam viverra commodo justo ut porttitor. Nam id tristique odio.</p>
</div>
<div class="modal-backdrop"></div>
```

[View Example]()
