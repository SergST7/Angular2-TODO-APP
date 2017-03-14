/**
 * Created by SergST on 10.03.2017.
 */

import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService  implements  InMemoryDbService {

  createDb(): {} {
    const todos = [
      {id:1, title: 'Learn HTML', completed: true},
      {id:2, title: 'Learn JS', completed: false},
      {id:3, title: 'Angular 2', completed: false}
    ]

    return {todos}
  }

}
