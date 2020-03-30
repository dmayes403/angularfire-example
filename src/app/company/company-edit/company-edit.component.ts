import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  company$: Observable<Company>;

  constructor(
    private db: AngularFirestore,
    private companyService: CompanyService,
  ) {
    this.company$ = this.db.doc<Company>('companies/dTBPqsbSobliCjnJHM56').valueChanges();
  }

  ngOnInit(): void {
    console.log(this.db.doc<Company>('companies/dTBPqsbSobliCjnJHM56').valueChanges());
    this.db.doc<Company>('companies/dTBPqsbSobliCjnJHM56').valueChanges().subscribe(value => console.log(value));
  }

  saveCompany(company) {
    this.companyService.saveCompany(company);
  }

  editCompany(company) {
    this.companyService.editCompany({phone: '123-456-7890'});
  }

  deleteCompany() {
    this.companyService.deleteCompany();
  }

}
