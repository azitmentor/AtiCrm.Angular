import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerService } from '../services/partner.service';

@Component({
  selector: 'app-partneredit',
  templateUrl: './partneredit.component.html',
  styleUrls: ['./partneredit.component.scss']
})
export class PartnereditComponent implements OnInit {
  id: number = 0;
  item: any;
  constructor(private route: ActivatedRoute, private partnerService: PartnerService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.partnerService.GetPartnerById(this.id).subscribe(p => this.item = p);
    });
  }

  savePartner() {
    this.partnerService.Save(this.item).subscribe(o => this.router.navigate(["partnerlist"]));
  }
}
