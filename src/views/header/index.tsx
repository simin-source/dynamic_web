
import Swiper from "swiper";
import { defineComponent } from "vue";
import { container, content, icon, menu, nav_lamp } from './index.module.scss';

export default defineComponent({
    name: 'Header',
    data() {
        return {
            currentPage: {
                index: 1,
                name: 'about',
                right: '600px'
            },
            right: '3px',
        }
    },
    mounted() {
        if (window.location.pathname.includes('about')) {
            this.currentPage.index = 1;
            this.currentPage.name = 'about';
            this.currentPage.right = this.right = '600px';
        } else if (window.location.pathname.includes('group')) {
            this.currentPage.index = 2;
            this.currentPage.name = 'group';
            this.currentPage.right = this.right = '401px';
        } else if (window.location.pathname.includes('news')) {
            this.currentPage.index = 3;
            this.currentPage.name = 'news';
            this.currentPage.right = this.right = '202px';
        } else if (window.location.pathname.includes('contact')) {
            this.currentPage.index = 4;
            this.currentPage.name = 'contact';
            this.currentPage.right = this.right = '3px';
        } else if (window.location.pathname.includes('company')) {
            this.currentPage.index = 2;
            this.currentPage.name = 'group';
            this.currentPage.right = this.right = '401px';
        } else {
            this.currentPage.index = 1;
            this.currentPage.name = 'about';
            this.currentPage.right = this.right = '600px';
        }
    },
    methods: {
        bannerSlideTo(index: number) {
            var mySwiper = new Swiper('.swiper');
            mySwiper.slideTo(index, 330, false);
        }
    },
    render() {
        let urlChoice = '../';
        if (window.location.pathname.includes('group') || window.location.pathname.includes('news') || window.location.pathname.includes('contact') || window.location.pathname.includes('company')) {
            urlChoice = '../'
        } else {
            urlChoice = './'
        }
        return <div class={container}>
            <div class={content}>
                <div class={icon}><img src={`${urlChoice}img/group/logo.png`} alt='宏沣' /></div>
                <div class={`flex-center ${menu}`}>
                    <a href={`${urlChoice}`} style={{ color: `${this.currentPage.name === 'about' ? '#721020' : '#333333'}` }}
                        onMouseenter={() => { this.right = '600px'; this.bannerSlideTo(1) }}
                        onMouseleave={() => { this.right = this.currentPage.right; this.bannerSlideTo(this.currentPage.index); }}>
                        关于宏沣
                    </a>
                    <a href={`${urlChoice}group/`} style={{ color: `${this.currentPage.name === 'group' ? '#721020' : '#333333'}` }}
                        onMouseenter={() => { this.right = '401px'; this.bannerSlideTo(2) }}
                        onMouseleave={() => { this.right = this.currentPage.right; this.bannerSlideTo(this.currentPage.index); }}>
                        投资管线
                    </a>
                    <a href={`${urlChoice}news/`} style={{ color: `${this.currentPage.name === 'news' ? '#721020' : '#333333'}` }}
                        onMouseenter={() => { this.right = '202px'; this.bannerSlideTo(3) }}
                        onMouseleave={() => { this.right = this.currentPage.right; this.bannerSlideTo(this.currentPage.index); }}>
                        新闻资讯
                    </a>
                    <a href={`${urlChoice}contact/`} style={{ color: `${this.currentPage.name === 'contact' ? '#721020' : '#333333'}` }}
                        onMouseenter={() => { this.right = '3px'; this.bannerSlideTo(4) }}
                        onMouseleave={() => { this.right = this.currentPage.right; this.bannerSlideTo(this.currentPage.index); }}>
                        联系我们
                    </a>
                </div>
                <div class={nav_lamp}
                    style={{ right: `${this.right}` }}
                ></div>
            </div>
        </div>;
    },
});