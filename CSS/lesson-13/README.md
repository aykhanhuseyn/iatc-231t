# CSS Part N

## Media Queries

```css
@media screen and (max-width: 526px) {
	background: red;
}
```

## Anmations

```

.box {
  width: 50px;
  height: 50px;
  background: red;

  animation-name: fade-in;
  animation-duration: 500ms;
  anomation-timing-function: ease-in; // ease-out | ease-in-out | ease | linear | cubic-bezier(0.045, 0.690, 0.925, -0.260);
  animation-delay: 3s;
  animation-direction:
  animation-fill-mode: normal | forwards;
  animation-iteration-count: integer infinity
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

## SCSS
