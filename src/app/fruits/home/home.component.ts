import { FruitService } from './../fruit.service';
import { Inter } from './../inter';
import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allfruits: Inter[] = [];
  constructor(private fruitservecs: FruitService) {}
  deleteModal: any;
  idtodel: number = 0;
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
  get() {
    this.fruitservecs.get().subscribe((data) => {
      this.allfruits = data;
    });
  }
  opendeleteMOdal(id: number) {
    this.idtodel = id;
    this.deleteModal.show();
  }
  delete() {
    this.fruitservecs.delete(this.idtodel).subscribe((data) => {
      this.allfruits = this.allfruits.filter((_) => _.id !== this.idtodel);
      this.deleteModal.hide();
    });
  }
}
