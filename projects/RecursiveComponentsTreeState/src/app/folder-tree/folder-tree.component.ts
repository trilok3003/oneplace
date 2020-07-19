import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
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
  inputs: [
		"expandedFolders",
		"rootFolder"
	],
	outputs: [
		"toggleFolderEvents: toggleFolder"
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.css']
})
export class FolderTreeComponent implements OnInit {
  public expandedFolders!: string[];
	public rootFolder!: Folder;
	public toggleFolderEvents: EventEmitter<Folder>;
 
	constructor() {
 
		this.toggleFolderEvents = new EventEmitter();
 
	}
  ngOnInit() {
  }
	public toggleFolder( target: Folder ) : void {
 
		this.toggleFolderEvents.emit ( target );
 
	}

}