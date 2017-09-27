import { Component } from '@angular/core';


interface LogisticPack {
  deliveryWindow: Date[]
}

interface QtyPack {
  packType: number,
  qty: number,
  boxQty: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayRequestDialog = true;

  logistics: LogisticPack[] = [
    {deliveryWindow: [new Date(2017, 0, 1, 0, 0, 0, 0), new Date(2017, 0, 3, 0, 0, 0, 0)]},
    {deliveryWindow: [new Date(2017, 10, 21, 0, 0, 0, 0), new Date(2017, 10, 23, 0, 0, 0, 0)]},
  ];

  blockedQty = true;
  blockedLogistic = true;

  qtys: QtyPack[] = [
    {packType: 1, qty: 200, boxQty: 3},
    {packType: 2, qty: 500, boxQty: 6},
    {packType: 3, qty: 800, boxQty: 9}
  ];

  packTypes = [
    {label: 'Caselot', value: 1},
    {label: 'Multipack', value: 2},
    {label: 'Mono', value: 3},
  ];

  cities = [
    {label: 'Shanghai', value: 1},
    {label: 'Chickago', value: 2},
    {label: 'Moscow', value: 3},
    {label: 'London', value: 4},
  ];

  quants = [
    {
      brand: 'Demix',
      model: 'MT1Q101',
      price: 27.22,
      colorStyle: 1,
      id: 1,
      point: 'Shanghai',
      deliveryWindow: [
        {
          deliveryNumber: 'Delivery 1',
          start: '23.11.2017',
          end: '24.11.2017',
          qty: 600
        },
        {
          deliveryNumber: 'Delivery 2',
          start: '22.12.2017',
          end: '26.12.2017',
          qty: 800
        }
      ],
      multiplicity: [
        {packType: 'Caselot', mult: 7, qty: 'N/A'},
        {packType: 'Mutlipack', mult: 10, qty: 'N/A'}
      ]
    },
    {
      brand: 'Demix',
      model: 'MT1Q101',
      price: 27.22,
      colorStyle: 1,
      id: 2,
      point: 'Shanghai',
      deliveryWindow: [
        {
          deliveryNumber: 'Delivery 1',
          start: '23.11.2017',
          end: '24.11.2017',
          qty: 600
        },
        {
          deliveryNumber: 'Delivery 2',
          start: '22.12.2017',
          end: '26.12.2017',
          qty: 800
        }
      ],
      multiplicity: [
        {packType: 'Caselot', mult: 7, qty: 'N/A'},
        {packType: 'Mutlipack', mult: 10, qty: 'N/A'}
      ]
    }
  ];

  selectedQuants = [];

  getLabel(packValue) {
    const index = this.packTypes.findIndex(el => el.value === packValue);
    return this.packTypes[index].label;
  }
}
