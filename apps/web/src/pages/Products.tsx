import React from 'react';
import { Button, Card, Space, Table, Layout, Typography } from 'antd';
import type { TableProps } from 'antd';
import { ProductEntity } from '@core/index';
import { ProductControllerWeb } from '@controllers/productControllerWeb';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineAddBox } from "react-icons/md";

const columns: TableProps<ProductEntity>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Sku Code',
    dataIndex: 'sku',
    key: 'sku',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'QR Code Url',
    dataIndex: 'qrCodeUrl',
    key: 'qrCodeUrl',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space>
        <Button
            color="cyan"
            variant="solid"
            icon={<FiEdit  />}
            onClick={() => console.log(record)}
        />
        <Button
            danger
            type="primary"
            icon={<AiOutlineDelete />}
        />
      </Space>
    ),
  },
];

const data = await ProductControllerWeb.fetchProduct()

const Products: React.FC = () => (
    <Layout.Content>
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography.Title>Product</Typography.Title>
            <Button
                type="primary"
                icon={<MdOutlineAddBox size={20}/>}
            >
                New Product
            </Button>
        </Space>
        <Card>
            <Table<ProductEntity>
                columns={columns}
                dataSource={data}
            />
        </Card>
    </Layout.Content>
);

export default Products;
