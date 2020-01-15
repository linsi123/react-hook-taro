import Taro ,  { useEffect , useDidShow } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Header from '../../components/header';
import MainSection from '../../components/main-section';
import { useLaunch , useShowLoading } from '../../hooks/todos';
import './index.scss';


function Index() {
  const [isLoading, closeLoading] = useShowLoading();
  useLaunch();
  // closeLoading();
  return (
    <View className='index'>
      <Header></Header>
      <MainSection></MainSection>
    </View>
  )
}

Index.prototype.config = {
  navigationBarTitleText: '首页'
}

export default Index;

