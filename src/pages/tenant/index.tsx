import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, message, Modal } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import { initList } from '@/utils/helpers';
import { postGetTenantList } from '@/services/mods/tenant/postGetTenantList';
import { deleteDeleteTenant } from '@/services/mods/tenant/deleteDeleteTenant';
import type { TenantAttributes } from '@/type/models';
import { useHistory } from 'umi';

function Index() {
  const history = useHistory();
  const columns: ProColumns<TenantAttributes>[] = [
    {
      title: '数据ID',
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: 'appId',
      dataIndex: 'appId',
      hideInSearch: true,
    },
    {
      title: '租户名',
      dataIndex: 'name',
    },
    {
      title: '租户类型',
      dataIndex: 'type',
      render: (_text) => {
        return _text === 'store' ? '商家' : '个人'
      },
      hideInSearch: true,
    },
    {
      title: '手机号',
      dataIndex: 'phoneNumber',
      hideInSearch: true,
    },
    {
      title: '地址',
      dataIndex: 'address',
      hideInSearch: true,
    },
    {
      title: '发布状态',
      dataIndex: 'open',
      render: (_text) => {
        return _text ? '是' : '否'
      },
      hideInSearch: true,
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            history.push('/tenant/edit-tenant?id=' + record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="detail"
          onClick={() => {
            history.push('/tenant/edit-tenant?id=' + record.id + '&readonly=true');
          }}
        >
          详情
        </a>,
        <a
          key="delete"
          onClick={() => {
            deleteItem(record.id, action);
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  // 删除
  function deleteItem(id: number, action: any) {
    Modal.confirm({
      title: '删除' + id,
      content: '请确认删除' + id,
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        const res = await deleteDeleteTenant({
          queryParams: {
            id: id
          }
        });
        if(res){
          message.success('删除成功');
          action.reload();
        }else{
          message.error('删除失败');
        }
      }
    });

  }
  async function init(params: any, sort: any, filter: any) {
    const res = await initList(params, sort, filter, postGetTenantList)
    return res
  }
  return (
    <PageContainer>
      <ProTable<TenantAttributes>
        columns={columns}
        request={init}
        editable={{
          type: 'multiple',
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
        toolBarRender={() => [
          <Button
            key="button"
            type="primary"
            onClick={() => {
              history.push('/tenant/edit-tenant');
            }}
          >
            新建
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

export default Index;
