/**
 * Created by SergST on 10.03.2017.
 */

export class Todo{
  id: number

  constructor(public title: string,
              public completed: boolean = false){}
}