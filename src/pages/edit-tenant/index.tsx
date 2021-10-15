import { message, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { getUrlParamsKey } from '@/utils/helpers';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'umi';
import type { IFormItem } from '@/type/formItem';
import FormItem from '@/components/FormItem';
import { postAddTenant } from '@/services/mods/tenant/postAddTenant';
import { postEditTenant } from '@/services/mods/tenant/postEditTenant';
import { getGetTenantDetail } from '@/services/mods/tenant/getGetTenantDetail';

function Index() {
  const history = useHistory()
  const [form] = ProForm.useForm()
  const [detail, setDetail] = useState({} as any)
  const [editItem, setEditItem] = useState({
    id: 0,
    readonly: false,
    flag: false
  })

  useEffect(() => {
    const id = getUrlParamsKey('id', history.location.search)
    const readonly = getUrlParamsKey('readonly', history.location.search)
    if(id){
      setEditItem({ ...editItem, id: Number(id), flag: true, readonly: !!readonly })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.search])

  // 获取数据详情
  const getDetail = useCallback(async () => {
    const res: any = await getGetTenantDetail({
      queryParams: {
        id: editItem.id
      }
    });
    if(res){
      if(res.images){
        res.images = JSON.parse(res.images).map((item: any) => {
          const strs = item.split('/');
          return {
            uid: strs[strs.length - 1],
            name: strs[strs.length - 1],
            status: 'done',
            url: item,
          }
        });
      }
      form.setFieldsValue({
        ...res
      })
      setDetail(res);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem])
  useEffect(() => {
    if(editItem.id){
      getDetail()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem])
  // 表单提交
  async function finishFun(values: any){
    if(values.images?.length > 0){
      const images = values.images.slice(0, values.images.length - 1);
      values.images = JSON.stringify(images.map((t: any) => t.url));
    }
    let res = null
    if(editItem.flag){
      values.id = editItem.id;
      res = await postEditTenant({
        bodyParams: values
      });
    }else{
      res = await postAddTenant({
        bodyParams: values
      });
    }
    if(res){
      message.success('提交成功');
      history.goBack();
    }else{
      message.error('系统错误');
    }
  }

  // 表单项
  const formList: IFormItem[] = useMemo(() => {
    return [
      {
        type: 'ProFormText',
        name: 'appId',
        label: 'appId',
        required: true
      },
      {
        type: 'ProFormRadio',
        name: 'type',
        label: '类型',
        options: [
          {
            label: '商户',
            value: 'store',
          },
          {
            label: '个人',
            value: 'user',
          },
        ],
        required: true
      },
      {
        type: 'ProFormText',
        name: 'name',
        label: '租户名',
        required: true
      },
      {
        type: 'ProFormText',
        name: 'phoneNumber',
        label: '手机号',
        required: true
      },
      {
        type: 'ProFormText',
        name: 'city',
        label: '城市',
        required: true
      },
      {
        type: 'ProFormText',
        name: 'address',
        label: '地址',
        required: true
      },
      {
        type: 'ProFormTextArea',
        name: 'detail',
        label: '详情',
      },
      {
        type: 'ProFormUploadButton',
        name: 'images',
        label: '介绍图片',
        required: true,
        otherProps: {
          fileListToo: detail.images
        }
      },
      {
        type: 'ProFormTextArea',
        name: 'remark',
        label: '备注',
      },
      {
        type: 'ProFormRadio',
        name: 'openShop',
        label: '开启积分商城',
        options: [
          {
            label: '是',
            value: 1,
          },
          {
            label: '否',
            value: 0,
          },
        ]
      },
      {
        type: 'ProFormRadio',
        name: 'openIntegral',
        label: '开启积分继承',
        options: [
          {
            label: '是',
            value: 1,
          },
          {
            label: '否',
            value: 0,
          },
        ]
      },
      {
        type: 'ProFormDigit',
        name: 'integralPercent',
        label: '积分继承百分比',
      },
      {
        type: 'ProFormRadio',
        name: 'open',
        label: '是否发布',
        options: [
          {
            label: '是',
            value: 1,
          },
          {
            label: '否',
            value: 0,
          },
        ]
      },
    ]
  }, [detail])
  return (
    <PageContainer
      onBack={() => {
        history.goBack()
      }}
      title={!editItem.readonly ? editItem.flag ? '编辑租户' : '新建租户' : '租户详情'}
    >
      <ProCard>
        <ProForm
          form={form}
          layout='horizontal'
          labelAlign='right'
          labelCol={{span: 3}}
          initialValues={{
            type: 'store',
            openShop: 0,
            openIntegral: 0,
            open: 1
          }}
          onFinish={finishFun}
          submitter={{
            render: (_props, doms) => {
              if(editItem.readonly){
                return []
              }
              return [
                ...doms,
                <Button key="cancel" onClick={() => { history.goBack() }}>取消</Button>,
              ];
            },
          }}
        >
          <FormItem formList={formList} readonly={editItem.readonly} />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
}

export default Index
