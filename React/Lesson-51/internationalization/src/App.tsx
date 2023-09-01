import { useTranslation, Trans } from 'react-i18next';
import i18next from './i18next';
import dayjs from 'dayjs';
import 'dayjs/locale/az';
import 'dayjs/locale/en';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const clangeLanguage = (lang: string) => {
	i18next.changeLanguage(lang);
	dayjs.locale(lang);
	document.querySelector('html')?.setAttribute('lang', lang);
};

const App = () => {
	const { t, i18n, ready } = useTranslation();

	if (!ready) {
		return <h1>loading lang...</h1>;
	}

	return (
		<div>
			<h3>{i18n.language}</h3>
			<nav
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<div>
					<button onClick={() => clangeLanguage('en')}>en</button>
					<button onClick={() => clangeLanguage('az')}>az</button>
				</div>
				<div>
					<button>{t('auth.login')}</button>
					<button>{t('auth.register')}</button>
				</div>
			</nav>
			<Trans key='greet' />
			{t('intlNumber', {
				val: 1000.003,
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})}
			{t('intlNumber', {
				val: 1000.003,
				formatParams: { val: { lng: 'ru' } },
			})}
			<h1>{t('greet')}</h1>
			<h2>{t('apple', { count: 1 })}</h2>
			<h2>{t('apple', { count: 2 })}</h2>
			<h2>{t('date', { date: dayjs().format('d MMMM YYYY') })}</h2>
		</div>
	);
};

export default App;
