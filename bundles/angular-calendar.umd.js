(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('positioning'), require('calendar-utils'), require('angular-draggable-droppable'), require('@angular/animations'), require('angular-resizable-element')) :
    typeof define === 'function' && define.amd ? define('angular-calendar', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'positioning', 'calendar-utils', 'angular-draggable-droppable', '@angular/animations', 'angular-resizable-element'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-calendar'] = {}, global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators, global.positioning, global.calendarUtils, global['angular-draggable-droppable'], global.ng.animations, global['angular-resizable-element']));
}(this, (function (exports, i0, i1, rxjs, operators, positioning, calendarUtils, i2, animations, i9) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);

    var ClickDirective = /** @class */ (function () {
        function ClickDirective(renderer, elm, document) {
            this.renderer = renderer;
            this.elm = elm;
            this.document = document;
            this.clickListenerDisabled = false;
            this.click = new i0.EventEmitter(); // eslint-disable-line
            this.destroy$ = new rxjs.Subject();
        }
        ClickDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.clickListenerDisabled) {
                this.listen()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (event) {
                    event.stopPropagation();
                    _this.click.emit(event);
                });
            }
        };
        ClickDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
        };
        ClickDirective.prototype.listen = function () {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                return _this.renderer.listen(_this.elm.nativeElement, 'click', function (event) {
                    observer.next(event);
                });
            });
        };
        return ClickDirective;
    }());
    ClickDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ClickDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: i1.DOCUMENT }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ClickDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.3", type: ClickDirective, selector: "[mwlClick]", inputs: { clickListenerDisabled: "clickListenerDisabled" }, outputs: { click: "mwlClick" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ClickDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlClick]',
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, propDecorators: { clickListenerDisabled: [{
                    type: i0.Input
                }], click: [{
                    type: i0.Output,
                    args: ['mwlClick']
                }] } });

    var KeydownEnterDirective = /** @class */ (function () {
        function KeydownEnterDirective(host, ngZone, renderer) {
            this.host = host;
            this.ngZone = ngZone;
            this.renderer = renderer;
            this.keydown = new i0.EventEmitter(); // eslint-disable-line
            this.keydownListener = null;
        }
        KeydownEnterDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.keydownListener = _this.renderer.listen(_this.host.nativeElement, 'keydown', function (event) {
                    if (event.keyCode === 13 ||
                        event.which === 13 ||
                        event.key === 'Enter') {
                        event.preventDefault();
                        event.stopPropagation();
                        _this.ngZone.run(function () {
                            _this.keydown.emit(event);
                        });
                    }
                });
            });
        };
        KeydownEnterDirective.prototype.ngOnDestroy = function () {
            if (this.keydownListener !== null) {
                this.keydownListener();
                this.keydownListener = null;
            }
        };
        return KeydownEnterDirective;
    }());
    KeydownEnterDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KeydownEnterDirective, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.NgZone }, { token: i0__namespace.Renderer2 }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    KeydownEnterDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.3", type: KeydownEnterDirective, selector: "[mwlKeydownEnter]", outputs: { keydown: "mwlKeydownEnter" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: KeydownEnterDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlKeydownEnter]',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.NgZone }, { type: i0__namespace.Renderer2 }]; }, propDecorators: { keydown: [{
                    type: i0.Output,
                    args: ['mwlKeydownEnter']
                }] } });

    /**
     * This class is responsible for adding accessibility to the calendar.
     * You may override any of its methods via angulars DI to suit your requirements.
     * For example:
     *
     * ```typescript
     * import { A11yParams, CalendarA11y } from 'angular-calendar';
     * import { formatDate, I18nPluralPipe } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * // adding your own a11y params
     * export interface CustomA11yParams extends A11yParams {
     *   isDrSuess?: boolean;
     * }
     *
     * @Injectable()
     * export class CustomCalendarA11y extends CalendarA11y {
     *   constructor(protected i18nPlural: I18nPluralPipe) {
     *     super(i18nPlural);
     *   }
     *
     *   // overriding a function
     *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
     *     if (isDrSuess) {
     *       return `
     *         ${formatDate(date, 'EEEE MMMM d', locale)}
     *          Today you are you! That is truer than true! There is no one alive
     *          who is you-er than you!
     *       `;
     *     }
     *   }
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *  provide: CalendarA11y,
     *  useClass: CustomCalendarA11y
     * }]
     * ```
     */
    var CalendarA11y = /** @class */ (function () {
        function CalendarA11y(i18nPlural) {
            this.i18nPlural = i18nPlural;
        }
        /**
         * Aria label for the badges/date of a cell
         * @example: `Saturday October 19 1 event click to expand`
         */
        CalendarA11y.prototype.monthCell = function (_a) {
            var day = _a.day, locale = _a.locale;
            if (day.badgeTotal > 0) {
                return "\n        " + i1.formatDate(day.date, 'EEEE MMMM d', locale) + ",\n        " + this.i18nPlural.transform(day.badgeTotal, {
                    '=0': 'No events',
                    '=1': 'One event',
                    other: '# events',
                }) + ",\n         click to expand\n      ";
            }
            else {
                return "" + i1.formatDate(day.date, 'EEEE MMMM d', locale);
            }
        };
        /**
         * Aria label for the open day events start landmark
         * @example: `Saturday October 19 expanded view`
         */
        CalendarA11y.prototype.openDayEventsLandmark = function (_a) {
            var date = _a.date, locale = _a.locale;
            return "\n      Beginning of expanded view for " + i1.formatDate(date, 'EEEE MMMM dd', locale) + "\n    ";
        };
        /**
         * Aria label for alert that a day in the month view was expanded
         * @example: `Saturday October 19 expanded`
         */
        CalendarA11y.prototype.openDayEventsAlert = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'EEEE MMMM dd', locale) + " expanded";
        };
        /**
         * Descriptive aria label for an event
         * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
         */
        CalendarA11y.prototype.eventDescription = function (_a) {
            var event = _a.event, locale = _a.locale;
            if (event.allDay === true) {
                return this.allDayEventDescription({ event: event, locale: locale });
            }
            var aria = "\n      " + i1.formatDate(event.start, 'EEEE MMMM dd', locale) + ",\n      " + event.title + ", from " + i1.formatDate(event.start, 'hh:mm a', locale) + "\n    ";
            if (event.end) {
                return aria + (" to " + i1.formatDate(event.end, 'hh:mm a', locale));
            }
            return aria;
        };
        /**
         * Descriptive aria label for an all day event
         * @example:
         * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
         */
        CalendarA11y.prototype.allDayEventDescription = function (_a) {
            var event = _a.event, locale = _a.locale;
            var aria = "\n      " + event.title + ", event spans multiple days:\n      start time " + i1.formatDate(event.start, 'MMMM dd hh:mm a', locale) + "\n    ";
            if (event.end) {
                return (aria + (", stop time " + i1.formatDate(event.end, 'MMMM d hh:mm a', locale)));
            }
            return aria + ", no stop time";
        };
        /**
         * Aria label for the calendar event actions icons
         * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
         */
        CalendarA11y.prototype.actionButtonLabel = function (_a) {
            var action = _a.action;
            return action.a11yLabel;
        };
        /**
         * @returns {number} Tab index to be given to month cells
         */
        CalendarA11y.prototype.monthCellTabIndex = function () {
            return 0;
        };
        /**
         * @returns true if the events inside the month cell should be aria-hidden
         */
        CalendarA11y.prototype.hideMonthCellEvents = function () {
            return true;
        };
        /**
         * @returns true if event titles should be aria-hidden (global)
         */
        CalendarA11y.prototype.hideEventTitle = function () {
            return true;
        };
        /**
         * @returns true if hour segments in the week view should be aria-hidden
         */
        CalendarA11y.prototype.hideWeekHourSegment = function () {
            return true;
        };
        /**
         * @returns true if hour segments in the day view should be aria-hidden
         */
        CalendarA11y.prototype.hideDayHourSegment = function () {
            return true;
        };
        return CalendarA11y;
    }());
    CalendarA11y.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarA11y, deps: [{ token: i1__namespace.I18nPluralPipe }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CalendarA11y.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarA11y });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarA11y, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.I18nPluralPipe }]; } });

    /**
     * This pipe is primarily for rendering aria labels. Example usage:
     * ```typescript
     * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
     * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
     * ```
     */
    var CalendarA11yPipe = /** @class */ (function () {
        function CalendarA11yPipe(calendarA11y, locale) {
            this.calendarA11y = calendarA11y;
            this.locale = locale;
        }
        CalendarA11yPipe.prototype.transform = function (a11yParams, method) {
            a11yParams.locale = a11yParams.locale || this.locale;
            if (typeof this.calendarA11y[method] === 'undefined') {
                var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
                throw new Error(method + " is not a valid a11y method. Can only be one of " + allowedMethods.join(', '));
            }
            return this.calendarA11y[method](a11yParams);
        };
        return CalendarA11yPipe;
    }());
    CalendarA11yPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarA11yPipe, deps: [{ token: CalendarA11y }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    CalendarA11yPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarA11yPipe, name: "calendarA11y" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarA11yPipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'calendarA11y',
                    }]
            }], ctorParameters: function () {
            return [{ type: CalendarA11y }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        } });

    var CalendarEventActionsComponent = /** @class */ (function () {
        function CalendarEventActionsComponent() {
            this.trackByActionId = function (index, action) { return action.id ? action.id : action; };
        }
        return CalendarEventActionsComponent;
    }());
    CalendarEventActionsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarEventActionsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarEventActionsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarEventActionsComponent, selector: "mwl-calendar-event-actions", inputs: { event: "event", customTemplate: "customTemplate" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: KeydownEnterDirective, selector: "[mwlKeydownEnter]", outputs: ["mwlKeydownEnter"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarA11y": CalendarA11yPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarEventActionsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-event-actions',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { event: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }] } });

    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { Injectable } from '@angular/core';
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * @Injectable()
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */
    var CalendarEventTitleFormatter = /** @class */ (function () {
        function CalendarEventTitleFormatter() {
        }
        /**
         * The month view event title.
         */
        CalendarEventTitleFormatter.prototype.month = function (event, title) {
            return event.title;
        };
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.monthTooltip = function (event, title) {
            return event.title;
        };
        /**
         * The week view event title.
         */
        CalendarEventTitleFormatter.prototype.week = function (event, title) {
            return event.title;
        };
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.weekTooltip = function (event, title) {
            return event.title;
        };
        /**
         * The day view event title.
         */
        CalendarEventTitleFormatter.prototype.day = function (event, title) {
            return event.title;
        };
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.dayTooltip = function (event, title) {
            return event.title;
        };
        return CalendarEventTitleFormatter;
    }());

    var CalendarEventTitlePipe = /** @class */ (function () {
        function CalendarEventTitlePipe(calendarEventTitle) {
            this.calendarEventTitle = calendarEventTitle;
        }
        CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
            return this.calendarEventTitle[titleType](event, title);
        };
        return CalendarEventTitlePipe;
    }());
    CalendarEventTitlePipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarEventTitlePipe, deps: [{ token: CalendarEventTitleFormatter }], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    CalendarEventTitlePipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarEventTitlePipe, name: "calendarEventTitle" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarEventTitlePipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'calendarEventTitle',
                    }]
            }], ctorParameters: function () { return [{ type: CalendarEventTitleFormatter }]; } });

    var CalendarEventTitleComponent = /** @class */ (function () {
        function CalendarEventTitleComponent() {
        }
        return CalendarEventTitleComponent;
    }());
    CalendarEventTitleComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarEventTitleComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarEventTitleComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarEventTitleComponent, selector: "mwl-calendar-event-title", inputs: { event: "event", customTemplate: "customTemplate", view: "view" }, ngImport: i0__namespace, template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarEventTitle": CalendarEventTitlePipe, "calendarA11y": CalendarA11yPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarEventTitleComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-event-title',
                        template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { event: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], view: [{
                    type: i0.Input
                }] } });

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
        return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
        function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
        function verb(n, f) { if (g[n]) {
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); };
            if (f)
                i[n] = f(i[n]);
        } }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose, inner;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
                if (async)
                    inner = dispose;
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            if (inner)
                dispose = function () { try {
                    inner.call(this);
                }
                catch (e) {
                    return Promise.reject(e);
                } };
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1)
                        return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async)
                            return s |= 2, Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                    }
                    else
                        s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1)
                return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var CalendarTooltipWindowComponent = /** @class */ (function () {
        function CalendarTooltipWindowComponent() {
        }
        return CalendarTooltipWindowComponent;
    }());
    CalendarTooltipWindowComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarTooltipWindowComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarTooltipWindowComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarTooltipWindowComponent, selector: "mwl-calendar-tooltip-window", inputs: { contents: "contents", placement: "placement", event: "event", customTemplate: "customTemplate" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarTooltipWindowComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-tooltip-window',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { contents: [{
                    type: i0.Input
                }], placement: [{
                    type: i0.Input
                }], event: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }] } });
    var CalendarTooltipDirective = /** @class */ (function () {
        function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document // eslint-disable-line
        ) {
            this.elementRef = elementRef;
            this.injector = injector;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.document = document;
            this.placement = 'auto'; // eslint-disable-line  @angular-eslint/no-input-rename
            this.delay = null; // eslint-disable-line  @angular-eslint/no-input-rename
            this.cancelTooltipDelay$ = new rxjs.Subject();
            this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
        }
        CalendarTooltipDirective.prototype.ngOnChanges = function (changes) {
            if (this.tooltipRef &&
                (changes.contents || changes.customTemplate || changes.event)) {
                this.tooltipRef.instance.contents = this.contents;
                this.tooltipRef.instance.customTemplate = this.customTemplate;
                this.tooltipRef.instance.event = this.event;
                this.tooltipRef.changeDetectorRef.markForCheck();
                if (!this.contents) {
                    this.hide();
                }
            }
        };
        CalendarTooltipDirective.prototype.ngOnDestroy = function () {
            this.hide();
        };
        CalendarTooltipDirective.prototype.onMouseOver = function () {
            var _this = this;
            var delay$ = this.delay === null ? rxjs.of('now') : rxjs.timer(this.delay);
            delay$.pipe(operators.takeUntil(this.cancelTooltipDelay$)).subscribe(function () {
                _this.show();
            });
        };
        CalendarTooltipDirective.prototype.onMouseOut = function () {
            this.hide();
        };
        CalendarTooltipDirective.prototype.show = function () {
            var _this = this;
            if (!this.tooltipRef && this.contents) {
                this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
                this.tooltipRef.instance.contents = this.contents;
                this.tooltipRef.instance.customTemplate = this.customTemplate;
                this.tooltipRef.instance.event = this.event;
                if (this.appendToBody) {
                    this.document.body.appendChild(this.tooltipRef.location.nativeElement);
                }
                requestAnimationFrame(function () {
                    _this.positionTooltip();
                });
            }
        };
        CalendarTooltipDirective.prototype.hide = function () {
            if (this.tooltipRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
                this.tooltipRef = null;
            }
            this.cancelTooltipDelay$.next();
        };
        CalendarTooltipDirective.prototype.positionTooltip = function (previousPositions) {
            if (previousPositions === void 0) { previousPositions = []; }
            if (this.tooltipRef) {
                this.tooltipRef.changeDetectorRef.detectChanges();
                this.tooltipRef.instance.placement = positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
                // keep re-positioning the tooltip until the arrow position doesn't make a difference
                if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                    this.positionTooltip(__spreadArray(__spreadArray([], __read(previousPositions)), [
                        this.tooltipRef.instance.placement,
                    ]));
                }
            }
        };
        return CalendarTooltipDirective;
    }());
    CalendarTooltipDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarTooltipDirective, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.Injector }, { token: i0__namespace.Renderer2 }, { token: i0__namespace.ComponentFactoryResolver }, { token: i0__namespace.ViewContainerRef }, { token: i1.DOCUMENT }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    CalendarTooltipDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.3", type: CalendarTooltipDirective, selector: "[mwlCalendarTooltip]", inputs: { contents: ["mwlCalendarTooltip", "contents"], placement: ["tooltipPlacement", "placement"], customTemplate: ["tooltipTemplate", "customTemplate"], event: ["tooltipEvent", "event"], appendToBody: ["tooltipAppendToBody", "appendToBody"], delay: ["tooltipDelay", "delay"] }, host: { listeners: { "mouseenter": "onMouseOver()", "mouseleave": "onMouseOut()" } }, usesOnChanges: true, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarTooltipDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlCalendarTooltip]',
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Injector }, { type: i0__namespace.Renderer2 }, { type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ViewContainerRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, propDecorators: { contents: [{
                    type: i0.Input,
                    args: ['mwlCalendarTooltip']
                }], placement: [{
                    type: i0.Input,
                    args: ['tooltipPlacement']
                }], customTemplate: [{
                    type: i0.Input,
                    args: ['tooltipTemplate']
                }], event: [{
                    type: i0.Input,
                    args: ['tooltipEvent']
                }], appendToBody: [{
                    type: i0.Input,
                    args: ['tooltipAppendToBody']
                }], delay: [{
                    type: i0.Input,
                    args: ['tooltipDelay']
                }], onMouseOver: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], onMouseOut: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] } });

    exports.CalendarView = void 0;
    (function (CalendarView) {
        CalendarView["Month"] = "month";
        CalendarView["Week"] = "week";
        CalendarView["Day"] = "day";
        CalendarView["ResourceWeek"] = "resourceWeek";
        CalendarView["ResourceDay"] = "resourceDay";
    })(exports.CalendarView || (exports.CalendarView = {}));

    var validateEvents = function (events) {
        var warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.warn.apply(console, __spreadArray(['angular-calendar'], __read(args)));
        };
        return calendarUtils.validateEvents(events, warn);
    };
    function isInsideLeftAndRight(outer, inner) {
        return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
            Math.floor(inner.left) <= Math.ceil(outer.right) &&
            Math.floor(outer.left) <= Math.ceil(inner.right) &&
            Math.floor(inner.right) <= Math.ceil(outer.right));
    }
    function isInsideTopAndBottom(outer, inner) {
        return (Math.floor(outer.top) <= Math.ceil(inner.top) &&
            Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
            Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
            Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
    }
    function isInside(outer, inner) {
        return (isInsideLeftAndRight(outer, inner) && isInsideTopAndBottom(outer, inner));
    }
    function roundToNearest(amount, precision) {
        return Math.round(amount / precision) * precision;
    }
    var trackByEventId = function (index, event) { return event.id ? event.id : event; };
    var trackByWeekDayHeaderDate = function (index, day) { return day.date.toISOString(); };
    var trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
    var trackByHour = function (index, hour) { return hour.segments[0].date.toISOString(); };
    var trackByWeekAllDayEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
    var trackByWeekTimeEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
    var trackByResourceWeekViewRowEvent = function (index, resourceWeekViewRowEvent) { return resourceWeekViewRowEvent.event.id
        ? resourceWeekViewRowEvent.event.id
        : resourceWeekViewRowEvent.event; };
    var trackByRowColumn = function (index, column) { return (column ? column.date.toISOString() : index); };
    var MINUTES_IN_HOUR = 60;
    function getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration) {
        return (hourDuration || MINUTES_IN_HOUR) / (hourSegments * hourSegmentHeight);
    }
    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize, hourDuration) {
        var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
        var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration);
        return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }
    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
        if (event.end) {
            return event.end;
        }
        else {
            return dateAdapter.addMinutes(event.start, minimumMinutes);
        }
    }
    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
        var daysCounter = 0;
        var daysToAdd = 0;
        var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
        var result = date;
        while (daysToAdd <= Math.abs(days)) {
            result = changeDays(date, daysCounter);
            var day = dateAdapter.getDay(result);
            if (excluded.indexOf(day) === -1) {
                daysToAdd++;
            }
            daysCounter++;
        }
        return result;
    }
    function isDraggedWithinPeriod(newStart, newEnd, period) {
        var end = newEnd || newStart;
        return ((period.start <= newStart && newStart <= period.end) ||
            (period.start <= end && end <= period.end));
    }
    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
        return (dropEvent.dropData &&
            dropEvent.dropData.event &&
            (dropEvent.dropData.calendarId !== calendarId ||
                (dropEvent.dropData.event.allDay && !allDay) ||
                (!dropEvent.dropData.event.allDay && allDay)));
    }
    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
        if (excluded === void 0) { excluded = []; }
        var viewStart = daysInWeek
            ? dateAdapter.startOfDay(viewDate)
            : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        var endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
            viewStart < endOfWeek) {
            viewStart = dateAdapter.addDays(viewStart, 1);
        }
        if (daysInWeek) {
            var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
            return { viewStart: viewStart, viewEnd: viewEnd };
        }
        else {
            var viewEnd = endOfWeek;
            while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
                viewEnd > viewStart) {
                viewEnd = dateAdapter.subDays(viewEnd, 1);
            }
            return { viewStart: viewStart, viewEnd: viewEnd };
        }
    }
    function isWithinThreshold(_a) {
        var x = _a.x, y = _a.y;
        var DRAG_THRESHOLD = 1;
        return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }

    var DateAdapter = /** @class */ (function () {
        function DateAdapter() {
        }
        return DateAdapter;
    }());

    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */
    var CalendarPreviousViewDirective = /** @class */ (function () {
        function CalendarPreviousViewDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Days to skip when going back by 1 day
             */
            this.excludeDays = [];
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new i0.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarPreviousViewDirective.prototype.onClick = function () {
            var subFn = {
                day: this.dateAdapter.subDays,
                week: this.dateAdapter.subWeeks,
                month: this.dateAdapter.subMonths,
            }[this.view];
            if (this.view === exports.CalendarView.Day) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
            }
            else if (this.view === exports.CalendarView.Week && this.daysInWeek) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
            }
            else {
                this.viewDateChange.emit(subFn(this.viewDate, 1));
            }
        };
        return CalendarPreviousViewDirective;
    }());
    CalendarPreviousViewDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarPreviousViewDirective, deps: [{ token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    CalendarPreviousViewDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.3", type: CalendarPreviousViewDirective, selector: "[mwlCalendarPreviousView]", inputs: { view: "view", viewDate: "viewDate", excludeDays: "excludeDays", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarPreviousViewDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlCalendarPreviousView]',
                    }]
            }], ctorParameters: function () { return [{ type: DateAdapter }]; }, propDecorators: { view: [{
                    type: i0.Input
                }], viewDate: [{
                    type: i0.Input
                }], excludeDays: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], viewDateChange: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click']
                }] } });

    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */
    var CalendarNextViewDirective = /** @class */ (function () {
        function CalendarNextViewDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Days to skip when going forward by 1 day
             */
            this.excludeDays = [];
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new i0.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarNextViewDirective.prototype.onClick = function () {
            var addFn = {
                day: this.dateAdapter.addDays,
                week: this.dateAdapter.addWeeks,
                month: this.dateAdapter.addMonths,
            }[this.view];
            if (this.view === exports.CalendarView.Day) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
            }
            else if (this.view === exports.CalendarView.Week && this.daysInWeek) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
            }
            else {
                this.viewDateChange.emit(addFn(this.viewDate, 1));
            }
        };
        return CalendarNextViewDirective;
    }());
    CalendarNextViewDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarNextViewDirective, deps: [{ token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    CalendarNextViewDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.3", type: CalendarNextViewDirective, selector: "[mwlCalendarNextView]", inputs: { view: "view", viewDate: "viewDate", excludeDays: "excludeDays", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarNextViewDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlCalendarNextView]',
                    }]
            }], ctorParameters: function () { return [{ type: DateAdapter }]; }, propDecorators: { view: [{
                    type: i0.Input
                }], viewDate: [{
                    type: i0.Input
                }], excludeDays: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], viewDateChange: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click']
                }] } });

    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */
    var CalendarTodayDirective = /** @class */ (function () {
        function CalendarTodayDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new i0.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarTodayDirective.prototype.onClick = function () {
            this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        };
        return CalendarTodayDirective;
    }());
    CalendarTodayDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarTodayDirective, deps: [{ token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    CalendarTodayDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.3", type: CalendarTodayDirective, selector: "[mwlCalendarToday]", inputs: { viewDate: "viewDate" }, outputs: { viewDateChange: "viewDateChange" }, host: { listeners: { "click": "onClick()" } }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarTodayDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlCalendarToday]',
                    }]
            }], ctorParameters: function () { return [{ type: DateAdapter }]; }, propDecorators: { viewDate: [{
                    type: i0.Input
                }], viewDateChange: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click']
                }] } });

    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */
    var CalendarAngularDateFormatter = /** @class */ (function () {
        function CalendarAngularDateFormatter(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarAngularDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'EEEE', locale);
        };
        /**
         * The month view cell day number
         */
        CalendarAngularDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'd', locale);
        };
        /**
         * The month view title
         */
        CalendarAngularDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'LLLL y', locale);
        };
        /**
         * The week view header week day labels
         */
        CalendarAngularDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'EEEE', locale);
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'MMM d', locale);
        };
        /**
         * The week view title
         */
        CalendarAngularDateFormatter.prototype.weekViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) { return i1.formatDate(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale); };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarAngularDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'h a', locale);
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarAngularDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'h a', locale);
        };
        /**
         * The day view title
         */
        CalendarAngularDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return i1.formatDate(date, 'EEEE, MMMM d, y', locale);
        };
        return CalendarAngularDateFormatter;
    }());
    CalendarAngularDateFormatter.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarAngularDateFormatter, deps: [{ token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CalendarAngularDateFormatter.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarAngularDateFormatter });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarAngularDateFormatter, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: DateAdapter }]; } });

    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * @Injectable()
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */
    var CalendarDateFormatter = /** @class */ (function (_super) {
        __extends(CalendarDateFormatter, _super);
        function CalendarDateFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CalendarDateFormatter;
    }(CalendarAngularDateFormatter));
    CalendarDateFormatter.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDateFormatter, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CalendarDateFormatter.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDateFormatter });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDateFormatter, decorators: [{
                type: i0.Injectable
            }] });

    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */
    var CalendarDatePipe = /** @class */ (function () {
        function CalendarDatePipe(dateFormatter, locale) {
            this.dateFormatter = dateFormatter;
            this.locale = locale;
        }
        CalendarDatePipe.prototype.transform = function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
            if (locale === void 0) { locale = this.locale; }
            if (weekStartsOn === void 0) { weekStartsOn = 0; }
            if (excludeDays === void 0) { excludeDays = []; }
            if (typeof this.dateFormatter[method] === 'undefined') {
                var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
                throw new Error(method + " is not a valid date formatter. Can only be one of " + allowedMethods.join(', '));
            }
            return this.dateFormatter[method]({
                date: date,
                locale: locale,
                weekStartsOn: weekStartsOn,
                excludeDays: excludeDays,
                daysInWeek: daysInWeek,
            });
        };
        return CalendarDatePipe;
    }());
    CalendarDatePipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDatePipe, deps: [{ token: CalendarDateFormatter }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    CalendarDatePipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDatePipe, name: "calendarDate" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDatePipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'calendarDate',
                    }]
            }], ctorParameters: function () {
            return [{ type: CalendarDateFormatter }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        } });

    var CalendarUtils = /** @class */ (function () {
        function CalendarUtils(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        CalendarUtils.prototype.getMonthView = function (args) {
            return calendarUtils.getMonthView(this.dateAdapter, args);
        };
        CalendarUtils.prototype.getWeekViewHeader = function (args) {
            return calendarUtils.getWeekViewHeader(this.dateAdapter, args);
        };
        CalendarUtils.prototype.getWeekView = function (args) {
            return calendarUtils.getWeekView(this.dateAdapter, args);
        };
        CalendarUtils.prototype.getResourceWeekView = function (args) {
            return calendarUtils.getResourceWeekView(this.dateAdapter, args);
        };
        return CalendarUtils;
    }());
    CalendarUtils.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarUtils, deps: [{ token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CalendarUtils.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarUtils });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarUtils, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: DateAdapter }]; } });

    var MOMENT = new i0.InjectionToken('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */
    var CalendarMomentDateFormatter = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarMomentDateFormatter(moment, dateAdapter) {
            this.moment = moment;
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd');
        };
        /**
         * The month view cell day number
         */
        CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('D');
        };
        /**
         * The month view title
         */
        CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('MMMM YYYY');
        };
        /**
         * The week view header week day labels
         */
        CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd');
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('MMM D');
        };
        /**
         * The week view title
         */
        CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
            var _this = this;
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) { return _this.moment(dateToFormat)
                .locale(locale)
                .format('MMM D' + (showYear ? ', YYYY' : '')); };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarMomentDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('ha');
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('ha');
        };
        /**
         * The day view title
         */
        CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd, LL'); // dddd = Thursday
        }; // LL = locale-dependent Month Day, Year
        return CalendarMomentDateFormatter;
    }());
    CalendarMomentDateFormatter.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMomentDateFormatter, deps: [{ token: MOMENT }, { token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CalendarMomentDateFormatter.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMomentDateFormatter });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMomentDateFormatter, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [MOMENT]
                        }] }, { type: DateAdapter }];
        } });

    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */
    var CalendarNativeDateFormatter = /** @class */ (function () {
        function CalendarNativeDateFormatter(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
        };
        /**
         * The month view cell day number
         */
        CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
        };
        /**
         * The month view title
         */
        CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                year: 'numeric',
                month: 'long',
            }).format(date);
        };
        /**
         * The week view header week day labels
         */
        CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
            }).format(date);
        };
        /**
         * The week view title
         */
        CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) { return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined,
            }).format(dateToFormat); };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarNativeDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
        };
        /**
         * The day view title
         */
        CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                weekday: 'long',
            }).format(date);
        };
        return CalendarNativeDateFormatter;
    }());
    CalendarNativeDateFormatter.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarNativeDateFormatter, deps: [{ token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CalendarNativeDateFormatter.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarNativeDateFormatter });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarNativeDateFormatter, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: DateAdapter }]; } });

    exports.CalendarEventTimesChangedEventType = void 0;
    (function (CalendarEventTimesChangedEventType) {
        CalendarEventTimesChangedEventType["Drag"] = "drag";
        CalendarEventTimesChangedEventType["Drop"] = "drop";
        CalendarEventTimesChangedEventType["Resize"] = "resize";
    })(exports.CalendarEventTimesChangedEventType || (exports.CalendarEventTimesChangedEventType = {}));

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
    var CalendarCommonModule = /** @class */ (function () {
        function CalendarCommonModule() {
        }
        CalendarCommonModule.forRoot = function (dateAdapter, config) {
            if (config === void 0) { config = {}; }
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
        };
        return CalendarCommonModule;
    }());
    CalendarCommonModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarCommonModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CalendarCommonModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarCommonModule, declarations: [CalendarEventActionsComponent,
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
            KeydownEnterDirective], imports: [i1.CommonModule], exports: [CalendarEventActionsComponent,
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
    CalendarCommonModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarCommonModule, providers: [i1.I18nPluralPipe], imports: [[i1.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarCommonModule, decorators: [{
                type: i0.NgModule,
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
                        imports: [i1.CommonModule],
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
                        providers: [i1.I18nPluralPipe],
                        entryComponents: [CalendarTooltipWindowComponent],
                    }]
            }] });

    var CalendarMonthViewHeaderComponent = /** @class */ (function () {
        function CalendarMonthViewHeaderComponent() {
            this.columnHeaderClicked = new i0.EventEmitter();
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        }
        return CalendarMonthViewHeaderComponent;
    }());
    CalendarMonthViewHeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthViewHeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarMonthViewHeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarMonthViewHeaderComponent, selector: "mwl-calendar-month-view-header", inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { columnHeaderClicked: "columnHeaderClicked" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarDate": CalendarDatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthViewHeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-month-view-header',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { days: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], columnHeaderClicked: [{
                    type: i0.Output
                }] } });

    var CalendarMonthCellComponent = /** @class */ (function () {
        function CalendarMonthCellComponent() {
            this.highlightDay = new i0.EventEmitter();
            this.unhighlightDay = new i0.EventEmitter();
            this.eventClicked = new i0.EventEmitter();
            this.trackByEventId = trackByEventId;
            this.validateDrag = isWithinThreshold;
        }
        return CalendarMonthCellComponent;
    }());
    CalendarMonthCellComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthCellComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarMonthCellComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarMonthCellComponent, selector: "mwl-calendar-month-cell", inputs: { day: "day", openDay: "openDay", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", customTemplate: "customTemplate", tooltipTemplate: "tooltipTemplate", tooltipDelay: "tooltipDelay" }, outputs: { highlightDay: "highlightDay", unhighlightDay: "unhighlightDay", eventClicked: "eventClicked" }, host: { properties: { "class.cal-past": "day.isPast", "class.cal-today": "day.isToday", "class.cal-future": "day.isFuture", "class.cal-weekend": "day.isWeekend", "class.cal-in-month": "day.inMonth", "class.cal-out-month": "!day.inMonth", "class.cal-has-events": "day.events.length > 0", "class.cal-open": "day === openDay", "class.cal-event-highlight": "!!day.backgroundColor" }, classAttribute: "cal-cell cal-day-cell" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.DraggableDirective, selector: "[mwlDraggable]", inputs: ["dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "showOriginalElementWhileDragging", "validateDrag", "dragCursor", "dragActiveClass", "ghostElementAppendTo", "ghostElementTemplate", "touchStartLongPress", "autoScroll"], outputs: ["dragPointerDown", "dragStart", "ghostElementCreated", "dragging", "dragEnd"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: CalendarTooltipDirective, selector: "[mwlCalendarTooltip]", inputs: ["mwlCalendarTooltip", "tooltipPlacement", "tooltipTemplate", "tooltipEvent", "tooltipAppendToBody", "tooltipDelay"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarA11y": CalendarA11yPipe, "calendarDate": CalendarDatePipe, "calendarEventTitle": CalendarEventTitlePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthCellComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-month-cell',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            class: 'cal-cell cal-day-cell',
                            '[class.cal-past]': 'day.isPast',
                            '[class.cal-today]': 'day.isToday',
                            '[class.cal-future]': 'day.isFuture',
                            '[class.cal-weekend]': 'day.isWeekend',
                            '[class.cal-in-month]': 'day.inMonth',
                            '[class.cal-out-month]': '!day.inMonth',
                            '[class.cal-has-events]': 'day.events.length > 0',
                            '[class.cal-open]': 'day === openDay',
                            '[class.cal-event-highlight]': '!!day.backgroundColor',
                        },
                    }]
            }], propDecorators: { day: [{
                    type: i0.Input
                }], openDay: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], highlightDay: [{
                    type: i0.Output
                }], unhighlightDay: [{
                    type: i0.Output
                }], eventClicked: [{
                    type: i0.Output
                }] } });

    var collapseAnimation = animations.trigger('collapse', [
        animations.state('void', animations.style({
            height: 0,
            overflow: 'hidden',
            'padding-top': 0,
            'padding-bottom': 0,
        })),
        animations.state('*', animations.style({
            height: '*',
            overflow: 'hidden',
            'padding-top': '*',
            'padding-bottom': '*',
        })),
        animations.transition('* => void', animations.animate('150ms ease-out')),
        animations.transition('void => *', animations.animate('150ms ease-in')),
    ]);
    var CalendarOpenDayEventsComponent = /** @class */ (function () {
        function CalendarOpenDayEventsComponent() {
            this.isOpen = false;
            this.eventClicked = new i0.EventEmitter();
            this.trackByEventId = trackByEventId;
            this.validateDrag = isWithinThreshold;
        }
        return CalendarOpenDayEventsComponent;
    }());
    CalendarOpenDayEventsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarOpenDayEventsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarOpenDayEventsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarOpenDayEventsComponent, selector: "mwl-calendar-open-day-events", inputs: { locale: "locale", isOpen: "isOpen", events: "events", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", date: "date" }, outputs: { eventClicked: "eventClicked" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, components: [{ type: CalendarEventTitleComponent, selector: "mwl-calendar-event-title", inputs: ["event", "customTemplate", "view"] }, { type: CalendarEventActionsComponent, selector: "mwl-calendar-event-actions", inputs: ["event", "customTemplate"] }], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.DraggableDirective, selector: "[mwlDraggable]", inputs: ["dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "showOriginalElementWhileDragging", "validateDrag", "dragCursor", "dragActiveClass", "ghostElementAppendTo", "ghostElementTemplate", "touchStartLongPress", "autoScroll"], outputs: ["dragPointerDown", "dragStart", "ghostElementCreated", "dragging", "dragEnd"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: KeydownEnterDirective, selector: "[mwlKeydownEnter]", outputs: ["mwlKeydownEnter"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarA11y": CalendarA11yPipe }, animations: [collapseAnimation] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarOpenDayEventsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-open-day-events',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                        animations: [collapseAnimation],
                    }]
            }], propDecorators: { locale: [{
                    type: i0.Input
                }], isOpen: [{
                    type: i0.Input
                }], events: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], date: [{
                    type: i0.Input
                }], eventClicked: [{
                    type: i0.Output
                }] } });

    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */
    var CalendarMonthViewComponent = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
            var _this = this;
            this.cdr = cdr;
            this.utils = utils;
            this.dateAdapter = dateAdapter;
            /**
             * An array of events to display on view.
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
             */
            this.excludeDays = [];
            /**
             * Whether the events list for the day of the `viewDate` option is visible or not
             */
            this.activeDayIsOpen = false;
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * An output that will be called before the view is rendered for the current month.
             * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
             */
            this.beforeViewRender = new i0.EventEmitter();
            /**
             * Called when the day cell is clicked
             */
            this.dayClicked = new i0.EventEmitter();
            /**
             * Called when the event title is clicked
             */
            this.eventClicked = new i0.EventEmitter();
            /**
             * Called when a header week day is clicked. Returns ISO day number.
             */
            this.columnHeaderClicked = new i0.EventEmitter();
            /**
             * Called when an event is dragged and dropped
             */
            this.eventTimesChanged = new i0.EventEmitter();
            /**
             * @hidden
             */
            this.trackByRowOffset = function (index, offset) { return _this.view.days
                .slice(offset, _this.view.totalDaysVisibleInWeek)
                .map(function (day) { return day.date.toISOString(); })
                .join('-'); };
            /**
             * @hidden
             */
            this.trackByDate = function (index, day) { return day.date.toISOString(); };
            this.locale = locale;
        }
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.refreshAll();
                    _this.cdr.markForCheck();
                });
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
            var refreshBody = changes.viewDate ||
                changes.events ||
                changes.excludeDays ||
                changes.weekendDays;
            if (refreshHeader) {
                this.refreshHeader();
            }
            if (changes.events) {
                validateEvents(this.events);
            }
            if (refreshBody) {
                this.refreshBody();
            }
            if (refreshHeader || refreshBody) {
                this.emitBeforeViewRender();
            }
            if (changes.activeDayIsOpen ||
                changes.viewDate ||
                changes.events ||
                changes.excludeDays ||
                changes.activeDay) {
                this.checkActiveDayIsOpen();
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
            this.view.days.forEach(function (day) {
                if (isHighlighted && day.events.indexOf(event) > -1) {
                    day.backgroundColor =
                        (event.color && event.color.secondary) || '#D1E8FF';
                }
                else {
                    delete day.backgroundColor;
                }
            });
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.eventDropped = function (droppedOn, event, draggedFrom) {
            if (droppedOn !== draggedFrom) {
                var year = this.dateAdapter.getYear(droppedOn.date);
                var month = this.dateAdapter.getMonth(droppedOn.date);
                var date = this.dateAdapter.getDate(droppedOn.date);
                var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
                var newEnd = void 0;
                if (event.end) {
                    var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                    newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
                }
                this.eventTimesChanged.emit({
                    event: event,
                    newStart: newStart,
                    newEnd: newEnd,
                    day: droppedOn,
                    type: exports.CalendarEventTimesChangedEventType.Drop,
                });
            }
        };
        CalendarMonthViewComponent.prototype.refreshHeader = function () {
            this.columnHeaders = this.utils.getWeekViewHeader({
                viewDate: this.viewDate,
                weekStartsOn: this.weekStartsOn,
                excluded: this.excludeDays,
                weekendDays: this.weekendDays,
            });
        };
        CalendarMonthViewComponent.prototype.refreshBody = function () {
            this.view = this.utils.getMonthView({
                events: this.events,
                viewDate: this.viewDate,
                weekStartsOn: this.weekStartsOn,
                excluded: this.excludeDays,
                weekendDays: this.weekendDays,
            });
        };
        CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
            var _this = this;
            if (this.activeDayIsOpen === true) {
                var activeDay_1 = this.activeDay || this.viewDate;
                this.openDay = this.view.days.find(function (day) { return _this.dateAdapter.isSameDay(day.date, activeDay_1); });
                var index = this.view.days.indexOf(this.openDay);
                this.openRowIndex =
                    Math.floor(index / this.view.totalDaysVisibleInWeek) *
                        this.view.totalDaysVisibleInWeek;
            }
            else {
                this.openRowIndex = null;
                this.openDay = null;
            }
        };
        CalendarMonthViewComponent.prototype.refreshAll = function () {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
            this.checkActiveDayIsOpen();
        };
        CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
            if (this.columnHeaders && this.view) {
                this.beforeViewRender.emit({
                    header: this.columnHeaders,
                    body: this.view.days,
                    period: this.view.period,
                });
            }
        };
        return CalendarMonthViewComponent;
    }());
    CalendarMonthViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthViewComponent, deps: [{ token: i0__namespace.ChangeDetectorRef }, { token: CalendarUtils }, { token: i0.LOCALE_ID }, { token: DateAdapter }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarMonthViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarMonthViewComponent, selector: "mwl-calendar-month-view", inputs: { viewDate: "viewDate", events: "events", excludeDays: "excludeDays", activeDayIsOpen: "activeDayIsOpen", activeDay: "activeDay", refresh: "refresh", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", cellTemplate: "cellTemplate", openDayEventsTemplate: "openDayEventsTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays" }, outputs: { beforeViewRender: "beforeViewRender", dayClicked: "dayClicked", eventClicked: "eventClicked", columnHeaderClicked: "columnHeaderClicked", eventTimesChanged: "eventTimesChanged" }, usesOnChanges: true, ngImport: i0__namespace, template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div role=\"row\" class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              role=\"gridcell\"\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  ", isInline: true, components: [{ type: CalendarMonthViewHeaderComponent, selector: "mwl-calendar-month-view-header", inputs: ["days", "locale", "customTemplate"], outputs: ["columnHeaderClicked"] }, { type: CalendarMonthCellComponent, selector: "mwl-calendar-month-cell", inputs: ["day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "customTemplate", "tooltipTemplate", "tooltipDelay"], outputs: ["highlightDay", "unhighlightDay", "eventClicked"] }, { type: CalendarOpenDayEventsComponent, selector: "mwl-calendar-open-day-events", inputs: ["locale", "isOpen", "events", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "date"], outputs: ["eventClicked"] }], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.DroppableDirective, selector: "[mwlDroppable]", inputs: ["dragOverClass", "dragActiveClass", "validateDrop"], outputs: ["dragEnter", "dragLeave", "dragOver", "drop"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: KeydownEnterDirective, selector: "[mwlKeydownEnter]", outputs: ["mwlKeydownEnter"] }], pipes: { "calendarA11y": CalendarA11yPipe, "slice": i1__namespace.SlicePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-month-view',
                        template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div role=\"row\" class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              role=\"gridcell\"\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  ",
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.ChangeDetectorRef }, { type: CalendarUtils }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: DateAdapter }];
        }, propDecorators: { viewDate: [{
                    type: i0.Input
                }], events: [{
                    type: i0.Input
                }], excludeDays: [{
                    type: i0.Input
                }], activeDayIsOpen: [{
                    type: i0.Input
                }], activeDay: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], weekStartsOn: [{
                    type: i0.Input
                }], headerTemplate: [{
                    type: i0.Input
                }], cellTemplate: [{
                    type: i0.Input
                }], openDayEventsTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], weekendDays: [{
                    type: i0.Input
                }], beforeViewRender: [{
                    type: i0.Output
                }], dayClicked: [{
                    type: i0.Output
                }], eventClicked: [{
                    type: i0.Output
                }], columnHeaderClicked: [{
                    type: i0.Output
                }], eventTimesChanged: [{
                    type: i0.Output
                }] } });

    var CalendarMonthModule = /** @class */ (function () {
        function CalendarMonthModule() {
        }
        return CalendarMonthModule;
    }());
    CalendarMonthModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CalendarMonthModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthModule, declarations: [CalendarMonthViewComponent,
            CalendarMonthCellComponent,
            CalendarOpenDayEventsComponent,
            CalendarMonthViewHeaderComponent], imports: [i1.CommonModule, i2.DragAndDropModule, CalendarCommonModule], exports: [i2.DragAndDropModule,
            CalendarMonthViewComponent,
            CalendarMonthCellComponent,
            CalendarOpenDayEventsComponent,
            CalendarMonthViewHeaderComponent] });
    CalendarMonthModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthModule, imports: [[i1.CommonModule, i2.DragAndDropModule, CalendarCommonModule], i2.DragAndDropModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarMonthModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule, i2.DragAndDropModule, CalendarCommonModule],
                        declarations: [
                            CalendarMonthViewComponent,
                            CalendarMonthCellComponent,
                            CalendarOpenDayEventsComponent,
                            CalendarMonthViewHeaderComponent,
                        ],
                        exports: [
                            i2.DragAndDropModule,
                            CalendarMonthViewComponent,
                            CalendarMonthCellComponent,
                            CalendarOpenDayEventsComponent,
                            CalendarMonthViewHeaderComponent,
                        ],
                    }]
            }] });

    var CalendarDragHelper = /** @class */ (function () {
        function CalendarDragHelper(dragContainerElement, draggableElement) {
            this.dragContainerElement = dragContainerElement;
            this.startPosition = draggableElement.getBoundingClientRect();
        }
        CalendarDragHelper.prototype.validateDrag = function (_a) {
            var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents, dragAlreadyMoved = _a.dragAlreadyMoved, transform = _a.transform;
            var isDraggedWithinThreshold = isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved;
            if (snapDraggedEvents) {
                var inner = Object.assign({}, this.startPosition, {
                    left: this.startPosition.left + transform.x,
                    right: this.startPosition.right + transform.x,
                    top: this.startPosition.top + transform.y,
                    bottom: this.startPosition.bottom + transform.y,
                });
                if (isDraggedWithinThreshold) {
                    var outer = this.dragContainerElement.getBoundingClientRect();
                    var isTopInside = outer.top < inner.top && inner.top < outer.bottom;
                    var isBottomInside = outer.top < inner.bottom && inner.bottom < outer.bottom;
                    return (isInsideLeftAndRight(outer, inner) && (isTopInside || isBottomInside));
                }
                /* istanbul ignore next */
                return false;
            }
            else {
                return isDraggedWithinThreshold;
            }
        };
        return CalendarDragHelper;
    }());

    var CalendarResizeHelper = /** @class */ (function () {
        function CalendarResizeHelper(resizeContainerElement, minWidth, rtl) {
            this.resizeContainerElement = resizeContainerElement;
            this.minWidth = minWidth;
            this.rtl = rtl;
        }
        CalendarResizeHelper.prototype.validateResize = function (_a) {
            var rectangle = _a.rectangle, edges = _a.edges;
            if (this.rtl) {
                // TODO - find a way of testing this, for some reason the tests always fail but it does actually work
                /* istanbul ignore next */
                if (typeof edges.left !== 'undefined') {
                    rectangle.left -= edges.left;
                    rectangle.right += edges.left;
                }
                else if (typeof edges.right !== 'undefined') {
                    rectangle.left += edges.right;
                    rectangle.right -= edges.right;
                }
                rectangle.width = rectangle.right - rectangle.left;
            }
            if (this.minWidth &&
                Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
                return false;
            }
            return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        };
        return CalendarResizeHelper;
    }());

    var CalendarWeekViewHeaderComponent = /** @class */ (function () {
        function CalendarWeekViewHeaderComponent() {
            this.dayHeaderClicked = new i0.EventEmitter();
            this.eventDropped = new i0.EventEmitter();
            this.dragEnter = new i0.EventEmitter();
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        }
        return CalendarWeekViewHeaderComponent;
    }());
    CalendarWeekViewHeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewHeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarWeekViewHeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarWeekViewHeaderComponent, selector: "mwl-calendar-week-view-header", inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventDropped: "eventDropped", dragEnter: "dragEnter" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.DroppableDirective, selector: "[mwlDroppable]", inputs: ["dragOverClass", "dragActiveClass", "validateDrop"], outputs: ["dragEnter", "dragLeave", "dragOver", "drop"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarDate": CalendarDatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewHeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-week-view-header',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { days: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], dayHeaderClicked: [{
                    type: i0.Output
                }], eventDropped: [{
                    type: i0.Output
                }], dragEnter: [{
                    type: i0.Output
                }] } });

    var CalendarWeekViewEventComponent = /** @class */ (function () {
        function CalendarWeekViewEventComponent() {
            this.eventClicked = new i0.EventEmitter();
        }
        return CalendarWeekViewEventComponent;
    }());
    CalendarWeekViewEventComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewEventComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarWeekViewEventComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarWeekViewEventComponent, selector: "mwl-calendar-week-view-event", inputs: { locale: "locale", weekEvent: "weekEvent", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDisabled: "tooltipDisabled", tooltipDelay: "tooltipDelay", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", tooltipTemplate: "tooltipTemplate", column: "column", daysInWeek: "daysInWeek" }, outputs: { eventClicked: "eventClicked" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, components: [{ type: CalendarEventActionsComponent, selector: "mwl-calendar-event-actions", inputs: ["event", "customTemplate"] }, { type: CalendarEventTitleComponent, selector: "mwl-calendar-event-title", inputs: ["event", "customTemplate", "view"] }], directives: [{ type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: CalendarTooltipDirective, selector: "[mwlCalendarTooltip]", inputs: ["mwlCalendarTooltip", "tooltipPlacement", "tooltipTemplate", "tooltipEvent", "tooltipAppendToBody", "tooltipDelay"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: KeydownEnterDirective, selector: "[mwlKeydownEnter]", outputs: ["mwlKeydownEnter"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarEventTitle": CalendarEventTitlePipe, "calendarA11y": CalendarA11yPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewEventComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-week-view-event',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { locale: [{
                    type: i0.Input
                }], weekEvent: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], tooltipDisabled: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], column: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], eventClicked: [{
                    type: i0.Output
                }] } });

    var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
        function CalendarWeekViewHourSegmentComponent() {
        }
        return CalendarWeekViewHourSegmentComponent;
    }());
    CalendarWeekViewHourSegmentComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewHourSegmentComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarWeekViewHourSegmentComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarWeekViewHourSegmentComponent, selector: "mwl-calendar-week-view-hour-segment", inputs: { segment: "segment", segmentHeight: "segmentHeight", locale: "locale", isTimeLabel: "isTimeLabel", daysInWeek: "daysInWeek", customTemplate: "customTemplate" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarA11y": CalendarA11yPipe, "calendarDate": CalendarDatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewHourSegmentComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-week-view-hour-segment',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { segment: [{
                    type: i0.Input
                }], segmentHeight: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], isTimeLabel: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }] } });

    var CalendarWeekViewCurrentTimeMarkerComponent = /** @class */ (function () {
        function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
            var _this = this;
            this.dateAdapter = dateAdapter;
            this.zone = zone;
            this.columnDate$ = new rxjs.BehaviorSubject(undefined);
            this.marker$ = this.zone.onStable.pipe(operators.switchMap(function () { return rxjs.interval(60 * 1000); }), operators.startWith(0), operators.switchMapTo(this.columnDate$), operators.map(function (columnDate) {
                var startOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayStartHour), _this.dayStartMinute);
                var endOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayEndHour), _this.dayEndMinute);
                var hourHeightModifier = (_this.hourSegments * _this.hourSegmentHeight) /
                    (_this.hourDuration || 60);
                var now = new Date();
                return {
                    isVisible: _this.dateAdapter.isSameDay(columnDate, now) &&
                        now >= startOfDay &&
                        now <= endOfDay,
                    top: _this.dateAdapter.differenceInMinutes(now, startOfDay) *
                        hourHeightModifier,
                };
            }));
        }
        CalendarWeekViewCurrentTimeMarkerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.columnDate) {
                this.columnDate$.next(changes.columnDate.currentValue);
            }
        };
        return CalendarWeekViewCurrentTimeMarkerComponent;
    }());
    CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewCurrentTimeMarkerComponent, deps: [{ token: DateAdapter }, { token: i0__namespace.NgZone }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarWeekViewCurrentTimeMarkerComponent, selector: "mwl-calendar-week-view-current-time-marker", inputs: { columnDate: "columnDate", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegments: "hourSegments", hourDuration: "hourDuration", hourSegmentHeight: "hourSegmentHeight", customTemplate: "customTemplate" }, usesOnChanges: true, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i1__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewCurrentTimeMarkerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-week-view-current-time-marker',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], ctorParameters: function () { return [{ type: DateAdapter }, { type: i0__namespace.NgZone }]; }, propDecorators: { columnDate: [{
                    type: i0.Input
                }], dayStartHour: [{
                    type: i0.Input
                }], dayStartMinute: [{
                    type: i0.Input
                }], dayEndHour: [{
                    type: i0.Input
                }], dayEndMinute: [{
                    type: i0.Input
                }], hourSegments: [{
                    type: i0.Input
                }], hourDuration: [{
                    type: i0.Input
                }], hourSegmentHeight: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }] } });

    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */
    var CalendarWeekViewComponent = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter, element) {
            this.cdr = cdr;
            this.utils = utils;
            this.dateAdapter = dateAdapter;
            this.element = element;
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
             */
            this.excludeDays = [];
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * The precision to display events.
             * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
             */
            this.precision = 'days';
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * The number of segments in an hour. Must divide equally into 60.
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 30;
            /**
             * The minimum height in pixels of each event
             */
            this.minimumEventHeight = 30;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
             */
            this.dayHeaderClicked = new i0.EventEmitter();
            /**
             * Called when an event title is clicked
             */
            this.eventClicked = new i0.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new i0.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current week.
             * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
             */
            this.beforeViewRender = new i0.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new i0.EventEmitter();
            /**
             * @hidden
             */
            this.allDayEventResizes = new Map();
            /**
             * @hidden
             */
            this.timeEventResizes = new Map();
            /**
             * @hidden
             */
            this.eventDragEnterByType = {
                allDay: 0,
                time: 0,
            };
            /**
             * @hidden
             */
            this.dragActive = false;
            /**
             * @hidden
             */
            this.dragAlreadyMoved = false;
            /**
             * @hidden
             */
            this.calendarId = Symbol('angular calendar week view id');
            /**
             * @hidden
             */
            this.rtl = false;
            /**
             * @hidden
             */
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
            /**
             * @hidden
             */
            this.trackByHourSegment = trackByHourSegment;
            /**
             * @hidden
             */
            this.trackByHour = trackByHour;
            /**
             * @hidden
             */
            this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
            /**
             * @hidden
             */
            this.trackByWeekTimeEvent = trackByWeekTimeEvent;
            /**
             * @hidden
             */
            this.trackByHourColumn = function (index, column) { return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column; };
            /**
             * @hidden
             */
            this.trackById = function (index, row) { return row.id; };
            this.locale = locale;
        }
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.refreshAll();
                    _this.cdr.markForCheck();
                });
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
            var refreshHeader = changes.viewDate ||
                changes.excludeDays ||
                changes.weekendDays ||
                changes.daysInWeek ||
                changes.weekStartsOn;
            var refreshBody = changes.viewDate ||
                changes.dayStartHour ||
                changes.dayStartMinute ||
                changes.dayEndHour ||
                changes.dayEndMinute ||
                changes.hourSegments ||
                changes.hourDuration ||
                changes.weekStartsOn ||
                changes.weekendDays ||
                changes.excludeDays ||
                changes.hourSegmentHeight ||
                changes.events ||
                changes.daysInWeek ||
                changes.minimumEventHeight;
            if (refreshHeader) {
                this.refreshHeader();
            }
            if (changes.events) {
                validateEvents(this.events);
            }
            if (refreshBody) {
                this.refreshBody();
            }
            if (refreshHeader || refreshBody) {
                this.emitBeforeViewRender();
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngAfterViewInit = function () {
            this.rtl =
                typeof window !== 'undefined' &&
                    getComputedStyle(this.element.nativeElement).direction === 'rtl';
            this.cdr.detectChanges();
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizeStarted = function (eventsContainer, timeEvent, resizeEvent) {
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            this.resizeStarted(eventsContainer, timeEvent);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizing = function (timeEvent, resizeEvent) {
            var _this = this;
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();
            var tempEvents = __spreadArray([], __read(this.events));
            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
                var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
                var adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
                adjustedEvents.set(adjustedEvent, event);
                var eventIndex = tempEvents.indexOf(event);
                tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizeEnded = function (timeEvent) {
            this.view = this.getWeekView(this.events);
            var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
            if (lastResizeEvent) {
                this.timeEventResizes.delete(timeEvent.event);
                var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
                this.eventTimesChanged.emit({
                    newStart: newEventDates.start,
                    newEnd: newEventDates.end,
                    event: timeEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Resize,
                });
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizeStarted = function (allDayEventsContainer, allDayEvent, resizeEvent) {
            this.allDayEventResizes.set(allDayEvent, {
                originalOffset: allDayEvent.offset,
                originalSpan: allDayEvent.span,
                edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right',
            });
            this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizing = function (allDayEvent, resizeEvent, dayWidth) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            var modifier = this.rtl ? -1 : 1;
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
                allDayEvent.offset = currentResize.originalOffset + diff;
                allDayEvent.span = currentResize.originalSpan - diff;
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;
                allDayEvent.span = currentResize.originalSpan + diff;
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizeEnded = function (allDayEvent) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            if (currentResize) {
                var allDayEventResizingBeforeStart = currentResize.edge === 'left';
                var daysDiff = void 0;
                if (allDayEventResizingBeforeStart) {
                    daysDiff = allDayEvent.offset - currentResize.originalOffset;
                }
                else {
                    daysDiff = allDayEvent.span - currentResize.originalSpan;
                }
                allDayEvent.offset = currentResize.originalOffset;
                allDayEvent.span = currentResize.originalSpan;
                var newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
                this.eventTimesChanged.emit({
                    newStart: newDates.start,
                    newEnd: newDates.end,
                    event: allDayEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Resize,
                });
                this.allDayEventResizes.delete(allDayEvent);
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dateDragEnter = function (date) {
            this.lastDragEnterDate = date;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
            if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) &&
                this.lastDragEnterDate.getTime() === date.getTime() &&
                (!this.snapDraggedEvents ||
                    dropEvent.dropData.event !== this.lastDraggedEvent)) {
                this.eventTimesChanged.emit({
                    type: exports.CalendarEventTimesChangedEventType.Drop,
                    event: dropEvent.dropData.event,
                    newStart: date,
                    allDay: allDay,
                });
            }
            this.lastDraggedEvent = null;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragEnter = function (type) {
            this.eventDragEnterByType[type]++;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragLeave = function (type) {
            this.eventDragEnterByType[type]--;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragStarted = function (eventsContainerElement, eventElement, event, useY) {
            var _this = this;
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
            var dragHelper = new CalendarDragHelper(eventsContainerElement, eventElement);
            this.validateDrag = function (_a) {
                var x = _a.x, y = _a.y, transform = _a.transform;
                var isAllowed = _this.allDayEventResizes.size === 0 &&
                    _this.timeEventResizes.size === 0 &&
                    dragHelper.validateDrag({
                        x: x,
                        y: y,
                        snapDraggedEvents: _this.snapDraggedEvents,
                        dragAlreadyMoved: _this.dragAlreadyMoved,
                        transform: transform,
                    });
                if (isAllowed && _this.validateEventTimesChanged) {
                    var newEventTimes = _this.getDragMovedEventTimes(event, { x: x, y: y }, _this.dayColumnWidth, useY);
                    return _this.validateEventTimesChanged({
                        type: exports.CalendarEventTimesChangedEventType.Drag,
                        event: event.event,
                        newStart: newEventTimes.start,
                        newEnd: newEventTimes.end,
                    });
                }
                return isAllowed;
            };
            this.dragActive = true;
            this.dragAlreadyMoved = false;
            this.lastDraggedEvent = null;
            this.eventDragEnterByType = {
                allDay: 0,
                time: 0,
            };
            if (!this.snapDraggedEvents && useY) {
                this.view.hourColumns.forEach(function (column) {
                    var linkedEvent = column.events.find(function (columnEvent) { return columnEvent.event === event.event && columnEvent !== event; });
                    // hide any linked events while dragging
                    if (linkedEvent) {
                        linkedEvent.width = 0;
                        linkedEvent.height = 0;
                    }
                });
            }
            this.cdr.markForCheck();
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragMove = function (dayEvent, dragEvent) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
            var tempEvents = this.events.map(function (event) {
                if (event === originalEvent) {
                    return adjustedEvent;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventDragMove = function () {
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragEnded = function (weekEvent, dragEndEvent, dayWidth, useY) {
            if (useY === void 0) { useY = false; }
            this.view = this.getWeekView(this.events);
            this.dragActive = false;
            this.validateDrag = null;
            var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
            if ((this.snapDraggedEvents ||
                this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) &&
                isDraggedWithinPeriod(start, end, this.view.period)) {
                this.lastDraggedEvent = weekEvent.event;
                this.eventTimesChanged.emit({
                    newStart: start,
                    newEnd: end,
                    event: weekEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Drag,
                    allDay: !useY,
                });
            }
        };
        CalendarWeekViewComponent.prototype.refreshHeader = function () {
            this.days = this.utils.getWeekViewHeader(Object.assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        };
        CalendarWeekViewComponent.prototype.refreshBody = function () {
            this.view = this.getWeekView(this.events);
        };
        CalendarWeekViewComponent.prototype.refreshAll = function () {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
        };
        CalendarWeekViewComponent.prototype.emitBeforeViewRender = function () {
            if (this.days && this.view) {
                this.beforeViewRender.emit(Object.assign({ header: this.days }, this.view));
            }
        };
        CalendarWeekViewComponent.prototype.getWeekView = function (events) {
            return this.utils.getWeekView(Object.assign({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, hourDuration: this.hourDuration, dayStart: {
                    hour: this.dayStartHour,
                    minute: this.dayStartMinute,
                }, dayEnd: {
                    hour: this.dayEndHour,
                    minute: this.dayEndMinute,
                }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays, minimumEventHeight: this.minimumEventHeight }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        };
        CalendarWeekViewComponent.prototype.getDragMovedEventTimes = function (weekEvent, dragEndEvent, dayWidth, useY) {
            var daysDragged = (roundToNearest(dragEndEvent.x, dayWidth) / dayWidth) *
                (this.rtl ? -1 : 1);
            var minutesMoved = useY
                ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration)
                : 0;
            var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
            var end;
            if (weekEvent.event.end) {
                end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
            }
            return { start: start, end: end };
        };
        CalendarWeekViewComponent.prototype.restoreOriginalEvents = function (tempEvents, adjustedEvents, snapDraggedEvents) {
            if (snapDraggedEvents === void 0) { snapDraggedEvents = true; }
            var previousView = this.view;
            if (snapDraggedEvents) {
                this.view = this.getWeekView(tempEvents);
            }
            var adjustedEventsArray = tempEvents.filter(function (event) { return adjustedEvents.has(event); });
            this.view.hourColumns.forEach(function (column, columnIndex) {
                previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
                    hour.segments.forEach(function (segment, segmentIndex) {
                        column.hours[hourIndex].segments[segmentIndex].cssClass =
                            segment.cssClass;
                    });
                });
                adjustedEventsArray.forEach(function (adjustedEvent) {
                    var originalEvent = adjustedEvents.get(adjustedEvent);
                    var existingColumnEvent = column.events.find(function (columnEvent) { return columnEvent.event ===
                        (snapDraggedEvents ? adjustedEvent : originalEvent); });
                    if (existingColumnEvent) {
                        // restore the original event so trackBy kicks in and the dom isn't changed
                        existingColumnEvent.event = originalEvent;
                        existingColumnEvent['tempEvent'] = adjustedEvent;
                        if (!snapDraggedEvents) {
                            existingColumnEvent.height = 0;
                            existingColumnEvent.width = 0;
                        }
                    }
                    else {
                        // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                        var event = {
                            event: originalEvent,
                            left: 0,
                            top: 0,
                            height: 0,
                            width: 0,
                            startsBeforeDay: false,
                            endsAfterDay: false,
                            tempEvent: adjustedEvent,
                        };
                        column.events.push(event);
                    }
                });
            });
            adjustedEvents.clear();
        };
        CalendarWeekViewComponent.prototype.getTimeEventResizedDates = function (calendarEvent, resizeEvent) {
            var newEventDates = {
                start: calendarEvent.start,
                end: getDefaultEventEnd(this.dateAdapter, calendarEvent, this.minimumEventHeight),
            };
            var end = calendarEvent.end, eventWithoutEnd = __rest(calendarEvent, ["end"]);
            var smallestResizes = {
                start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
                end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight),
            };
            var modifier = this.rtl ? -1 : 1;
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
                var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;
                var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            if (typeof resizeEvent.edges.top !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
                var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.bottom !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
                var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            return newEventDates;
        };
        CalendarWeekViewComponent.prototype.resizeStarted = function (eventsContainer, event, dayWidth) {
            var _this = this;
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);
            this.validateResize = function (_a) {
                var rectangle = _a.rectangle, edges = _a.edges;
                var isWithinBoundary = resizeHelper.validateResize({
                    rectangle: Object.assign({}, rectangle),
                    edges: edges,
                });
                if (isWithinBoundary && _this.validateEventTimesChanged) {
                    var newEventDates = void 0;
                    if (!dayWidth) {
                        newEventDates = _this.getTimeEventResizedDates(event.event, {
                            rectangle: rectangle,
                            edges: edges,
                        });
                    }
                    else {
                        var modifier = _this.rtl ? -1 : 1;
                        if (typeof edges.left !== 'undefined') {
                            var diff = Math.round(+edges.left / dayWidth) * modifier;
                            newEventDates = _this.getAllDayEventResizedDates(event.event, diff, !_this.rtl);
                        }
                        else {
                            var diff = Math.round(+edges.right / dayWidth) * modifier;
                            newEventDates = _this.getAllDayEventResizedDates(event.event, diff, _this.rtl);
                        }
                    }
                    return _this.validateEventTimesChanged({
                        type: exports.CalendarEventTimesChangedEventType.Resize,
                        event: event.event,
                        newStart: newEventDates.start,
                        newEnd: newEventDates.end,
                    });
                }
                return isWithinBoundary;
            };
            this.cdr.markForCheck();
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.getAllDayEventResizedDates = function (event, daysDiff, beforeStart) {
            var start = event.start;
            var end = event.end || event.start;
            if (beforeStart) {
                start = addDaysWithExclusions(this.dateAdapter, start, daysDiff, this.excludeDays);
            }
            else {
                end = addDaysWithExclusions(this.dateAdapter, end, daysDiff, this.excludeDays);
            }
            return { start: start, end: end };
        };
        return CalendarWeekViewComponent;
    }());
    CalendarWeekViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewComponent, deps: [{ token: i0__namespace.ChangeDetectorRef }, { token: CalendarUtils }, { token: i0.LOCALE_ID }, { token: DateAdapter }, { token: i0__namespace.ElementRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarWeekViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarWeekViewComponent, selector: "mwl-calendar-week-view", inputs: { viewDate: "viewDate", events: "events", excludeDays: "excludeDays", refresh: "refresh", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", precision: "precision", weekendDays: "weekendDays", snapDraggedEvents: "snapDraggedEvents", hourSegments: "hourSegments", hourDuration: "hourDuration", hourSegmentHeight: "hourSegmentHeight", minimumEventHeight: "minimumEventHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegmentTemplate: "hourSegmentTemplate", eventSnapSize: "eventSnapSize", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", daysInWeek: "daysInWeek", currentTimeMarkerTemplate: "currentTimeMarkerTemplate", validateEventTimesChanged: "validateEventTimesChanged" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender", hourSegmentClicked: "hourSegmentClicked" }, usesOnChanges: true, ngImport: i0__namespace, template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"\n              rtl ? null : (100 / days.length) * allDayEvent.offset\n            \"\n            [style.marginRight.%]=\"\n              rtl\n                ? (100 / days.length) * (days.length - allDayEvent.offset) * -1\n                : null\n            \"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"\n              dragStarted(eventRowContainer, event, allDayEvent, false)\n            \"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourDuration]=\"hourDuration\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent, true)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ", isInline: true, components: [{ type: CalendarWeekViewHeaderComponent, selector: "mwl-calendar-week-view-header", inputs: ["days", "locale", "customTemplate"], outputs: ["dayHeaderClicked", "eventDropped", "dragEnter"] }, { type: CalendarWeekViewEventComponent, selector: "mwl-calendar-week-view-event", inputs: ["locale", "weekEvent", "tooltipPlacement", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "tooltipTemplate", "column", "daysInWeek"], outputs: ["eventClicked"] }, { type: CalendarWeekViewHourSegmentComponent, selector: "mwl-calendar-week-view-hour-segment", inputs: ["segment", "segmentHeight", "locale", "isTimeLabel", "daysInWeek", "customTemplate"] }, { type: CalendarWeekViewCurrentTimeMarkerComponent, selector: "mwl-calendar-week-view-current-time-marker", inputs: ["columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourDuration", "hourSegmentHeight", "customTemplate"] }], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.DroppableDirective, selector: "[mwlDroppable]", inputs: ["dragOverClass", "dragActiveClass", "validateDrop"], outputs: ["dragEnter", "dragLeave", "dragOver", "drop"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i9__namespace.ResizableDirective, selector: "[mwlResizable]", inputs: ["validateResize", "enableGhostResize", "resizeSnapGrid", "resizeCursors", "ghostElementPositioning", "allowNegativeResizes", "mouseMoveThrottleMS"], outputs: ["resizeStart", "resizing", "resizeEnd"], exportAs: ["mwlResizable"] }, { type: i2__namespace.DraggableDirective, selector: "[mwlDraggable]", inputs: ["dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "showOriginalElementWhileDragging", "validateDrag", "dragCursor", "dragActiveClass", "ghostElementAppendTo", "ghostElementTemplate", "touchStartLongPress", "autoScroll"], outputs: ["dragPointerDown", "dragStart", "ghostElementCreated", "dragging", "dragEnd"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9__namespace.ResizeHandleDirective, selector: "[mwlResizeHandle]", inputs: ["resizeEdges", "resizableContainer"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-week-view',
                        template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"\n              rtl ? null : (100 / days.length) * allDayEvent.offset\n            \"\n            [style.marginRight.%]=\"\n              rtl\n                ? (100 / days.length) * (days.length - allDayEvent.offset) * -1\n                : null\n            \"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"\n              dragStarted(eventRowContainer, event, allDayEvent, false)\n            \"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourDuration]=\"hourDuration\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent, true)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.ChangeDetectorRef }, { type: CalendarUtils }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: DateAdapter }, { type: i0__namespace.ElementRef }];
        }, propDecorators: { viewDate: [{
                    type: i0.Input
                }], events: [{
                    type: i0.Input
                }], excludeDays: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], weekStartsOn: [{
                    type: i0.Input
                }], headerTemplate: [{
                    type: i0.Input
                }], eventTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], precision: [{
                    type: i0.Input
                }], weekendDays: [{
                    type: i0.Input
                }], snapDraggedEvents: [{
                    type: i0.Input
                }], hourSegments: [{
                    type: i0.Input
                }], hourDuration: [{
                    type: i0.Input
                }], hourSegmentHeight: [{
                    type: i0.Input
                }], minimumEventHeight: [{
                    type: i0.Input
                }], dayStartHour: [{
                    type: i0.Input
                }], dayStartMinute: [{
                    type: i0.Input
                }], dayEndHour: [{
                    type: i0.Input
                }], dayEndMinute: [{
                    type: i0.Input
                }], hourSegmentTemplate: [{
                    type: i0.Input
                }], eventSnapSize: [{
                    type: i0.Input
                }], allDayEventsLabelTemplate: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], currentTimeMarkerTemplate: [{
                    type: i0.Input
                }], validateEventTimesChanged: [{
                    type: i0.Input
                }], dayHeaderClicked: [{
                    type: i0.Output
                }], eventClicked: [{
                    type: i0.Output
                }], eventTimesChanged: [{
                    type: i0.Output
                }], beforeViewRender: [{
                    type: i0.Output
                }], hourSegmentClicked: [{
                    type: i0.Output
                }] } });

    var CalendarWeekModule = /** @class */ (function () {
        function CalendarWeekModule() {
        }
        return CalendarWeekModule;
    }());
    CalendarWeekModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CalendarWeekModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekModule, declarations: [CalendarWeekViewComponent,
            CalendarWeekViewHeaderComponent,
            CalendarWeekViewEventComponent,
            CalendarWeekViewHourSegmentComponent,
            CalendarWeekViewCurrentTimeMarkerComponent], imports: [i1.CommonModule,
            i9.ResizableModule,
            i2.DragAndDropModule,
            CalendarCommonModule], exports: [i9.ResizableModule,
            i2.DragAndDropModule,
            CalendarWeekViewComponent,
            CalendarWeekViewHeaderComponent,
            CalendarWeekViewEventComponent,
            CalendarWeekViewHourSegmentComponent,
            CalendarWeekViewCurrentTimeMarkerComponent] });
    CalendarWeekModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekModule, imports: [[
                i1.CommonModule,
                i9.ResizableModule,
                i2.DragAndDropModule,
                CalendarCommonModule,
            ], i9.ResizableModule,
            i2.DragAndDropModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarWeekModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            i9.ResizableModule,
                            i2.DragAndDropModule,
                            CalendarCommonModule,
                        ],
                        declarations: [
                            CalendarWeekViewComponent,
                            CalendarWeekViewHeaderComponent,
                            CalendarWeekViewEventComponent,
                            CalendarWeekViewHourSegmentComponent,
                            CalendarWeekViewCurrentTimeMarkerComponent,
                        ],
                        exports: [
                            i9.ResizableModule,
                            i2.DragAndDropModule,
                            CalendarWeekViewComponent,
                            CalendarWeekViewHeaderComponent,
                            CalendarWeekViewEventComponent,
                            CalendarWeekViewHourSegmentComponent,
                            CalendarWeekViewCurrentTimeMarkerComponent,
                        ],
                    }]
            }] });

    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */
    var CalendarDayViewComponent = /** @class */ (function () {
        function CalendarDayViewComponent() {
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * The number of segments in an hour. Must divide equally into 60.
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 30;
            /**
             * The minimum height in pixels of each event
             */
            this.minimumEventHeight = 30;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * Called when an event title is clicked
             */
            this.eventClicked = new i0.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new i0.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new i0.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current day.
             * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
             */
            this.beforeViewRender = new i0.EventEmitter();
        }
        return CalendarDayViewComponent;
    }());
    CalendarDayViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDayViewComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarDayViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarDayViewComponent, selector: "mwl-calendar-day-view", inputs: { viewDate: "viewDate", events: "events", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", hourDuration: "hourDuration", minimumEventHeight: "minimumEventHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", snapDraggedEvents: "snapDraggedEvents", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate", validateEventTimesChanged: "validateEventTimesChanged" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, ngImport: i0__namespace, template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourDuration]=\"hourDuration\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [minimumEventHeight]=\"minimumEventHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      [validateEventTimesChanged]=\"validateEventTimesChanged\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  ", isInline: true, components: [{ type: CalendarWeekViewComponent, selector: "mwl-calendar-week-view", inputs: ["viewDate", "events", "excludeDays", "refresh", "locale", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "weekStartsOn", "headerTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "precision", "weekendDays", "snapDraggedEvents", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegmentTemplate", "eventSnapSize", "allDayEventsLabelTemplate", "daysInWeek", "currentTimeMarkerTemplate", "validateEventTimesChanged"], outputs: ["dayHeaderClicked", "eventClicked", "eventTimesChanged", "beforeViewRender", "hourSegmentClicked"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDayViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-day-view',
                        template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourDuration]=\"hourDuration\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [minimumEventHeight]=\"minimumEventHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      [validateEventTimesChanged]=\"validateEventTimesChanged\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  ",
                    }]
            }], propDecorators: { viewDate: [{
                    type: i0.Input
                }], events: [{
                    type: i0.Input
                }], hourSegments: [{
                    type: i0.Input
                }], hourSegmentHeight: [{
                    type: i0.Input
                }], hourDuration: [{
                    type: i0.Input
                }], minimumEventHeight: [{
                    type: i0.Input
                }], dayStartHour: [{
                    type: i0.Input
                }], dayStartMinute: [{
                    type: i0.Input
                }], dayEndHour: [{
                    type: i0.Input
                }], dayEndMinute: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], eventSnapSize: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], hourSegmentTemplate: [{
                    type: i0.Input
                }], eventTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], snapDraggedEvents: [{
                    type: i0.Input
                }], allDayEventsLabelTemplate: [{
                    type: i0.Input
                }], currentTimeMarkerTemplate: [{
                    type: i0.Input
                }], validateEventTimesChanged: [{
                    type: i0.Input
                }], eventClicked: [{
                    type: i0.Output
                }], hourSegmentClicked: [{
                    type: i0.Output
                }], eventTimesChanged: [{
                    type: i0.Output
                }], beforeViewRender: [{
                    type: i0.Output
                }] } });

    var CalendarDayModule = /** @class */ (function () {
        function CalendarDayModule() {
        }
        return CalendarDayModule;
    }());
    CalendarDayModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDayModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CalendarDayModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDayModule, declarations: [CalendarDayViewComponent], imports: [i1.CommonModule, CalendarCommonModule, CalendarWeekModule], exports: [CalendarDayViewComponent] });
    CalendarDayModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDayModule, imports: [[i1.CommonModule, CalendarCommonModule, CalendarWeekModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarDayModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule, CalendarCommonModule, CalendarWeekModule],
                        declarations: [CalendarDayViewComponent],
                        exports: [CalendarDayViewComponent],
                    }]
            }] });

    var CalendarResourceWeekViewHeaderComponent = /** @class */ (function () {
        function CalendarResourceWeekViewHeaderComponent() {
            this.dayHeaderClicked = new i0.EventEmitter();
            this.eventDropped = new i0.EventEmitter();
            this.dragEnter = new i0.EventEmitter();
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        }
        return CalendarResourceWeekViewHeaderComponent;
    }());
    CalendarResourceWeekViewHeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewHeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarResourceWeekViewHeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarResourceWeekViewHeaderComponent, selector: "mwl-calendar-resource-week-view-header", inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventDropped: "eventDropped", dragEnter: "dragEnter" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.DroppableDirective, selector: "[mwlDroppable]", inputs: ["dragOverClass", "dragActiveClass", "validateDrop"], outputs: ["dragEnter", "dragLeave", "dragOver", "drop"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarDate": CalendarDatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewHeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-resource-week-view-header',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { days: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], dayHeaderClicked: [{
                    type: i0.Output
                }], eventDropped: [{
                    type: i0.Output
                }], dragEnter: [{
                    type: i0.Output
                }] } });

    var CalendarResourceWeekViewRowSegmentComponent = /** @class */ (function () {
        function CalendarResourceWeekViewRowSegmentComponent() {
        }
        return CalendarResourceWeekViewRowSegmentComponent;
    }());
    CalendarResourceWeekViewRowSegmentComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewRowSegmentComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarResourceWeekViewRowSegmentComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarResourceWeekViewRowSegmentComponent, selector: "mwl-calendar-resource-week-view-row-segment", inputs: { segment: "segment", segmentHeight: "segmentHeight", resourceLabel: "resourceLabel", daysInWeek: "daysInWeek", customTemplate: "customTemplate" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-segmentHeight=\"segmentHeight\"\n      let-resourceLabel=\"resourceLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [ngClass]=\"segment?.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"resourceLabel\">\n          {{ resourceLabel }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        segmentHeight: segmentHeight,\n        resourceLabel: resourceLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarA11y": CalendarA11yPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewRowSegmentComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-resource-week-view-row-segment',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-segmentHeight=\"segmentHeight\"\n      let-resourceLabel=\"resourceLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [ngClass]=\"segment?.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"resourceLabel\">\n          {{ resourceLabel }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        segmentHeight: segmentHeight,\n        resourceLabel: resourceLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { segment: [{
                    type: i0.Input
                }], segmentHeight: [{
                    type: i0.Input
                }], resourceLabel: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }] } });

    var CalendarResourceWeekViewEventComponent = /** @class */ (function () {
        function CalendarResourceWeekViewEventComponent() {
            this.eventClicked = new i0.EventEmitter();
        }
        return CalendarResourceWeekViewEventComponent;
    }());
    CalendarResourceWeekViewEventComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewEventComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarResourceWeekViewEventComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarResourceWeekViewEventComponent, selector: "mwl-calendar-resource-week-view-event", inputs: { locale: "locale", weekEvent: "weekEvent", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDisabled: "tooltipDisabled", tooltipDelay: "tooltipDelay", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", tooltipTemplate: "tooltipTemplate", column: "column", daysInWeek: "daysInWeek" }, outputs: { eventClicked: "eventClicked" }, ngImport: i0__namespace, template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          color: weekEvent.event.color?.secondaryText,\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ", isInline: true, components: [{ type: CalendarEventActionsComponent, selector: "mwl-calendar-event-actions", inputs: ["event", "customTemplate"] }, { type: CalendarEventTitleComponent, selector: "mwl-calendar-event-title", inputs: ["event", "customTemplate", "view"] }], directives: [{ type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: CalendarTooltipDirective, selector: "[mwlCalendarTooltip]", inputs: ["mwlCalendarTooltip", "tooltipPlacement", "tooltipTemplate", "tooltipEvent", "tooltipAppendToBody", "tooltipDelay"] }, { type: ClickDirective, selector: "[mwlClick]", inputs: ["clickListenerDisabled"], outputs: ["mwlClick"] }, { type: KeydownEnterDirective, selector: "[mwlKeydownEnter]", outputs: ["mwlKeydownEnter"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "calendarEventTitle": CalendarEventTitlePipe, "calendarA11y": CalendarA11yPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewEventComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-resource-week-view-event',
                        template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          color: weekEvent.event.color?.secondaryText,\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  ",
                    }]
            }], propDecorators: { locale: [{
                    type: i0.Input
                }], weekEvent: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], tooltipDisabled: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], column: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], eventClicked: [{
                    type: i0.Output
                }] } });

    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-resource-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-resource-week-view>
     * ```
     */
    var CalendarResourceWeekViewComponent = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarResourceWeekViewComponent(cdr, utils, locale, dateAdapter, element) {
            this.cdr = cdr;
            this.utils = utils;
            this.dateAdapter = dateAdapter;
            this.element = element;
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of resources to display on view
             */
            this.resources = [];
            /**
             * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
             */
            this.excludeDays = [];
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * The precision to display events.
             * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
             */
            this.precision = 'days';
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * The number of segments in an hour. Must divide equally into 60.
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 50;
            /**
             * The minimum height in pixels of each event
             */
            this.minimumEventHeight = 50;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * Should we display events without assigned resources
             */
            this.keepUnassignedEvents = true;
            /**
             * Name to display unassigned resource. This apply only if keepUnassignedEvents is equal to true
             */
            this.unassignedRessourceName = 'Unassigned';
            /**
             * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
             */
            this.dayHeaderClicked = new i0.EventEmitter();
            /**
             * Called when an event title is clicked
             */
            this.eventClicked = new i0.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new i0.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current week.
             * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
             */
            this.beforeViewRender = new i0.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new i0.EventEmitter();
            /**
             * @hidden
             */
            this.allDayEventResizes = new Map();
            /**
             * @hidden
             */
            this.timeEventResizes = new Map();
            /**
             * @hidden
             */
            this.eventDragEnterByType = {
                allDay: 0,
                time: 0,
            };
            /**
             * @hidden
             */
            this.dragActive = false;
            /**
             * @hidden
             */
            this.dragAlreadyMoved = false;
            /**
             * @hidden
             */
            this.calendarId = Symbol('angular calendar week view id');
            /**
             * @hidden
             */
            this.rtl = false;
            /**
             * @hidden
             */
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
            /**
             * @hidden
             */
            this.trackByHourSegment = trackByHourSegment;
            /**
             * @hidden
             */
            this.trackByHour = trackByHour;
            /**
             * @hidden
             */
            this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
            /**
             * @hidden
             */
            this.trackByWeekTimeEvent = trackByWeekTimeEvent;
            /**
             * @hidden
             */
            this.trackByResourceWeekViewRowEvent = trackByResourceWeekViewRowEvent;
            /**
             * @hidden
             */
            this.trackByRowColumn = trackByRowColumn;
            /**
             * @hidden
             */
            this.trackByHourColumn = function (index, column) { return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column; };
            /**
             * @hidden
             */
            this.trackById = function (index, row) { return row.id; };
            this.locale = locale;
        }
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.refreshAll();
                    _this.cdr.markForCheck();
                });
            }
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.ngOnChanges = function (changes) {
            var refreshHeader = changes.viewDate ||
                changes.excludeDays ||
                changes.weekendDays ||
                changes.daysInWeek ||
                changes.weekStartsOn;
            var refreshBody = changes.viewDate ||
                changes.dayStartHour ||
                changes.dayStartMinute ||
                changes.dayEndHour ||
                changes.dayEndMinute ||
                changes.hourSegments ||
                changes.hourDuration ||
                changes.weekStartsOn ||
                changes.weekendDays ||
                changes.excludeDays ||
                changes.hourSegmentHeight ||
                changes.events ||
                changes.daysInWeek ||
                changes.minimumEventHeight;
            if (refreshHeader) {
                this.refreshHeader();
            }
            if (changes.events) {
                validateEvents(this.events);
            }
            if (refreshBody) {
                this.refreshBody();
            }
            if (refreshHeader || refreshBody) {
                this.emitBeforeViewRender();
            }
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.ngAfterViewInit = function () {
            this.rtl =
                typeof window !== 'undefined' &&
                    getComputedStyle(this.element.nativeElement).direction === 'rtl';
            this.cdr.detectChanges();
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.timeEventResizeStarted = function (eventsContainer, timeEvent, resizeEvent) {
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            this.resizeStarted(eventsContainer, timeEvent);
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.timeEventResizing = function (timeEvent, resizeEvent) {
            var _this = this;
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();
            var tempEvents = __spreadArray([], __read(this.events));
            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
                var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
                var adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
                adjustedEvents.set(adjustedEvent, event);
                var eventIndex = tempEvents.indexOf(event);
                tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.timeEventResizeEnded = function (timeEvent) {
            /*this.view = this.getResourceWeekView(this.events);
            const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
            if (lastResizeEvent) {
              this.timeEventResizes.delete(timeEvent.event);
              const newEventDates = this.getTimeEventResizedDates(
                timeEvent.event,
                lastResizeEvent
              );
              this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: CalendarEventTimesChangedEventType.Resize,
              });
            }*/
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.allDayEventResizeStarted = function (allDayEventsContainer, allDayEvent, resizeEvent) {
            this.allDayEventResizes.set(allDayEvent, {
                originalOffset: allDayEvent.offset,
                originalSpan: allDayEvent.span,
                edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right',
            });
            this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.allDayEventResizing = function (allDayEvent, resizeEvent, dayWidth) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            var modifier = this.rtl ? -1 : 1;
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
                allDayEvent.offset = currentResize.originalOffset + diff;
                allDayEvent.span = currentResize.originalSpan - diff;
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;
                allDayEvent.span = currentResize.originalSpan + diff;
            }
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.allDayEventResizeEnded = function (allDayEvent) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            if (currentResize) {
                var allDayEventResizingBeforeStart = currentResize.edge === 'left';
                var daysDiff = void 0;
                if (allDayEventResizingBeforeStart) {
                    daysDiff = allDayEvent.offset - currentResize.originalOffset;
                }
                else {
                    daysDiff = allDayEvent.span - currentResize.originalSpan;
                }
                allDayEvent.offset = currentResize.originalOffset;
                allDayEvent.span = currentResize.originalSpan;
                var newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
                this.eventTimesChanged.emit({
                    newStart: newDates.start,
                    newEnd: newDates.end,
                    event: allDayEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Resize,
                });
                this.allDayEventResizes.delete(allDayEvent);
            }
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.getResourceArrayFromResourceMaxRowNumber = function (resourcesMaxRowsNumber) {
            var resources = [];
            for (var resourcesMaxRowNumber in resourcesMaxRowsNumber) {
                resources.push(resourcesMaxRowsNumber[resourcesMaxRowNumber]);
            }
            return resources;
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.dateDragEnter = function (date) {
            this.lastDragEnterDate = date;
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
            if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) &&
                this.lastDragEnterDate.getTime() === date.getTime() &&
                (!this.snapDraggedEvents ||
                    dropEvent.dropData.event !== this.lastDraggedEvent)) {
                this.eventTimesChanged.emit({
                    type: exports.CalendarEventTimesChangedEventType.Drop,
                    event: dropEvent.dropData.event,
                    newStart: date,
                    allDay: allDay,
                });
            }
            this.lastDraggedEvent = null;
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.dragEnter = function (type) {
            this.eventDragEnterByType[type]++;
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.dragLeave = function (type) {
            this.eventDragEnterByType[type]--;
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.dragStarted = function (eventsContainerElement, eventElement, event, useY) {
            /*this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
            const dragHelper: CalendarDragHelper = new CalendarDragHelper(
              eventsContainerElement,
              eventElement
            );
            this.validateDrag = ({ x, y, transform }) => {
              const isAllowed =
                this.allDayEventResizes.size === 0 &&
                this.timeEventResizes.size === 0 &&
                dragHelper.validateDrag({
                  x,
                  y,
                  snapDraggedEvents: this.snapDraggedEvents,
                  dragAlreadyMoved: this.dragAlreadyMoved,
                  transform,
                });
              if (isAllowed && this.validateEventTimesChanged) {
                const newEventTimes = this.getDragMovedEventTimes(
                  event,
                  { x, y },
                  this.dayColumnWidth,
                  useY
                );
                return this.validateEventTimesChanged({
                  type: CalendarEventTimesChangedEventType.Drag,
                  event: event.event,
                  newStart: newEventTimes.start,
                  newEnd: newEventTimes.end,
                });
              }
        
              return isAllowed;
            };
            this.dragActive = true;
            this.dragAlreadyMoved = false;
            this.lastDraggedEvent = null;
            this.eventDragEnterByType = {
              allDay: 0,
              time: 0,
            };
            if (!this.snapDraggedEvents && useY) {
              this.view.hourColumns.forEach((column) => {
                const linkedEvent = column.events.find(
                  (columnEvent) =>
                    columnEvent.event === event.event && columnEvent !== event
                );
                // hide any linked events while dragging
                if (linkedEvent) {
                  linkedEvent.width = 0;
                  linkedEvent.height = 0;
                }
              });
            }
            this.cdr.markForCheck();*/
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.dragMove = function (dayEvent, dragEvent) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
            var tempEvents = this.events.map(function (event) {
                if (event === originalEvent) {
                    return adjustedEvent;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.allDayEventDragMove = function () {
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.dragEnded = function (weekEvent, dragEndEvent, dayWidth, useY) {
            if (useY === void 0) { useY = false; }
            /*this.view = this.getWeekView(this.events);
            this.dragActive = false;
            this.validateDrag = null;
            const { start, end } = this.getDragMovedEventTimes(
              weekEvent,
              dragEndEvent,
              dayWidth,
              useY
            );
            if (
              (this.snapDraggedEvents ||
                this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) &&
              isDraggedWithinPeriod(start, end, this.view.period)
            ) {
              this.lastDraggedEvent = weekEvent.event;
              this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY,
              });
            }*/
        };
        CalendarResourceWeekViewComponent.prototype.refreshHeader = function () {
            this.days = this.utils.getWeekViewHeader(Object.assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        };
        CalendarResourceWeekViewComponent.prototype.refreshBody = function () {
            this.view = this.getResourceWeekView(this.events, this.resources);
        };
        CalendarResourceWeekViewComponent.prototype.refreshAll = function () {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
        };
        CalendarResourceWeekViewComponent.prototype.emitBeforeViewRender = function () {
            if (this.days && this.view) {
                this.beforeViewRender.emit(Object.assign({ header: this.days }, this.view));
            }
        };
        CalendarResourceWeekViewComponent.prototype.getResourceWeekView = function (events, resources) {
            var resourceWeekView = this.utils.getResourceWeekView(Object.assign(Object.assign({ events: events, resources: resources, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                    hour: this.dayStartHour,
                    minute: this.dayStartMinute,
                }, dayEnd: {
                    hour: this.dayEndHour,
                    minute: this.dayEndMinute,
                }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays, minimumEventHeight: this.minimumEventHeight }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)), { keepUnassignedEvents: this.keepUnassignedEvents, unassignedRessourceName: this.unassignedRessourceName }));
            this.resourcesMaxRowsNumberAsArray =
                this.getResourceArrayFromResourceMaxRowNumber(resourceWeekView.resourcesMaxRowsNumber);
            return resourceWeekView;
        };
        CalendarResourceWeekViewComponent.prototype.getDragMovedEventTimes = function (weekEvent, dragEndEvent, dayWidth, useY) {
            var daysDragged = (roundToNearest(dragEndEvent.x, dayWidth) / dayWidth) *
                (this.rtl ? -1 : 1);
            var minutesMoved = useY
                ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration)
                : 0;
            var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
            var end;
            if (weekEvent.event.end) {
                end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
            }
            return { start: start, end: end };
        };
        CalendarResourceWeekViewComponent.prototype.restoreOriginalEvents = function (tempEvents, adjustedEvents, snapDraggedEvents) {
            if (snapDraggedEvents === void 0) { snapDraggedEvents = true; }
            /*const previousView = this.view;
            if (snapDraggedEvents) {
              this.view = this.getWeekView(tempEvents);
            }
        
            const adjustedEventsArray = tempEvents.filter((event) =>
              adjustedEvents.has(event)
            );
            this.view.hourColumns.forEach((column, columnIndex) => {
              previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
                hour.segments.forEach((segment, segmentIndex) => {
                  column.hours[hourIndex].segments[segmentIndex].cssClass =
                    segment.cssClass;
                });
              });
        
              adjustedEventsArray.forEach((adjustedEvent) => {
                const originalEvent = adjustedEvents.get(adjustedEvent);
                const existingColumnEvent = column.events.find(
                  (columnEvent) =>
                    columnEvent.event ===
                    (snapDraggedEvents ? adjustedEvent : originalEvent)
                );
                if (existingColumnEvent) {
                  // restore the original event so trackBy kicks in and the dom isn't changed
                  existingColumnEvent.event = originalEvent;
                  existingColumnEvent['tempEvent'] = adjustedEvent;
                  if (!snapDraggedEvents) {
                    existingColumnEvent.height = 0;
                    existingColumnEvent.width = 0;
                  }
                } else {
                  // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                  const event = {
                    event: originalEvent,
                    left: 0,
                    top: 0,
                    height: 0,
                    width: 0,
                    startsBeforeDay: false,
                    endsAfterDay: false,
                    tempEvent: adjustedEvent,
                  };
                  column.events.push(event);
                }
              });
            });
            adjustedEvents.clear();*/
        };
        CalendarResourceWeekViewComponent.prototype.getTimeEventResizedDates = function (calendarEvent, resizeEvent) {
            var newEventDates = {
                start: calendarEvent.start,
                end: getDefaultEventEnd(this.dateAdapter, calendarEvent, this.minimumEventHeight),
            };
            var end = calendarEvent.end, eventWithoutEnd = __rest(calendarEvent, ["end"]);
            var smallestResizes = {
                start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
                end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight),
            };
            var modifier = this.rtl ? -1 : 1;
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
                var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;
                var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            if (typeof resizeEvent.edges.top !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
                var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.bottom !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
                var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            return newEventDates;
        };
        CalendarResourceWeekViewComponent.prototype.resizeStarted = function (eventsContainer, event, dayWidth) {
            var _this = this;
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);
            this.validateResize = function (_a) {
                var rectangle = _a.rectangle, edges = _a.edges;
                var isWithinBoundary = resizeHelper.validateResize({
                    rectangle: Object.assign({}, rectangle),
                    edges: edges,
                });
                if (isWithinBoundary && _this.validateEventTimesChanged) {
                    var newEventDates = void 0;
                    if (!dayWidth) {
                        newEventDates = _this.getTimeEventResizedDates(event.event, {
                            rectangle: rectangle,
                            edges: edges,
                        });
                    }
                    else {
                        var modifier = _this.rtl ? -1 : 1;
                        if (typeof edges.left !== 'undefined') {
                            var diff = Math.round(+edges.left / dayWidth) * modifier;
                            newEventDates = _this.getAllDayEventResizedDates(event.event, diff, !_this.rtl);
                        }
                        else {
                            var diff = Math.round(+edges.right / dayWidth) * modifier;
                            newEventDates = _this.getAllDayEventResizedDates(event.event, diff, _this.rtl);
                        }
                    }
                    return _this.validateEventTimesChanged({
                        type: exports.CalendarEventTimesChangedEventType.Resize,
                        event: event.event,
                        newStart: newEventDates.start,
                        newEnd: newEventDates.end,
                    });
                }
                return isWithinBoundary;
            };
            this.cdr.markForCheck();
        };
        /**
         * @hidden
         */
        CalendarResourceWeekViewComponent.prototype.getAllDayEventResizedDates = function (event, daysDiff, beforeStart) {
            var start = event.start;
            var end = event.end || event.start;
            if (beforeStart) {
                start = addDaysWithExclusions(this.dateAdapter, start, daysDiff, this.excludeDays);
            }
            else {
                end = addDaysWithExclusions(this.dateAdapter, end, daysDiff, this.excludeDays);
            }
            return { start: start, end: end };
        };
        return CalendarResourceWeekViewComponent;
    }());
    CalendarResourceWeekViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewComponent, deps: [{ token: i0__namespace.ChangeDetectorRef }, { token: CalendarUtils }, { token: i0.LOCALE_ID }, { token: DateAdapter }, { token: i0__namespace.ElementRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarResourceWeekViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarResourceWeekViewComponent, selector: "mwl-calendar-resource-week-view", inputs: { viewDate: "viewDate", events: "events", resources: "resources", excludeDays: "excludeDays", refresh: "refresh", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", precision: "precision", weekendDays: "weekendDays", snapDraggedEvents: "snapDraggedEvents", hourSegments: "hourSegments", hourDuration: "hourDuration", hourSegmentHeight: "hourSegmentHeight", minimumEventHeight: "minimumEventHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegmentTemplate: "hourSegmentTemplate", eventSnapSize: "eventSnapSize", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", daysInWeek: "daysInWeek", currentTimeMarkerTemplate: "currentTimeMarkerTemplate", keepUnassignedEvents: "keepUnassignedEvents", unassignedRessourceName: "unassignedRessourceName", validateEventTimesChanged: "validateEventTimesChanged" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender", hourSegmentClicked: "hourSegmentClicked" }, usesOnChanges: true, ngImport: i0__namespace, template: "\n    <div class=\"cal-resource-week-view\" role=\"grid\">\n      <mwl-calendar-resource-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-resource-week-view-header>\n\n      <div\n        class=\"cal-time-events cal-resource-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div class=\"cal-time-label-column\" *ngIf=\"view.rowColumns.length > 0\">\n          <div\n            *ngFor=\"\n              let resourceRow of resourcesMaxRowsNumberAsArray;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-row-odd]=\"odd\"\n          >\n            <mwl-calendar-resource-week-view-row-segment\n              [style.height.px]=\"\n                hourSegmentHeight *\n                (resourceRow.count > 0 ? resourceRow.count : 1)\n              \"\n              [segmentHeight]=\"\n                hourSegmentHeight *\n                (resourceRow.count > 0 ? resourceRow.count : 1)\n              \"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [resourceLabel]=\"resourceRow?.resource?.name\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-resource-week-view-row-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.rowColumns; trackBy: trackByRowColumn\"\n          >\n            <div\n              class=\"cal-events-container\"\n              *ngFor=\"\n                let eventsContainer of column.eventsGroupedByResource;\n                let eventContainerIndex = index\n              \"\n              [style.top]=\"\n                view.resourcesMaxRowsNumber[eventContainerIndex].top + 'px'\n              \"\n            >\n              <ng-container\n                *ngIf=\"eventsContainer.events?.length; else emptyEvents\"\n              >\n                <div\n                  *ngFor=\"\n                    let timeEvent of eventsContainer.events;\n                    let i = index;\n                    trackBy: trackByResourceWeekViewRowEvent\n                  \"\n                  #event\n                  class=\"cal-event-container\"\n                  [ngClass]=\"timeEvent.event.cssClass\"\n                  [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                  [style.top.px]=\"timeEvent.top\"\n                  [style.height.px]=\"hourSegmentHeight\"\n                  [style.left.%]=\"0\"\n                  [style.width.%]=\"timeEvent.width\"\n                >\n                  <ng-template\n                    [ngTemplateOutlet]=\"weekEventTemplate\"\n                  ></ng-template>\n                  <ng-template #weekEventTemplate>\n                    <mwl-calendar-resource-week-view-event\n                      [locale]=\"locale\"\n                      [weekEvent]=\"timeEvent\"\n                      [tooltipPlacement]=\"tooltipPlacement\"\n                      [tooltipTemplate]=\"tooltipTemplate\"\n                      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                      [tooltipDelay]=\"tooltipDelay\"\n                      [customTemplate]=\"eventTemplate\"\n                      [eventTitleTemplate]=\"eventTitleTemplate\"\n                      [eventActionsTemplate]=\"eventActionsTemplate\"\n                      [column]=\"column\"\n                      [daysInWeek]=\"daysInWeek\"\n                      (eventClicked)=\"\n                        eventClicked.emit({\n                          event: timeEvent.event,\n                          sourceEvent: $event.sourceEvent\n                        })\n                      \"\n                    >\n                    </mwl-calendar-resource-week-view-event>\n                  </ng-template>\n                </div>\n              </ng-container>\n              <ng-template #emptyEvents>\n                <div\n                  class=\"cal-event-container\"\n                  [style.height.px]=\"hourSegmentHeight\"\n                >\n                  <div [style.height.px]=\"hourSegmentHeight\"></div>\n                </div>\n              </ng-template>\n            </div>\n\n            <div\n              *ngFor=\"let row of resourcesMaxRowsNumberAsArray; let odd = odd\"\n              class=\"cal-hour\"\n              [class.cal-row-odd]=\"odd\"\n            >\n              <mwl-calendar-resource-week-view-row-segment\n                [style.height.px]=\"\n                  hourSegmentHeight * (row.count > 0 ? row.count : 1)\n                \"\n                [segmentHeight]=\"\n                  hourSegmentHeight * (row.count > 0 ? row.count : 1)\n                \"\n                [segment]=\"{}\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n              >\n              </mwl-calendar-resource-week-view-row-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ", isInline: true, components: [{ type: CalendarResourceWeekViewHeaderComponent, selector: "mwl-calendar-resource-week-view-header", inputs: ["days", "locale", "customTemplate"], outputs: ["dayHeaderClicked", "eventDropped", "dragEnter"] }, { type: CalendarResourceWeekViewRowSegmentComponent, selector: "mwl-calendar-resource-week-view-row-segment", inputs: ["segment", "segmentHeight", "resourceLabel", "daysInWeek", "customTemplate"] }, { type: CalendarResourceWeekViewEventComponent, selector: "mwl-calendar-resource-week-view-event", inputs: ["locale", "weekEvent", "tooltipPlacement", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "tooltipTemplate", "column", "daysInWeek"], outputs: ["eventClicked"] }], directives: [{ type: i2__namespace.DroppableDirective, selector: "[mwlDroppable]", inputs: ["dragOverClass", "dragActiveClass", "validateDrop"], outputs: ["dragEnter", "dragLeave", "dragOver", "drop"] }, { type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-resource-week-view',
                        template: "\n    <div class=\"cal-resource-week-view\" role=\"grid\">\n      <mwl-calendar-resource-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-resource-week-view-header>\n\n      <div\n        class=\"cal-time-events cal-resource-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div class=\"cal-time-label-column\" *ngIf=\"view.rowColumns.length > 0\">\n          <div\n            *ngFor=\"\n              let resourceRow of resourcesMaxRowsNumberAsArray;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-row-odd]=\"odd\"\n          >\n            <mwl-calendar-resource-week-view-row-segment\n              [style.height.px]=\"\n                hourSegmentHeight *\n                (resourceRow.count > 0 ? resourceRow.count : 1)\n              \"\n              [segmentHeight]=\"\n                hourSegmentHeight *\n                (resourceRow.count > 0 ? resourceRow.count : 1)\n              \"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [resourceLabel]=\"resourceRow?.resource?.name\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-resource-week-view-row-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.rowColumns; trackBy: trackByRowColumn\"\n          >\n            <div\n              class=\"cal-events-container\"\n              *ngFor=\"\n                let eventsContainer of column.eventsGroupedByResource;\n                let eventContainerIndex = index\n              \"\n              [style.top]=\"\n                view.resourcesMaxRowsNumber[eventContainerIndex].top + 'px'\n              \"\n            >\n              <ng-container\n                *ngIf=\"eventsContainer.events?.length; else emptyEvents\"\n              >\n                <div\n                  *ngFor=\"\n                    let timeEvent of eventsContainer.events;\n                    let i = index;\n                    trackBy: trackByResourceWeekViewRowEvent\n                  \"\n                  #event\n                  class=\"cal-event-container\"\n                  [ngClass]=\"timeEvent.event.cssClass\"\n                  [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                  [style.top.px]=\"timeEvent.top\"\n                  [style.height.px]=\"hourSegmentHeight\"\n                  [style.left.%]=\"0\"\n                  [style.width.%]=\"timeEvent.width\"\n                >\n                  <ng-template\n                    [ngTemplateOutlet]=\"weekEventTemplate\"\n                  ></ng-template>\n                  <ng-template #weekEventTemplate>\n                    <mwl-calendar-resource-week-view-event\n                      [locale]=\"locale\"\n                      [weekEvent]=\"timeEvent\"\n                      [tooltipPlacement]=\"tooltipPlacement\"\n                      [tooltipTemplate]=\"tooltipTemplate\"\n                      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                      [tooltipDelay]=\"tooltipDelay\"\n                      [customTemplate]=\"eventTemplate\"\n                      [eventTitleTemplate]=\"eventTitleTemplate\"\n                      [eventActionsTemplate]=\"eventActionsTemplate\"\n                      [column]=\"column\"\n                      [daysInWeek]=\"daysInWeek\"\n                      (eventClicked)=\"\n                        eventClicked.emit({\n                          event: timeEvent.event,\n                          sourceEvent: $event.sourceEvent\n                        })\n                      \"\n                    >\n                    </mwl-calendar-resource-week-view-event>\n                  </ng-template>\n                </div>\n              </ng-container>\n              <ng-template #emptyEvents>\n                <div\n                  class=\"cal-event-container\"\n                  [style.height.px]=\"hourSegmentHeight\"\n                >\n                  <div [style.height.px]=\"hourSegmentHeight\"></div>\n                </div>\n              </ng-template>\n            </div>\n\n            <div\n              *ngFor=\"let row of resourcesMaxRowsNumberAsArray; let odd = odd\"\n              class=\"cal-hour\"\n              [class.cal-row-odd]=\"odd\"\n            >\n              <mwl-calendar-resource-week-view-row-segment\n                [style.height.px]=\"\n                  hourSegmentHeight * (row.count > 0 ? row.count : 1)\n                \"\n                [segmentHeight]=\"\n                  hourSegmentHeight * (row.count > 0 ? row.count : 1)\n                \"\n                [segment]=\"{}\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n              >\n              </mwl-calendar-resource-week-view-row-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.ChangeDetectorRef }, { type: CalendarUtils }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: DateAdapter }, { type: i0__namespace.ElementRef }];
        }, propDecorators: { viewDate: [{
                    type: i0.Input
                }], events: [{
                    type: i0.Input
                }], resources: [{
                    type: i0.Input
                }], excludeDays: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], weekStartsOn: [{
                    type: i0.Input
                }], headerTemplate: [{
                    type: i0.Input
                }], eventTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], precision: [{
                    type: i0.Input
                }], weekendDays: [{
                    type: i0.Input
                }], snapDraggedEvents: [{
                    type: i0.Input
                }], hourSegments: [{
                    type: i0.Input
                }], hourDuration: [{
                    type: i0.Input
                }], hourSegmentHeight: [{
                    type: i0.Input
                }], minimumEventHeight: [{
                    type: i0.Input
                }], dayStartHour: [{
                    type: i0.Input
                }], dayStartMinute: [{
                    type: i0.Input
                }], dayEndHour: [{
                    type: i0.Input
                }], dayEndMinute: [{
                    type: i0.Input
                }], hourSegmentTemplate: [{
                    type: i0.Input
                }], eventSnapSize: [{
                    type: i0.Input
                }], allDayEventsLabelTemplate: [{
                    type: i0.Input
                }], daysInWeek: [{
                    type: i0.Input
                }], currentTimeMarkerTemplate: [{
                    type: i0.Input
                }], keepUnassignedEvents: [{
                    type: i0.Input
                }], unassignedRessourceName: [{
                    type: i0.Input
                }], validateEventTimesChanged: [{
                    type: i0.Input
                }], dayHeaderClicked: [{
                    type: i0.Output
                }], eventClicked: [{
                    type: i0.Output
                }], eventTimesChanged: [{
                    type: i0.Output
                }], beforeViewRender: [{
                    type: i0.Output
                }], hourSegmentClicked: [{
                    type: i0.Output
                }] } });

    var ArrayFilterPipe = /** @class */ (function () {
        function ArrayFilterPipe() {
        }
        ArrayFilterPipe.prototype.transform = function (items, key, value) {
            var _this = this;
            if (!items || !items.length || !key) {
                return items;
            }
            return items.filter(function (item) {
                var keys = key.split('.');
                var itemValue = item;
                var _loop_1 = function (i) {
                    itemValue = itemValue ? itemValue[keys[i]] : undefined;
                    if (Array.isArray(itemValue)) {
                        return { value: itemValue.some(function (subItem) { return _this.getNestedValue(subItem, keys.slice(i + 1).join('.')) ===
                                value; }) };
                    }
                };
                for (var i = 0; i < keys.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return itemValue === value;
            });
        };
        ArrayFilterPipe.prototype.getNestedValue = function (obj, key) {
            return key
                .split('.')
                .reduce(function (acc, currKey) { return (acc ? acc[currKey] : undefined); }, obj);
        };
        return ArrayFilterPipe;
    }());
    ArrayFilterPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ArrayFilterPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    ArrayFilterPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ArrayFilterPipe, name: "arrayFilter", pure: false });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ArrayFilterPipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'arrayFilter',
                        pure: false,
                    }]
            }] });

    var PipeModule = /** @class */ (function () {
        function PipeModule() {
        }
        return PipeModule;
    }());
    PipeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PipeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PipeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PipeModule, declarations: [ArrayFilterPipe], imports: [i1.CommonModule], exports: [ArrayFilterPipe] });
    PipeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PipeModule, imports: [[i1.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PipeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [ArrayFilterPipe],
                        imports: [i1.CommonModule],
                        exports: [ArrayFilterPipe],
                    }]
            }] });

    var CalendarResourceWeekModule = /** @class */ (function () {
        function CalendarResourceWeekModule() {
        }
        return CalendarResourceWeekModule;
    }());
    CalendarResourceWeekModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CalendarResourceWeekModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekModule, declarations: [CalendarResourceWeekViewComponent,
            CalendarResourceWeekViewHeaderComponent,
            CalendarResourceWeekViewEventComponent,
            CalendarResourceWeekViewRowSegmentComponent], imports: [i1.CommonModule,
            i9.ResizableModule,
            i2.DragAndDropModule,
            CalendarCommonModule,
            PipeModule], exports: [i9.ResizableModule,
            i2.DragAndDropModule,
            CalendarResourceWeekViewComponent,
            CalendarResourceWeekViewHeaderComponent,
            CalendarResourceWeekViewEventComponent,
            CalendarResourceWeekViewRowSegmentComponent] });
    CalendarResourceWeekModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekModule, imports: [[
                i1.CommonModule,
                i9.ResizableModule,
                i2.DragAndDropModule,
                CalendarCommonModule,
                PipeModule,
            ], i9.ResizableModule,
            i2.DragAndDropModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceWeekModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            i9.ResizableModule,
                            i2.DragAndDropModule,
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
                            i9.ResizableModule,
                            i2.DragAndDropModule,
                            CalendarResourceWeekViewComponent,
                            CalendarResourceWeekViewHeaderComponent,
                            CalendarResourceWeekViewEventComponent,
                            CalendarResourceWeekViewRowSegmentComponent,
                        ],
                    }]
            }] });

    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-resource-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-resource-day-view>
     * ```
     */
    var CalendarResourceDayViewComponent = /** @class */ (function () {
        function CalendarResourceDayViewComponent() {
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of resources to display on view
             */
            this.resources = [];
            /**
             * The number of segments in an hour. Must divide equally into 60.
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 50;
            /**
             * The minimum height in pixels of each event
             */
            this.minimumEventHeight = 50;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * Should we display events without assigned resources
             */
            this.keepUnassignedEvents = true;
            /**
             * Name to display unassigned resource. This apply only if keepUnassignedEvents is equal to true
             */
            this.unassignedRessourceName = 'Unassigned';
            /**
             * label to display for
             */
            this.allDayText = 'All day';
            /**
             * Called when an event title is clicked
             */
            this.eventClicked = new i0.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new i0.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new i0.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current day.
             * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
             */
            this.beforeViewRender = new i0.EventEmitter();
        }
        return CalendarResourceDayViewComponent;
    }());
    CalendarResourceDayViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceDayViewComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CalendarResourceDayViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CalendarResourceDayViewComponent, selector: "mwl-calendar-resource-day-view", inputs: { viewDate: "viewDate", events: "events", resources: "resources", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", hourDuration: "hourDuration", minimumEventHeight: "minimumEventHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", snapDraggedEvents: "snapDraggedEvents", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate", keepUnassignedEvents: "keepUnassignedEvents", unassignedRessourceName: "unassignedRessourceName", allDayText: "allDayText", validateEventTimesChanged: "validateEventTimesChanged" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, ngImport: i0__namespace, template: "\n    <mwl-calendar-resource-week-view\n      class=\"cal-resource-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourDuration]=\"hourDuration\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [minimumEventHeight]=\"minimumEventHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      [validateEventTimesChanged]=\"validateEventTimesChanged\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n      [resources]=\"resources\"\n      [keepUnassignedEvents]=\"keepUnassignedEvents\"\n      [unassignedRessourceName]=\"unassignedRessourceName\"\n    ></mwl-calendar-resource-week-view>\n  ", isInline: true, components: [{ type: CalendarResourceWeekViewComponent, selector: "mwl-calendar-resource-week-view", inputs: ["viewDate", "events", "resources", "excludeDays", "refresh", "locale", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "weekStartsOn", "headerTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "precision", "weekendDays", "snapDraggedEvents", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegmentTemplate", "eventSnapSize", "allDayEventsLabelTemplate", "daysInWeek", "currentTimeMarkerTemplate", "keepUnassignedEvents", "unassignedRessourceName", "validateEventTimesChanged"], outputs: ["dayHeaderClicked", "eventClicked", "eventTimesChanged", "beforeViewRender", "hourSegmentClicked"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceDayViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-calendar-resource-day-view',
                        template: "\n    <mwl-calendar-resource-week-view\n      class=\"cal-resource-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourDuration]=\"hourDuration\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [minimumEventHeight]=\"minimumEventHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      [validateEventTimesChanged]=\"validateEventTimesChanged\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n      [resources]=\"resources\"\n      [keepUnassignedEvents]=\"keepUnassignedEvents\"\n      [unassignedRessourceName]=\"unassignedRessourceName\"\n    ></mwl-calendar-resource-week-view>\n  ",
                    }]
            }], propDecorators: { viewDate: [{
                    type: i0.Input
                }], events: [{
                    type: i0.Input
                }], resources: [{
                    type: i0.Input
                }], hourSegments: [{
                    type: i0.Input
                }], hourSegmentHeight: [{
                    type: i0.Input
                }], hourDuration: [{
                    type: i0.Input
                }], minimumEventHeight: [{
                    type: i0.Input
                }], dayStartHour: [{
                    type: i0.Input
                }], dayStartMinute: [{
                    type: i0.Input
                }], dayEndHour: [{
                    type: i0.Input
                }], dayEndMinute: [{
                    type: i0.Input
                }], refresh: [{
                    type: i0.Input
                }], locale: [{
                    type: i0.Input
                }], eventSnapSize: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipTemplate: [{
                    type: i0.Input
                }], tooltipAppendToBody: [{
                    type: i0.Input
                }], tooltipDelay: [{
                    type: i0.Input
                }], hourSegmentTemplate: [{
                    type: i0.Input
                }], eventTemplate: [{
                    type: i0.Input
                }], eventTitleTemplate: [{
                    type: i0.Input
                }], eventActionsTemplate: [{
                    type: i0.Input
                }], snapDraggedEvents: [{
                    type: i0.Input
                }], allDayEventsLabelTemplate: [{
                    type: i0.Input
                }], currentTimeMarkerTemplate: [{
                    type: i0.Input
                }], keepUnassignedEvents: [{
                    type: i0.Input
                }], unassignedRessourceName: [{
                    type: i0.Input
                }], allDayText: [{
                    type: i0.Input
                }], validateEventTimesChanged: [{
                    type: i0.Input
                }], eventClicked: [{
                    type: i0.Output
                }], hourSegmentClicked: [{
                    type: i0.Output
                }], eventTimesChanged: [{
                    type: i0.Output
                }], beforeViewRender: [{
                    type: i0.Output
                }] } });

    var CalendarResourceDayModule = /** @class */ (function () {
        function CalendarResourceDayModule() {
        }
        return CalendarResourceDayModule;
    }());
    CalendarResourceDayModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceDayModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CalendarResourceDayModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceDayModule, declarations: [CalendarResourceDayViewComponent], imports: [i1.CommonModule, CalendarCommonModule, CalendarResourceWeekModule], exports: [CalendarResourceDayViewComponent] });
    CalendarResourceDayModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceDayModule, imports: [[i1.CommonModule, CalendarCommonModule, CalendarResourceWeekModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarResourceDayModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule, CalendarCommonModule, CalendarResourceWeekModule],
                        declarations: [CalendarResourceDayViewComponent],
                        exports: [CalendarResourceDayViewComponent],
                    }]
            }] });

    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */
    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
        }
        CalendarModule.forRoot = function (dateAdapter, config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: CalendarModule,
                providers: [
                    dateAdapter,
                    config.eventTitleFormatter || CalendarEventTitleFormatter,
                    config.dateFormatter || CalendarDateFormatter,
                    config.utils || CalendarUtils,
                    config.a11y || CalendarA11y,
                ],
            };
        };
        return CalendarModule;
    }());
    CalendarModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CalendarModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarModule, imports: [CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule,
            CalendarResourceWeekModule,
            CalendarResourceDayModule], exports: [CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule,
            CalendarResourceWeekModule,
            CalendarResourceDayModule] });
    CalendarModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarModule, imports: [[
                CalendarCommonModule,
                CalendarMonthModule,
                CalendarWeekModule,
                CalendarDayModule,
                CalendarResourceWeekModule,
                CalendarResourceDayModule,
            ], CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule,
            CalendarResourceWeekModule,
            CalendarResourceDayModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CalendarModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            CalendarCommonModule,
                            CalendarMonthModule,
                            CalendarWeekModule,
                            CalendarDayModule,
                            CalendarResourceWeekModule,
                            CalendarResourceDayModule,
                        ],
                        exports: [
                            CalendarCommonModule,
                            CalendarMonthModule,
                            CalendarWeekModule,
                            CalendarDayModule,
                            CalendarResourceWeekModule,
                            CalendarResourceDayModule,
                        ],
                    }]
            }] });

    /*
     * Public API Surface of angular-calendar
     */

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'DAYS_OF_WEEK', {
        enumerable: true,
        get: function () {
            return calendarUtils.DAYS_OF_WEEK;
        }
    });
    exports.CalendarA11y = CalendarA11y;
    exports.CalendarAngularDateFormatter = CalendarAngularDateFormatter;
    exports.CalendarCommonModule = CalendarCommonModule;
    exports.CalendarDateFormatter = CalendarDateFormatter;
    exports.CalendarDayModule = CalendarDayModule;
    exports.CalendarDayViewComponent = CalendarDayViewComponent;
    exports.CalendarEventTitleFormatter = CalendarEventTitleFormatter;
    exports.CalendarModule = CalendarModule;
    exports.CalendarMomentDateFormatter = CalendarMomentDateFormatter;
    exports.CalendarMonthModule = CalendarMonthModule;
    exports.CalendarMonthViewComponent = CalendarMonthViewComponent;
    exports.CalendarNativeDateFormatter = CalendarNativeDateFormatter;
    exports.CalendarResourceDayModule = CalendarResourceDayModule;
    exports.CalendarResourceDayViewComponent = CalendarResourceDayViewComponent;
    exports.CalendarResourceWeekModule = CalendarResourceWeekModule;
    exports.CalendarResourceWeekViewComponent = CalendarResourceWeekViewComponent;
    exports.CalendarUtils = CalendarUtils;
    exports.CalendarWeekModule = CalendarWeekModule;
    exports.CalendarWeekViewComponent = CalendarWeekViewComponent;
    exports.DateAdapter = DateAdapter;
    exports.MOMENT = MOMENT;
    exports.collapseAnimation = collapseAnimation;
    exports.getWeekViewPeriod = getWeekViewPeriod;
    exports.ɵCalendarA11yPipe = CalendarA11yPipe;
    exports.ɵCalendarDatePipe = CalendarDatePipe;
    exports.ɵCalendarEventActionsComponent = CalendarEventActionsComponent;
    exports.ɵCalendarEventTitleComponent = CalendarEventTitleComponent;
    exports.ɵCalendarEventTitlePipe = CalendarEventTitlePipe;
    exports.ɵCalendarMonthCellComponent = CalendarMonthCellComponent;
    exports.ɵCalendarMonthViewHeaderComponent = CalendarMonthViewHeaderComponent;
    exports.ɵCalendarNextViewDirective = CalendarNextViewDirective;
    exports.ɵCalendarOpenDayEventsComponent = CalendarOpenDayEventsComponent;
    exports.ɵCalendarPreviousViewDirective = CalendarPreviousViewDirective;
    exports.ɵCalendarResourceWeekViewEventComponent = CalendarResourceWeekViewEventComponent;
    exports.ɵCalendarResourceWeekViewHeaderComponent = CalendarResourceWeekViewHeaderComponent;
    exports.ɵCalendarResourceWeekViewRowSegmentComponent = CalendarResourceWeekViewRowSegmentComponent;
    exports.ɵCalendarTodayDirective = CalendarTodayDirective;
    exports.ɵCalendarTooltipDirective = CalendarTooltipDirective;
    exports.ɵCalendarTooltipWindowComponent = CalendarTooltipWindowComponent;
    exports.ɵCalendarWeekViewCurrentTimeMarkerComponent = CalendarWeekViewCurrentTimeMarkerComponent;
    exports.ɵCalendarWeekViewEventComponent = CalendarWeekViewEventComponent;
    exports.ɵCalendarWeekViewHeaderComponent = CalendarWeekViewHeaderComponent;
    exports.ɵCalendarWeekViewHourSegmentComponent = CalendarWeekViewHourSegmentComponent;
    exports.ɵClickDirective = ClickDirective;
    exports.ɵKeydownEnterDirective = KeydownEnterDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-calendar.umd.js.map
