import { Skeleton } from 'antd';

interface IWithLoadingProps {
  loading: boolean;
}
export const withLoading =
  (WrappedComponent: React.ComponentType<any>) =>
  ({ loading, ...otherProps }: IWithLoadingProps) => {
    if (!WrappedComponent) return null;
    return (
      <Skeleton loading={loading} avatar active>
        <WrappedComponent {...otherProps} />
      </Skeleton>
    );
  };
