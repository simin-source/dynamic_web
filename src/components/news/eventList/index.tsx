import { defineComponent } from "vue";
import { container, content, list_box, time, jump_input, pagination_box } from './index.module.scss';
import { ElPagination } from 'element-plus';
import 'element-plus/es/components/pagination/style/css'
import './el-pagination.scss';

export default defineComponent({
    name: 'EventList',
    data() {
        return {
            list: [
                {
                    title: '事件一',
                    search: 'even1',
                    time: '2022-11-1'
                },
                {
                    title: '事件二',
                    search: 'even2',
                    time: '2022-11-1'
                },
                {
                    title: '事件三',
                    search: 'even3',
                    time: '2022-11-1'
                },
                {
                    title: '事件四',
                    search: 'even4',
                    time: '2022-11-1'
                },
                {
                    title: '事件五',
                    search: 'even5',
                    time: '2022-11-1'
                },
                {
                    title: '事件六',
                    search: 'even6',
                    time: '2022-11-1'
                },
            ],
            currentPage: 2,
            pageSize: 10,
            pageTotal: 50,
            inputValue: 0,
            minPage: 1,
            maxPage: 1,
        }
    },
    mounted() {
        console.log(this.pageTotal % this.pageSize);
        console.log(Math.round(this.pageTotal / this.pageSize));
        if (this.pageTotal < this.pageSize) {
            this.maxPage = 1;
        } else if (this.pageTotal % this.pageSize > 0) {
            this.maxPage = Math.round(this.pageTotal / this.pageSize) + 1;
        } else {
            this.maxPage = Math.round(this.pageTotal / this.pageSize);
        }
    },
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={list_box}>
                    {this.list?.map(item => {
                        return <div>
                            <a href={`${window.location.origin}/newsDetail/?${item.search}`}> {item.title}</a>
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