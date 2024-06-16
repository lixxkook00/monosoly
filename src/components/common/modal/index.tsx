import { IcTime } from "../../../icons";
import { ModalState } from "../../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../contexts/store";
import { useDispatch } from "react-redux";
import { close } from "../../../contexts/modal-slice";

interface Props {
  openKey: keyof ModalState;
}

const Modal: React.FC<Props> = ({ openKey }) => {
  const open = useSelector((state: RootState) => state.modal[openKey]);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close(openKey));
  }

  return <div className={`${open ? '' : 'translate-y-full' } modal transition-all duration-300 bg-[#1B1E23] absolute bottom-0 left-0 w-full p-3 pb-8 flex items-center justify-center h-fit z-10 rounded-t-xl`}>
    <div onClick={handleClose} className="close absolute top-3 right-3">
      <IcTime />
    </div>

    <span>content</span>
  </div>
}

export default Modal;