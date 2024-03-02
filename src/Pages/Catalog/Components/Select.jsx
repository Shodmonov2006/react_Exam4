import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const CompSelect = ({value}) => (
  <Space wrap>
    <Select
    className='shadow-xl'
      defaultValue={value}
      style={{
        width: 145,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
  </Space>
);
export default CompSelect;