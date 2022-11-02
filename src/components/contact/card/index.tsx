import { defineComponent } from "vue";
import { container, content, card, address, people, phone, email } from './index.module.scss';

export default defineComponent({
    name: 'Card',
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={card}>
                    <div class={address}>浙江及华北地区</div>
                    <div class={people}>沈女士</div>
                    <div class={phone}><img src="/img/contact/phone.png" alt='宏沣'/>138 5788 5089</div>
                    <div class={email}><img src="/img/contact/email.png" alt='宏沣'/>ella@biovillage-nb.com</div>
                </div>
                <div class={card}>
                    <div class={address}>江苏及华南地区</div>
                    <div class={people}>冯女士</div>
                    <div class={phone}><img src="/img/contact/phone.png" alt='宏沣'/>139 1700 2533</div>
                    <div class={email}><img src="/img/contact/email.png" alt='宏沣'/>sarahfeng@biovillage-nb.com</div>
                </div>
                <div class={card}>
                    <div class={address}>浙江及华北地区</div>
                    <div class={people}>田女士</div>
                    <div class={phone}><img src="/img/contact/phone.png" alt='宏沣'/>151 0977 0715</div>
                    <div class={email}><img src="/img/contact/email.png" alt='宏沣'/>nona.tian@biovillage-nb.com</div>
                </div>
            </div>
        </div>;
    },
});