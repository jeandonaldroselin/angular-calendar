import { NgModule } from '@angular/core';
import { CommonModule, I18nPluralPipe } from '@angular/common';
import { CalendarEventActionsComponent } from './calendar-event-actions.component';
import { CalendarEventTitleComponent } from './calendar-event-title.component';
import { CalendarTooltipDirective, CalendarTooltipWindowComponent, } from './calendar-tooltip.directive';
import { CalendarPreviousViewDirective } from './calendar-previous-view.directive';
import { CalendarNextViewDirective } from './calendar-next-view.directive';
import { CalendarTodayDirective } from './calendar-today.directive';
import { CalendarDatePipe } from './calendar-date.pipe';
import { CalendarEventTitlePipe } from './calendar-event-title.pipe';
import { ClickDirective } from './click.directive';
import { KeydownEnterDirective } from './keydown-enter.directive';
import { CalendarEventTitleFormatter } from './calendar-event-title-formatter.provider';
import { CalendarDateFormatter } from './calendar-date-formatter.provider';
import { CalendarUtils } from './calendar-utils.provider';
import { CalendarA11y } from './calendar-a11y.provider';
import { CalendarA11yPipe } from './calendar-a11y.pipe';
import * as i0 from "@angular/core";
export * from './calendar-event-title-formatter.provider';
export * from './calendar-moment-date-formatter.provider';
export * from './calendar-native-date-formatter.provider';
export * from './calendar-angular-date-formatter.provider';
export * from './calendar-date-formatter.provider';
export * from './calendar-utils.provider';
export * from './calendar-a11y.provider';
export * from './calendar-a11y.interface';
export * from './calendar-date-formatter.interface';
export * from './calendar-event-times-changed-event.interface';
export * from '../../date-adapters/date-adapter';
export * from './calendar-view.enum';
// needed for ivy, not part of the public api
export { CalendarEventActionsComponent as ɵCalendarEventActionsComponent } from './calendar-event-actions.component';
export { CalendarEventTitleComponent as ɵCalendarEventTitleComponent } from './calendar-event-title.component';
export { CalendarTooltipDirective as ɵCalendarTooltipDirective, CalendarTooltipWindowComponent as ɵCalendarTooltipWindowComponent, } from './calendar-tooltip.directive';
export { CalendarPreviousViewDirective as ɵCalendarPreviousViewDirective } from './calendar-previous-view.directive';
export { CalendarNextViewDirective as ɵCalendarNextViewDirective } from './calendar-next-view.directive';
export { CalendarTodayDirective as ɵCalendarTodayDirective } from './calendar-today.directive';
export { CalendarDatePipe as ɵCalendarDatePipe } from './calendar-date.pipe';
export { CalendarEventTitlePipe as ɵCalendarEventTitlePipe } from './calendar-event-title.pipe';
export { ClickDirective as ɵClickDirective } from './click.directive';
export { KeydownEnterDirective as ɵKeydownEnterDirective } from './keydown-enter.directive';
export { CalendarA11yPipe as ɵCalendarA11yPipe } from './calendar-a11y.pipe';
export { DAYS_OF_WEEK, } from 'calendar-utils';
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
export class CalendarCommonModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarCommonModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils,
                config.a11y || CalendarA11y,
            ],
        };
    }
}
CalendarCommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarCommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarCommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarCommonModule, declarations: [CalendarEventActionsComponent,
        CalendarEventTitleComponent,
        CalendarTooltipWindowComponent,
        CalendarTooltipDirective,
        CalendarPreviousViewDirective,
        CalendarNextViewDirective,
        CalendarTodayDirective,
        CalendarDatePipe,
        CalendarEventTitlePipe,
        CalendarA11yPipe,
        ClickDirective,
        KeydownEnterDirective], imports: [CommonModule], exports: [CalendarEventActionsComponent,
        CalendarEventTitleComponent,
        CalendarTooltipWindowComponent,
        CalendarTooltipDirective,
        CalendarPreviousViewDirective,
        CalendarNextViewDirective,
        CalendarTodayDirective,
        CalendarDatePipe,
        CalendarEventTitlePipe,
        CalendarA11yPipe,
        ClickDirective,
        KeydownEnterDirective] });
CalendarCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarCommonModule, providers: [I18nPluralPipe], imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CalendarCommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        CalendarA11yPipe,
                        ClickDirective,
                        KeydownEnterDirective,
                    ],
                    imports: [CommonModule],
                    exports: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        CalendarA11yPipe,
                        ClickDirective,
                        KeydownEnterDirective,
                    ],
                    providers: [I18nPluralPipe],
                    entryComponents: [CalendarTooltipWindowComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItY2FsZW5kYXIvc3JjL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixHQUMvQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFB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UixZQUFZLEVBQUU7d0JBQ1osNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsd0JBQXdCO3dCQUN4Qiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AsNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsd0JBQXdCO3dCQUN4Qiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLHFCQUFxQjtxQkFDdEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixlQUFlLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgSTE4blBsdXJhbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSxcbiAgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50LFxufSBmcm9tICcuL2NhbGVuZGFyLXRvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhbGVuZGFyUHJldmlvdXNWaWV3RGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci1wcmV2aW91cy12aWV3LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhck5leHRWaWV3RGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci1uZXh0LXZpZXcuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhbGVuZGFyVG9kYXlEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLXRvZGF5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhckRhdGVQaXBlIH0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLnBpcGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudFRpdGxlUGlwZSB9IGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGl0bGUucGlwZSc7XG5pbXBvcnQgeyBDbGlja0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xpY2suZGlyZWN0aXZlJztcbmltcG9ydCB7IEtleWRvd25FbnRlckRpcmVjdGl2ZSB9IGZyb20gJy4va2V5ZG93bi1lbnRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhclV0aWxzIH0gZnJvbSAnLi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhckExMXkgfSBmcm9tICcuL2NhbGVuZGFyLWExMXkucHJvdmlkZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJBMTF5UGlwZSB9IGZyb20gJy4vY2FsZW5kYXItYTExeS5waXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhck1vZHVsZUNvbmZpZyB7XG4gIGV2ZW50VGl0bGVGb3JtYXR0ZXI/OiBQcm92aWRlcjtcbiAgZGF0ZUZvcm1hdHRlcj86IFByb3ZpZGVyO1xuICB1dGlscz86IFByb3ZpZGVyO1xuICBhMTF5PzogUHJvdmlkZXI7XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGl0bGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItbW9tZW50LWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItbmF0aXZlLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItYW5ndWxhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItdXRpbHMucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1hMTF5LnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItYTExeS5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aW1lcy1jaGFuZ2VkLWV2ZW50LmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLXZpZXcuZW51bSc7XG5cbi8vIG5lZWRlZCBmb3IgaXZ5LCBub3QgcGFydCBvZiB0aGUgcHVibGljIGFwaVxuZXhwb3J0IHsgQ2FsZW5kYXJFdmVudEFjdGlvbnNDb21wb25lbnQgYXMgybVDYWxlbmRhckV2ZW50QWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZXZlbnQtYWN0aW9ucy5jb21wb25lbnQnO1xuZXhwb3J0IHsgQ2FsZW5kYXJFdmVudFRpdGxlQ29tcG9uZW50IGFzIMm1Q2FsZW5kYXJFdmVudFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS5jb21wb25lbnQnO1xuZXhwb3J0IHtcbiAgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlIGFzIMm1Q2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlLFxuICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQgYXMgybVDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQsXG59IGZyb20gJy4vY2FsZW5kYXItdG9vbHRpcC5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgQ2FsZW5kYXJQcmV2aW91c1ZpZXdEaXJlY3RpdmUgYXMgybVDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSB9IGZyb20gJy4vY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgQ2FsZW5kYXJOZXh0Vmlld0RpcmVjdGl2ZSBhcyDJtUNhbGVuZGFyTmV4dFZpZXdEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLW5leHQtdmlldy5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSBhcyDJtUNhbGVuZGFyVG9kYXlEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLXRvZGF5LmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBDYWxlbmRhckRhdGVQaXBlIGFzIMm1Q2FsZW5kYXJEYXRlUGlwZSB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS5waXBlJztcbmV4cG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZVBpcGUgYXMgybVDYWxlbmRhckV2ZW50VGl0bGVQaXBlIH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS5waXBlJztcbmV4cG9ydCB7IENsaWNrRGlyZWN0aXZlIGFzIMm1Q2xpY2tEaXJlY3RpdmUgfSBmcm9tICcuL2NsaWNrLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBLZXlkb3duRW50ZXJEaXJlY3RpdmUgYXMgybVLZXlkb3duRW50ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2tleWRvd24tZW50ZXIuZGlyZWN0aXZlJztcbmV4cG9ydCB7IENhbGVuZGFyQTExeVBpcGUgYXMgybVDYWxlbmRhckExMXlQaXBlIH0gZnJvbSAnLi9jYWxlbmRhci1hMTF5LnBpcGUnO1xuXG5leHBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBDYWxlbmRhclJlc291cmNlLFxuICBDYWxlbmRhclJlc291cmNlSWRUeXBlLFxuICBFdmVudEFjdGlvbiBhcyBDYWxlbmRhckV2ZW50QWN0aW9uLFxuICBEQVlTX09GX1dFRUssXG4gIFZpZXdQZXJpb2QgYXMgQ2FsZW5kYXJWaWV3UGVyaW9kLFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbi8qKlxuICogSW1wb3J0IHRoaXMgbW9kdWxlIHRvIGlmIHlvdSdyZSBqdXN0IHVzaW5nIGEgc2luZ3VsYXIgdmlldyBhbmQgd2FudCB0byBzYXZlIG9uIGJ1bmRsZSBzaXplLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlLCBDYWxlbmRhck1vbnRoTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLmZvclJvb3QoKSxcbiAqICAgICBDYWxlbmRhck1vbnRoTW9kdWxlXG4gKiAgIF1cbiAqIH0pXG4gKiBjbGFzcyBNeU1vZHVsZSB7fVxuICogYGBgXG4gKlxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYWxlbmRhckV2ZW50QWN0aW9uc0NvbXBvbmVudCxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50LFxuICAgIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSxcbiAgICBDYWxlbmRhck5leHRWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyVG9kYXlEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJEYXRlUGlwZSxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVQaXBlLFxuICAgIENhbGVuZGFyQTExeVBpcGUsXG4gICAgQ2xpY2tEaXJlY3RpdmUsXG4gICAgS2V5ZG93bkVudGVyRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIENhbGVuZGFyRXZlbnRBY3Rpb25zQ29tcG9uZW50LFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCxcbiAgICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlLFxuICAgIENhbGVuZGFyUHJldmlvdXNWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyTmV4dFZpZXdEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSxcbiAgICBDYWxlbmRhckRhdGVQaXBlLFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZVBpcGUsXG4gICAgQ2FsZW5kYXJBMTF5UGlwZSxcbiAgICBDbGlja0RpcmVjdGl2ZSxcbiAgICBLZXlkb3duRW50ZXJEaXJlY3RpdmUsXG4gIF0sXG4gIHByb3ZpZGVyczogW0kxOG5QbHVyYWxQaXBlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkYXRlQWRhcHRlcjogUHJvdmlkZXIsXG4gICAgY29uZmlnOiBDYWxlbmRhck1vZHVsZUNvbmZpZyA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FsZW5kYXJDb21tb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGRhdGVBZGFwdGVyLFxuICAgICAgICBjb25maWcuZXZlbnRUaXRsZUZvcm1hdHRlciB8fCBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIsXG4gICAgICAgIGNvbmZpZy5kYXRlRm9ybWF0dGVyIHx8IENhbGVuZGFyRGF0ZUZvcm1hdHRlcixcbiAgICAgICAgY29uZmlnLnV0aWxzIHx8IENhbGVuZGFyVXRpbHMsXG4gICAgICAgIGNvbmZpZy5hMTF5IHx8IENhbGVuZGFyQTExeSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19