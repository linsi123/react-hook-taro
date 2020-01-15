import Taro, { useEffect } from "@tarojs/taro";
import { useSelector , useDispatch } from "@tarojs/redux";
import { setVisibilityFilter , deleteTodo , completeTodo , clearCompletedTodos , editTodo ,set } from '../actions/todo';
import {fetch} from '../service/index';
import { setLoading } from '../actions/global';

export const useGetFilteredTodos = (visibilityFilter) => {
  const todos = useSelector(state => state.todo.todos);
  switch (visibilityFilter) {
    case 'All':
      return todos
    case 'Completed':
      return todos.filter(t => t.completed)
    case 'Active':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + visibilityFilter)
  }
}

export function useFetchTodo() {
  const dispatch = useDispatch();
  return async () => {
    const todos = await fetch();
    dispatch(set(todos));
  }
}



export function useDispatchSetVisible() {
  const dispatch = useDispatch();
  return (filter) => {
    dispatch(setVisibilityFilter(filter));
  };
}


export function useDeleteTodo() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(deleteTodo(id));
  };
}



export function useCompleteTodo() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(completeTodo(id));
  }
}

export const getCompletedCount = todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)


export const useClearCompletedTodos = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(clearCompletedTodos());
  }
}


export const useEditTodo = () => {
  const dispatch = useDispatch();
  return (id,text) => {
    dispatch(editTodo(id,text));
  }
}

export const useLoading = () => {
  const {isLoading} = useSelector(state=>state.global);
  const dispatch = useDispatch();
  const closeLoading = () => {
    dispatch(setLoading({ isLoading: false }));
  }
  return [isLoading,closeLoading];
}


export const useShowLoading = () => {
  const [ isLoading , closeLoading ] = useLoading();
  useEffect(() => {
    if (isLoading) {
      Taro.showLoading({
        title: "加载中"
      });
    } else {
      Taro.hideLoading();
    }
  }, [isLoading]);
  return [closeLoading];
}


export const useLaunch = () => {
  const [closeLoading] = useShowLoading();
  const fetchTodo = useFetchTodo();

  useEffect(()=>{
    const launch = async () => {
      await fetchTodo();
      closeLoading();
    }
    launch();
  },[]);
  return [];
}

export default {};
