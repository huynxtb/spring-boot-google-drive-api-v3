
// Check empty file upload
$("#btnUpload").click(function () {
    var bool = true;

    if ($('#folderName').val() == '') {
        swal(
            'Failed',
            'Please input folder name',
            'error'
        )
        bool = false;
    }
    if (bool) {
        swal({
            title: 'Please Wait !',
            html: 'Data uploading...',// add html attribute if you want or remove
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.fire.showLoading()
            },
        });
    }
    return bool;
});

var x = -1;
// Sweatalert delete to comfirm
function acceptDelete() {
    if (x == 1) {
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
        alert(x);
        swal({
            title: 'Warning',
            text: "You have not selected file!",
            type: 'warning',
        });
    }

}

$(document).ready(function () {
    $('input[type="checkbox"]').click(function () {
        if ($(this).is(":checked")) {
            x = 1;
            $("#result").html(x);
        } else if ($(this).is(":not(:checked)")) {
            x = -1;
            $("#result").html(x);
        }
    });
});

// Delete file on google drive
function deleteFile(id) {
    $.ajax({
        url: '/delete/folder/' + id,
        method: 'DELETE'
    }).done(function () {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        ).then((result) => {
            window.location.href = "${urlFolder}";
        });
    });
}

$(document).ready(function () {
    $('.remove-user').click(function () {
        let id = $(this).attr('data-id');
        swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            }
        );
    });
});

