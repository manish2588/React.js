import { useState } from 'react';
import { motion } from 'framer-motion';

function LayoutId() {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <motion.button
        className="bg-green-300 p-2 border rounded-lg"
        onClick={handleClick}
        layoutId="button" // Same layoutId ensures smooth transition
      >
        {visible ? 'Hide' : 'Show'}
      </motion.button>
    </>
  );
}

export default LayoutId;
