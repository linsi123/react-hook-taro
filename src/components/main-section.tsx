import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useSelector } from "@tarojs/redux";
import TodoList from './todo-list'
import Footer from './footer'
import { getCompletedCount, useClearCompletedTodos } from '../hooks/todos';


function MainSection() {
  const todos = useSelector(state => state.todo.todos);
  const clearCompletedTodos = useClearCompletedTodos();
  const todosCount = todos.length;
  const completedCount = getCompletedCount(todos);
  return (
    <View className='main'>
      <TodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => clearCompletedTodos()}
        />
      )}
    </View>
  )
}


export default MainSection;
