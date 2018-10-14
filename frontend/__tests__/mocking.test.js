function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('snickers');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('snickers');
  });

  it('can create a person', () => {
    const me = new Person('Danny', ['pizza', 'steak']);
    expect(me.name).toBe('Danny');
  });

  it('can fetch foods', async () => {
    const me = new Person('Danny', ['pizza', 'steak']);
    // Mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'ramen']);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain('sushi');
  });
});
