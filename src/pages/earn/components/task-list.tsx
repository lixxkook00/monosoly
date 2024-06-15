import { Task } from './';
import { TaskProps } from './task';

interface TaskListProps {
  title: string;
  items: (TaskProps & { id: number })[];
}

const TaskList = ({ title, items }: TaskListProps) => {
  return (
    <>
      <div className="">
        <p className="text-xl">{title}</p>
      </div>

      <div className="flex flex-col align-center gap-3">
        {items.map(({ id, amount, title, img, checked }) => (
          <Task key={id} amount={amount} title={title} checked={checked} img={img} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
