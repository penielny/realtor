import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../utils/supabase';



@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  imports: [CommonModule]
})
export class UploadImageComponent {
  files: File[] = [];
  previews: string[] = [];
  uploadedUrls: string[] = [];

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedFiles = input.files;
    if (selectedFiles) {
      this.handleFiles(Array.from(selectedFiles));
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  private handleFiles(files: File[]) {
    for (const file of files) {
      if (file.type.startsWith('image/')) {
        this.files.push(file);
        const reader = new FileReader();
        reader.onload = () => this.previews.push(reader.result as string);
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number): void {
    this.files.splice(index, 1);
    this.previews.splice(index, 1);
  }


  async removeImageFromBucket(index: number): Promise<void> {
    const publicUrl = this.previews[index];
    const path = this.getStoragePathFromUrl(publicUrl);

    const { error } = await supabase
      .storage
      .from('homes')
      .remove([path]);

    if (error) {
      console.error('Failed to delete from Supabase:', error.message);
      return;
    }
  }


  getStoragePathFromUrl(url: string): string {
    const parts = url.split('/storage/v1/object/public/');
    return parts.length > 1 ? parts[1] : '';
  }



  async uploadAllImages() {

    this.uploadedUrls = [];

    for (const file of this.files) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `homes/${fileName}`;

      const { error } = await supabase.storage.from('homes').upload(filePath, file);

      if (error) {
        console.error('Upload failed', error);
        continue;
      }

      const { data } = supabase.storage.from('homes').getPublicUrl(filePath);
      this.uploadedUrls.push(data.publicUrl);
    }

    return this.uploadedUrls;
  }


}
