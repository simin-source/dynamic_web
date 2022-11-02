
import { defineComponent } from "vue";
import { container, content, copy, icon, menu } from './index.module.scss';

export default defineComponent({
  name: 'Footer',
  render() {
    return <div class={container}>
      <div class={content}>
        <div class={icon}>
          <img src="/img/group/logo2.png" alt='宏沣' />
          <a href='' >相关网站：Biovillage官网</a>
        </div>
        <div class={`flex-center ${menu}`}>
          <a href='../about/'>关于宏沣</a>
          <a href='../group/'>投资组合</a>
          <a href='../news/'>新闻资讯</a>
          <a href='../contact/'>联系我们</a>
        </div>
      </div>
      <div class={copy}>Copyright © www.AxureUX.com, All Rights Reserved.</div>
    </div>;
  },
});