import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppStateService } from '../../../shared/services/app-state.service';
import { IAmenities } from '../../../../interfaces/amenities';
import { UploadImageComponent } from "../../../shared/components/upload-image/upload-image.component";
import { HomesService } from '../../services/homes.service';
import { TiptapEditorDirective } from 'ngx-tiptap';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';


@Component({
  selector: 'app-add-home',
  imports: [CommonModule, ReactiveFormsModule, UploadImageComponent, TiptapEditorDirective],
  templateUrl: './add-home.component.html',
  styleUrl: './add-home.component.scss',
})
export class AddHomeComponent implements OnDestroy, OnInit {

  homesService = inject(HomesService);
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild(UploadImageComponent) uploadImage!: UploadImageComponent;
  homeForm: FormGroup;
  propertyTypes = [
    'apartment', 'house', 'villa', 'townhouse', 'bungalow', 'studio',
    'mansion', 'chalet', 'farmhouse', 'penthouse', 'loft', 'other'
  ];
  listingTypes = ['sale', 'rent'];
  amenities: IAmenities[] = []
  loading: boolean = false

  editor!: Editor;




  constructor(private fb: FormBuilder, private appState: AppStateService) {
    this.amenities = this.appState.amenities;
    this.homeForm = this.fb.group({
      title: ['', Validators.required],
      headline: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      bedrooms: [1, Validators.required],
      bathrooms: [1, Validators.required],
      area: [1, Validators.required],
      available: [true],
      listingType: ['sale', Validators.required],
      propertyType: ['house', Validators.required],

      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
        country: ['', Validators.required],
      }),

      features: this.fb.array([]),

      imageUrls: this.fb.array([])

    });
  }

  ngOnInit(): void {
    const initialContent = this.homeForm.get('description')?.value || '';

    this.editor = new Editor({
      extensions: [
        StarterKit as any,
        Bold,
        Italic,
        BubbleMenu.configure({
          element: document.querySelector('.bubble-menu') as HTMLElement,
        }),
      ],
      content: initialContent,
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        this.homeForm.get('description')?.setValue(html);
      }
    });
  }


  get features(): FormArray {
    return this.homeForm.get('features') as FormArray;
  }

  get imageUrls(): FormArray {
    return this.homeForm.get('imageUrls') as FormArray;
  }

  addFeature() {
    this.features.push(this.fb.group({
      type_id: [0, Validators.required],
    }));
  }

  removeFeature(index: number) {
    this.features.removeAt(index);
  }

  addImageUrl() {
    this.imageUrls.push(this.fb.control('', Validators.required));
  }

  removeImageUrl(index: number) {
    this.imageUrls.removeAt(index);
  }

  async onSubmit() {
    this.loading = true;

    if (this.homeForm.invalid || !this.uploadImage.files.length) {
      this.loading = false;
      return;
    }

    const urls: string[] = await this.uploadImage.uploadAllImages()
    const homeData = this.homeForm.value;
    this.homesService.addHome({ ...homeData, imageUrls: urls })
    this.loading = false;
  }

  toggleBold() {
    this.editor.chain().focus().toggleBold().run();
  }

  toggleItalic() {
    this.editor.chain().focus().toggleItalic().run();
  }

  toggleHeading(level: number) {
    this.editor.chain().focus().toggleHeading({ level: level as any }).run();
  }

  toggleBulletList() {
    this.editor.chain().focus().toggleBulletList().run();
  }


  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }

}
