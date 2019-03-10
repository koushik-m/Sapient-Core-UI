describe('Add- function Testing', function(){

    it('Adding of two integers should give a result',function(){
        expect(add(1,2)).toBe(3);
    })
    it('Adding of two functions shuld send an error message',function(){
        expect(add(function(){},function(){})).toBe('Pass numbers only');
    })
})