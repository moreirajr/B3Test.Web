import { Component, NgModule, OnInit } from "@angular/core";
import { Tarefa } from "../models/Tarefa";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from "../services/tarefa.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-tarefas',
    templateUrl: './tarefas.component.html',
    styleUrls: ['./tarefas.component.css']
  })
export class TarefasComponent implements OnInit {  
    formTarefa!: FormGroup;
    tarefas$: Observable<Tarefa[]> = new Observable<Tarefa[]>();;

    constructor(
        private tarefaService: TarefaService,
        private formBuilder: FormBuilder)
    {

    }

    ngOnInit(): void {
        this.formTarefa = this.formBuilder.group({
            descricao: [{ value:'', disabled: false }, Validators.required],
            data: [{ value:'', disabled: false }, Validators.required],
            status: [{ value:'', disabled: false } , Validators.required]
          });

        this.tarefas$ = this.tarefaService.getTarefas();
    }

    onSubmit(){
        
        if(!this.formTarefa.valid){
            return;
        }
      
        console.log(this.formTarefa.getRawValue());
      
        let formData = new FormData();
        formData.append('descricao', this!.formTarefa!.get('descricao')!.value);
        formData.append('data', this!.formTarefa!.get('data')!.value);
        formData.append('status', this!.formTarefa!.get('status')!.value);
        
        const novaTarefa: Tarefa = {
            id: '',
            descricao: formData.get('descricao') as string,
            data: new Date(formData.get('data') as string),
            status: parseInt(formData.get('status') as string),
            descricaoStatus: '',
        };

        this.tarefaService.createTarefa(novaTarefa).subscribe(data =>{
            if(data != null)
                console.log('Sucesso', 'Produto cadastrado com sucesso');
            else
                console.log('Erro ao cadastrar o produto', '');
        });
    }
}