import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dataArray: any[], filterString: string, mealType: string): any {
    if (!dataArray) {
      return [];
    }

    let filteredData = dataArray;

    // Filter by search string
    if (filterString) {
      filterString = filterString.toLowerCase();
      filteredData = filteredData.filter(item =>
        item.name.toLowerCase().includes(filterString) || 
        item.cuisine.toLowerCase().includes(filterString)
      );
    }

    // Filter by meal type
    if (mealType && mealType !== 'All') {
      filteredData = filteredData.filter(item => item.mealType.includes(mealType));
    }

    return filteredData;
  }
}

