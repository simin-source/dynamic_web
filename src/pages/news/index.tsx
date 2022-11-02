import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import Banner from '@/views/banner/index'
import EventList from '@/components/news/eventList'

export default defineComponent({
    name: 'News',
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    },
    render() {
        return <div>
            <Header />
            <Banner title="新闻资讯" info={{bg:'/img/banner/news.png'}}/>
            <EventList/>
            <Footer />
        </div >;
    },
});