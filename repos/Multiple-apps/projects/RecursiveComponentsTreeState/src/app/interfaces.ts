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