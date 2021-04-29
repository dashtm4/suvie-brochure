export const META_DEFAULTS = {
  title: 'Suvie',
  description: 'Your Countertop Kitchen Robot',
  image: '/images/logo.svg',
  favicon: '/images/favicon.png'
}

export const HELP_EMAIL = 'help@suvie.com'
export const LOGIN_URL = 'https://app.suvie.com/'
export const ACCESSORIES_URL = 'https://store.suvie.com/'
export const HELP_DESC_URL = 'https://support.suvie.com/hc/en-us/'
export const BLOG_URL = 'https://blog.suvie.com'

export const PATHS = {
  BASE: '/',
  KITCHEN_ROBOT: '/kitchen-robot/',
  SMART_MEALS: '/smart-meals/',
  RECIPES: '/recipes/',
  REVIEWS: '/reviews/',
  HEALTH: '/health/',
  ABOUT: '/about-us/',
  PRESS: '/press/',
  JOBS: '/jobs/',
  PRIVACY: '/privacy-policy/',
  TERMS: '/terms-and-conditions/',
  FAQ: '/faq/',
  SHOP_PAGE: '/shop-page/',
  HOW_IT_WORKS: '/how-it-works/',
  FREE_TRIAL: '/free-trial/'
}

export const MAIN_NAV_LINKS: Record<string, any> = [
  {
    title: 'How it Works',
    url: PATHS.KITCHEN_ROBOT
  },
  {
    title: 'Recipes',
    url: PATHS.RECIPES
  },
  {
    title: 'Meal Plans',
    url: PATHS.SMART_MEALS
  },
  {
    title: 'Reviews',
    url: PATHS.REVIEWS
  },
  {
    title: 'Health',
    url: PATHS.HEALTH
  }
]

export const FOOTER_MENU_1 = [
  {
    title: 'Accessories',
    url: ACCESSORIES_URL,
    target: '_self',
    rel: '',
    external: true
  },
  {
    title: 'Log In',
    url: LOGIN_URL,
    external: true
  },
  {
    title: 'How it Works',
    url: PATHS.KITCHEN_ROBOT
  },
  {
    title: 'Recipes',
    url: PATHS.RECIPES
  },
  {
    title: 'Meal Plans',
    url: PATHS.SMART_MEALS
  },
  {
    title: 'Reviews',
    url: PATHS.REVIEWS
  },
  {
    title: 'Health',
    url: PATHS.HEALTH
  }
]

export const FOOTER_MENU_2 = [
  {
    title: 'About',
    url: PATHS.ABOUT
  },
  /* {
    title: 'Press',
    url: PATHS.PRESS
  }, */
  /* {
    title: 'Jobs',
    url: PATHS.JOBS
  }, */
  {
    title: 'Free Trial',
    url: PATHS.FREE_TRIAL
  },
  {
    title: 'Privacy',
    url: PATHS.PRIVACY
  },
  {
    title: 'Terms',
    url: PATHS.TERMS
  }
]

export const FOOTER_MENU_3 = [
  {
    title: 'Help Desk',
    url: HELP_DESC_URL,
    external: true
  },
  {
    title: 'FAQ',
    url: PATHS.FAQ
  }
]

export const FOOTER_COPY = `Meals for purchase may vary based on availability. Time savings are estimates and not a
guarantee. Some images simulated or sped up and some servings suggested with finishing steps and consumer supplied additional
ingredients. Meal coupon offers do not apply to the Suvie appliance.  For all coupons unless otherwise specified
only one coupon is valid per customer for one-time use only. Coupons are valid only during their coupon period.
Sales tax, shipping & handling do not qualify for any coupons. Coupons are not redeemable for cash or gift cards.
Coupons are not valid for prior purchases. Coupons may not be combined with any other coupons, discounts, offers, or
promotions. Void if altered, copied, transferred, auctioned or sold. Offer valid on in-stock items only. No rain checks
issued. Other restrictions may apply. *Additional shipping and handling charges may apply see terms and conditions
for details. Features subject to change on final product. Patents Pending. Copyright 2017 -
  ${new Date().getFullYear()}, Suvie.`
