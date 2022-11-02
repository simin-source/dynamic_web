
import { defineComponent } from "vue";
import { container, content, icon, menu, nav_lamp } from './index.module.scss';

export default defineComponent({
    name: 'Header',
    data() {
        return {
            currentPage: 'about',
            right: '3px',
        }
    },
    mounted() {
        switch (window.location.pathname) {
            case '/about/':
                this.currentPage = 'about';
                this.right = '600px';
                break;
            case '/group/':
                this.currentPage = 'group';
                this.right = '401px';
                break;
            case '/news/':
                this.currentPage = 'news';
                this.right = '202px';
                break;
            case '/contact/':
                this.currentPage = 'contact';
                this.right = '3px';
                break;
            case '/company/':
                this.currentPage = 'group';
                this.right = '401px';
                break;
            case '/newsDetail/':
                this.currentPage = 'news';
                this.right = '202px';
                break;
            default:
                this.currentPage = 'about';
                this.right = '600px';
                break;
        }
    },
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={icon}><img src="/img/group/logo.png" alt='宏沣' /></div>
                <div class={`flex-center ${menu}`}>
                    <a href='../about/' style={{ color: `${this.currentPage === 'about' ? '#721020' : '#333333'}` }} onMouseenter={() => { this.right = '600px'; }}>关于宏沣</a>
                    <a href='../group/' style={{ color: `${this.currentPage === 'group' ? '#721020' : '#333333'}` }} onMouseenter={() => { this.right = '401px'; }}>投资组合</a>
                    <a href='../news/' style={{ color: `${this.currentPage === 'news' ? '#721020' : '#333333'}` }} onMouseenter={() => { this.right = '202px'; }}>新闻资讯</a>
                    <a href='../contact/' style={{ color: `${this.currentPage === 'contact' ? '#721020' : '#333333'}` }} onMouseenter={() => { this.right = '3px'; }}>联系我们</a>
                </div>
                <div class={nav_lamp}
                    style={{ right: `${this.right}` }}
                ></div>
            </div>
        </div>;
    },
});