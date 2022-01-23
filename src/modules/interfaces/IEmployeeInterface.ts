import {Observable} from "rxjs";

export interface IEmployeeInterface {
    getEmloyee(id: any): Observable<any>;
}
