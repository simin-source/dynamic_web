import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import Banner from '@/views/banner/index'
import Introduce from '@/components/about/introduce/index'

export default defineComponent({
    name: 'About',
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
            <Banner title="关于宏沣" info={{bg:'/img/banner/about.png'}}/>
            <Introduce/>
            <Footer />
        </div >;
    },
});