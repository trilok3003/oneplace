import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SimpleChanges } from "@angular/core";
 
export interface Folder {
	uid: string;
	name: string;
	folders: Folder[];
	files: File[];
}
 
export interface File {
	uid: string;
	name: string;
}
 
@Component({
	selector: "app-folder",
	inputs: [
		"expandedFolders",
		"folder"
	],
	outputs: [
		"toggleFolderEvents: toggleFolder"
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: [ "./folder.component.css" ],
	templateUrl: "./folder.component.html"
})
export class FolderComponent {
 
	public expandedFolders!: string[];
	public folder!: Folder;
	public isExpanded: boolean;
	public toggleFolderEvents: EventEmitter<Folder>;
 
	// I initialize the folder component.
	constructor() {
 
		this.isExpanded = false;
		this.toggleFolderEvents = new EventEmitter();
 
	}
 
	public ngOnChanges( changes: SimpleChanges ) : void {
 	this.isExpanded = ( this.expandedFolders.indexOf( this.folder.uid ) !== -1 );
 
	}
 
	public toggleFolder( target: Folder ) : void {
 
		this.toggleFolderEvents.emit( target );
 
	}
 
}
