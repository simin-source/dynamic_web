import { defineComponent, PropType } from "vue";
import { EVENTTYPE } from "../eventList";
import { container, content, detail, title } from './index.module.scss';

export default defineComponent({
    name: 'NewsDetail',
    props: {
        info: {
            type: Object as PropType<EVENTTYPE>,
            required: true,
        },
    },
    mounted(){
        let dom=document.getElementById('newsDetail');
        if(dom){
            dom.innerHTML=this.info.details;
        }
    },
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={title}>{this.info.title}</div>
                <div id='newsDetail' class={detail}/>
            </div>
        </div>;
    },
});