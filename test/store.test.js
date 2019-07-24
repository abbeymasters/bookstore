import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('data store');

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save', assert => {
    // arrange
    const key = 'cat';
    const cat = { name: 'felix' };

    // act
    store.save(key, cat);
    const got = store.get(key);

    // assert
    assert.deepEqual(got, cat);

});
