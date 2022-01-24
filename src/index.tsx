import * as React from 'react';
import { animate } from 'motion';

interface IMotionOne extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animation: any;
  transition: any;
  as?: React.ElementType;
}

const MotionOne: React.FC<IMotionOne> = ({ children, animation, transition, as: Tag='div' }) => {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    animate(
      ref.current,
      animation,
      transition,
    );
  }, [ref, children, animation, transition]);

  return (
    <Tag ref={ref}>
      {children}
    </Tag>
  );
};

export default MotionOne
