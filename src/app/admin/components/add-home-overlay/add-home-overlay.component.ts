import { Component, Output, EventEmitter } from '@angular/core';
import { AddHomeComponent } from "../add-home/add-home.component";

@Component({
  selector: 'app-add-home-overlay',
  imports: [AddHomeComponent],
  templateUrl: './add-home-overlay.component.html',
  styleUrl: './add-home-overlay.component.scss'
})
export class AddHomeOverlayComponent {
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }

}
