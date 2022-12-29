import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  photos=['github','linkedin','message'];
  links=['https://www.youtube.com/','https://github.com/','https://www.facebook.com/']


  constructor() { }

  ngOnInit(): void {
  }

}
