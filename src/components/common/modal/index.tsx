import { IcTime } from "../../../icons";
import { ModalState } from "../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../contexts/store";
import { useDispatch } from "react-redux";
import { close } from "../../../contexts/modal-slice";

interface Props {
  openKey: keyof ModalState;
  content: React.ReactNode;  // Add this line
}

const Modal: React.FC<Props> = ({ openKey, content }) => {  // Add content here
  const open = useSelector((state: RootState) => state.modal[openKey]);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close(openKey));
  }

  return <div style={{ transform: `translateY(${open ? 0 : '120%' })` }} className={`modal transition-all duration-300 bg-[#1B1E23] absolute bottom-0 left-0 w-full p-3 pb-8 h-fit z-10 rounded-t-2xl modal max-h-95 overflow-hidden`}>
    <div onClick={handleClose} className="close absolute top-4 right-4">
      <IcTime />
    </div>

    {content}
  </div>
}

export default Modal;
