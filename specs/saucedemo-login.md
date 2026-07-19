# Test Plan: SauceDemo Login

**Target:** https://www.saucedemo.com
**Seed:** tests/seed.spec.ts
**Date:** 2026-07-18

## Overview

This plan covers the core SauceDemo authentication journeys for valid, blocked, and invalid login attempts. It focuses on the login form behavior, visible error messaging, and successful navigation to the inventory page.

## Preconditions

- The SauceDemo site is reachable at https://www.saucedemo.com.
- The browser starts on the login page with no authenticated session.
- The standard password for all covered users is secret_sauce.

## Scenarios

### Scenario 1.1 — Standard user logs in successfully

- **Priority:** P0
- **Tags:** @smoke @regression
- **Preconditions:** The app is open on the login page and the user is not already logged in.
- **Steps:**
  1. Enter standard_user in the Username field and secret_sauce in the Password field.
  2. Click the Login button.
- **Assertions:**
  - The user is redirected to the inventory page.
  - The inventory page content is visible, confirming authentication succeeded.
- **Edge cases considered:**
  - The user should not remain on the login form after a successful login.
  - The login button should not show an error state after valid credentials.

### Scenario 1.2 — Locked out user shows the expected error

- **Priority:** P0
- **Tags:** @regression
- **Preconditions:** The app is open on the login page and the user is not logged in.
- **Steps:**
  1. Enter locked_out_user in the Username field and secret_sauce in the Password field.
  2. Click the Login button.
- **Assertions:**
  - An error message indicating that the user has been locked out is displayed.
  - The user remains on the login page and is not redirected to the inventory page.
- **Edge cases considered:**
  - The error state should be clearly visible and not disappear immediately.
  - No authenticated session should be created for the locked-out user.

### Scenario 1.3 — Empty username submission shows a validation error

- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** The app is open on the login page and the user is not logged in.
- **Steps:**
  1. Leave the Username field empty.
  2. Enter secret_sauce in the Password field.
  3. Click the Login button.
- **Assertions:**
  - An error message stating that the username is required is displayed.
  - The user remains on the login page.
- **Edge cases considered:**
  - The form should not navigate away when the username is missing.
  - The password field value should not be treated as sufficient for login.

### Scenario 1.4 — Empty password submission shows a validation error

- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** The app is open on the login page and the user is not logged in.
- **Steps:**
  1. Enter standard_user in the Username field.
  2. Leave the Password field empty.
  3. Click the Login button.
- **Assertions:**
  - An error message stating that the password is required is displayed.
  - The user remains on the login page.
- **Edge cases considered:**
  - The form should not navigate away when the password is missing.
  - The username alone should not be accepted as a valid login entry.

### Scenario 1.5 — Invalid credentials show the generic authentication error

- **Priority:** P1
- **Tags:** @regression
- **Preconditions:** The app is open on the login page and the user is not logged in.
- **Steps:**
  1. Enter an invalid username, such as invalid_user, in the Username field.
  2. Enter secret_sauce in the Password field.
  3. Click the Login button.
- **Assertions:**
  - An error message indicating that the entered credentials do not match any user is displayed.
  - The user remains on the login page.
- **Edge cases considered:**
  - The failure should be clearly differentiated from the locked-out user case.
  - The site should not expose a successful session for invalid credentials.

## Not covered (and why)

- Logout and inventory-page flows are not covered here because the request is limited to the login experience.
- Additional browser-specific behaviors, such as mobile layout or accessibility validation, are intentionally out of scope for this plan.
