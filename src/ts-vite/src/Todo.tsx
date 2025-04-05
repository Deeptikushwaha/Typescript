const Todo = () => {
  return (
    <>
    <h2>Takes Todo as Input And Render it.</h2>
    <TodoItem
      title="1. Learn Prisma"
      description="Learn prisma fasfas"
      done = {true}
    />
    </>
  )
}

interface TodoProps{
    title: string;
    description: string,
    done: boolean
}

function TodoItem(props:TodoProps){  //props: any
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.done?'Done':'Not Done'}</p>
        </div>
    )
}

export default Todo