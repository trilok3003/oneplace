import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private dom
    ) {
}

ngOnInit() {

this.router.events.pipe(
filter(event => event instanceof NavigationEnd),
)
.subscribe(() => {

var rt = this.getChild(this.activatedRoute)

rt.data.subscribe(data => {
console.log(data);
this.titleService.setTitle(data.title);
if (data.descrption) {
  this.metaService.updateTag({ name: 'description', content: data.descrption })
} else {
  this.metaService.removeTag("name='description'")
}
          //You can set the Meta & Title here
})
})

}

getChild(activatedRoute: ActivatedRoute) {
if (activatedRoute.firstChild) {
return this.getChild(activatedRoute.firstChild);
} else {
return activatedRoute;
}

}
}
