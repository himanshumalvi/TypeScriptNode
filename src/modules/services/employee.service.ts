import {Observable, pipe} from "rxjs";
import {injectable} from "inversify";
import { IEmployeeInterface } from "../interfaces";

@injectable()
export class EmployeeService implements IEmployeeInterface {

  constructor() {

    }

    getEmloyee(id: any): Observable<any> {
        let newVar = new Observable<any>((observer) => {
            observer.next("Hello Employees");
            return observer.complete();
        });
        return newVar;
    }

}
