import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private metaService:Meta){
  }
 
  ngOnInit() {
    this.metaService.addTag( { name:'description',content:"Article Description"});
  }
  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Article Description' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' });
  }
 addTags() {
  this.metaService.addTags([
    { name: 'description', content: 'Article Description' },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: 'Content Title for social media' }
 ]);
}
duplicateTags() {
  this.metaService.addTag( { name: 'description', content: 'Article Description' })
  this.metaService.addTag( { name: 'description', content: 'Article Description' })
}
duplicateTags1() {
  this.metaService.addTag( { name: 'description', content: 'Article Description' })
  this.metaService.addTag( { name: 'description', content: 'A different Article Description' })
}
duplicateTags2() {
  this.metaService.addTag( { name: 'description', content: 'Article Description' })
  this.metaService.addTag( { name: 'description', content: 'A different Article Description' })
  this.metaService.addTag( { name: 'description', content: 'Description of the Article' })   //Not Inserted
  this.metaService.addTag( { name: 'description', content: 'A different Article Description' })    //Inserted
}


}
