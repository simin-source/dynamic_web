import { defineComponent } from "vue";
import { container, content, detail } from './index.module.scss';
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'

export default defineComponent({
    name: 'CompanyDetail',
    data() {
        return {
            img: '',
        }
    },
    mounted() {
        switch (window.location.search) {
            case '?combireg':
                this.img = 'combireg.png'
                break;
            case '?newbay':
                this.img = 'newbay.png'
                break;
            case '?maohang':
                this.img = 'maohang.png'
                break;
            case '?jianxin':
                this.img = 'jianxin.png'
                break;
            case '?iview':
                this.img = 'iview.png'
                break;
            case '?shifang':
                this.img = 'shifang.png'
                break;
            case '?redbud':
                this.img = 'redbud.png'
                break;
            case '?hantech':
                this.img = 'hantech.png'
                break;
            default:
                this.img = ''
                break;
        }
    },
    render() {
        return <div >
            <Header />
            <div class={container}>
                <div class={content}>
                    <img class={detail} src={`/img/company/${this.img}`} alt='宏沣' />
                </div>
            </div>
            <Footer />
        </div>;
    },
});