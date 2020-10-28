import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(img: any[]): string {
    if ( !img ){
      return 'assets/Images/no-user.png';
    }
  }

}
