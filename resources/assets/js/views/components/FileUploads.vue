<template>
  <div>
    <sw-page-header title="File Uploads">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Components" to="/admin/components/file-uploads" />
          <sw-breadcrumb-item title="File Uploads" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card>
      <template v-slot:header>
        <span class="sw-section-title">Avatar Upload</span>
      </template>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-1 xl:grid-cols-2">
       <sw-avatar
          :preview-avatar="previewAvatar"
          @changed="onChange"
          @uploadHandler="onUploadHandler"
          @handleUploadError="onHandleUploadError"
        >
          <template v-slot:icon>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 text-gray-400 cloud-upload"
            >
              <path
                d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
              ></path>
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
            </svg>
          </template>
        </sw-avatar>
      </div>
    </sw-card>
    <sw-card class="mt-5">
      <template v-slot:header>
        <span class="sw-section-title">Drag & Drop Uploader</span>
      </template>
      <div class="w-full">
        <sw-file-upload
          id="mydropzone"
          ref="dropZone"
          :options="dropzoneOptions"
        />
      </div>
    </sw-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dropzoneOptions: {
        autoProcessQueue: false,
        url: `https://httpbin.org/post`,
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        maxFilesize: 1,
        maxFiles: 10,
        parallelUploads: 5,
        uploadMultiple: true,
        dictDefaultMessage: 'drag and drop',
        dictCancelUpload: 'cancel',
        dictRemoveFile: 'remove',
        dictInvalidFileType: 'This file type is not supported.',
        dictFileTooBig: 'File size too Big',
        addRemoveLinks: false,
        method: 'post'
      },
      previewAvatar: '',
      cropperOutputMime: '',
      fileSizeInKb: null,
      fileObject: null,
    }
  },
  methods: {
    onChange(file) {
      this.fileSizeInKb = parseFloat(file.size / 1024).toFixed(2)
      this.cropperOutputMime = file.type
      this.fileObject = file
    },
    onUploadHandler(cropper) {
      this.previewAvatar = cropper
        .getCroppedCanvas()
        .toDataURL(this.cropperOutputMime)
    },
    onHandleUploadError() {
      console.log('Oops! Something went wrong...')
    }
  }
}
</script>
