import { FirestoreDocumentModel } from './firestore-document.model';

export interface Student extends FirestoreDocumentModel {
    age: number;
    city: string;
    gender: string;
    name: string; 
    photo: string;
}