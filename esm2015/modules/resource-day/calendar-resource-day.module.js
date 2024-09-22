import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarResourceDayViewComponent } from './calendar-resource-day-view.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarResourceWeekModule } from '../resource-week/calendar-resource-week.module';
import * as i0 from "@angular/core";
export { CalendarResourceDayViewComponent, } from './calendar-resource-day-view.component';
export class CalendarResourceDayModule {
}
CalendarResourceDayModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceDayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarResourceDayModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceDayModule, declarations: [CalendarResourceDayViewComponent], imports: [CommonModule, CalendarCommonModule, CalendarResourceWeekModule], exports: [CalendarResourceDayViewComponent] });
CalendarResourceDayModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceDayModule, imports: [[CommonModule, CalendarCommonModule, CalendarResourceWeekModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceDayModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CalendarCommonModule, CalendarResourceWeekModule],
                    declarations: [CalendarResourceDayViewComponent],
                    exports: [CalendarResourceDayViewComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmVzb3VyY2UtZGF5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItY2FsZW5kYXIvc3JjL21vZHVsZXMvcmVzb3VyY2UtZGF5L2NhbGVuZGFyLXJlc291cmNlLWRheS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBRTVGLE9BQU8sRUFDTCxnQ0FBZ0MsR0FFakMsTUFBTSx3Q0FBd0MsQ0FBQztBQU9oRCxNQUFNLE9BQU8seUJBQXlCOztzSEFBekIseUJBQXlCO3VIQUF6Qix5QkFBeUIsaUJBSHJCLGdDQUFnQyxhQURyQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLGFBRTlELGdDQUFnQzt1SEFFL0IseUJBQXlCLFlBSjNCLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDOzJGQUk5RCx5QkFBeUI7a0JBTHJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDO29CQUN6RSxZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDaEQsT0FBTyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDYWxlbmRhclJlc291cmNlRGF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmVzb3VyY2UtZGF5LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJSZXNvdXJjZVdlZWtNb2R1bGUgfSBmcm9tICcuLi9yZXNvdXJjZS13ZWVrL2NhbGVuZGFyLXJlc291cmNlLXdlZWsubW9kdWxlJztcblxuZXhwb3J0IHtcbiAgQ2FsZW5kYXJSZXNvdXJjZURheVZpZXdDb21wb25lbnQsXG4gIENhbGVuZGFyUmVzb3VyY2VEYXlWaWV3QmVmb3JlUmVuZGVyRXZlbnQsXG59IGZyb20gJy4vY2FsZW5kYXItcmVzb3VyY2UtZGF5LXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2FsZW5kYXJDb21tb25Nb2R1bGUsIENhbGVuZGFyUmVzb3VyY2VXZWVrTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FsZW5kYXJSZXNvdXJjZURheVZpZXdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FsZW5kYXJSZXNvdXJjZURheVZpZXdDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJlc291cmNlRGF5TW9kdWxlIHt9XG4iXX0=