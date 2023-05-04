import { defineComponent } from "vue";
import { container, content, title, company_list } from './index.module.scss';

export default defineComponent({
    name: 'Company',
    data() {
        return {
            url: window.location.origin
        }
    },
    mouted() {
        if (process.env.NODE_ENV === 'test') {
            this.url = window.location.origin + 'hongfeng';
        }
    },
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={title}>被投公司</div>
                <div class={company_list}>
                    <a class="flex-center" href="../company/?combireg"><img src="../img/group/company1.png" alt='宏沣' /></a>
                    <a class="flex-center" href="../company/?newbay"><img src="../img/group/company2.png" alt='宏沣' /></a>
                    <a class="flex-center" href="../company/?maohang"><img src="../img/group/company3.png" alt='宏沣' /></a>
                    <a class="flex-center" href="../company/?jianxin"><img src="../img/group/company4.png" alt='宏沣' /></a>
                    <a class="flex-center" href="../company/?iview"><img src="../img/group/company5.png" alt='宏沣' /></a>
                    <a class="flex-center" href="../company/?shifang"><img src="../img/group/company6.png" alt='宏沣' /></a>
                    <a class="flex-center" href="../company/?redbud"><img src="../img/group/company7.png" alt='宏沣' /></a>
                    <a class="flex-center" href="../company/?hantech"><img src="../img/group/company8.png" alt='宏沣' /></a>
                </div>
            </div>
        </div>;
    },
});