import React, { Suspense } from 'react'
import TodoList from './(users)/todos/TodoList'

function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading todos...</p>}>
        <h1>Loading Todos</h1>
        <div className='text-red-500'>
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading shopping todos...</p>}>
        <h1>Loading Shopping todos</h1>
        <div className='text-blue-500'>
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>
    </div>
  )
}

export default Home
