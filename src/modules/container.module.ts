import './controllers';
import { ContainerModule, interfaces } from 'inversify';
import { EmployeeService } from './services';
import {IEmployeeInterface} from "./interfaces";
import {Employee_Interface} from "./symbols";

export const EMPLOYEE_MODULE =  new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<IEmployeeInterface>(Employee_Interface).to(EmployeeService);
});
