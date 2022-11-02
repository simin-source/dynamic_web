import { defineComponent } from "vue";
import Header from '@/views/header/index'
import Footer from '@/views/footer/index'
import Banner from '@/views/banner/index'
import Company from '@/components/group/company/index'

export default defineComponent({
    name: 'Group',
    render() {
        return <div>
            <Header />
            <Banner title="投资组合" info={{bg:'/img/banner/group.png'}}/>
            <Company/>
            <Footer />
        </div >;
    },
});