describe('Verify Books',function(){
 
    it('Check if BookStore is existing',function(){
        expect(bookStore).toBeDefined()
    });
    it('Check if BookStore is having addBook',function(){
        expect(bookStore.addBook).toBeDefined()
    });
    it('Check if BookStore is having getBooks',function(){
        expect(bookStore.getBooks).toBeDefined()
    });

    it('GetBooks should return an Array',function(){
        expect(bookStore.getBooks().length).toBeGreaterThan(-1)
    })
});
describe('Add Book Feature',function(){
    it('It should add a book to the array',function(){
        let b = {id:1,author:'jjjj'};
        expect(bookStore.addBook(b).length).toBeGreaterThan(0);
    });
    it('should verfiy the duplicate ID doesnot exist',function(){
        let b = {id:1,author:'jjjj'};
        expect(bookStore.addBook(b)).toBe('Duplicate id');
    });
})