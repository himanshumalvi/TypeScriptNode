import {Observable} from "rxjs/dist/types";

export interface IEmployeeInterface {
    getEmloyee(id: any): Observable<any>;
}
