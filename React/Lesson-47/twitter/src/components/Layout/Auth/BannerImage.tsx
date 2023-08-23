import type { FC } from 'react';
import authBg from '../../../assets/authBg.png';

interface BannerImageProps {
	className: string;
}

export const BannerImage: FC<BannerImageProps> = ({ className }) => {
	return <img className={className} src={authBg} alt='twitter bg' />;
};
