import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { FoodNode } from './food-node';

interface Position {
  book: number;
  val: number;
}
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  payoff: string;
  contrat: string;
  children?: FoodNode[];
  position: Position[];
}


const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    payoff: '12',
    contrat: 'contrat1',
    children: [
      {
        name: 'Apple', payoff: '9', contrat: 'contrat2',
        position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
      },
      {
        name: 'Banana', payoff: '8', contrat: 'contrat5',
        position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
      },
      {
        name: 'Fruit loops', payoff: '4', contrat: 'contrat1',
        position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
      },
    ],
    position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
  }, {
    name: 'Vegetables',
    payoff: '6',
    contrat: 'contrat19',
    children: [
      {
        name: 'Green',
        payoff: '9',
        contrat: 'contrat1',
        children: [
          { name: 'Broccoli', payoff: '2', contrat: 'contrat10', position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }] },
          {
            name: 'Brussel sprouts', payoff: '3', contrat: 'contrat12',
            position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
          },
        ],
        position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
      }, {
        name: 'Orange',
        payoff: '9',
        contrat: 'contrat1',
        children: [
          { name: 'Pumpkins', payoff: '5', contrat: 'contrat7', position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }] },
          { name: 'Carrots', payoff: '8', contrat: 'contrat5', position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }] },
        ],
        position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
      },
    ],
    position: [{ book: 0, val: 10000 }, { book: 51, val: 150000 }]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fredo';
  selectedValue = '';
  items = [
    { value: '0', view: 'zero' },
    { value: '1', view: 'one' },
    { value: '2', view: 'Two' }
  ];

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
