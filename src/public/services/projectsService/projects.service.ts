import { Injectable } from '@angular/core';
import { IProjectData } from './projects.component.d';


@Injectable()
export class ProjectsService{
    private data:any = undefined;

    setData(data:any){
        this.data = data;
    }

    getData():any{
        return this.data;
    }
}