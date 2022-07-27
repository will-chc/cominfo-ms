import css from './index.module.css'
import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
function MyWorkList() {
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <div className={`${css.worklist_container} ${css.clearfix}`}>
            <div className={css.worklist_title}>我的日程</div>
            <div className={css.left}>
                <div className={`${css.item} ${css.clearfix}`}>
                    <div className={css.icon}></div>
                    <div className={css.content}>
                        <div className={css.title}>222222</div>
                        <div className={css.time}>全天</div>
                    </div>
                </div>
                <div className={`${css.item} ${css.clearfix}`}>
                    <div className={css.icon}></div>
                    <div className={css.content}>
                        <div className={css.title}>222222</div>
                        <div className={css.time}>全天</div>
                    </div>
                </div><div className={`${css.item} ${css.clearfix}`}>
                    <div className={css.icon}></div>
                    <div className={css.content}>
                        <div className={css.title}>222222</div>
                        <div className={css.time}>全天</div>
                    </div>
                </div>
            </div>
            <div className={css.right}>
                <div className={css.site_calendar_demo_card}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>
        </div>
    )
}
export default MyWorkList;