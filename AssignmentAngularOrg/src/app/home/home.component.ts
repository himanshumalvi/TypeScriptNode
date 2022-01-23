import {Component, OnInit, ChangeDetectionStrategy,ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
export interface Tile {
  cols: number;
  rows: number;
}
export interface EmployeeTableElement {
  position:number
  empId: string;
  empName: string;
  deptId: string;
  emailId: string;
  phoneNumber:string;
}
const ELEMENT_DATA: any[] = [
  { position: 1, empId: 'EMP01', empName: 'Dr K Sivan', deptId: 'SPCAE01',emailId:'Sivan.dr@angular.org.com',phoneNumber:'+42-901111111111' },
  { position: 2, empId: 'EMP02', empName: 'Jeff Bezos', deptId: 'AMAZONT02',emailId:'Jeff@angular.org.com',phoneNumber:'+42-0000000' },
  { position: 3, empId: 'EMP03', empName: 'Sir Ratan Tata', deptId: 'TATA01',emailId:'tata@angular.org.com',phoneNumber:'+42-323124324' },
  { position: 4, empId: 'EMP04', empName: 'Elon Musk', deptId: 'SPCAE01',emailId:'Elon@angular.org.com',phoneNumber:'+42-3325323' },
  { position: 5, empId: 'EMP05', empName: 'Vitaly Dmitriyevich', deptId: 'CRPT01',emailId:'Vitaly@angular.org.com',phoneNumber:'+42-124214' },
  { position: 6, empId: 'EMP06', empName: 'Masaru Emoto', deptId: 'PSEUDO-SCIENTIST01',emailId:'Masaru@angular.org.com',phoneNumber:'+42-901111111111' },
  { position: 7, empId: 'EMP07', empName: 'Hideki Yukawa', deptId: 'HIDEKI02',emailId:'Yukawa@angular.org.com',phoneNumber:'+42-0000000' },
  { position: 8, empId: 'EMP08', empName: 'Homi J. Bhabha', deptId: 'NUCLEAR01',emailId:'Bhabha@angular.org.com',phoneNumber:'+42-323124324' },
  { position: 9, empId: 'EMP09', empName: 'Dr. A. P. J. Abdul Kalam', deptId: 'PRESIDENTSPCAE03',emailId:'Mani@angular.org.com',phoneNumber:'+42-3325323' },
  { position: 10, empId: 'EMP10', empName: 'Anna Mani', deptId: 'PHYSICIST01',emailId:'Mani@angular.org.com',phoneNumber:'+42-124214' },

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns = ['position', 'empId', 'empName', 'deptId', 'emailId','phoneNumber'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // @ts-ignore
  @ViewChild(MatPaginator)  paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _liveAnnouncer: LiveAnnouncer) {}


  ngAfterViewInit() {
    //console.log(this.sort) ;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngOnInit(): void {

  }

  tiles: Tile[] = [
    {cols: 4, rows: 5},
  ];

}



