interface Props {
  isChecked: boolean;
  onToggle: () => void;
}

const Switch: React.FC<Props> = ({isChecked, onToggle}) => {
  
  return <div onClick={onToggle} className={`switch relative h-8 w-16 ${isChecked ? 'bg-[#FFC840]' : 'bg-black' } rounded-2xl border-white border-2 transition-all`}>
    <div className={`switch-pannel ${isChecked ? 'right-0.5' : 'left-0.5' } translate-y-50-minus absolute top-2/4 h-6 w-6 rounded-2xl bg-white transition-all	`}></div>
  </div>
}

export default Switch;