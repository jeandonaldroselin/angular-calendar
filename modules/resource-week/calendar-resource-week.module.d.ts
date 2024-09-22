import * as i0 from "@angular/core";
import * as i1 from "./calendar-resource-week-view.component";
import * as i2 from "./calendar-resource-week-view-header.component";
import * as i3 from "./calendar-resource-week-view-event.component";
import * as i4 from "./calendar-resource-week-view-row-segment.component";
import * as i5 from "@angular/common";
import * as i6 from "angular-resizable-element";
import * as i7 from "angular-draggable-droppable";
import * as i8 from "../common/calendar-common.module";
import * as i9 from "../common/pipe.module";
export { CalendarResourceWeekViewComponent, CalendarResourceWeekViewBeforeRenderEvent, } from './calendar-resource-week-view.component';
export { WeekViewAllDayEvent as CalendarWeekViewAllDayEvent, WeekViewAllDayEventRow as CalendarWeekViewAllDayEventRow, GetWeekViewArgs as CalendarGetWeekViewArgs, } from 'calendar-utils';
export { getWeekViewPeriod } from '../common/util';
export { CalendarResourceWeekViewHeaderComponent as ɵCalendarResourceWeekViewHeaderComponent } from './calendar-resource-week-view-header.component';
export { CalendarResourceWeekViewEventComponent as ɵCalendarResourceWeekViewEventComponent } from './calendar-resource-week-view-event.component';
export { CalendarResourceWeekViewRowSegmentComponent as ɵCalendarResourceWeekViewRowSegmentComponent } from './calendar-resource-week-view-row-segment.component';
export declare class CalendarResourceWeekModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarResourceWeekModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CalendarResourceWeekModule, [typeof i1.CalendarResourceWeekViewComponent, typeof i2.CalendarResourceWeekViewHeaderComponent, typeof i3.CalendarResourceWeekViewEventComponent, typeof i4.CalendarResourceWeekViewRowSegmentComponent], [typeof i5.CommonModule, typeof i6.ResizableModule, typeof i7.DragAndDropModule, typeof i8.CalendarCommonModule, typeof i9.PipeModule], [typeof i6.ResizableModule, typeof i7.DragAndDropModule, typeof i1.CalendarResourceWeekViewComponent, typeof i2.CalendarResourceWeekViewHeaderComponent, typeof i3.CalendarResourceWeekViewEventComponent, typeof i4.CalendarResourceWeekViewRowSegmentComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CalendarResourceWeekModule>;
}
