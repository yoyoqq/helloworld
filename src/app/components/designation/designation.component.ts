import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from './../../../services/master.service';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  MasterService = inject(MasterService);

  ngOnInit(): void {
      
  }
}
