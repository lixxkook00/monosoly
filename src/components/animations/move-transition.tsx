import { motion } from 'framer-motion';

interface MoveTransitionProps extends React.PropsWithChildren {
  x?: number | string;
  y?: number | string;
}

const MoveTransition = ({ children, x, y }: MoveTransitionProps) => {
  const routeVariants = {
    initial: { x, y },
    animate: {
      x: '0vw',
      y: '0vh',
      transition: {
        type: 'spring',
        mass: 0.4
      }
    }
  };

  return (
    <motion.div className="h-full" variants={routeVariants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default MoveTransition;
