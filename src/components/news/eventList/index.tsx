import { defineComponent } from "vue";
import { container, content, list_box, time, jump_input, pagination_box, active } from './index.module.scss';
import { ElPagination } from 'element-plus';
import 'element-plus/es/components/pagination/style/css'
import './el-pagination.scss';
import { websiteList } from "@/request/request";

export interface EVENTTYPE {
    title: string;
    details: string;
    time: string;
}

export default defineComponent({
    name: 'EventList',
    data() {
        return {
            list: [] as EVENTTYPE[],
            currentPage: 1,
            pageSize: 10,
            pageTotal: 1,
            inputValue: 0,
            minPage: 1,
            maxPage: 1,
        }
    },
    emits: ['getCurrentNews'],
    watch: {
        currentPage(value) {
            this.getEventList();
        }
    },
    mounted() {
        this.getEventList();
        const io = new IntersectionObserver(entires => {
            entires.forEach(item => {
                if (item.intersectionRatio === 1 || item.intersectionRatio > 0) {
                    item.target.classList.add(active);
                }
            });
        });
        this.query('.top').forEach(item => {
            io.observe(item);
        });
    },
    methods: {
        query(selector: string) {
            return Array.from(document.querySelectorAll(selector));
        },
        formatTimeStamp(timeStamp: number) { // 时间戳转时间字符,10位,精确到秒
            const date = new Date(timeStamp * 1000)
            const Y = date.getFullYear() // 年
            const M = date.getMonth() + 1 // 月
            const D = date.getDate() // 日
            return `${Y}-${M}-${D}`
        },
        getEventList() {
            websiteList({ page: this.currentPage, size: this.pageSize }).then((res: any) => {
                if (res?.page && res?.count) {
                    this.currentPage = res.page;
                    this.pageTotal = res.count;
                    if (this.pageTotal < this.pageSize) {
                        this.maxPage = 1;
                    } else if (this.pageTotal % this.pageSize > 0) {
                        this.maxPage = Math.round(this.pageTotal / this.pageSize) + 1;
                    } else {
                        this.maxPage = Math.round(this.pageTotal / this.pageSize);
                    }
                }
                if (res?.list) {
                    this.list = res.list.sort((a: any, b: any) => b.ptime - a.ptime).map((item: any) => {
                        return {
                            title: item.title,
                            details: item.details,
                            time: this.formatTimeStamp(item.ptime),
                        }
                    })
                }
            })
        }
    },
    render() {
        return <div class={container}>
            <div class={`top ${content}`}>
                <div class={list_box}>
                    {this.list?.map(item => {
                        return <div>
                            <div onClick={() => {
                                this.$emit('getCurrentNews', item);
                            }}> {item.title}</div>
                            <div class={time}> {item.time}</div>
                        </div>
                    })}
                </div>
                <div class={`flex-end el-pagination ${pagination_box}`} >
                    <ElPagination
                        v-models={[[this.currentPage, 'currentPage'], [this.pageSize, 'pageSize']]}
                        layout="prev, pager, next"
                        total={this.pageTotal}
                    >
                    </ElPagination >
                    <div class={`flex-center ${jump_input}`}>
                        <span>跳至</span>
                        <input
                            type="text"
                            value={this.inputValue}
                            onBlur={(e: any) => {
                                if (this.minPage > Number(e.target.value)) {
                                    this.currentPage = 0;
                                    this.inputValue = 0; //设置为0，为了让这两个变量刷新
                                    this.currentPage = this.minPage;
                                    this.inputValue = this.minPage;
                                } else if (this.maxPage > Number(e.target.value)) {
                                    this.currentPage = Number(e.target.value);
                                } else {
                                    this.currentPage = 0;
                                    this.inputValue = 0; //设置为0，为了让这两个变量刷新
                                    this.currentPage = this.maxPage;
                                    this.inputValue = this.maxPage;
                                }
                            }} />
                        <span>页</span>
                    </div>
                </div>
            </div>
        </div>;
    },
});