    // <!-- =============== Preloader Js=========== -->


    //     01. First you need to open a JavaScript file.
    //     02. You have to write the following code.
    //     03. Here you have to take the name of the original div in the ID.
    //     04. It must be replaced by preloader_main.


    <script>
        var overlay = document.getElementById("preloader_main");

        window.addEventListener('load', function(){
            overlay.style.display = 'none';
        })
    </script>


