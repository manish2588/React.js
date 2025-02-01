import { motion, useDragControls } from "framer-motion";

function Drag() {
  const dragControls = useDragControls();

  return (
    <>
      <div className="my-14 px-16">
        <motion.p
          className="bg-green-400 w-10 h-10"
          drag
          dragControls={dragControls}
          dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
          dragElastic={0.2}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        ></motion.p>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={(event) => dragControls.start(event, { snapToCursor: true })}
        >
          Start Drag
        </button>

        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded ml-4"
          onClick={() => dragControls.stop()}
        >
          Stop Drag
        </button>

        <button
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded ml-4"
          onClick={() => dragControls.updateConstraints()}
        >
          Update Constraints
        </button>
      </div>
    </>
  );
}

export default Drag;