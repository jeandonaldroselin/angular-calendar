import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarResourceWeekViewComponent } from './calendar-resource-week-view.component';
import { CalendarResourceWeekViewHeaderComponent } from './calendar-resource-week-view-header.component';
import { CalendarResourceWeekViewEventComponent } from './calendar-resource-week-view-event.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarResourceWeekViewRowSegmentComponent } from './calendar-resource-week-view-row-segment.component';
import { PipeModule } from '../common/pipe.module';

export {
  CalendarResourceWeekViewComponent,
  CalendarResourceWeekViewBeforeRenderEvent,
} from './calendar-resource-week-view.component';
export {
  WeekViewAllDayEvent as CalendarWeekViewAllDayEvent,
  WeekViewAllDayEventRow as CalendarWeekViewAllDayEventRow,
  GetWeekViewArgs as CalendarGetWeekViewArgs,
} from 'calendar-utils';
export { getWeekViewPeriod } from '../common/util';

// needed for ivy, not part of the public api
export { CalendarResourceWeekViewHeaderComponent as ɵCalendarResourceWeekViewHeaderComponent } from './calendar-resource-week-view-header.component';
export { CalendarResourceWeekViewEventComponent as ɵCalendarResourceWeekViewEventComponent } from './calendar-resource-week-view-event.component';
export { CalendarResourceWeekViewRowSegmentComponent as ɵCalendarResourceWeekViewRowSegmentComponent } from './calendar-resource-week-view-row-segment.component';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule,
    PipeModule,
  ],
  declarations: [
    CalendarResourceWeekViewComponent,
    CalendarResourceWeekViewHeaderComponent,
    CalendarResourceWeekViewEventComponent,
    CalendarResourceWeekViewRowSegmentComponent,
  ],
  exports: [
    ResizableModule,
    DragAndDropModule,
    CalendarResourceWeekViewComponent,
    CalendarResourceWeekViewHeaderComponent,
    CalendarResourceWeekViewEventComponent,
    CalendarResourceWeekViewRowSegmentComponent,
  ],
})
export class CalendarResourceWeekModule {}
