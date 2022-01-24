import * as React from 'react';
import { animate } from 'motion';

interface IMotionOne {
  children: React.ReactNode;
  animation: any;
  transition: any;
}

const MotionOne: React.FC<IMotionOne> = ({ children, animation, transition }) => {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    animate(
      ref.current,
      animation,
      transition,
    );
  }, [ref, children, animation, transition]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default MotionOne
