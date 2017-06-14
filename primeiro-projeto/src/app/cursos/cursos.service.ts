import { Injectable } afrom '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }

}
