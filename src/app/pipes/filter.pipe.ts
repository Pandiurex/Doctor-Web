import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ListFilter',
    pure: false
})
export class ListFilter implements PipeTransform{
    transform(items: any[], field: string,value: string) : any{
        if(!items) return [];
        if(!value || value.length==0) return items;

        return items.filter(item => item[field].toUpperCase().indexOf(value.toUpperCase())!== -1);
    }
}
