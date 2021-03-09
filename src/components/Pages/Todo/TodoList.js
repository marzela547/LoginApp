import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({ descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className=" flex border rounded-lg my-2 h-10 p-5 items-center justify-between bg-purple-300 hover:bg-purple-500 text-large text-purple-900">
    <span className={myClass}>{descripcion}</span>
    <div className="flex items-center">
      <MdDone className="m-3" onClick={onClick}></MdDone>
      <MdDelete onClick={onDeleteClick}></MdDelete>
    </div>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.id}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList w-full">
      <ul>
         {todoItems}
         <hr></hr>
      </ul>
    </section>
  );
}

export default TodoList;
