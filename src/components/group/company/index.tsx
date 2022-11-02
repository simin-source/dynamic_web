import { defineComponent } from "vue";
import { container, content, title, company_list } from './index.module.scss';

export default defineComponent({
    name: 'Company',
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={title}>投资公司</div>
                <div class={company_list}>
                    <img src="/img/group/company1.png" onClick={() => { window.location.href = `${window.location.origin}/company/?combireg`; }} alt='宏沣' />
                    <img src="/img/group/company2.png" onClick={() => { window.location.href = `${window.location.origin}/company/?newbay`; }} alt='宏沣' />
                    <img src="/img/group/company3.png" onClick={() => { window.location.href = `${window.location.origin}/company/?maohang`; }} alt='宏沣' />
                    <img src="/img/group/company4.png" onClick={() => { window.location.href = `${window.location.origin}/company/?jianxin`; }} alt='宏沣' />
                    <img src="/img/group/company5.png" onClick={() => { window.location.href = `${window.location.origin}/company/?iview`; }} alt='宏沣' />
                    <img src="/img/group/company6.png" onClick={() => { window.location.href = `${window.location.origin}/company/?shifang`; }} alt='宏沣' />
                    <img src="/img/group/company7.png" onClick={() => { window.location.href = `${window.location.origin}/company/?redbud`; }} alt='宏沣' />
                    <img src="/img/group/company8.png" onClick={() => { window.location.href = `${window.location.origin}/company/?hantech`; }} alt='宏沣' />
                </div>
            </div>
        </div>;
    },
});