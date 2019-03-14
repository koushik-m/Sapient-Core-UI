
    test('should test the user is existing', function(assert){
        usersList = ['abc124','xyaz'];

        assert.expect(1);

        let checkUser = isAuthorizedPromise('abc128');
        return checkUser.then((result)=>{
            assert.equal(result,true);
        })
    })
