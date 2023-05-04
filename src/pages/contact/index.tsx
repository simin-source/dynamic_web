import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import Card from '@/components/contact/card'
import SwiperBanner from "@/views/swiper";

export default defineComponent({
    name: 'Contact',
    render() {
        return <div>
            <Header />
            <SwiperBanner/>
            <Card/>
            <Footer />
        </div >;
    },
});