import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const defaultMessage = 'zero-one团队荣誉出品';

  const currentYear = new Date().getFullYear();

  return <DefaultFooter copyright={`${currentYear} ${defaultMessage}`} links={[]} />;
};
