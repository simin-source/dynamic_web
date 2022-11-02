import { defineComponent } from "vue";
import { container, content, title, introduce, company, fund, solution } from './index.module.scss';

export default defineComponent({
    name: 'Introduce',
    render() {
        return <div class={container}>
            <div class={content}>
                <div class={introduce}>
                    <div class={title}>公司简介</div>
                    <div class={company}>
                        <div><div style={{display:'inline-block', width:'37px'}}></div>宁波宏洋投资管理有限公司（以下简称“宏沣投资”）成立于2018年，是一家风险投资和私募股权基金管理公司，以宁波杭州湾生命 科技园为依托，专注于初创期和成长期生物医药企业投资，深耕新药研发、细胞与基因治疗、眼科、医疗器械等多个领域，主要投资于“种子轮”、“天使轮”、“P-re-A轮”、“A轮”等早期阶段。</div>
                        <div><div style={{display:'inline-block',width:'37px'}}></div>宏沣投资拥有高水平的精英投资团队、强大的产业资源整合能力，凭借专业、专注和丰富的行业资源，为被投资企业提供发展战略、产品研发、业务拓展、人力资源等全方位的投后管理服务，在资本、产业、资源等全方位赋能，帮助企业快速成长，推动产业进步和社会发展。</div>
                    </div>
                </div>
                <div class={introduce}>
                    <div class={title}>基金简介</div>
                    <div class={fund}>
                        <div><div style={{display:'inline-block',width:'37px'}}></div>宏沣投资目前拥有两只基金，其中首只基金宁波久沣股权投资合伙企业（有限合伙）（以下简称“久沣”）成立于2019年，基金规模1亿元人民币。第二只基金宁波煜沣创业投资合伙企业（有限合伙）（以下简称“煜沣”）成立于2021年，基金规模为2亿元人民币。</div>
                        <img src="/img/about/fund.png" alt='宏沣' />
                    </div>
                </div>
                <div class={introduce}>
                    <div class={title}>投资策略</div>
                    <div class={solution}>
                        <div>投资理念：全球视野，聚焦中国。专注于投资优秀的生物医药企业，以VIC模式（VC+IP+CRO）开展运营，即风险投资、知识产权和研发外包服务三者结合开发新药的模式，达到资源高效整合，完成价值投资，实现投资增值。</div>
                        <div>投资领域：新药研发、细胞基因治疗、合生生物学、眼科及医疗器械等。</div>
                        <div>投资阶段：种子轮”、“天使轮”、“Pre-A轮”、“A轮”等早期阶段。</div>
                    </div>
                </div>
            </div>
        </div>;
    },
});