import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tarefa } from "../models/Tarefa";
import { environment } from '../../environments/environment';

@Injectable()
export class TarefaService{
    private readonly _resource = '/api/v1/tarefas';
    private readonly _apiUrl = `${environment.apiUrl}${this._resource}`

    constructor (private httpClient: HttpClient) {}

    getTarefas(){     
       return this.httpClient.get<Tarefa[]>(this._apiUrl);
    }

    createTarefa(tarefa: Tarefa){
        return this.httpClient.post<Tarefa>(this._apiUrl, tarefa);
    }
}