import { Component } from '@angular/core';


interface LogisticPack {
  deliveryWindow: Date[]
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

  selectedQuants = []

  show() {
    console.log(JSON.stringify(this.quants));
  }
}
