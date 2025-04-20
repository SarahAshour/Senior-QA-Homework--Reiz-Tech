import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';

test('Update user profile with address and hobby', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  // 1. Navigate to login page
  await loginPage.goto();

  // 2. Login
  await loginPage.loginField('testuserSARAH', 'Test@123'); // test credentials 

  // 3. Navigate to profile
  await profilePage.navigateToProfile();

  // 4. Update profile details
  await profilePage.updateAddress('123 Automation Lane');
  await profilePage.selectHobby('Drawing'); // Hobby name option 

  // 5. Save the changes
  await profilePage.saveChanges();

  // 6. Verify success
  const successVisible = await profilePage.isSuccessMessageVisible();
  expect(successVisible).toBeTruthy();
