describe('Open application', () => {
  it('Success open the apps', async () => {
    driver.setImplicitTimeout(6000);
    const selector = 'new UiSelector().text("Welcome...").className("android.widget.TextView")';
    await expect(await $(`android=${selector}`)).toHaveTextContaining("Welcome");
    driver.closeApp();
  });
});