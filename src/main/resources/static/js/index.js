
document.querySelector("html").classList.add('js');

var fileInput = document.querySelector(".input-file"),
    button = document.querySelector(".input-file-trigger"),
    the_return = document.querySelector(".file-return"),
    fullPath;

button.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
    }
});
button.addEventListener("click", function (event) {
    fileInput.focus();
    return false;
});
fileInput.addEventListener("change", function (event) {
    fullPath = this.value;
    the_return.innerHTML = fullPath.replace(/^.*[\\\/]/, '');
});


// Check empty file upload
$("#btnUpload").click(function () {
    var bool = true;

    if ($('#my-file').val() == '') {
        swal(
            'Failed',
            'Please choose a file',
            'error'
        )
        bool = false;
    } else {
        bool = true;
    }
    if (bool) {
        swal({
            title: 'Please Wait !',
            html: 'Data uploading...',// add html attribute if you want or remove
            allowOutsideClick: false,
            onBeforeOpen: () => {
                swal.showLoading()
            },
        });
    }
    return bool;
});


// Sweatalert delete to comfirm
function acceptDelete() {
    var x = $('#data-google-drive:checkbox:checked').length;
    if (x != 0) {
        swal({
            title: 'Confirm To Delete',
            text: "Are you sure you want to delete?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                var ids = $('tbody input[type=checkbox]:checked').map(function () {
                    return $(this).val();
                }).get();
                deleteFile(ids);
            }
        });
    } else {
        swal({
            title: 'Warning',
            text: "You have not selected file!",
            type: 'warning',
        });
    }
}

// Delete file on google drive
function deleteFile(id) {
    $.ajax({
        url: '/delete/file/' + id,
        method: 'DELETE'
    }).done(function () {
        swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        ).then((result) => {
            window.location.href = "${url}";
        });
    });
}

