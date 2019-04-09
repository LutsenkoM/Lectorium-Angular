import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: true
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchString: string, fieldName: string)  {
    console.log("Filter pipe started")

    if (carList.length === 0 || searchString === '') {
      return carList;
    }

    return carList.filter(car=> car[fieldName].toLowerCase().indexOf(searchString.toLowerCase())  !== -1);
  }

}
