import { Button, Rate } from 'antd';
import {} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import api from './api';
import type { Product } from './models';

const priceFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

type GetColumnsFn = (categories: string[]) => ColumnsType<Product>;

export const getColumns: GetColumnsFn = (categories) => [
	{
		key: 'brand',
		dataIndex: 'brand',
		title: 'Brand',
		sorter: (first, second) => first.brand.localeCompare(second.brand),
	},
	{
		key: 'title',
		dataIndex: 'title',
		title: 'Title',
	},
	{
		key: 'category',
		dataIndex: 'category',
		title: 'Categories',
		filters: categories.map((category) => ({ text: category, value: category })),
		onFilter(value, record) {
			return record.category === value;
		},
	},
	{
		key: 'stock',
		dataIndex: 'stock',
		title: 'Count',
	},
	{
		key: 'price',
		dataIndex: 'price',
		title: 'Price (in USD)',
		render(value) {
			return priceFormatter.format(value);
		},
		sorter: (first, second) => first.price - second.price,
	},
	{
		key: 'rating',
		dataIndex: 'rating',
		render(value) {
			return <Rate disabled allowHalf value={value} />;
		},
	},
	{
		render(_, record) {
			return (
				<div>
					<Button
						type='text'
						onClick={() => {
							api.delete(`products/${record.id}`);
						}}
					>
						Edit
					</Button>
					<Button
						type='text'
						onClick={() => {
							api.delete(`products/${record.id}`);
						}}
						danger
					>
						delete
					</Button>
				</div>
			);
		},
	},
];
