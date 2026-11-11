import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SystemModule {

  private router = inject(Router);
  navigateToProfile() {
    this.router.navigate(['/'], {replaceUrl: true});
  }

  ngOnInit(): void {
    this.navigateToProfile()
  }  
}
