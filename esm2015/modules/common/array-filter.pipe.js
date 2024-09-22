import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ArrayFilterPipe {
    transform(items, key, value) {
        if (!items || !items.length || !key) {
            return items;
        }
        return items.filter((item) => {
            const keys = key.split('.');
            let itemValue = item;
            for (let i = 0; i < keys.length; i++) {
                itemValue = itemValue ? itemValue[keys[i]] : undefined;
                if (Array.isArray(itemValue)) {
                    return itemValue.some((subItem) => this.getNestedValue(subItem, keys.slice(i + 1).join('.')) ===
                        value);
                }
            }
            return itemValue === value;
        });
    }
    getNestedValue(obj, key) {
        return key
            .split('.')
            .reduce((acc, currKey) => (acc ? acc[currKey] : undefined), obj);
    }
}
ArrayFilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ArrayFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ArrayFilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ArrayFilterPipe, name: "arrayFilter", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ArrayFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'arrayFilter',
                    pure: false,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWNhbGVuZGFyL3NyYy9tb2R1bGVzL2NvbW1vbi9hcnJheS1maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFNcEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLEtBQWdCLEVBQUUsR0FBVyxFQUFFLEtBQWM7UUFDckQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRXJCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFFdkQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUM1QixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQ25CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDVixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pELEtBQUssQ0FDUixDQUFDO2lCQUNIO2FBQ0Y7WUFFRCxPQUFPLFNBQVMsS0FBSyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sY0FBYyxDQUFDLEdBQVEsRUFBRSxHQUFXO1FBQzFDLE9BQU8sR0FBRzthQUNQLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs0R0E5QlUsZUFBZTswR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBSjNCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxLQUFLO2lCQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhcnJheUZpbHRlcicsXG4gIHB1cmU6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBcnJheUZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGl0ZW1zOiB1bmtub3duW10sIGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IHVua25vd25bXSB7XG4gICAgaWYgKCFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoIHx8ICFrZXkpIHtcbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICBsZXQgaXRlbVZhbHVlID0gaXRlbTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW1WYWx1ZSA9IGl0ZW1WYWx1ZSA/IGl0ZW1WYWx1ZVtrZXlzW2ldXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1WYWx1ZS5zb21lKFxuICAgICAgICAgICAgKHN1Ykl0ZW0pID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0TmVzdGVkVmFsdWUoc3ViSXRlbSwga2V5cy5zbGljZShpICsgMSkuam9pbignLicpKSA9PT1cbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtVmFsdWUgPT09IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXN0ZWRWYWx1ZShvYmo6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBrZXlcbiAgICAgIC5zcGxpdCgnLicpXG4gICAgICAucmVkdWNlKChhY2MsIGN1cnJLZXkpID0+IChhY2MgPyBhY2NbY3VycktleV0gOiB1bmRlZmluZWQpLCBvYmopO1xuICB9XG59XG4iXX0=