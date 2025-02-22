import PropTypes from 'prop-types';
function ProgressBar({ percentage }) {
  return (
    <>
      <div className="w-[100%] relative">
        <div className="bg-gray-500 my-2 border-r-2 h-14 w-[100%] relative z-10">
         <div className={`absolute bg-blue-400  h-full`}
          style={{ width: `${percentage}%` }}
         >d</div>
        </div>
      </div>
    </>
  );
}
ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
  };
  
export default ProgressBar;
