import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import EventList, { EVENTTYPE } from '@/components/news/eventList'
import NewsDetail from '@/components/news/newsDetail'
import SwiperBanner from "@/views/swiper";

export default defineComponent({
    name: 'News',
    data() {
        return {
            currentNews: {} as EVENTTYPE,
            isDetail: false,
        };
    },
    render() {
        return <div>
            <Header />
            {this.isDetail ? null : <SwiperBanner/>}
            {this.isDetail ? <NewsDetail info={this.currentNews}/> : <EventList onGetCurrentNews={(data: EVENTTYPE) => { this.currentNews = data; this.isDetail = true; }} />}
            <Footer />
        </div >;
    },
});