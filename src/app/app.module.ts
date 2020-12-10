import { SettingService } from './setting.service';
import { LogService } from './shared/log.service';
import { ServicosService } from './servicos/servicos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TesteComponent } from './teste/teste.component';
import {  DiretivasNgIFComponent } from './diretivas-ng-if/diretivas-ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { NgStylesComponent } from './ng-styles/ng-styles.component';
import { FormsModule } from '@angular/forms';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HightlightMouseDirective } from './shared/hightlight-mouse.directive';
import { Highlight2Directive } from './shared/highlight2.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { ServicosComponent } from './servicos/servicos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { CamelCasePipe } from './camel-case.pipe';
import { Location } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { FiltroArrayPipe } from './filtro-array.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    DiretivasNgIFComponent,
    NgSwitchComponent,
    NgStylesComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HightlightMouseDirective,
    Highlight2Directive,
    NgElseDirective,
    ServicosComponent,
    CriarCursoComponent,
    PipeTestComponent,
    CamelCasePipe,
    FiltroArrayPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule
    // MaterializeModule
   
  ],
  providers: [
    ServicosService,
    LogService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
