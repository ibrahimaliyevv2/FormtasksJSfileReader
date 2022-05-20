let uploadImage = document.getElementById("upload-image");
let fileInput = document.getElementById("file-input");

fileInput.addEventListener('change', function () {
    [...this.files].forEach(file => {

        if (file.type.startsWith('image/')) {
            let reader = new FileReader();

            reader.onload = function () {

                let img = document.createElement('img');
                img.classList.add("new-img");
                img.setAttribute('src', reader.result);

                document;
            }

            reader.readAsDataURL(file);

            let tBody = document.getElementById('table-body');

            var tr = document.createElement('tr');
            for (let i = 0; i < 4; i++) {
                var td = document.createElement('td');
                td.classList.add("");
            }
            tr.append(td,td)
            tBody.appendChild(tr);
            

        }
        else {
            console.log('Format is wrong');
            this.value = '';
        }
    })
})

uploadImage.addEventListener('click', function () {
    fileInput.click();
    this.value = '';
})