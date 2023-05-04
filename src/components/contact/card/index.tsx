import { defineComponent } from "vue";
import { active, container, content, card, address, people, phone, email } from './index.module.scss';

export default defineComponent({
    name: 'Card',
    mounted() {
        const io = new IntersectionObserver(entires => {
            entires.forEach(item => {
                if (item.intersectionRatio === 1 || item.intersectionRatio > 0) {
                    item.target.classList.add(active);
                }
            });
        });
        this.query('.top').forEach((item, index) => {
            setTimeout(() => {
                io.observe(item);
            }, 500 * index);
        });
    },
    methods: {
        query(selector: string) {
            return Array.from(document.querySelectorAll(selector));
        },
    },
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={`top ${card}`}>
                    <div class={address}>浙江及华北地区</div>
                    <div class={people}>沈女士</div>
                    <div class={phone}><img src="../img/contact/phone.png" alt='宏沣' />138 5788 5089</div>
                    <div class={email}><img src="../img/contact/email.png" alt='宏沣' />ella@biovillage-nb.com</div>
                </div>
                <div class={`top ${card}`}>
                    <div class={address}>上海及华东地区</div>
                    <div class={people}>冯女士</div>
                    <div class={phone}><img src="../img/contact/phone.png" alt='宏沣' />139 1700 2533</div>
                    <div class={email}><img src="../img/contact/email.png" alt='宏沣' />sarahfeng@biovillage-nb.com</div>
                </div>
                <div style={{ width: '385px', height: '263px' }}></div>
            </div>
        </div>;
    },
});