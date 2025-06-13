import { Component, VERSION } from '@angular/core';
import { Location } from '@angular/common';
import { generateData } from './data';
import { Folder } from './interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

	public expandedFolders: string[];
	public rootFolder: Folder;
 

 
	// constructor(private location: Location) {
	// 	this.location = location;
 
	constructor() {
		this.expandedFolders = [];
		this.rootFolder = generateData;
 
	}

	public collapseAll() : void {
		this.expandedFolders = [];
		this.setExpandedFoldersToLocation( this.expandedFolders );
 
	}
 
 
	public expandAll() : void {
 
		var uids: string[] = [];

		var foldersToExplore: Folder[] = [ this.rootFolder ];
 
		while ( foldersToExplore.length ) {
 
			var folder = foldersToExplore.shift() !; 
			uids.push( folder.uid );
	
			foldersToExplore.push( ...folder.folders );
 
		}
 
		this.expandedFolders = uids;
		this.setExpandedFoldersToLocation( this.expandedFolders );
 
	}

	public ngOnInit() : void {
 
		this.expandedFolders = this.getExpandedFoldersFromLocation();
 
	}
 
 
	public toggleFolder( target: Folder ) : void {
 
		var index = this.expandedFolders.indexOf( target.uid );
 
		if ( index === -1 ) {
 
			this.expandedFolders = this.expandedFolders.concat( target.uid );
 
		} else {
 
			this.expandedFolders = [
				...this.expandedFolders.slice( 0, index ),
				...this.expandedFolders.slice( index + 1 )
			];
 
		}
 
		// this.setExpandedFoldersToLocation( this.expandedFolders );
 
	}
 
	private getExpandedFoldersFromLocation() : string[] {
 
		// var search = this.location.path().split( "?" );
		// if ( search.length === 2 ) {
 
		// 	return( search[ 1 ].split( "," ) );
 
		// } else {
 
		// 	return( [] );
 
		// }
		
		return( [] );
	}
 
	private setExpandedFoldersToLocation( uids: string[] ) : void {
 
		// this.location.replaceState( "", uids.join( "," ) );
 
	}
 
}


