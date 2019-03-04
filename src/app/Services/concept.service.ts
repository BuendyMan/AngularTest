import { Injectable } from '@angular/core';
import { CONCEPTLIST } from '../DataMocks/mock-concept';
import { Concept } from '../ClassModels/concept';

@Injectable({
  providedIn: 'root'
})
export class ConceptService 
{
  private response: Concept[];

  constructor() { }

  getConceptList(): Concept[]
  {
    //Initialice response
    this.response = null;

    this.response = CONCEPTLIST;

    return this.response;
  }
}
