# SauceDemo Comprehensive End-to-End Test Plan

## Application Overview

Validate https://www.saucedemo.com/ from fresh browser contexts across login, documented account behaviors, inventory and all six product details, sorting, cart, checkout, completion/PDF action, global navigation, external links, accessibility, responsive layout, and route/session handling. The observed app title is Swag Labs. Documented accounts are standard_user, locked_out_user, problem_user, performance_glitch_user, error_user, and visual_user; shared password is secret_sauce. Reset account/app state between scenarios. Product catalog observed: Sauce Labs Backpack ($29.99), Sauce Labs Bike Light ($9.99), Sauce Labs Bolt T-Shirt ($15.99), Sauce Labs Fleece Jacket ($49.99), Sauce Labs Onesie ($7.99), and Test.allTheThings() T-Shirt (Red) ($15.99).

## Test Scenarios

### 1. Authentication and Account Variants

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful standard-user login

**File:** `tests/e2e/auth-standard-user.spec.ts`

**Steps:**
  1. Start in a fresh browser context at https://www.saucedemo.com/.
    - expect: The page title is Swag Labs and the login form is visible.
  2. Inspect the Username and Password fields, Login button, accepted-usernames hint, and shared-password hint.
    - expect: Username and Password fields are identifiable and editable; the password is masked.
    - expect: The page lists the documented account names and secret_sauce as the shared password.
  3. Enter standard_user and secret_sauce, then submit Login.
    - expect: Navigation reaches /inventory.html.
    - expect: The Products page shows the inventory and the cart badge is empty.

#### 1.2. Login validation and invalid credentials

**File:** `tests/e2e/auth-validation.spec.ts`

**Steps:**
  1. Start from a fresh login page and submit with both fields empty.
    - expect: Login is rejected and a visible, accessible validation message identifies the missing username.
  2. Enter a valid username with an empty password and submit.
    - expect: Login remains blocked and the error identifies the missing password.
  3. Enter an unknown username and arbitrary password, then submit.
    - expect: Login remains blocked; a visible error communicates that the username/password combination is invalid.
    - expect: No authenticated inventory or cart state is exposed.
  4. Dismiss the error using its close control, if present, and retry with incorrect credentials.
    - expect: The error can be dismissed and a new failed attempt produces a current, understandable error without stale duplicate messages.

#### 1.3. Locked-out user is denied access

**File:** `tests/e2e/auth-locked-out.spec.ts`

**Steps:**
  1. Start fresh and submit locked_out_user with secret_sauce.
    - expect: Authentication is denied with a visible account-locked-out message.
    - expect: The user remains on the login page; inventory is not exposed.

#### 1.4. Problem user account behavior

**File:** `tests/e2e/account-problem-user.spec.ts`

**Steps:**
  1. Start fresh and log in as problem_user with secret_sauce.
    - expect: Login completes and the inventory route loads.
  2. Inspect all six product cards, images, names, descriptions, prices, add buttons, and open each product detail.
    - expect: Record and verify the role-specific behavior against the expected product catalog; no unrelated product data is silently substituted.
    - expect: Any known role-specific image or interaction defect is reproducible and does not prevent navigation or reporting of the issue.
  3. Add and remove a product and inspect the cart.
    - expect: Controls respond consistently with their labels, and any role-specific defect is documented as a failure rather than silently ignored.

#### 1.5. Performance-glitch user account behavior

**File:** `tests/e2e/account-performance-glitch-user.spec.ts`

**Steps:**
  1. Start fresh and log in as performance_glitch_user with secret_sauce while recording navigation/load duration.
    - expect: Login eventually completes without hanging indefinitely or corrupting the page.
    - expect: The inventory page and its interactive controls become usable; the measured delay is reported against the agreed performance threshold.
  2. Open a product, add it to cart, and enter checkout.
    - expect: Transitions complete and application state remains coherent despite any intentional delay.

#### 1.6. Error-user account behavior

**File:** `tests/e2e/account-error-user.spec.ts`

**Steps:**
  1. Start fresh and log in as error_user with secret_sauce.
    - expect: Login outcome matches the app's role-specific behavior and any unexpected server/application failure is captured with route and visible error state.
  2. Exercise inventory add/remove, cart, and checkout entry points where reachable.
    - expect: A failed operation shows recoverable feedback, does not leave stale badges or duplicate cart rows, and does not falsely report a completed order.

#### 1.7. Visual-user account behavior

**File:** `tests/e2e/account-visual-user.spec.ts`

**Steps:**
  1. Start fresh and log in as visual_user with secret_sauce.
    - expect: The inventory route loads and the page remains operable.
  2. Check alignment, sizing, spacing, colors, images, and text clipping on login, inventory, product detail, cart, and checkout pages.
    - expect: No controls or content overlap, clip, disappear, or become unusable compared with the baseline layout at the same viewport.

### 2. Inventory, Product Details, and Sorting

**Seed:** `tests/seed.spec.ts`

#### 2.1. Inventory displays complete catalog and card controls

**File:** `tests/e2e/inventory-catalog.spec.ts`

**Steps:**
  1. Start fresh and log in as standard_user with secret_sauce.
    - expect: Inventory header shows Swag Labs, Open Menu, cart, Products, and the Sort products combobox.
  2. Inspect the six catalog cards in default Name (A to Z) order.
    - expect: All six observed products are present exactly once: Backpack, Bike Light, Bolt T-Shirt, Fleece Jacket, Onesie, and red Test.allTheThings() T-Shirt.
    - expect: Each card has a product image with meaningful alternative text, clickable product name/image, description, dollar price, and Add to cart control.
    - expect: Default ordering is alphabetical A to Z; card content and prices match the catalog listed in the plan overview.
  3. Scroll through the entire inventory and inspect the footer.
    - expect: All six cards remain reachable and the footer displays X, Facebook, and LinkedIn links plus legal/copyright text.

#### 2.2. All product detail pages and return navigation

**File:** `tests/e2e/product-details.spec.ts`

**Steps:**
  1. Start fresh, log in as standard_user, and open each of the six products using both its image and name link in turn.
    - expect: Each item detail route identifies the correct product and displays its matching image, full name, description, and price.
    - expect: Each detail page has Open Menu, cart, Back to products, and an Add to cart control.
    - expect: The image has meaningful alternative text; product identity and price match the originating card.
  2. Use Back to products after each item and use browser Back once as a separate navigation check.
    - expect: Back to products returns to inventory without losing current cart state or sort state unless the application intentionally resets it.
    - expect: Browser Back returns to the prior page without rendering a broken or blank screen.

#### 2.3. All inventory sort options

**File:** `tests/e2e/inventory-sort.spec.ts`

**Steps:**
  1. Start fresh, log in as standard_user, and choose Name (A to Z), Name (Z to A), Price (low to high), and Price (high to low) from Sort products.
    - expect: Each selection updates the displayed order immediately and the selected option remains visible.
    - expect: Name sorts are correctly alphabetical in their respective directions.
    - expect: Price ascending begins Onesie $7.99, Bike Light $9.99, both $15.99 shirts, Backpack $29.99, and Fleece Jacket $49.99.
    - expect: Price descending reverses price groups; equal-price products remain adjacent and are ordered consistently.
    - expect: Changing sort does not alter products, prices, cart contents, or the current route.

#### 2.4. Add products from inventory and synchronize cart badge

**File:** `tests/e2e/cart-add-products.spec.ts`

**Steps:**
  1. Start fresh and log in as standard_user.
    - expect: Cart starts empty and each inventory product displays Add to cart.
  2. Add one item, add a second different item, then add the first item again using its card control.
    - expect: The cart badge reflects the number of distinct cart items and updates immediately on every action.
    - expect: Added item controls change to Remove; adding the same product twice does not create duplicate quantity or duplicate rows if the UI models add/remove as a toggle.
  3. Remove one item from inventory and inspect cart after opening it.
    - expect: The badge decrements and cart rows match remaining selections.

### 3. Cart and Checkout

**Seed:** `tests/seed.spec.ts`

#### 3.1. Cart content, removal, and continue shopping

**File:** `tests/e2e/cart-management.spec.ts`

**Steps:**
  1. Start fresh, log in, and add two different products.
    - expect: The cart badge shows two items.
  2. Open the cart using the cart icon.
    - expect: Your Cart page shows QTY and Description headings; each selected product has quantity, name/detail navigation, description, price, and Remove control.
    - expect: Cart badge count agrees with displayed rows.
  3. Remove one row, then use Continue Shopping.
    - expect: Removed product disappears and badge updates; remaining row stays intact.
    - expect: Continue Shopping returns to inventory and the remaining cart selection persists.
  4. Reopen cart, remove the final item, and inspect the empty cart.
    - expect: No item rows remain, the badge is empty, and checkout does not allow progression with an empty cart.
    - expect: Continue Shopping remains available and returns to inventory.

#### 3.2. Cart checkout cancellation

**File:** `tests/e2e/checkout-cancel.spec.ts`

**Steps:**
  1. Start fresh, log in, add an item, open cart, and click Checkout.
    - expect: Checkout: Your Information page displays First Name, Last Name, Zip/Postal Code, Cancel, and Continue.
  2. Click Cancel.
    - expect: The flow returns to inventory or cart according to application behavior without clearing the selected item.
    - expect: No order is submitted.

#### 3.3. Checkout required-field validation

**File:** `tests/e2e/checkout-validation.spec.ts`

**Steps:**
  1. Start fresh, log in, add a product, open cart, and begin checkout.
    - expect: The three customer-information fields are visible, empty, and labeled.
  2. Submit with all fields empty.
    - expect: Checkout remains on step one and an accessible error identifies the missing first name.
  3. In a fresh checkout state, provide only first name and submit.
    - expect: Checkout remains on step one and error identifies the missing last name.
  4. In a fresh checkout state, provide first and last names but omit postal code, then submit.
    - expect: Checkout remains on step one and error identifies the missing ZIP/postal code.
  5. Submit with valid text in all three fields.
    - expect: The form advances to Checkout: Overview and no validation alert remains.

#### 3.4. Checkout overview and totals

**File:** `tests/e2e/checkout-overview.spec.ts`

**Steps:**
  1. Start fresh, log in, add at least two different products, and complete checkout information with Taylor, Tester, and 90210.
    - expect: Overview lists the same selected products, quantities, descriptions, and prices as the cart.
    - expect: Payment Information and Shipping Information sections are visible, including SauceCard #31337 and Free Pony Express Delivery! on the observed standard-user flow.
    - expect: Item total equals the sum of item prices; tax is correctly calculated; displayed total equals item total plus tax. For Backpack alone, observed values are $29.99 item total, $2.40 tax, and $32.39 total.
  2. Click Cancel from overview.
    - expect: The flow leaves overview without placing the order and does not show order confirmation.
  3. Repeat to overview and click Finish once.
    - expect: Checkout advances to the completion page and cart is empty after successful order completion.

#### 3.5. Order completion, Back Home, and PDF action

**File:** `tests/e2e/checkout-complete.spec.ts`

**Steps:**
  1. Start fresh, log in, add one item, enter valid checkout information, reach overview, and click Finish.
    - expect: Checkout: Complete! page shows Pony Express image, Thank you for your order! heading, dispatch confirmation, Back Home, and Generate PDF order.
    - expect: Cart badge is empty and the success state is not shown before Finish.
  2. Activate Generate PDF order and inspect the browser download/output.
    - expect: A PDF order document is generated/downloaded, is non-empty, and can be opened or validated as a PDF; no silent no-op or unrelated file is produced.
  3. Click Back Home.
    - expect: The app returns to inventory and displays a usable catalog with an empty cart.

### 4. Global Navigation, Session, and External Components

**Seed:** `tests/seed.spec.ts`

#### 4.1. Navigation drawer controls and close behavior

**File:** `tests/e2e/navigation-drawer.spec.ts`

**Steps:**
  1. Start fresh, log in, and open the menu from inventory.
    - expect: Drawer exposes All Items, Dynamic Catalog, About, Logout, Reset App State, and Close Menu.
  2. Close the drawer with Close Menu, reopen it, then activate All Items.
    - expect: Drawer closes correctly and All Items returns/remains on the inventory catalog.
  3. Activate Dynamic Catalog and inspect route, page state, and resulting content.
    - expect: Record whether the catalog changes or remains on inventory; the control must provide a coherent, testable outcome and must not leave a blank/partially rendered page.
  4. Open About in a controlled new tab/window or inspect link destination without losing app state.
    - expect: About points to the Sauce Labs site and external navigation does not unexpectedly corrupt the current app session.

#### 4.2. Reset App State and logout

**File:** `tests/e2e/session-controls.spec.ts`

**Steps:**
  1. Start fresh, log in, add products, open the drawer, and activate Reset App State.
    - expect: Cart badge and product button states reset to empty/default; current authenticated page remains usable.
  2. Add an item again and activate Logout from the drawer.
    - expect: Session ends and login page appears; protected inventory is no longer available without logging in again.
  3. Use browser Back or directly navigate to /inventory.html after logout.
    - expect: Protected content remains unavailable or redirects to login; stale user/cart state is not exposed.

#### 4.3. Footer links and legal content

**File:** `tests/e2e/footer-links.spec.ts`

**Steps:**
  1. Visit login, inventory, product detail, cart, checkout, and completion pages where practical; inspect each footer.
    - expect: Footer contains X, Facebook, LinkedIn, copyright text, Terms of Service, and Privacy Policy content/links as rendered by the page.
    - expect: Links have valid destinations and are keyboard reachable with discernible accessible names.
    - expect: External social/legal navigation opens the correct destination and does not unexpectedly replace the active app tab/session.

#### 4.4. Protected route and stale-session handling

**File:** `tests/e2e/route-guards.spec.ts`

**Steps:**
  1. In a fresh unauthenticated browser context, directly navigate to /inventory.html, /inventory-item.html?id=4, /cart.html, both checkout steps, and /checkout-complete.html.
    - expect: Protected routes redirect to login or show a deliberate access-denied state; no private or fabricated cart/order content is exposed.
  2. Log in, add an item, refresh inventory and cart, then open a detail route directly with a valid product id and an invalid/missing id.
    - expect: Authenticated cart/session state is handled consistently across refresh and direct routes.
    - expect: Valid id renders the matching product; invalid id produces a controlled fallback rather than a broken page.

### 5. Accessibility, Responsive, and Resilience

**Seed:** `tests/seed.spec.ts`

#### 5.1. Keyboard and assistive-technology basics

**File:** `tests/e2e/accessibility-basics.spec.ts`

**Steps:**
  1. Use only keyboard from login through inventory, product detail, cart, checkout, and confirmation.
    - expect: Tab order is logical, focus is always visible, Enter/Space activate controls, and no keyboard trap occurs.
    - expect: Inputs and sort have accessible names; buttons/links have discernible names; validation feedback is announced and associated with its field.
    - expect: Product and Pony Express images have meaningful alternative text; headings and landmarks convey page structure.
  2. Inspect pages with an accessibility scanner and verify contrast and browser zoom at 200%.
    - expect: No critical or serious accessibility violations; text and controls remain readable and usable without overlap at 200% zoom.

#### 5.2. Responsive layout and viewport coverage

**File:** `tests/e2e/responsive-layout.spec.ts`

**Steps:**
  1. Check login, inventory, item detail, cart, checkout information, overview, and completion at desktop, tablet, and narrow mobile viewports.
    - expect: All content remains available without horizontal page overflow; cards, form fields, cart controls, menu, totals, and footer adapt to viewport width.
    - expect: Buttons and input targets remain visible and operable; no text/image/control overlap, clipping, or inaccessible off-screen actions occurs.

#### 5.3. Network, console, and error-state resilience

**File:** `tests/e2e/runtime-resilience.spec.ts`

**Steps:**
  1. Run the standard purchase flow while capturing console errors, failed requests, and page errors; repeat key screens under a failed image request or delayed network condition where test infrastructure permits.
    - expect: No unhandled application exceptions or unexpected failed first-party requests occur during the happy path.
    - expect: If an asset/request fails, the page remains operable, failures are diagnosable, and missing media does not hide essential controls.
    - expect: Known baseline console entries are triaged and documented rather than ignored or treated as new regressions.
