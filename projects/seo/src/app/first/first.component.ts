import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title = 'One Component Title';
   hostName="https://www.example.com"
  constructor(private titleService: Title, private seoService: SeoService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.seoService.updateCanonicalUrl(this.hostName+'/first');
  }

}
