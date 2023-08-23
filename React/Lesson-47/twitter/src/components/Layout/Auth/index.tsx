import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components';
import { BannerImage } from './BannerImage';
import cls from './auth.module.css';

export const AuthLayout: FC = () => {
	return (
		<div className={cls.auth}>
			<BannerImage className={cls.auth__img} />
			<main className={cls.auth__content}>
				<Outlet />
			</main>
			<Footer className={cls.auth__footer} />
		</div>
	);
};
