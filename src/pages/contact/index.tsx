import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import Card from '@/components/contact/card'
import Banner from '@/views/banner/index'

export default defineComponent({
    name: 'Contact',
    render() {
        return <div>
            <Header />
            <Banner title="联系我们" info={{bg:'/img/banner/contact.png'}}/>
            <Card/>
            <Footer />
        </div >;
    },
});