# STABILITY CHECK 
## Remove all unnecessary waits
### 1.await page.waitForTimeout(3000); [Playwright automatically waits]
## Ensure Tests Pass in Headless Mode
 ### 1. npx playwright test 
## Ensure Tests Pass in Headed Mode
 ### 1. npx playwright test --headed
## Stable check 
 ### 1.npx playwright test --repeat-each=5