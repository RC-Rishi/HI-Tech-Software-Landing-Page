const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Users/RCPC/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[],bad=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)bad.push([r.status(),r.url()]);});
 await page.goto('http://127.0.0.1:4173',{waitUntil:'networkidle'});await page.waitForTimeout(1400);
 console.log('Libraries',await page.evaluate(()=>({gsap:!!window.gsap,scrollTrigger:!!window.ScrollTrigger,fonts:document.fonts.check('16px "IBM Plex Sans"')})));
 assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('img').evaluateAll(a=>a.every(i=>i.complete&&i.naturalWidth>0)),true);
 for(const width of [1440,1024,768,390,320]){await page.setViewportSize({width,height:1000});await page.waitForTimeout(150);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);}
 await page.setViewportSize({width:390,height:900});await page.locator('#menu-toggle').click();assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('#mobile-nav').isVisible(),false);
 await page.locator('#tab-demo').click();await page.locator('#sale').click();assert.equal(await page.locator('#stock-value').innerText(),'11');assert.equal(await page.locator('#sales-value').innerText(),'1');assert.equal(await page.locator('#total-value').innerText(),'₹500');
 await page.locator('#sale').click({clickCount:11,delay:30});assert.equal(await page.locator('#sale').isDisabled(),true);assert.equal(await page.locator('#stock-value').innerText(),'0');await page.locator('#reset').click();assert.equal(await page.locator('#stock-value').innerText(),'12');
 await page.locator('#tab-workflow').click();
 await page.emulateMedia({reducedMotion:'reduce'});await page.screenshot({path:'page-mobile.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'page-desktop.png',fullPage:true});
 await page.locator('#tab-demo').click();await page.locator('.hero-visual').screenshot({path:'anatomy-review.png'});
 const links=await page.locator('a[href^="tel:"],a[href^="https://wa.me/"]').evaluateAll(a=>a.map(x=>x.href));assert.ok(links.every(x=>x.includes('919428626099')));
 const fallback=await browser.newPage({viewport:{width:390,height:900}});await fallback.route(/cdn.jsdelivr.net/,route=>route.abort());await fallback.goto('http://127.0.0.1:4173',{waitUntil:'networkidle'});assert.equal(await fallback.locator('h1').isVisible(),true);await fallback.locator('#tab-demo').click();await fallback.locator('#sale').click();assert.equal(await fallback.locator('#sales-value').innerText(),'1');
 assert.deepEqual(errors,[]);assert.deepEqual(bad,[]);console.log('PASS: five viewport widths, images, menu, tabs, sale bounds/reset, contacts, reduced motion, CDN failure fallback.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
