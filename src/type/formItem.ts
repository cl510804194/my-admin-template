export type IFormItem = {
  type: 'ProFormSwitch' |
  'ProFormText' |
  'ProFormRadio' |
  'ProFormCheckbox' |
  'ProFormRate' |
  'ProFormSelect' |
  'ProFormDigit' |
  'ProFormTextArea' |
  'ProFormDatePicker' |
  'ProFormDateTimePicker' |
  'ProFormDateRangePicker' |
  'ProFormDateTimeRangePicker' |
  'ProFormUploadButton'
  name: string,
  label: string,
  rules?: any[],
  required?: boolean,
  options?: {
    label: string,
    value: any,
  }[],
  valueEnum?: Record<string, any>,
  otherProps?: Record<string, any>
}
