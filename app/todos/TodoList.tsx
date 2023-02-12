import Link from 'next/link'
import React from 'react'
import { Todo } from '../../typings'

const fetchTodo = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await data.json()
  return todos
}

async function TodoList() {
  const todos = await fetchTodo()
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default TodoList
