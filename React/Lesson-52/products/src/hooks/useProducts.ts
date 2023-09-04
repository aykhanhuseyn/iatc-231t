import { useEffect, useState } from 'react';
import type { Paginatagle, Product, ProductsResponse } from '../models';
import api from '../api';

// size => 10
// 1 => 1 - 10
// 2 => 11 - 20
// 3 => 21 - 30

// skip => (page - 1) * size => 10
// limit => 10

const search = 'iPhone';

export function useProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(false);
	const [total, setTotal] = useState(100);
	const [page, setPage] = useState({
		limit: 10,
		skip: 0,
		total,
	} as Paginatagle);

	const handlePageChange = (page: number, pageSize: number) => {
		setPage({
			limit: pageSize,
			skip: (page - 1) * pageSize,
			total: total,
		});
	};

	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data } = await api.get<ProductsResponse>('products', {
				params: {
					q: search,
					skip: page.skip,
					limit: page.limit,
				},
			});
			setLoading(false);
			setProducts(data.products);
			setTotal(data.total);
		})();
	}, [page]);

	return { products, loading, page, handlePageChange };
}
