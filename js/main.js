document.addEventListener('DOMContentLoaded', function () {
    console.log(1);
    
    const routes = {
        "/contato": "https://wa.me/+5575981311648"
    };

    const path = window.location.pathname;

    console.log(path);

    if (routes[path]) {
        window.location.href = routes[path];
    }
});
