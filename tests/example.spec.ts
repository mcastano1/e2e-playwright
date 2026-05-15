import { test, expect } from '@playwright/test';

test('Buscar', async ({page})=>{
  await page.goto('');
  const input1 = await page.getByRole('combobox',{name:'Ingresa lo que quieras encontrar'})
  await input1.fill('iphone');

  await page.keyboard.press('Enter');
  await expect(await page.getByRole('heading',{ name:'Apple iPhone 17 (256 GB) - Lavanda - Distribuidor Autorizado' }))
  .toBeVisible({timeout: 6000});

  const products = await page.locator(".ui-search-layout__item").allInnerTexts()
  console.log('the total of products is: ', products.length);
//comentario
  for (const product of products){
     console.log('the title is: ', product);
      
  }


});