# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Mentorship Applications"
4. Create two sheets:
   - **Mentors** - for mentor applications
   - **Mentees** - for mentee applications

## Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Replace the default code with this script:

```javascript
function doGet(e) {
  try {
    // Get parameters from URL
    const params = e.parameter;
    
    if (!params.type) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'No form type specified' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeader('Access-Control-Allow-Origin', '*');
    }
    
    const sheetName = params.type === 'mentor' ? 'Mentors' : 'Mentees';
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    
    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" not found`);
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Prepare row data based on form type
    let rowData = [timestamp];
    
    if (params.type === 'mentor') {
      rowData = [
        timestamp,
        params.firstName || '',
        params.lastName || '',
        params.email || '',
        params.phone || '',
        params.address || '',
        params.city || '',
        params.zipCode || '',
        params.occupation || '',
        params.company || '',
        params.education || '',
        params.experience || '',
        params.motivation || '',
        params.availability || '',
        params.specialSkills || '',
        params.backgroundCheck === 'true',
        params.agreeToTerms === 'true',
        params.allowContact === 'true'
      ];
    } else {
      rowData = [
        timestamp,
        params.firstName || '',
        params.lastName || '',
        params.email || '',
        params.phone || '',
        params.dateOfBirth || '',
        params.address || '',
        params.city || '',
        params.zipCode || '',
        params.guardianName || '',
        params.guardianEmail || '',
        params.guardianPhone || '',
        params.schoolName || '',
        params.gradeLevel || '',
        params.interests || '',
        params.goals || '',
        params.challenges || '',
        params.additionalInfo || '',
        params.agreeToTerms === 'true',
        params.allowContact === 'true'
      ];
    }
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  }
}

function doPost(e) {
  // Redirect POST requests to GET for consistency
  return doGet(e);
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Click **Deploy > New deployment**
5. Choose **Web app** as the type
6. Set **Execute as** to "Me"
7. Set **Who has access** to "Anyone"
8. Click **Deploy**
9. **Copy the web app URL** - you'll need this for the next step

## Step 3: Update Your React App

1. Open `src/lib/formSubmission.ts`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Google Apps Script web app URL
3. Save the file

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Go to your mentor or mentee form
3. Fill out the form and submit
4. Check your Google Sheet to see if the data appears

## Troubleshooting

### CORS Issues (405 Error)
If you get a 405 error or CORS issues:

1. **Update your Google Apps Script** with the code above that uses GET requests
2. **Redeploy the script** after making changes
3. **Clear your browser cache** and try again

### Data Not Appearing
1. Check the browser console for errors
2. Verify your Google Apps Script URL is correct
3. Make sure your Google Sheet has the correct sheet names ("Mentors" and "Mentees")
4. Check the Apps Script logs for any errors

### Permission Issues
1. Make sure your Google Apps Script deployment is set to "Anyone" access
2. Try redeploying the script if needed

## Alternative: Using Google Forms

If you prefer a simpler approach, you can also:
1. Create Google Forms for each application type
2. Set up the forms to save responses to Google Sheets
3. Embed the forms in your React app using iframes

This approach requires less setup but gives you less control over the form styling and user experience. 
This approach requires less setup but gives you less control over the form styling and user experience. 