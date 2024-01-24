import {Component, Input} from '@angular/core';
import {NgFor} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Step} from "./step-selector.model";
import {CarSettings} from "../car-settings/car-settings.model";

@Component({
  selector: 'app-step-selector',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './step-selector.component.html',
  styleUrl: './step-selector.component.scss'
})
export class StepSelectorComponent {

  readonly steps: Step[] = [
    new Step(1, 'models', () => true),
    new Step(2, 'options', settings => settings.hasModelSelected()),
    new Step(3, 'summary', settings => settings.hasConfigSelected()),
  ];

  @Input({required: true})
  settings!: CarSettings;
}
