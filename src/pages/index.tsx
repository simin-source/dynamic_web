import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import SwiperBanner from "@/views/swiper";
import Introduce from '@/components/about/introduce/index'

export default defineComponent({
    name: 'About',
    render() {
        return <div>
            <Header />
            <SwiperBanner />
            <Introduce />
            <Footer />
        </div >;
    },
});