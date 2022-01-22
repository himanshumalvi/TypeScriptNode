import {Observable} from "rxjs/dist/types";
import {injectable} from "inversify";
import { IEmployeeInterface } from "../interfaces";

@injectable()
export class EmployeeService implements IEmployeeInterface {

  constructor() {

    }

    getEmloyee(id: any): Observable<any> {
        return undefined;
    }

}
