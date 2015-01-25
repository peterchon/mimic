mimic.css
==

The biggest problem I see with CMS is that people try to use it for something that it wasn't designed to do. I mean, why the hell are you trying to build a custom multi-layout website with a blogging platform? This usually means that you have multiple templates with crazy-ass-long class names like "template-z-section2-with-red-heading" just so you can keep some sort of organization going (until the next guy comes along and goes "WTF!") This also adds to the aggrivation of content authors wanting to make simple stylistic changes but can't, since it requires updates in the core stylesheet.

brik is to stop the madness. You want to remove the padding? remove that padding class (or add the padding removal class,) you want to change the color? Replace the color class. This give the content authors the ability to make those changes without having to bother you or modifying the core stylesheet.

brik is also to stop the process of applying a framework and then having to override a bunch of predefined styles that are not aligned with your brand. Sure, most framework nowadays are great at giving you the a-la-cart option, but it's in our nature to want to grab as much as you can in fear that you might miss something (like at a buffet.)

Applying brik to your project is simple, just follow these 3 easy steps:

1. download brik
2. include brik in your &lt;head&gt; as the first stylesheet
3. use brik as much as possible without writing your own class and css

That's it, enjoy.

see it here: http://peterchon.github.io/mimic/
