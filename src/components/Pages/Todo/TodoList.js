import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({key, descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className=" flex border rounded-lg mx-5 my-2 h-10 items-center bg-purple-200 hover:bg-purple-500 text-large text-purple-900" key={key}>
    <span className={myClass}>{descripcion}</span>
    <MdDone className="m-3" onClick={onClick}></MdDone>
    <MdDelete onClick={onDeleteClick}></MdDelete>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
         {todoItems}
         <hr></hr>
      </ul>
    </section>
  );
}

export default TodoList;
