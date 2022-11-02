import { defineComponent } from "vue";
import { container, content, detail,title } from './index.module.scss';
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'

export default defineComponent({
    name: 'NewDetail',
    data() {
        return {
        }
    },
    mounted() {
        console.log(window.location.search);
    },
    render() {
        return <div >
            <Header />
            <div class={container}>
                <div class={content}>
                    <div class={title}>新闻标题{window.location.search.split('?')[1]}</div>
                    <div class={detail}>

                    </div>
                </div>
            </div>
            <Footer />
        </div>;
    },
});