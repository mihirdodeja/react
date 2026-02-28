import { Bounce, Slide, toast } from "react-toastify";

function PopUp(message)
{
    return(
        toast.success(message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        })
    )
}

export default PopUp;
