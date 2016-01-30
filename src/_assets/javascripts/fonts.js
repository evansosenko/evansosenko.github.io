/* global WebFont */

'use strict'

WebFont.load({
  google: {
    families: [
      'Noto Sans'
    ]
  },
  custom: {
    families: [
      '{{ site.data.vendor.material-design-iconic-font.family }}',
      'Monoid Regular', 'Monoid Bold', 'Monoid Italic'
    ],
    urls: [
      '{{ site.data.vendor.material-design-iconic-font.src | remove: " " }}',
      '{% asset_path vendor/monoid %}'
    ]
  }
})
