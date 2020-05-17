import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  routeHistory: string[] = [];

  AddLink(link: string){
    this.routeHistory.push(link.substr(1));
  }

  GetLastLink(): string {
    return this.routeHistory.slice(-2)[0];
  }
  constructor() { }
}
