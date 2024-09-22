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
import * as i0 from "@angular/core";
export { CalendarResourceWeekViewComponent, } from './calendar-resource-week-view.component';
export { getWeekViewPeriod } from '../common/util';
// needed for ivy, not part of the public api
export { CalendarResourceWeekViewHeaderComponent as ɵCalendarResourceWeekViewHeaderComponent } from './calendar-resource-week-view-header.component';
export { CalendarResourceWeekViewEventComponent as ɵCalendarResourceWeekViewEventComponent } from './calendar-resource-week-view-event.component';
export { CalendarResourceWeekViewRowSegmentComponent as ɵCalendarResourceWeekViewRowSegmentComponent } from './calendar-resource-week-view-row-segment.component';
export class CalendarResourceWeekModule {
}
CalendarResourceWeekModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceWeekModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarResourceWeekModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceWeekModule, declarations: [CalendarResourceWeekViewComponent,
        CalendarResourceWeekViewHeaderComponent,
        CalendarResourceWeekViewEventComponent,
        CalendarResourceWeekViewRowSegmentComponent], imports: [CommonModule,
        ResizableModule,
        DragAndDropModule,
        CalendarCommonModule,
        PipeModule], exports: [ResizableModule,
        DragAndDropModule,
        CalendarResourceWeekViewComponent,
        CalendarResourceWeekViewHeaderComponent,
        CalendarResourceWeekViewEventComponent,
        CalendarResourceWeekViewRowSegmentComponent] });
CalendarResourceWeekModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceWeekModule, imports: [[
            CommonModule,
            ResizableModule,
            DragAndDropModule,
            CalendarCommonModule,
            PipeModule,
        ], ResizableModule,
        DragAndDropModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarResourceWeekModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmVzb3VyY2Utd2Vlay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWNhbGVuZGFyL3NyYy9tb2R1bGVzL3Jlc291cmNlLXdlZWsvY2FsZW5kYXItcmVzb3VyY2Utd2Vlay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFbkQsT0FBTyxFQUNMLGlDQUFpQyxHQUVsQyxNQUFNLHlDQUF5QyxDQUFDO0FBTWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELDZDQUE2QztBQUM3QyxPQUFPLEVBQUUsdUNBQXVDLElBQUksd0NBQXdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNySixPQUFPLEVBQUUsc0NBQXNDLElBQUksdUNBQXVDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsSixPQUFPLEVBQUUsMkNBQTJDLElBQUksNENBQTRDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQXlCbEssTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjt3SEFBMUIsMEJBQTBCLGlCQWRuQyxpQ0FBaUM7UUFDakMsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QywyQ0FBMkMsYUFWM0MsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLFVBQVUsYUFTVixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlDQUFpQztRQUNqQyx1Q0FBdUM7UUFDdkMsc0NBQXNDO1FBQ3RDLDJDQUEyQzt3SEFHbEMsMEJBQTBCLFlBdEI1QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixVQUFVO1NBQ1gsRUFRQyxlQUFlO1FBQ2YsaUJBQWlCOzJGQU9SLDBCQUEwQjtrQkF2QnRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osaUNBQWlDO3dCQUNqQyx1Q0FBdUM7d0JBQ3ZDLHNDQUFzQzt3QkFDdEMsMkNBQTJDO3FCQUM1QztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGlDQUFpQzt3QkFDakMsdUNBQXVDO3dCQUN2QyxzQ0FBc0M7d0JBQ3RDLDJDQUEyQztxQkFDNUM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlc2l6YWJsZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItcmVzaXphYmxlLWVsZW1lbnQnO1xuaW1wb3J0IHsgRHJhZ0FuZERyb3BNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJSZXNvdXJjZVdlZWtWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1yZXNvdXJjZS13ZWVrLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyUmVzb3VyY2VXZWVrVmlld0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmVzb3VyY2Utd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJSZXNvdXJjZVdlZWtWaWV3RXZlbnRDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXJlc291cmNlLXdlZWstdmlldy1ldmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDYWxlbmRhclJlc291cmNlV2Vla1ZpZXdSb3dTZWdtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1yZXNvdXJjZS13ZWVrLXZpZXctcm93LXNlZ21lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vcGlwZS5tb2R1bGUnO1xuXG5leHBvcnQge1xuICBDYWxlbmRhclJlc291cmNlV2Vla1ZpZXdDb21wb25lbnQsXG4gIENhbGVuZGFyUmVzb3VyY2VXZWVrVmlld0JlZm9yZVJlbmRlckV2ZW50LFxufSBmcm9tICcuL2NhbGVuZGFyLXJlc291cmNlLXdlZWstdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtcbiAgV2Vla1ZpZXdBbGxEYXlFdmVudCBhcyBDYWxlbmRhcldlZWtWaWV3QWxsRGF5RXZlbnQsXG4gIFdlZWtWaWV3QWxsRGF5RXZlbnRSb3cgYXMgQ2FsZW5kYXJXZWVrVmlld0FsbERheUV2ZW50Um93LFxuICBHZXRXZWVrVmlld0FyZ3MgYXMgQ2FsZW5kYXJHZXRXZWVrVmlld0FyZ3MsXG59IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmV4cG9ydCB7IGdldFdlZWtWaWV3UGVyaW9kIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG4vLyBuZWVkZWQgZm9yIGl2eSwgbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBhcGlcbmV4cG9ydCB7IENhbGVuZGFyUmVzb3VyY2VXZWVrVmlld0hlYWRlckNvbXBvbmVudCBhcyDJtUNhbGVuZGFyUmVzb3VyY2VXZWVrVmlld0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmVzb3VyY2Utd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQnO1xuZXhwb3J0IHsgQ2FsZW5kYXJSZXNvdXJjZVdlZWtWaWV3RXZlbnRDb21wb25lbnQgYXMgybVDYWxlbmRhclJlc291cmNlV2Vla1ZpZXdFdmVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmVzb3VyY2Utd2Vlay12aWV3LWV2ZW50LmNvbXBvbmVudCc7XG5leHBvcnQgeyBDYWxlbmRhclJlc291cmNlV2Vla1ZpZXdSb3dTZWdtZW50Q29tcG9uZW50IGFzIMm1Q2FsZW5kYXJSZXNvdXJjZVdlZWtWaWV3Um93U2VnbWVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItcmVzb3VyY2Utd2Vlay12aWV3LXJvdy1zZWdtZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVzaXphYmxlTW9kdWxlLFxuICAgIERyYWdBbmREcm9wTW9kdWxlLFxuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICAgIFBpcGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyUmVzb3VyY2VXZWVrVmlld0NvbXBvbmVudCxcbiAgICBDYWxlbmRhclJlc291cmNlV2Vla1ZpZXdIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJSZXNvdXJjZVdlZWtWaWV3RXZlbnRDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJSZXNvdXJjZVdlZWtWaWV3Um93U2VnbWVudENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJlc2l6YWJsZU1vZHVsZSxcbiAgICBEcmFnQW5kRHJvcE1vZHVsZSxcbiAgICBDYWxlbmRhclJlc291cmNlV2Vla1ZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJSZXNvdXJjZVdlZWtWaWV3SGVhZGVyQ29tcG9uZW50LFxuICAgIENhbGVuZGFyUmVzb3VyY2VXZWVrVmlld0V2ZW50Q29tcG9uZW50LFxuICAgIENhbGVuZGFyUmVzb3VyY2VXZWVrVmlld1Jvd1NlZ21lbnRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmVzb3VyY2VXZWVrTW9kdWxlIHt9XG4iXX0=