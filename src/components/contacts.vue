<template>
    <div class="fullscreen-gradient">
        <div class="container-body">
            <div class="container-title">
                <h3>Welcome Chris ALberto</h3>
            </div>
            <div class="container-text">
                <span class="mdi mdi-information-variant-circle-outline">This is your online phone book, you can access it
                    from
                    any place or device you just need to have internet
                    access</span>
            </div>
            <div class="container-content">
                <h2>Your contacts</h2>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <span>Chris Albeerto1</span>
                        <div style="display: inline; margin-left: 55%;">
                            <button class="btn btn-primary">...</button>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <span>Alberto Rodrigues</span>
                        <button class="btn btn-primary">...</button>
                    </li>
                    <li class="list-group-item">
                        <span>Ricardo Afonso</span>
                        <button class="btn btn-primary">...</button>
                    </li>
                    <li class="list-group-item">
                        <span>Rafael Ferreira</span>
                        <button class="btn btn-primary">...</button>
                    </li>
                    <li class="list-group-item">
                        <span>Edianeth Alonso</span>
                        <button class="btn btn-primary">...</button>
                    </li>
                    <li class="list-group-item">
                        <span>Rosa Monteiro</span>
                        <button class="btn btn-primary">...</button>
                    </li>

                </ul>
                <div class="container-pag">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.fullscreen-gradient {
    background: linear-gradient(to bottom, #2C3E50, #1A2533);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.container-body {
    background-color: #333333;
    color: #edf5e1;
    width: 40%;
    border-radius: 30px;
    padding: 55px;
}

.btn.btn-outline-danger {
    background-color: #3498DB;
    color: white;
    border: none;
}

.btn.btn-outline-danger:hover:focus {
    background-color: #28648b9d;
    color: black;
    border: none;
}

.container-title {
    text-align: left;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.container-text {
    font-size: small;
}

.container-content {
    background-color: white;
    color: black;
    border-radius: 30px;
    padding: 10px;
    margin: 1px;
}
</style>
  