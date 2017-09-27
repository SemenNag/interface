import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
