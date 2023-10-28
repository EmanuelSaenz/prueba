import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  
  clientes: Cliente[];

  constructor(private clienteServicio: ClienteServicio){  }

  ngOnInit(){
    this.clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }
}
