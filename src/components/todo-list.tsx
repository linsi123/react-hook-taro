import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useSelector } from '@tarojs/redux';
import { useGetFilteredTodos } from '../hooks/todos';
import TodoItem from './todo-item';



const TodoList = () => {
  const visibilityFilter = useSelector(state => state.todo.visibilityFilter);
  const todos = useGetFilteredTodos(visibilityFilter)
  return (
    <View className='todo-list'>
      {todos.map((todo, i) => <TodoItem key={todo.id} todo={todo} isLast={i === todos.length - 1} />)}
    </View>
  )
}

export default TodoList
