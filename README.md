# UCSB Robotics Website

## Updating Officer Profiles
1. Upload a square image of the officers inside of the `public\officer-images` directory. It must be square.
2. Modify the `officers.json` file inside of `public` folder with the new names, positions, descriptions, and image names. Make sure to include the file extension.
3. If you are updating the json file with more or less fields, be sure to modify the `testOfficers.js` under `src/error-checks`

## Updating Competitions/Projects
1. Upload an appropriately named .txt file inside of the `public\competitions` or `public\projects`
    * Think of the text file as what you'll see in the collapsible. Put two spaces to separate paragraphs, and put images where you want them to go in between paragraphs. At the moment, putting images next to words is not supported.
        * To properly embed images, put the path to the image as if you were already in the public folder. So, if the image was located in `/public/competititons/micromouse/micromouse.png`, inside of the `micromouse.txt` file, you would put: `competititons/micromouse/micromouse.png`.
        * If the image is showing up as the path in plain text, try to check the `collapsible.jsx` component's `checkIfphoto` function to make sure the file extension is supported. Add it in if it's not.
        * If the image is not found (like there's a weird icon/square), check to see if the path and the file name is correct.
2. Add the `<Collapsible />` component with the correct props, referencing the correct path to the .txt file and adding the correct props (please see `collapsible.jsx` comments for details) 

## Updating Club Photos Gallery


## Updating Video Library Password
1. Make sure you have a .env file
2. Name the variable `REACT_APP_VIDEO_LIBRARY_PASSWORD`. For example: `REACT_APP_VIDEO_LIBRARY_PASSWORD = iloveucsbrobotics`
3. Deploy website