import { render } from "@tarojs/taro"

export const withShare = (opt) => {
  return (Component) => {
    class WithShare extends Component {
      render() {
        super.render();
      }
    }
    return WithShare;
  }
}
