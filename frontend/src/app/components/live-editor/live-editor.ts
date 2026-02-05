import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, PenLine, Trash2 } from 'lucide-angular';

@Component({
    selector: 'app-live-editor',
    standalone: true,
    imports: [CommonModule, FormsModule, LucideAngularModule],
    templateUrl: './live-editor.html',
    styleUrl: './live-editor.scss'
})
export class LiveEditorComponent {
    readonly PenLine = PenLine;
    readonly Trash2 = Trash2;

    inputText = '';

    @Output() contentChange = new EventEmitter<string>();

    onInputChange() {
        this.contentChange.emit(this.inputText);
    }

    clear() {
        this.inputText = '';
        this.contentChange.emit('');
    }
}
