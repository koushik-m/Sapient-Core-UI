// (function(){
//     'use strict';
//     var test = document.getElementById('firstname');
//     // test.type = "checkbox";
//     test.name = "second";
//     // test.disabled = true; //disables the checkbox.
//     var containerDiv = document.getElementById('container');

//     // function createElement()
//     // var label = document.createElement('label');
//     // label.id="lblFirstName";
//     // label.innerHTML = "Welcome";

//     // containerDiv.appendChild(label);

//     test.readOnly = true;
// })();
// var myPosts = [{ text: '', time: '' }]
// function createPost() {
//     var postContent = document.getElementById('post');
//     var postsContainer = document.getElementById('postsContainer');
//     postsContainer.innerHTML = '';
//     myPosts.push({
//         text: postContent.value,
//         time: new Date()
//     });
//     for (var i = myPosts.length - 1; i >= 0; i--) {
//         var myCard = `<div class="card">
                  
//         <div class="card-body">
//                  ${myPosts[i].text} ${myPosts[i].time}
//         </div>
//     </div>`;
//         postsContainer.innerHTML += myCard;
//     }

//     postContent.value = '';
// }
(function(){
    var test = document.getElementById("btn").addEventListener("click",function(){
        document.getElementById("postsContainer").innerHTML = document.getElementById('post').value;
      });

})();
