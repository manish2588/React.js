import { useNavigate, useRouteError } from "react-router-dom";


function Error() {
    const error= useRouteError();
    console.log(error)
    console.log(error.statusText);
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
  return (
 <>
    <div>Error loading</div>
    <div>
        {
            error.statusText
        }
    </div>

    <button className="p-2 bg-slate-400 rounded-md hover:bg-orange-600" onClick={handleGoBack}>
        Go Back TO Home Page
    </button>
 </>
  )
}

export default Error;