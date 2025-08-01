import { CommonModule, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Home } from '../../../../api/database/model';

@Component({
    selector: 'app-property-item',
    imports: [
        FormsModule,
        CommonModule,
    ],
    templateUrl: './property-item.component.html',
    styleUrl: './property-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyItemComponent {
    @Input() property!: Home;


}
