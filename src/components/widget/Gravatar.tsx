import { Avatar } from 'antd';
import React from 'react';

import { Helper } from '../../utils/Helper';

interface IGravarProps {
  name: string;
}
const Gravatar: React.FC<IGravarProps> = ({ name }) => {
  if (name === '') return null;
  return (
    <Avatar alt="Gravatar" src={Helper.getGravatarUrl(name, 100)} size={100} />
  );
};
export default React.memo(Gravatar);
