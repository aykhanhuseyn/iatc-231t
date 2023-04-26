# CSS - Cascading Style Sheets

## DOM -> Document Object Model (DOM tree)

## CSS OM -> CSS Object Model

## CSS in HTML

- Inline CSS

`style=""` attribute

- Internal CSS

`<style></style>` tag

- External CSS

`<link rel="srylesheet" href="file.css" />`

## CSS SELECTORS

- TAG SELECTOR

```css
body {
	font-size: 45px;
}
```

- CLASS SELECTOR

```html
<div class="greeting">Hello World!</div>
```

```css
.greeting {
	font-size: 22px;
}
```

- ID SELECTOR

```html
<div id="friend">Hello Friend!</div>
```

```css
#friend {
	background: purple;
}
```

- ATTRIBUTE SELECTOR

```html
<span title="Hello John DOE">Hello John</span>
<p data-status="success">John Doe</p>
```

```css
[title] {
	color: green;
}
[data-status='success'] {
	background: green;
}
```

- PSEUDO ELEMENT & PSEUDO CLASS SELECTOR

```html
<input placeholder="enter your name" />
```

```css
::placeholder {
	color: red;
}
```

## SPECIFITY
