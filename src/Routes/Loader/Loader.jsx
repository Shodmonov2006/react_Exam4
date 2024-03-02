import { LoadingOutlined } from '@ant-design/icons';
import { red } from '@mui/material/colors';
import { Spin } from 'antd';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 60,
    }}
    className='text-[#862a70] font-bold'
    spin
  />
);
const Loader = () => <Spin indicator={antIcon} />;
export default Loader;