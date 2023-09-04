import { Table, Typography } from 'antd';
import { useProducts, useColumns } from './hooks';

function App() {
	const { columns } = useColumns();
	const { products, loading, page, handlePageChange } = useProducts();

	return (
		<>
			<Typography.Title level={1}>Products</Typography.Title>
			<Table
				columns={columns}
				dataSource={products}
				loading={loading}
				pagination={{
					current: page.skip / page.limit + 1,
					total: page.total,
					defaultPageSize: page.limit,
					pageSizeOptions: [5, 10, 15, 20],
					showSizeChanger: true,
					onChange: handlePageChange,
				}}
			/>
		</>
	);
}

export default App;
