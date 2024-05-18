import { Component } from '@angular/core';
import { SpecialityService } from '../../services/speciality.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speciality-detail',
  templateUrl: './speciality-detail.component.html',
  styleUrl: './speciality-detail.component.css'
})
export class SpecialityDetailComponent {
  speciality: any;

  constructor(private route: ActivatedRoute, private blogService: SpecialityService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const specialityId = +id;
      this.speciality = this.blogService.getBlogItemById(specialityId);
    }
  }
}
