import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import classnames from 'classnames'
import { useSelector } from "@tarojs/redux";
import { useDispatchSetVisible } from '../hooks/todos';

import './link.scss'

function FilterLink ({ filter  }) {
  const visibilityFilter = useSelector(state => state.todo.visibilityFilter);
  const dispatchSetVisible = useDispatchSetVisible();
  return (
    <Text
      className={classnames({ selected: filter === visibilityFilter, 'filters-link': true })}
      style={{ cursor: 'pointer' }}
      onClick={() => dispatchSetVisible(filter)}

    >
      {filter}
    </Text>
  )
}

export default FilterLink
