import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../model/class/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  // roleList: any[] = [];

    // new way on doing it 
    // constructor(private http: HttpClient){
      
    roleList: IRole [] = [];
    http = inject(HttpClient);
    
  
  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('Component initialized');
    this.getAllRoles();
  }

  getAllRoles() {
    const api_link = "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles";
    console.log('Fetching roles...');
    this.http.get(api_link).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.roleList = response.data;
      },
      error: (error) => {
        console.error('Error fetching roles:', error);
      }
    });
  }
}