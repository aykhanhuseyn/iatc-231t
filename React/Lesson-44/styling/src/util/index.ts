export const cls = (...classNames: (string | undefined)[]) =>
	classNames.filter(Boolean).join(' ');
