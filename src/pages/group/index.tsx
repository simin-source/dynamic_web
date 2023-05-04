import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import SwiperBanner from "@/views/swiper";
import Company from '@/components/group/company/index'

export default defineComponent({
    name: 'Group',
    render() {
        return <div>
            <Header />
            <SwiperBanner/>
            <Company/>
            <Footer />
        </div >;
    },
});