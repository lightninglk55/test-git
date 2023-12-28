
// // sử dụng sau khi trang web được tải
// document.addEventListener('DOMContentLoaded', function() {

//     // trọn đến các class và gán nó vào 1 biến
//     var button = document.querySelector('.container-btn');
//     var containerDesc = document.querySelector('.container-desc');

//     // gán sự kiện click vào nút button
//     button.addEventListener('click', function() {
//         // chiueenr đổi trạng thái (.toggle) của class 'hidden'.
//         containerDesc.classList.toggle('hidden');
//     });

// });


document.addEventListener('DOMContentLoaded', function() {

    var button = document.querySelector('.container-btn');
    var containerDesc = document.querySelector('.container-desc');

    button.addEventListener('click', function() {
        containerDesc.classList.toggle('hidden');
    })
})