import { Component, Input } from '@angular/core';
import { Stock } from './stock';



@Component({
  selector: 'stock-list',
  template: `
  


<li *ngFor="let stock of stockList ">
{{stock.symbol |uppercase}} |
{{stock.price | currency}} |
{{stock.change}}
</li>




   <div>
    <h2>My Portfolio</h2>
    </div>
    
     <div>
       {{stockList[0].symbol}} | {{stockList[0].price}} | {{stockList[0].change}}

   
    
      
      <br>
      
      {{stockList[1].symbol}} | {{stockList[1].price}} | {{stockList[1].change}}
      
    <br>
      
   {{stockList[2].symbol}} | {{stockList[2].price}} | {{stockList[2].change}}
    </div>


  `,
})
export class StockListComponent {

  stockList: Stock[];

  constructor() {
    
    this.stockList = [];
    
  }
  
  ngOnInit() {
    
    this.stockList.push({
      symbol: 'googl',
      price: 10,
      change: 1
    });
    this.stockList.push({
      symbol: 'appl',
      price: 21,
      change: -3.5
    }); 
    this.stockList.push({
      symbol: 'msft',
      price: 91,
      change: .47
    });
   
  }
  
}
