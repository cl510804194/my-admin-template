import {
  ProFormText,
  ProFormRadio,
  ProFormSwitch,
  ProFormSelect,
  ProFormCheckbox,
  ProFormDigit,
  ProFormTextArea,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormDateRangePicker,
  ProFormDateTimeRangePicker,
  ProFormUploadButton
} from '@ant-design/pro-form';
import type { IFormItem } from '@/type/formItem';
import { useMemo, useState, useRef } from 'react';
import { putObjectList } from '@/utils/cos';

interface IProps {
  formList: IFormItem[]
  readonly?: boolean
}

function Index(props: IProps) {
  const {
    formList,
    readonly = false
  } = props
  const { current: firstCurrent } = useRef({
    firstFlag: true
  })
  // 文件上传
  const [fileList, setFileList] = useState([] as any[]);
  const beforeUpload = async (file: File) => {

    const files = await putObjectList([file])
    console.log(firstCurrent.firstFlag, fileList, files)
    if(files){
      setFileList([...fileList, ...files])
    }
    return false
  }
  const onRemove = (file: any) => {
    const index = fileList.indexOf(file);
    fileList.splice(index, 1);
    setFileList([...fileList]);
  }
  const render = useMemo(() => {
    return formList.map((item) => {
      const itemProps: any = {
        width: 'md',
        name: item.name,
        label: item.label,
        placeholder: `请输入${item.label}`,
        rules: item.rules ? item.rules : item.required ? [{
          message: `请输入${item.label}`,
          required: true
        }] : [],
        key: item.type + item.name,
        options: item.options,
        valueEnum: item.valueEnum,
        readonly: readonly,
        ...item.otherProps
      }
      console.log(firstCurrent.firstFlag)
      if(itemProps.fileListToo && firstCurrent.firstFlag) {
        console.log('执行')
        setFileList(itemProps.fileListToo);
        firstCurrent.firstFlag = false;
      }
      switch(item.type){
        case 'ProFormText':
          return <ProFormText {...itemProps} />;
        case 'ProFormRadio':
          return <ProFormRadio.Group {...itemProps} />;
        case 'ProFormSwitch':
          return <ProFormSwitch {...itemProps} />;
        case 'ProFormSelect':
          return <ProFormSelect {...itemProps} />;
        case 'ProFormCheckbox':
          return <ProFormCheckbox.Group {...itemProps} />;
        case 'ProFormDigit':
          return <ProFormDigit {...itemProps}/>;
        case 'ProFormTextArea':
          return <ProFormTextArea {...itemProps}/>;
        case 'ProFormDatePicker':
          return <ProFormDatePicker {...itemProps}/>;
        case 'ProFormDateTimePicker':
          return <ProFormDateTimePicker {...itemProps}/>;
        case 'ProFormDateRangePicker':
          return <ProFormDateRangePicker {...itemProps}/>;
        case 'ProFormDateTimeRangePicker':
          return <ProFormDateTimeRangePicker {...itemProps}/>;
        case 'ProFormDateTimePicker':
          return <ProFormDateTimePicker {...itemProps}/>;
        case 'ProFormUploadButton':
          return <ProFormUploadButton
                  fieldProps={{
                    name: 'file',
                    listType: 'picture-card',
                    beforeUpload,
                    onRemove
                  }}
                  fileList={fileList}
                  {...itemProps}
                />;
        default:
          return <ProFormText {...itemProps}/>;
      }
    })
  }, [fileList, formList, readonly])
  return (
    <>{render}</>
  );
}

export default Index
