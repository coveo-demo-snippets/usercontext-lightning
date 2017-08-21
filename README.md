# usercontext-lightning

1. Basic primer for this component

-https://developers.coveo.com/display/public/SalesforceV2/Integrating+the+Coveo+Components+in+a+Custom+Lightning+Component
- https://developers.coveo.com/display/public/SalesforceV2/Interacting+with+the+Coveo+JavaScript+Search+Framework+with+Custom+Code
https://developers.coveo.com/display/public/SalesforceV2/Generating+a+Custom+Search+Token+for+Lightning+Components;jsessionid=C02C85084A276CBAB719A54C5690DCFF

2. Create the component in your Salesforce org

3. Bypass the Default Settings to Use Your Custom Search Token
  In order to get your search interface to load, you have to allow it to generate a custom search token instead of relying on the default settings.
  In the Community Builder,  select the custom component that you just inserted.
  In the bottom right of the component, expand the box and select Advanced Lightning Configuration.

  In the Advanced Server-Side Configuration box at the top of the page, check the box under Bypass above settings to rather generate the search token from a custom Apex class.
  Save your page by clicking Save.
  Your search interface should now work with your custom search token.
