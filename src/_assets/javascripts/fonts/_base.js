'use strict'

window.WebFontConfig = {
  google: {
    families: [
      'Noto+Sans:400,400italic,700,700italic:latin',
      'Inconsolata:400,700:latin'
    ]
  },
  custom: {
    families: [
      '{{ site.data.vendor.overpass.families | join:"', '" }}',
      '{{ site.data.vendor.monoid.families | join:"', '" }}',
      '{{ site.data.vendor.zmdi.families | join:"', '" }}'
    ],
    urls: [
      '{% asset_path vendor/overpass %}',
      '{% asset_path vendor/monoid %}',
      '{{ site.data.vendor.zmdi.src }}'
    ]
  }
}