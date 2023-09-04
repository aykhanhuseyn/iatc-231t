import { useEffect, useMemo, useState } from 'react';
import api from '../api';
import { getColumns } from '../data';

export function useColumns() {
	const [categories, setCategories] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data } = await api.get<string[]>('products/categories');
			setCategories(data);
			setLoading(false);
		})();
	}, []);

	const columns = useMemo(() => getColumns(categories), [categories]);

	return { columns, loading };
}
