import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent } from 'vue';
import SwiperObj from "swiper";
import {
    swiper_box, swiper_content, swiper_slide,
} from './index.module.scss';
import 'swiper/css';
import Banner from '../banner';

export default defineComponent({
    name: 'SwiperBanner',
    mounted() {
        var mySwiper = new SwiperObj('.swiper');
        if (window.location.pathname.includes('group')) {
            mySwiper.slideTo(2, 330, false);
        } else if (window.location.pathname.includes('news')) {
            mySwiper.slideTo(3, 330, false);
        } else if (window.location.pathname.includes('contact')) {
            mySwiper.slideTo(4, 330, false);
        } else {
            mySwiper.slideTo(1, 330, false);
        }
    },
    render() {
        let urlChoice = '../';
        if (window.location.pathname.includes('group') || window.location.pathname.includes('news') || window.location.pathname.includes('contact') || window.location.pathname.includes('company')) {
            urlChoice = '../'
        } else {
            urlChoice = './'
        }
        return <div class={swiper_box}>
            <Swiper
                loop={true}
                class={swiper_content}
                effect="fade"
            >
                <SwiperSlide class={swiper_slide}>
                    <Banner title="关于宏沣" info={{ bg: `${urlChoice}img/banner/about.png` }} />
                </SwiperSlide>
                <SwiperSlide class={swiper_slide}>
                    <Banner title="投资管线" info={{ bg: `${urlChoice}img/banner/group.png` }} />
                </SwiperSlide>
                <SwiperSlide class={swiper_slide}>
                    <Banner title="新闻资讯" info={{ bg: `${urlChoice}img/banner/news.png` }} />
                </SwiperSlide>
                <SwiperSlide class={swiper_slide}>
                    <Banner title="联系我们" info={{ bg: `${urlChoice}img/banner/contact.png` }} />
                </SwiperSlide>
            </Swiper>
        </div >;
    },
});
