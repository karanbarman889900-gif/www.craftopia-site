# Craftopia Assam website

A responsive storefront inspired by the reference image, with an owner dashboard, Firebase-hosted product images, shared product catalogue, cart, and WhatsApp order handoff.

## Important before launch

The product manager is designed for Firebase so that products published by the owner appear on every customer's device. Do **not** use browser-only local storage as the product database. The cart is saved locally on each customer's device.

### 1. Configure Firebase

You already have a Firebase project named `craftopia-assam`. Open [Firebase Console](https://console.firebase.google.com/) and select that project.

1. Open Project settings (gear icon) → General → Your apps. If there is no Web app, add one (`</>`).
2. Copy the web app config into `firebase-config.js`, replacing every `PASTE_...` placeholder. `storageBucket` must be copied exactly from Firebase.
3. Set `OWNER_EMAIL` to the exact email address that will manage the store.
4. Open **Authentication → Sign-in method** and enable **Email/Password**.
5. Open **Authentication → Users** and add the owner's email and password.
6. Create/enable **Firestore Database**.
7. Open **Storage** and enable Firebase Storage for the project (Firebase may ask you to select a billing plan, depending on current project setup).

### 2. Add secure database rules

In Firestore Database → Rules, paste the contents of `firestore.rules`, replacing `REPLACE_WITH_OWNER_EMAIL` with the owner's exact sign-in email, then publish.

In Storage → Rules, paste `storage.rules`, also replacing `REPLACE_WITH_OWNER_EMAIL`, then publish.

These rules let everyone read products but only the signed-in owner email add/change/delete products and upload product images. Do not publish with unrestricted write rules.

### 3. Add the logo

Save the logo image you supplied as `logo-placeholder.png` in the same folder as `index.html` (or change the logo markup in `index.html`). The current text logo is shown if the image file is absent.

### 4. Preview / deploy on Vercel

This is a static site and needs no build command.

1. Upload the project files to the source connected to Vercel, or import the folder into a Git repository and connect that repository to your Vercel project.
2. In Vercel Project → Settings → Build & Development Settings, leave Framework Preset as **Other**, Build Command blank, and Output Directory blank (or `.` if required).
3. Deploy, then open the production URL and test the Owner sign-in, product upload, and customer cart on a second device.

If your existing Vercel project has a different app/framework, don't overwrite its files blindly—make a backup first.

## WhatsApp checkout behaviour

The checkout opens WhatsApp at **+91 70020 82253** with product names, quantities, prices, image URLs, estimated total and store map link. A normal `wa.me` link cannot silently attach image files to a message. The customer can attach the photos manually in WhatsApp; the message includes each hosted image URL to make that easy.

## Store details

- Store: Craftopia Assam
- WhatsApp: +91 70020 82253
- Location: College Rd, Bidyapur, Nalbari, Nalbari, Majdia, Assam 781335
- Maps link: https://www.google.com/maps/search/?api=1&query=College+Rd%2C+Bidyapur%2C+Nalbari%2C+Majdia%2C+Assam+781335

## Notes

- Demo products are illustrative preview items. Replace them with real products through the Owner dashboard after Firebase setup.
- Replace the Unsplash lifestyle images with photos you own or have permission to use before launch.
- The cart is device-local; product catalogue and uploaded product images are shared through Firebase.
