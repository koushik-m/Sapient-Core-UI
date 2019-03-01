$(document).ready(function(){
    let payLoad = {
        country:"",
        email:"",
        mobile:""
    }
    $('#btnRegister').bind('click',function() {
        payLoad.country=$('#countrycode').val();
        payLoad.email=$('#email').val();
        payLoad.mobile  =$('#phone').val();

        $.ajax({
            url:'http://ec2-52-15-82-159.us-east-2.compute.amazonaws.com/gigx/api/signup',
            type:'POST',
            data:payLoad

        }).then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log(err);
        });
    })
});