import { Component, OnInit } from '@angular/core';
import { Term } from '../term';
import { TERMS } from '../mock-terms';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  terms = TERMS;
  selectedTerm: Term;

  constructor() { }

  ngOnInit() {
  }

  onSelect(term: Term): void {
    this.selectedTerm = term;
  }
}
