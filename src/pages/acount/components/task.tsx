export interface TaskProps {
  decs: string;
  title: string;
  img: string;
  value?: string;
}

const Task = ({ decs, title, img, value }: TaskProps) => {
  return (
    <div className="bg-[#282A2F] rounded-xl flex items-center gap-2 px-4 py-2 cursor-pointer">
      <div className="w-20 flex justify-center mr-2">
        <img className='object-contain' src={`/images/${img}`} alt="" />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-base font-normal">{title}</p>
        <div className="flex gap-2">
        <p className="text-sm text-[#5E5F61]">{decs}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
