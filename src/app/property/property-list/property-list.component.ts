import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.inteface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties: Array<any>=
    [{"Id":1,
    "SellRent":1,
  "Name": "Birla House",
  "Type":"House",
  "Price":12000,
  "Image":"prop-1"
},
{"Id":2,
"SellRent":2,
"Name": "Birla House2",
"Type":"House2",
"Price":11000,
"Image":"prop-2"
},
{"Id":3,
"SellRent":3,
"Name": "Birla House3",
"Type":"House3",
"Price":14000,
"Image":"prop-3"
},
{"Id":4,
"SellRent":4,
"Name": "Birla House4",
"Type":"House4",
"Price":15000,
"Image":"prop-4"
}]



  constructor(private housingService:HousingService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent=2;
    }



    //   this.housingService.getAllProperties().subscribe(
  //     data=>{
  //       this.Property=data;
  //       console.log(data);
  //     },error=>{
  //      console.log('httperror:');
  //      console.log(error);
  //     }
  //   );

  // }

  }
}
