import { EventEmitter, TemplateRef } from '@angular/core';
import { CalendarEvent, WeekDay } from 'calendar-utils';
import * as i0 from "@angular/core";
export declare class CalendarResourceWeekViewHeaderComponent {
    days: WeekDay[];
    locale: string;
    customTemplate: TemplateRef<any>;
    dayHeaderClicked: EventEmitter<{
        day: WeekDay;
        sourceEvent: MouseEvent;
    }>;
    eventDropped: EventEmitter<{
        event: CalendarEvent;
        newStart: Date;
    }>;
    dragEnter: EventEmitter<{
        date: Date;
    }>;
    trackByWeekDayHeaderDate: (index: number, day: WeekDay) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarResourceWeekViewHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalendarResourceWeekViewHeaderComponent, "mwl-calendar-resource-week-view-header", never, { "days": "days"; "locale": "locale"; "customTemplate": "customTemplate"; }, { "dayHeaderClicked": "dayHeaderClicked"; "eventDropped": "eventDropped"; "dragEnter": "dragEnter"; }, never, never>;
}
