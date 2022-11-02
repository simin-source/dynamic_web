import { defineComponent, PropType } from "vue";
import { container, title } from './index.module.scss';
interface BannerInfo {
    bg: string;
    introduce?: string;
}

export default defineComponent({
    name: 'Banner',
    props: {
        title: {
            type: String,
            required: true,
        },
        info: {
            type:Object as PropType<BannerInfo>,
            required: true,
        },
    },
    render() {
        return <div class={container} style={{ backgroundImage: `url(${this.info.bg})` }}>
            <div class={title}>
                {this.title}
            </div >
        </div>;
    },
});