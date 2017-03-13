/**
 * Created by SergST on 10.03.2017.
 */

import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService  implements  InMemoryDbService {

  createDb(): {} {
    const todos = [
      {title: 'Learn HTML', completed: true},
      {title: 'Learn JS', completed: false},
      {title: 'Angular 2', completed: false}
    ]

    return {todos}
  }

}
