
import { defineComponent } from "vue";
import { container, content, copy, icon, menu } from './index.module.scss';

export default defineComponent({
  name: 'Footer',
  render() {
    let urlChoice = '../';
    if (window.location.pathname.includes('group') || window.location.pathname.includes('news') || window.location.pathname.includes('contact') || window.location.pathname.includes('company')) {
      urlChoice = '../'
    } else {
      urlChoice = './'
    }
    return <div class={container}>
      <div class={content}>
        <div class={icon}>
          <img src={`${urlChoice}img/group/logo2.png`} alt='宏沣' />
          <a href='https://www.biovillage.cn' >相关网站：BioVillage官网</a>
        </div>
        <div class={`flex-center ${menu}`}>
          <a href={`${urlChoice}`}>关于宏沣</a>
          <a href={`${urlChoice}group/`}>投资管线</a>
          <a href={`${urlChoice}news/`}>新闻资讯</a>
          <a href={`${urlChoice}contact/`}>联系我们</a>
        </div>
      </div>
      <div class={copy}>Copyright©2022 hongfengventure. All Rights Reserved | 浙ICP备2022021547号</div>
    </div>;
  },
});