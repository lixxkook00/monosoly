import { Task } from './';
import { TaskProps } from './task';

interface TaskListProps {
  title: string;
  items: (TaskProps & { id: number })[];
}

const TaskList = ({ title, items }: TaskListProps) => {
  return (
    <>
      <div className="mt-4">
        <p className="text-lg">{title}</p>
      </div>

      <div className="flex flex-col align-center gap-2">
        {items.map(({ id, amount, title, img, checked, onClick }) => (
          <Task key={id} amount={amount} title={title} checked={checked} img={img} onClick={onClick}/>
        ))}
      </div>
    </>
  );
};

export default TaskList;
