import { message, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { getUrlParamsKey } from '@/utils/helpers';
import { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'umi';
import type { IFormItem } from '@/type/formItem';
import FormItem from '@/components/FormItem';

function Index() {
  const history = useHistory()
  const [form] = ProForm.useForm()
  const [editItem, setEditItem] = useState({
    id: '',
    readonly: false,
    flag: false
  })

  useEffect(() => {
    const id = getUrlParamsKey('id', history.location.search)
    const readonly = getUrlParamsKey('readonly', history.location.search)
    if(id){
      setEditItem({ ...editItem, id, flag: true, readonly: !!readonly })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.search])

  // 获取数据详情
  async function getDetail() {
    console.log(editItem)
  }
  useEffect(() => {
    if(editItem.id){
      getDetail()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem])
  // 表单提交
  async function finishFun(values: any){
    console.log(editItem, values);
    message.success('提交成功');
  }

  const formList: IFormItem[] = useMemo(() => {
    return [
      {
        type: 'ProFormText',
        name: 'name',
        label: '租户名',
        rules: [{
          message: '请填写',
          required: true
        }],
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
        name: 'address',
        label: '租户地址',
        required: true
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
      {
        type: 'ProFormSelect',
        name: 'ProFormSelect',
        label: 'ProFormSelect',
        valueEnum: {
          test: 'test',
        }
      },
      {
        type: 'ProFormDatePicker',
        name: 'ProFormDatePicker',
        label: '日期选择',
      }
    ]
  }, [])
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
            name: 'yyy',
          }}
          onFinish={finishFun}
          submitter={{
            render: (_props, doms) => {
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
