// function multipleupload(file) {
//         'use strict';
//         const dz = file('dz');
//         const error = file('error-message');
//         const success = file('success-message');
//         Dropzone.autoDiscover = false;
//         dz.dropzone({
//             url: dz.data('url'),
//             acceptedFiles: 'image/*',
//             autoProcessQueue: false,
//             uploadMultiple: true,
//             parallelUploads: 4,
//             maxFiles: 4,
//             addRemoveLinks: true,
//             dictDefaultMessage: 'Upload Images',
//             dictRemoveFile: 'Remove Images',
//             dictMaxFilesExceeded: 'Maximum number of images exceeded: 6',
//             dictSetPrimary: 'Set Primary',
//             init: function() {
//                 let radioChangeEvent, radioElement, acceptedFiles, i;
//                 this.on('addedfile', file => {
//                     acceptedFiles = this.getAcceptedFiles();
//                     i = acceptedFiles.length;
//                     if(this.options.dictSetPrimary) {
//                         let inputString = `<div class="form-check"><input class="form-check-input" type="radio" name="setPrimary" id="${file.upload.uuid}">
//                             <label class="form-check-label" for="${file.upload.uuid}">${this.options.dictSetPrimary}</label></div>`;
//                         file.previewElement.appendChild(Dropzone.createElement(inputString));
//                         file.isPrimary = false;
//                     }
//                     radioChangeEvent = (function() {
//                         return function() {
//                             file.isPrimary = true;
//                         }
//                     })();
//                     if(acceptedFiles.length < this.options.maxFiles) {
//                         radioElement = file.previewElement.querySelector("input[type=radio][name=setPrimary]");
//                         radioElement.addEventListener('change', radioChangeEvent)
//                     }
//                 })
//                 this.on('error', (file, message) => {
//                     if(message) {
//                         error.text(message);
//                         error.removeClass('d-none');
//                     }
//                     if(!error.hasClass('d-none')) {
//                         setTimeout(function() {
//                             error.addClass('d-none');
//                         }, 5000);
//                     }
//                 });
//                 this.on('maxfilesexceeded', file => this.removeFile(file));
//                 this.on('sendingmultiple', (files, xhr, formData) => {
//                     const $dpStart = $('#dpStart');
//                     const $dpEnd = $('#dpEnd');
//                     let i, isPrimary ;
//                     if(this.options.dictSetPrimary) {
//                         for(i = 0; i < files.length ; i++) {
//                             if(files[i].isPrimary) {
//                                 isPrimary = this._getParamName(i);
//                             }
//                         }
//                         formData.append("isPrimary", isPrimary ? isPrimary : this._getParamName(0));
//                     }
//                     if($dpStart.data('DateTimePicker').date()) {
//                         formData.append('startDate', $dpStart.data('DateTimePicker').date().format('YYYY-MM-DD HH:mm:ss'));
//                     }
//                     if($dpEnd.data('DateTimePicker').date()) {
//                         formData.append('endDate', $dpEnd.data('DateTimePicker').date().format('YYYY-MM-DD HH:mm:ss'));
//                     }
//                 })
//                 this.on('successmultiple', (files, responseText) => {
//                     success.text(responseText.data);
//                     success.removeClass('d-none');
//                     setTimeout(function() {
//                         success.addClass('d-none');
//                     }.bind(this), 5000);
//                 });
//                 $('#fileUpload').on('click', () => this.processQueue());
//             },
//         });
// } apply(this, [jQuery]);


function previewImage(file){
    var gallery = file.getElementById('gallery');
    var div = file.createElement('div');
    var img = file.createElement('img');
    div.classList.add('thumbnail');
    div.appendChild(img);
    gallery.appendChild(div);

    var reader = new FileReader();
    reader.onload = (function(f){
     return function(e) {
    f.src = e.target.result;
           };})(img);

    reader.readAsDataURL(file);
}

function fileinput() {
               for(var i=0; i<this.files.length; i++){
               previewImage(this.files[i]);
            }
};
