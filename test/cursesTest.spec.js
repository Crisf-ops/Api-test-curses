const cursesGet  = require('../API/cursesGet')
const assert = require('assert')

describe('Get cursos', () => {

  it('obtener cursos', async function () {
    let res = await cursesGet.getCurses();
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.data[0].id, 1);
    assert.strictEqual(res.body.data[0].title, '✌️ Vue 3: Novedades aplicadas al mundo real');
    assert.strictEqual(res.body.data[0].category, 'frontend');
    assert.strictEqual(res.body.data[0].description, 'Veremos cómo exprimir las novedades de Vue 3 con ejemplos reales y aplicando buenas prácticas.');
    assert.strictEqual(res.body.data[0].link, 'https://pro.codely.tv/library/novedades-vue-3/about/?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=courses-masonry');
    assert.strictEqual(res.body.data[0].teachers, 'Javi y Núria');
  });

})