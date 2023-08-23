import { Title } from './Title';
import { Text } from './Text';

interface TypographyComponent {
	Title: typeof Title;
	Text: typeof Text;
}

export const Typography: TypographyComponent = {
	Title,
	Text,
};
