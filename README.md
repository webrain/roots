# [YellowTree Theme](https://github.com/webrain/yellowtree)

YellowTree is a Wordpress starter theme based on SASS, that uses [Bower](http://bower.io) to manage frontend dependencies and [Grunt](http://gruntjs.com/) to execute tasks.

The theme was originally forked from the excellent [Roots Theme](http://roots.io/).

This theme is in loving memory of the small yellow tree we had outside our offices.

## Installation

Clone the git repo - `git clone git://github.com/webrain/yellowtree.git` - and then rename the directory to the name of your theme or website. [Install Grunt](http://gruntjs.com/getting-started), and then install the dependencies for YellowTree contained in `package.json` by running the following command from the theme directory:

```
npm install
```

Then [install Bower](http://bower.io) and install the frontend dependencies contained in `bower.json` by running the following from the root theme directory:

```
bower install
```

Then to finalize the setup just run the following command:

```
grunt yellowtree-setup
```

The ruby `sass` gem is required to compile the scss files. To install that just execute:

```
gem install sass
```

This will move assets files in meaningful directories, compiles and minify javascript and css for the first time.
Now you can enable the theme from the Wordpress appearance panel.

## Theme Development

After you've installed Grunt and ran `npm install` from the theme root, use `grunt watch` to watch for updates to your Sass and JS files and Grunt will automatically re-build as you write your code.
You can also use a [Livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) for your browser to get live page reloading.

## Configuration

Edit `lib/config.php` to enable or disable support for various theme functions and to define constants that are used throughout the theme.

Edit `lib/init.php` to setup custom navigation menus and post thumbnail sizes.

## Documentation

The theme documentation is a work in progress. You can refer to the [Roots theme documentation](http://roots.io/docs) for now, this theme shares a lot with Roots.

## Features

* Organized file and template structure
* HTML5 Boilerplate's markup along with ARIA roles and microformat
* Bootstrap
* [Grunt build script](http://roots.io/using-grunt-for-wordpress-theme-development/)
* [Theme activation](http://roots.io/getting-started/#theme-activation)
* [Theme wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/)
* Root relative URLs
* Clean URLs (no more `/wp-content/`)
* All static theme assets are rewritten to the website root (`/assets/*`)
* Cleaner HTML output of navigation menus
* Cleaner output of `wp_head` and enqueued scripts/styles
* Nice search (`/search/query/`)
* Image captions use `<figure>` and `<figcaption>`
* Example vCard widget
* Posts use the [hNews](http://microformats.org/wiki/hnews) microformat
* [Multilingual ready](http://roots.io/wpml/) (Brazilian Portuguese, Bulgarian, Catalan, Danish, Dutch, English, Finnish, French, German, Hungarian, Indonesian, Italian, Korean, Macedonian, Norwegian, Polish, Russian, Simplified Chinese, Spanish, Swedish, Traditional Chinese, Turkish, Vietnamese, Serbian)

## Contributing

Everyone is welcome to help [contribute](CONTRIBUTING.md) and improve this project. There are several ways you can contribute:

* Reporting issues
* Suggesting new features
* Writing or refactoring code
* Fixing [issues](https://github.com/webrain/yellowtree/issues)

## Support

We are available for support through Github issues, you can also usually [tweet us](http://twitter.com/webrain_it).
For customization requests or urgent support we are available for hire. Contact us through [our website](http://webrain.it).
