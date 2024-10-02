import { Component } from '@angular/core';
import { StorageService } from 'src/managers/StorageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  email: string = '';  

  constructor(private router: Router, private storageService: StorageService) {}

  async ngOnInit() { 
    this.loadData()
  }

  async loadData() {
    const userEmail = await this.storageService.get('userEmail')
    this.email = userEmail
  }

  async onSignOutButtonPressed() {
    await this.storageService.clear()
    this.router.navigate(['/splash'])
  }

}
