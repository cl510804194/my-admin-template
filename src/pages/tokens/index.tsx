import { useState } from 'react';

import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { CheckCircleTwoTone } from '@ant-design/icons';

const columns: any = [
  {
    dataIndex: 'coin',
    title: '币种',
    align: 'center',
  },
  {
    dataIndex: 'binance',
    title: '币安交易所',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'huobi',
    title: '火币',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'ftx',
    title: 'FTX',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'coinbase',
    title: 'CoinBase',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'cypto',
    title: 'Cypto',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'okex',
    title: 'Okex',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'mexc',
    title: '抹茶',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'gate',
    title: 'gate.io',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
  {
    dataIndex: 'kraken',
    title: 'kraken',
    align: 'center',
    search: false,
    render: (text: any) => {
      return <div>{text ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : null}</div>;
    },
  },
];
const findDex = (arr: [], dex: string) => {
  const find = arr.find((item: any) => item.symbol === dex);
  return !!find;
};
function Index() {
  const [dataSource, setdataSource] = useState([]);

  return (
    <PageContainer>
      <ProTable
        // loading={!data}
        columns={columns}
        // dataSource={formatData}
        request={async (params) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          if (params.coin) {
            const filterData = dataSource.filter((item: any) => item.coin === params?.coin);
            return Promise.resolve({
              data: filterData,
              success: true,
            });
          }
          const data = await API.statisticsInfo.getAllTokenInfoVOList.getAllTokenInfoVOList();
          const formatData = (data || []).map((item: any) => {
            return {
              coin: item.tokenSymbol,
              binance: findDex(item.exchangeInfoVOList, 'binance'),
              kraken: findDex(item.exchangeInfoVOList, 'kraken'),
              gate: findDex(item.exchangeInfoVOList, 'gate'),
              mexc: findDex(item.exchangeInfoVOList, 'mexc'),
              cypto: findDex(item.exchangeInfoVOList, 'cypto'),
              coinbase: findDex(item.exchangeInfoVOList, 'coinbase'),
              ftx: findDex(item.exchangeInfoVOList, 'ftx'),
              huobi: findDex(item.exchangeInfoVOList, 'huobi'),
              okex: findDex(item.exchangeInfoVOList, 'Okex'),
            };
          });
          setdataSource(formatData);

          return Promise.resolve({
            data: formatData,
            success: true,
          });
        }}
        editable={{
          type: 'multiple',
        }}
        rowKey="coin"
        search={{
          labelWidth: 'auto',
        }}
        pagination={{
          pageSize: 50,
        }}
        toolBarRender={false}
        dateFormatter="string"
      />
    </PageContainer>
  );
}
export default Index;
